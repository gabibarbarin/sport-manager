const { addPeopleToTheClub } = require('./addPeopleToTheClub.controller')
const { createClub } = require('./createClub.controller')
const { editBudgetClub } = require('./editBudgetClub.controller')
const { getPlayersByClub } = require('./getPlayersByClub.controller')
const { removePeopleToTheClub } = require('./removePeopleToTheClub.controller')

module.exports = { addPeopleToTheClub, createClub, editBudgetClub, getPlayersByClub, removePeopleToTheClub }
