const Club = require('../models/clubs.model')

const personBelongsToClub = async (req, res, next) => {
  const { person, club } = req.body

  const findClub = await Club.findById({ _id: club })

  if (!findClub.people.includes(person)) {
    return res.status(400).json({ msg: 'La persona no pertenece a este club' })
  }

  next()
}

module.exports = { personBelongsToClub }
