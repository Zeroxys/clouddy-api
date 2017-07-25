const transporter = require('../mail/mailTransporter.js')
const mailService = require('../mail/mailCtrl.js')

class mail {
  constructor (name, mail, mailOpts) {
    this.name = name
    this.mail = mail
  }

  mailOptions () {
    return {
      from: '"Team Clouddy👻" ', // sender address
      to: `${this.mail}`, // list of receivers
      subject: 'Asunto', // Subject line
      text: `Hola ${this.name}`, // plain text body
      html: `<h1>Hola ${this.name}</h1>` // html body
    }
  }

  sendMail () {
    transporter.sendMail(this.mailOptions(), (err, info) => {
      if (err) {
        return console.log(err.message)
      }

      console.log(`Mail send id : ${info.messageId}`)
    })
  }
}

module.exports =  mail