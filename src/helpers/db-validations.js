const Club = require('../models/clubs.model')

const uniqueNameClubValidation = async (name = '') => {
  const nameOption = name.toLowerCase()
  const club = await Club.findOne({ nameOption })
  if (club) {
    throw new Error(`Ya existe un club con el nombre ${nameOption}`)
  }
}

const findClubByNameValidation = async (nameClub) => {
  if (nameClub) {
    const nameOption = nameClub?.toLowerCase()
    const club = await Club.findOne({ name: nameOption })

    if (!club) {
      throw new Error(`No existe un club con el nombre ${nameOption}`)
    }
  }
}

module.exports = { uniqueNameClubValidation, findClubByNameValidation }
