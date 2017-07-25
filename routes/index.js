'use strict'
const express = require('express')
const api = express.Router()
const clientSave = require('../controllers/person')

//Save msg and send
api.post('/person', clientSave.savePerson)

module.exports = api
