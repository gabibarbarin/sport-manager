const Club = require('../../models/clubs.model')
const People = require('../../models/peoples.model')

const { sendEmail, traductionTypePeople } = require('../../helpers/functions')

const removePeopleToTheClub = async (req, res) => {
  const { person, club } = req.body

  try {
    const [findClub, findPerson] = await Promise.all([Club.findById({ _id: club }), People.findById({ _id: person })])

    findClub.budget = findClub.budget + findPerson.salary
    findClub.people = findClub.people.filter((personElement) => personElement != person)

    const [saveClub, savePerson] = await Promise.all([
      findClub.save(),
      People.findOneAndUpdate({ _id: person }, { $unset: { club: '', salary: '' } }),
    ])

    if (saveClub && savePerson) {
      const action = 'baja'
      sendEmail(findPerson.email, action, traductionTypePeople(findPerson.type))
    }

    return res.status(200).json({ msg: 'El jugador se removio del club satisfactoriamente' })
  } catch (error) {
    return res.status(400).json({
      msg: `Error al remover el jugador del club`,
    })
  }
}

module.exports = { removePeopleToTheClub }
