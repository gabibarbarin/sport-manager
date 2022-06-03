const People = require('../../models/peoples.model')
const { traductionTypePeople, findClubByName } = require('../../helpers/functions')

const createPeople = async (req, res) => {
  try {
    const { name, lastname, salary, type, club } = req.body

    let createOptions = { name: name.toLowerCase(), lastname: lastname.toLowerCase(), salary, type }

    if (club) {
      if (!salary) {
        res.status(400).json({ msg: 'Se requiere un salario para dar de alta un jugador en un club' })
      }
      const clubId = await findClubByName(club)
      createOptions = { club: clubId, ...createOptions }
    }

    const newPeople = await People.create(createOptions)

    res.status(200).json({ msg: `¡${traductionTypePeople(type)} creado con exito!`, newPeople })
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = { createPeople }
