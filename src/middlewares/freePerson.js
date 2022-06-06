const People = require('../models/peoples.model')

const freePerson = async (req, res, next) => {
  const { person } = req.body

  const findPerson = await People.findById({ _id: person })

  if (findPerson.club) {
    return res.status(400).json({ msg: 'Esta persona ya tiene un club, debe darlo de baja primero' })
  }

  next()
}

module.exports = { freePerson }
