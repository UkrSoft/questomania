const mongoose = require('mongoose')

// create a schema
const elemSchema = new mongoose.Schema({
  title: String,
  src: { type: String, required: true },
  xPosition: { type: Number },
  yPosition: { type: Number }
})

// the schema is useless so far
// we need to create a model using it
const Elem = mongoose.model('Element', elemSchema)

// make this available to our users in our Node applications
module.exports = Elem
