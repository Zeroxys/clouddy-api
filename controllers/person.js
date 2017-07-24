const Person = require('../models/person.js')

const Client = {

  savePerson : function (req, res, next) {
  console.log('POST /API/PERSON')
    console.log(req.body)

    let person = new Person()
    
    person.name = req.body.name
    person.email = req.body.email
    person.description = req.body.description

    let result = person.save( (err, personStore) => {
      if(err) {
        return res.status(500).send({ message : `Error save in database : ${err}` })
      }

      return res.status(200).send( { message : 'Mensaje recibido'})
    })

    result.then( ( result ) => {
      console.log(result)
    }).catch( (err) => {
      console.log(err)
    })
  }

}

module.exports = Client