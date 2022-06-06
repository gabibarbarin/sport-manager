const express = require('express')
const router = express.Router()

const {
  checkBudgetAvailability,
  clubNameValidationsPeople,
  emailValidationsPeople,
  fullNameValidationsPeople,
  mobileValidationsPeople,
  nieValidationsPeople,
  salaryValidationsPeople,
  typeValidationsPeople,
  validationResults,
} = require('../middlewares')

const { createPeople } = require('../controllers/people')

router
  .route('/')
  .post(
    [
      clubNameValidationsPeople,
      emailValidationsPeople,
      fullNameValidationsPeople,
      mobileValidationsPeople,
      nieValidationsPeople,
      salaryValidationsPeople,
      typeValidationsPeople,
      validationResults,
      checkBudgetAvailability,
    ],
    createPeople
  )

module.exports = router
