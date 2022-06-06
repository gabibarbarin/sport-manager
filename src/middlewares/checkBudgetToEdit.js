const Club = require('../models/clubs.model')

const checkBudgetToEdit = async (req, res, next) => {
  const { _id, budget } = req.body

  const findClub = await Club.findById({ _id }).populate('people')

  let minimumBudget = 0
  findClub.people.forEach(({ salary }) => (minimumBudget += salary))

  if (minimumBudget > budget) {
    return res.status(400).json({
      msg: `El presupuesto no alcanza para cubrir los sueldos de la plantilla. Se requiere un minimo de €${minimumBudget}`,
    })
  }

  next()
}

module.exports = { checkBudgetToEdit }
