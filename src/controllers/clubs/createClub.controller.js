const Club = require('../../models/clubs.model')

const createClub = async (req, res) => {
  try {
    const { name, budget } = req.body
    const nameTransform = name.toLowerCase()

    const newClub = await Club.create({ name: nameTransform, budget })
    res.status(200).json({ msg: '¡Club Creado con exito!', club: newClub })
  } catch (error) {
    return res.status(400).json({
      msg: `Error al crear el club`,
    })
  }
}

module.exports = { createClub }
