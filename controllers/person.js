const Person = require('../models/person.js')
const mail = require('./mail')

const Client = {
  savePerson : function (req, res) {
    let person = new Person()
    
    person.name = req.body.name
    person.email = req.body.email
    person.description = req.body.description
    person.date = new Date()

    let clientMail = new mail(person.name, person.email)
    let ourMail = new mail(person.email, "team@clouddy.com.mx")

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