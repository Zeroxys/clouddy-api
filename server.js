'use strict'

const Promise = require('bluebird')
const express = require('express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const mongoose = require('mongoose')
const port = process.env.PORT || 8181

const mailOptions = require('./mail/mailOpts.js')
const transporter = require('./mail/mailTransporter.js')


const mailService = require('./mail/mailCtrl.js')

const Person = require('./models/person.js')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(expressValidator())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/mail', (req, res, next) => {
  
  // se envia el correo
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.status(500).send({ message : `${err.response}`  })
      return console.log(err)
    }
    res.status(200).send({ message : 'mensaje enviado' })
    console.log(`enviado ${info.message}`)
  })

})

// Save message
app.post('/api/person', (req,res, next) => {
  console.log('POST /API/PERSON')
  console.log(req.body)

  let person = new Person()
  
  person.name = req.body.name
  person.email = req.body.email
  person.description = req.body.description

  let result = person.save( (err, personStore) => {
                if(err) {
                  return res.status(500).send({ message : `Error save in database : ${err}` })
                }

                return res.status(200).send( { message : 'Mensaje recibido'})
              })

  result.then( ( result ) => {
    console.log(result)
  }).catch( (err) => {
    console.log(err)
  })            

})

mongoose.createConnection('mongodb://localhost:27017/clouddyDb', (err,res) => {

  if (err) {
    return console.log(`Error in Database !!! : ${err}`)
  }
  
  console.log('Connect Db Clouddy')

  app.listen(port, (err) => {
    if (!err) {
      return console.log(`Listen port : ${port}`)
    }
    console.log('Failed...')
  })

})