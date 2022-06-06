const Club = require('../models/clubs.model')

const checkBudgetAvailability = async (req, res, next) => {
  const { club, salary } = req.body

  if (club) {
    const findClub = await Club.findById({ _id: club })

    const availableBudget = findClub.budget - salary
    if (availableBudget < 0) {
      return res.status(400).json({ msg: 'El presupuesto del club no es suficiente para dar de alta a esa persona' })
    }
  }

  next()
}

module.exports = { checkBudgetAvailability }
