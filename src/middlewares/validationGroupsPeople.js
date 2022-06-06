const { check } = require('express-validator')
const { verifyUniqueNie, uniqueNameClubValidation } = require('../helpers/db-validations')

const typeValidationsPeople = [
  check('type', 'El tipo de persona es obligatorio').not().isEmpty(),
  check('type', `El tipo de persona debe ser 'trainer' para los entrenadores o 'player' para los jugadores`).isIn([
    'player',
    'trainer',
  ]),
]

const clubNameValidationsPeople = [check('club').custom(uniqueNameClubValidation).optional()]

const fullNameValidationsPeople = [
  check('fullName', 'El nombre es obligatorio').not().isEmpty(),
  check('fullName', 'El nombre debe ser de tipo String').isString(),
]

const nieValidationsPeople = [
  check('nie', 'El NIE es obligatorio').not().isEmpty(),
  check('nie').custom(verifyUniqueNie),
]

const salaryValidationsPeople = [
  check('salary', 'El salario debe ser un numero mayor a 0').optional().isFloat({ min: 1 }),
]

const emailValidationsPeople = [
  check('email', 'El email es obligatorio').not().isEmpty(),
  check('email', 'El email debe tener formato de email').isEmail(),
]

const mobileValidationsPeople = [check('mobile', 'El movil es obligatorio').not().isEmpty()]

module.exports = {
  clubNameValidationsPeople,
  emailValidationsPeople,
  fullNameValidationsPeople,
  mobileValidationsPeople,
  nieValidationsPeople,
  salaryValidationsPeople,
  typeValidationsPeople,
}
