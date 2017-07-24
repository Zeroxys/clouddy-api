'use strict'
const express = require('express')
const api = express.Router()
const mail = require('../controllers/mail')
const client = require('../controllers/person')

//send Email
api.get('/mail', mail.sendMail)
// Save msg
api.post('/person', client.savePerson)

api.get('/saluda', (req,res) => {
  res.status(200).send({ message : 'ok' })
})


module.exports = api
