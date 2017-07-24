let mailOptions = {
    from: '"CTO. Miguel Zavala 👻" ', // sender address
    to: 'miguelzavalac@gmail.com', // list of receivers
    subject: 'Asunto', // Subject line
    text: 'Hola Miguel', // plain text body
    html: '<h1>Hola mundo</h1>' // html body
}

module.exports = mailOptions
