const { sendEmail, traductionTypePeople } = require('../../helpers/functions')
const {
  addPeopleClubService,
  createClubService,
  editBudgetClubService,
  findClubAndPersonByIdService,
  findClubById,
  getPlayersByClubService,
  removePeopleClubService,
} = require('../../services/club.services')

const addPeopleToTheClub = async (req, res) => {
  const { person, salary, club } = req.body

  try {
    const [findClub, findPerson] = await findClubAndPersonByIdService(club, person)
    const [saveClub, savePerson] = await addPeopleClubService(findClub, findPerson, salary)

    if (saveClub && savePerson) {
      const action = 'alta'
      sendEmail(findPerson.email, action, traductionTypePeople(findPerson.type))

      return res.status(200).json({ msg: 'El jugador se dio de alta satisfactoriamente' })
    }

    return res.status(400).json({ msg: 'Error al dar de alta el jugador' })
  } catch (error) {
    return res.status(400).json({
      msg: `Error al dar de alta al jugador`,
    })
  }
}

const createClub = async (req, res) => {
  try {
    const { name, budget } = req.body
    const nameTransform = name.toLowerCase()

    const newClub = await createClubService({ name: nameTransform, budget })

    if (newClub) {
      return res.status(201).json({ msg: 'Crub creado con exito', newClub })
    }

    return res.status(400).json({
      msg: `Error al crear el club`,
    })
  } catch (error) {
    return res.status(400).json({
      msg: `Error al crear el club`,
    })
  }
}

const editBudgetClub = async (req, res) => {
  try {
    const { _id, budget } = req.body

    const findClub = await findClubById(_id)

    const newBudget = editBudgetClubService(findClub, budget)

    if (newBudget) {
      return res.status(200).json({
        msg: `Presupuesto del club modificado exitosamente. El nuevo presupuesto disponible es de €${newBudget}`,
      })
    }

    return res.status(400).json({
      msg: `Error al modificar el presupuesto`,
    })
  } catch (error) {
    return res.status(400).json({
      msg: `Error al modificar el presupuesto`,
    })
  }
}

const getPlayersByClub = async (req, res) => {
  try {
    const { _id, limit = 5, from = 0, fullName } = req.query
    const query = fullName ? { club: _id, fullName: fullName } : { club: _id }

    const [count, users] = await getPlayersByClubService(query, limit, from)

    if (users) {
      return res.status(200).json({ count, users })
    }

    return res.status(400).json({
      msg: `Error al  buscar jugadores en la base de datos`,
    })
  } catch (error) {
    return res.status(400).json({
      msg: `Error al  buscar jugadores en la base de datos`,
    })
  }
}

const removePeopleToTheClub = async (req, res) => {
  const { person, club } = req.body

  try {
    const [findClub, findPerson] = await findClubAndPersonByIdService(club, person)
    const [saveClub, savePerson] = await removePeopleClubService(findClub, findPerson, person)

    if (saveClub && savePerson) {
      const action = 'baja'
      sendEmail(findPerson.email, action, traductionTypePeople(findPerson.type))

      return res.status(200).json({ msg: 'El jugador se removio del club satisfactoriamente' })
    }

    return res.status(400).json({ msg: `Error al remover el jugador del club` })
  } catch (error) {
    return res.status(400).json({
      msg: `Error al remover el jugador del club`,
    })
  }
}

module.exports = { addPeopleToTheClub, createClub, editBudgetClub, getPlayersByClub, removePeopleToTheClub }
