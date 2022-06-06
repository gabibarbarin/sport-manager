const Club = require('../../models/clubs.model')

const editBudgetClub = async (req, res) => {
  try {
    const { _id, budget } = req.body

    const findClub = await Club.findById({ _id }).populate('people')

    let minimumBudget = 0
    findClub.people.forEach(({ salary }) => (minimumBudget += salary))
    findClub.budget = budget - minimumBudget

    findClub.save()
    return res.status(200).json({
      msg: `Presupuesto del club modificado exitosamente. El nuevo presupuesto disponible es de €${findClub.budget}`,
    })
  } catch (error) {
    return res.status(400).json({
      msg: `Error al modificar el presupuesto`,
    })
  }
}

module.exports = { editBudgetClub }
