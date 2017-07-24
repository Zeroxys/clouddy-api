const Person = require('../models/person.js')
const mail = require('./mail')

const Client = {
  savePerson : function (req, res, next) {
    let person = new Person()
    
    person.name = req.body.name
    person.email = req.body.email
    person.description = req.body.description

    person.save( (err, personStore) => {
      console.log(personStore)
      if(err) res.status(500).send({ message : `Error save in database : ${err}` })
      mail.sendMail()
      res.status(200).send( { message : `Mensaje recibido id ${personStore._id}}`})
    })
  }
}

module.exports = Client