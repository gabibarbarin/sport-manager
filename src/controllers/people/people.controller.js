const { sendEmail, traductionTypePeople } = require('../../helpers/functions')
const { createPeopleService } = require('../../services/people.services')
const { findClubById, addOnlyPersonToClub } = require('../../services/club.services')

const createPeople = async (req, res) => {
  const { club, email, fullName, mobile, nie, salary, type } = req.body

  try {
    let createOptions = { fullName: fullName.toLowerCase(), nie, salary, type, email, mobile }

    if (club) {
      if (!salary) {
        return res.status(400).json({ msg: 'Se requiere un salario para dar de alta un jugador en un club' })
      }
      createOptions = { club, ...createOptions }
    }

    const newPeople = await createPeopleService(createOptions)

    if (club && newPeople) {
      const findClub = await findClubById(club)
      const addPerson = await addOnlyPersonToClub(findClub, newPeople, salary)

      if (addPerson) {
        const action = 'alta'
        sendEmail(email, action, traductionTypePeople(type))

        return res.status(200).json({ msg: `¡${traductionTypePeople(type)} creado con exito!`, newPeople })
      }

      return res.status(400).json({ msg: `Error al crear el ${traductionTypePeople(type)}` })
    }

    if (newPeople) {
      return res.status(200).json({ msg: `¡${traductionTypePeople(type)} creado con exito!`, newPeople })
    }

    return res.status(400).json({ msg: `Error al crear el ${traductionTypePeople(type)}` })
  } catch (error) {
    return res.status(400).json({
      msg: `Error al crear el ${traductionTypePeople(type)}`,
    })
  }
}

module.exports = { createPeople }
