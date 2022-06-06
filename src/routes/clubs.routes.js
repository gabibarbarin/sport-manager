const express = require('express')
const router = express.Router()

const {
  budgetValidationsClub,
  checkBudgetAvailability,
  checkBudgetToEdit,
  clubValidationsClub,
  freePerson,
  idValidationsClub,
  clubNameValidationsClub,
  personBelongsToClub,
  personValidationsClub,
  salaryValidationsClub,
  validationResults,
  verifyUniquePerson,
} = require('../middlewares')

const {
  addPeopleToTheClub,
  createClub,
  editBudgetClub,
  getPlayersByClub,
  removePeopleToTheClub,
} = require('../controllers/clubs')

router
  .route('/')
  .post([clubNameValidationsClub, budgetValidationsClub, validationResults], createClub)
  .get([idValidationsClub, validationResults], getPlayersByClub)

router
  .route('/add-people')
  .post(
    [
      personValidationsClub,
      clubValidationsClub,
      salaryValidationsClub,
      validationResults,
      freePerson,
      verifyUniquePerson,
      checkBudgetAvailability,
    ],
    addPeopleToTheClub
  )

router
  .route('/remove-people')
  .post([personValidationsClub, clubValidationsClub, validationResults, personBelongsToClub], removePeopleToTheClub)

router
  .route('/budget')
  .put([idValidationsClub, budgetValidationsClub, validationResults, checkBudgetToEdit], editBudgetClub)

module.exports = router
