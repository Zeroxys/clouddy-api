'use strict'
const express = require('express')
const api = express.Router()
const sendMail = require('../controllers/mail.js')
const savePerson = require('../controllers/person.js')

//send Email
api.get('/mail', sendMail)

// Save msg
api.post('/api/person', savePerson)

module.exports = api