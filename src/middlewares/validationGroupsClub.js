const { check } = require('express-validator')
const {
  findClubByIdValidation,
  findPersonByIdValidation,
  uniqueNameClubValidation,
} = require('../helpers/db-validations')

const idValidationsClub = [
  check('_id', 'El id es obligatorio').not().isEmpty(),
  check('_id', 'El id debe ser de tipo id').isMongoId(),
  check('_id').custom(findClubByIdValidation),
]

const clubValidationsClub = [
  check('club', 'El club es obligatorio').not().isEmpty(),
  check('club', 'El club debe ser de tipo id').isMongoId(),
  check('club').custom(findClubByIdValidation),
]

const personValidationsClub = [
  check('person', 'La persona es obligatoria').not().isEmpty(),
  check('person', 'La persona debe ser de tipo id').isMongoId(),
  check('person').custom(findPersonByIdValidation),
]

const budgetValidationsClub = [
  check('budget', 'El presupuesto es obligatorio').not().isEmpty(),
  check('budget', 'El presupuesto debe ser un numero mayor a 0').isFloat({ min: 1 }),
]

const clubNameValidationsClub = [
  check('name', 'El nombre es obligatorio').not().isEmpty(),
  check('name').custom(uniqueNameClubValidation),
]

const salaryValidationsClub = [
  check('salary', 'El salario es obligatorio').not().isEmpty(),
  check('salary', 'El salario debe ser un numero mayor a 0').isFloat({ min: 1 }),
]

module.exports = {
  budgetValidationsClub,
  clubValidationsClub,
  idValidationsClub,
  clubNameValidationsClub,
  personValidationsClub,
  salaryValidationsClub,
}
