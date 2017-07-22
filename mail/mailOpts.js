// setup email data with unicode symbols
let mailOptions = {
    from: '"Fred Foo 👻" ', // sender address
    to: 'info@clouddy.com.mx', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
}

module.exports = mailOptions
