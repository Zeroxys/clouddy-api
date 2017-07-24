// setup email data with unicode symbols
let mailOptions = {
    from: '"CTO. Miguel Zavala 👻" ', // sender address
    to: 'gabriel.galan92@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello galan ?', // plain text body
    html: '<b>Hello world ? asdasdasdasdasdasasdas </b>' // html body
}

module.exports = mailOptions
