const mailOptions = require('../mail/mailOpts.js')
const transporter = require('../mail/mailTransporter.js')
const mailService = require('../mail/mailCtrl.js')

const mail  = {
  sendMail : function (req, res, next) {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        res.status(500).send({ message : `${err.response}`  })
        return console.log(err)
      }
      res.status(200).send({ message : 'mensaje enviado' })
      console.log(`enviado ${info.message}`)
    })
  }
}

module.exports =  mail