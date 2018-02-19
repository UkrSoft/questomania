// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueDraggableResizable from 'vue-draggable-resizable'
import VueSocketio from 'vue-socket.io'

Vue.use(Vuetify)

Vue.component('vue-draggable-resizable', VueDraggableResizable)
Vue.use(VueSocketio, 'http://localhost:8080')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
