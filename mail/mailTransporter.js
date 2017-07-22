const nodemailer = require('nodemailer')
const xoauth2 = require('xoauth2')

let transporter = nodemailer.createTransport({
  service : 'gmail', 
  auth :{
    // xoauth : xoauth2.createXOAuth2Generator({
    //   user : 'miguelzavalac@gmail.com',
    //   clientId : '294899070808-8uidsrtu86vjm902up3ktm1ls44o7t1e.apps.googleusercontent.com',
    //   clientSecret : 'Ryc7P1fsWVdqbE4C33bvzA1b',
    //   refreshToken : '1/7UyJZ5QWYkff6cOU-HM7fM3zgi8z2TuzoTdMiDbcfDlw8b0uxRVBAJVAQrfM9ifB',
    // }) 

    user : 'miguelzavalac@gmail.com',
    pass : 'zeroxys78963214',
  } 
});

module.exports =  transporter