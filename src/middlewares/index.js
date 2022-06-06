const { checkBudgetAvailability } = require('./checkBudgetAvailability')
const { checkBudgetToEdit } = require('./checkBudgetToEdit')
const { freePerson } = require('./freePerson')
const { personBelongsToClub } = require('./personBelongsToClub')
const { validationResults } = require('./validationResults')
const { verifyUniquePerson } = require('./verifyUniquePerson')
const {
  budgetValidationsClub,
  clubValidationsClub,
  idValidationsClub,
  clubNameValidationsClub,
  personValidationsClub,
  salaryValidationsClub,
} = require('./validationGroupsClub')

const {
  clubNameValidationsPeople,
  emailValidationsPeople,
  fullNameValidationsPeople,
  mobileValidationsPeople,
  nieValidationsPeople,
  salaryValidationsPeople,
  typeValidationsPeople,
} = require('./validationGroupsPeople')

module.exports = {
  budgetValidationsClub,
  checkBudgetAvailability,
  checkBudgetToEdit,
  clubNameValidationsClub,
  clubNameValidationsPeople,
  clubValidationsClub,
  emailValidationsPeople,
  freePerson,
  fullNameValidationsPeople,
  idValidationsClub,
  mobileValidationsPeople,
  nieValidationsPeople,
  personBelongsToClub,
  personValidationsClub,
  salaryValidationsClub,
  salaryValidationsPeople,
  typeValidationsPeople,
  validationResults,
  verifyUniquePerson,
}
