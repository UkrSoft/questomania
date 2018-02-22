'use strict'

require('./check-versions')()

const config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}
const opn = require('opn')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')
const Elem = require('../src/model/schema')

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
const autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable

const app = express()
const server = require('http').Server(app);
const io = require('socket.io')(server);

const compiler = webpack(webpackConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false
})

const connectDb = () => {
  mongoose.Promise = require('bluebird')
  mongoose.connect('mongodb://localhost:27017/web_forms')
  return mongoose.connection
}
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

const uri = 'http://localhost:' + port

let _resolve
const readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})
const startServer = () => {
  server.listen(port, () => console.log(`App started on port ${port}`)) // => use callback function
}

connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', startServer)
// server.listen(port)
// const server = app.listen(port)


io.on('connection', function (socket) {
  socket.on('save', function (data) {
    var element = new Elem({ title: data[0].title, src: data[0].src });

    element.save().then(function (element) {
      console.log('save ', element)
      var temp = Elem.findById(element._id, function (err, doc) {
        if (err) return console.error(err);
        console.log('send ', doc)
        socket.emit('news', doc)
      })
    }).catch(function (err) {
      console.error(err)
    })
  });
});

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
