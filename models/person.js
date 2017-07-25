'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const personSchema = new Schema({
  id : ObjectId,
  name : String,
  email : String,
  description : String,
  date : Date
})

module.exports =  mongoose.model('Person', personSchema)