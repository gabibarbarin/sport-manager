const Club = require('../models/clubs.model')
const People = require('../models/peoples.model')

const uniqueNameClubValidation = async (nameClub = '') => {
  const nameOption = nameClub.toLowerCase()
  const club = await Club.findOne({ name: nameOption })

  if (club) {
    throw new Error(`Ya existe un club con el nombre ${nameOption}`)
  }
}

const findClubByIdValidation = async (_id) => {
  const club = await Club.findById(_id)

  if (!club) {
    throw new Error(`No existe un club con el id ${_id}`)
  }
}

const verifyUniqueNie = async (nie) => {
  const person = await People.findOne({ nie })

  if (person) {
    throw new Error(`Ya existe una persona registrada con ese nie`)
  }
}

const findPersonByIdValidation = async (_id) => {
  const person = await People.findById(_id)

  if (!person) {
    throw new Error(`No existe una persona con el id ${_id}`)
  }
}

module.exports = {
  findClubByIdValidation,
  findPersonByIdValidation,
  uniqueNameClubValidation,
  verifyUniqueNie,
}
