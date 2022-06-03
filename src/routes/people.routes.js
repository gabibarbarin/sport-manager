const express = require('express')
const router = express.Router()

const { check, body } = require('express-validator')
const { validationResults } = require('../middlewares/validations')
const { findClubByNameValidation } = require('../helpers/db-validations')

const { createPeople } = require('../controllers/people')

router
  .route('/')
  .post(
    [
      check('name', 'El nombre es obligatorio').not().isEmpty(),
      check('name', 'El nombre debe ser de tipo String').isString(),
      check('lastname', 'El apellido es obligatorio').not().isEmpty(),
      check('lastname', 'El apellido debe ser de tipo String').isString(),
      check('type', 'El tipo de persona es obligatorio').not().isEmpty(),
      check('type', `El tipo de persona debe ser 'trainer' para los entrenadores o 'player' para los jugadores`).isIn([
        'player',
        'trainer',
      ]),
      check('club').custom(findClubByNameValidation),
      check('salary', 'El salario debe ser un numero mayor a 0').optional().isFloat({ min: 1 }),
      validationResults,
    ],
    createPeople
  )

module.exports = router
