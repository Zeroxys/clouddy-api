'use strict'
const app = require('./app.js')
const mongoose = require('mongoose')
const config = require('./config.js')

mongoose.createConnection( config.db, (err,res) => {

  if (err) {
    return console.log(`Error in Database !!! : ${err}`)
  }
  
  console.log('Connect Db Clouddy')

  app.listen(config.port, (err) => {
    if (!err) {
      return console.log(`Listen port : ${config.port}`)
    }
    console.log('Failed...')
  })

})