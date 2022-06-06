const People = require('../../models/peoples.model')
const Club = require('../../models/clubs.model')
const { sendEmail, traductionTypePeople } = require('../../helpers/functions')

const createPeople = async (req, res) => {
  try {
    const { club, email, fullName, mobile, nie, salary, type } = req.body

    let createOptions = { fullName: fullName.toLowerCase(), nie, salary, type, email, mobile }

    if (club) {
      if (!salary) {
        return res.status(400).json({ msg: 'Se requiere un salario para dar de alta un jugador en un club' })
      }
      createOptions = { club, ...createOptions }
    }

    const newPeople = await People.create(createOptions)

    if (club && newPeople) {
      const findClub = await Club.findById({ _id: club })
      const remainingBudget = findClub.budget - salary

      findClub.budget = remainingBudget
      findClub.people.push(newPeople._id)
      await findClub.save()

      const action = 'alta'
      sendEmail(email, action, traductionTypePeople(type))
    }

    return res.status(200).json({ msg: `¡${traductionTypePeople(type)} creado con exito!`, newPeople })
  } catch (error) {
    return res.status(400).json({
      msg: `Error al crear el ${traductionTypePeople(type)}`,
    })
  }
}

module.exports = { createPeople }
