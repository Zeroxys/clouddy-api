const transporter = require('../mail/mailTransporter.js')
const mailService = require('../mail/mailCtrl.js')

class mail {
  constructor (name, mail, mailOpts) {
    this.name = name
    this.mail = mail
    this.mailOptions = {
      from : mailOpts.from,
      to : mailOpts.to,
      subject : mailOpts.subject,
      text : mailOpts.text,
      html : mailOpts.html
    }
  }

  sendMail () {
    transporter.sendMail(this.mailOptions, (err, info) => {
      if (err) {
        return console.log(err.message)
      }

      console.log(`Mail send id : ${info.messageId}`)
    })
  }
}

module.exports =  mail