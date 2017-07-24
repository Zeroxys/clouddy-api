const nodemailer = require('nodemailer')
const xoauth2 = require('xoauth2')

const generator = xoauth2.createXOAuth2Generator({
      user : 'info@clouddy.com.mx',
      clientId : '577389286022-2345o0h55lkheuvbllr33kebop451bpa.apps.googleusercontent.com',
      clientSecret : 'eccfC2M8Eo2q-UmPMJlalEb2',
      refreshToken : '1/iRnKoLXYUMtWtAji-DnIxWhQCydZdjMJw-HKGtEm608',
      accessToken : 'ya29.GluRBF07HnkPLSaN2VrXE3LnJxnaaioy3co-4F91nYI4MxfZaM8KO8T6jNDAlKj9TnhRhSnUKAU8zLTlO2trn3IDzox4uy__OISo9Oy-UQbqmHuYx8qAaFeup7tV'
    })

const transporter = nodemailer.createTransport({
  service : 'gmail', 
  auth :{
    // xoauth : generator
    user : 'info@clouddy.com.mx',
    pass : 'zeroxys78963214'
  } 
});

module.exports =  transporter