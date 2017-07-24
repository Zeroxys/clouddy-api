'use strict'
const Promise = require('bluebird')
const express = require('express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const SendMail = require('./controllers/mail.js')
const SaveMsg = require('./controllers/person.js')

const app = express()
const api = require('./routes')

app.use('/api', api)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(expressValidator())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

module.exports = app