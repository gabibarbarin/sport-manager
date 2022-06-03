const Club = require('../../models/clubs.model')

const createClub = async (req, res) => {
  try {
    const { name, budget } = req.body
    const nameTransform = name.toLowerCase()

    const newClub = await Club.create({ nameTransform, budget })
    res.status(200).json({ msg: '¡Club Creado con exito!', club: newClub })
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = { createClub }
