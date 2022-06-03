const express = require('express')
const router = express.Router()

const { check } = require('express-validator')
const { validationResults } = require('../middlewares/validations')
const { uniqueNameClubValidation } = require('../helpers/db-validations')

const { createClub, getPlayersByClub } = require('../controllers/clubs')

router
  .route('/')
  .post(
    [
      check('name', 'El nombre es obligatorio').not().isEmpty(),
      check('name').custom(uniqueNameClubValidation),
      check('budget', 'El presupuesto es obligatorio').not().isEmpty(),
      check('budget', 'El presupuesto debe ser un numero mayor a 0').isFloat({ min: 1 }),
      validationResults,
    ],
    createClub
  )
  .get(getPlayersByClub)

module.exports = router
