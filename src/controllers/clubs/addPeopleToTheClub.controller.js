const Club = require('../../models/clubs.model')
const People = require('../../models/peoples.model')

const { sendEmail, traductionTypePeople } = require('../../helpers/functions')

const addPeopleToTheClub = async (req, res) => {
  const { person, salary, club } = req.body

  try {
    const [findClub, findPerson] = await Promise.all([Club.findById({ _id: club }), People.findById({ _id: person })])

    const availableBudget = findClub.budget - salary
    findClub.budget = availableBudget
    findClub.people.push(person)

    findPerson.salary = salary
    findPerson.club = club

    const [saveClub, savePerson] = await Promise.all([findClub.save(), findPerson.save()])

    if (saveClub && savePerson) {
      const action = 'alta'
      sendEmail(findPerson.email, action, traductionTypePeople(findPerson.type))
    }

    return res.status(200).json({ msg: 'El jugador se dio de alta satisfactoriamente' })
  } catch (error) {
    return res.status(400).json({
      msg: `Error al dar de alta al jugador`,
    })
  }
}

module.exports = { addPeopleToTheClub }
