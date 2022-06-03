const Club = require('../models/clubs.model')

const traductionTypePeople = (type) => {
  if (type === 'player') {
    return 'Jugador'
  }

  return 'Entrenador'
}

const findClubByName = async (nameClub = '') => {
  const nameOption = nameClub?.toLowerCase()
  const { _id } = await Club.findOne({ nameOption })

  return _id
}

module.exports = { traductionTypePeople, findClubByName }
