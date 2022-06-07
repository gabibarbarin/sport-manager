const People = require('../models/peoples.model')

const createPeopleService = (createOptions) => {
  return People.create(createOptions)
}

module.exports = { createPeopleService }
