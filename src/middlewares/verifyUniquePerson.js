const Club = require('../models/clubs.model')

const verifyUniquePerson = async (req, res, next) => {
  const { person, club } = req.body
  const findClub = await Club.findById({ _id: club })

  if (findClub.people.includes(person)) {
    return res.status(400).json({ msg: 'Ya existe una persona registrada con ese id en el club' })
  }

  next()
}

module.exports = { verifyUniquePerson }
