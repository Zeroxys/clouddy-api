const Person = require('../models/person.js')
const mail = require('./mail')

const Client = {
  savePerson : function (req, res) {
    let person = new Person()
    
    person.name = req.body.name
    person.email = req.body.email
    person.description = req.body.description
    person.date = new Date()

    let clientMail = new mail(person.name, person.email, {
      from: '"Team Clouddy👻" ',
      to: `${person.email}`,
      subject: 'Asunto',
      text: `Hola ${person.name}`,
      html: `<h1>Hola ${person.name} nos llego tu mensaje y lo estamos atendiendo porque somos chidos</h1>`
    })

    let ourMail = new mail(person.email, "team@clouddy.com.mx", {
      from: '"NEW CLIENT👻" ',
      to: `team@clouddy.com.mx`,
      subject: `El cliente ${person.name}`,
      text: `Tienes un nuevo cliente`,
      html: `<h1>El cliente ${person.name} </br> escribio lo siguiente : ${person.description} </br> y necesita un presupuesto chido su correo es ${person.email}</h1>`
    })

    person.save( (err, personStore) => {
    
      console.log(personStore)
      if(err) res.status(500).send({ message : `Error save in database : ${err}` })

      res.status(200).send( { message : `Message received ${personStore}}`})
      clientMail.sendMail()
      ourMail.sendMail()
    })

  }
}

module.exports = Client