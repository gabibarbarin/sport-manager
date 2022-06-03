const Club = require('../../models/clubs.model')

const getPlayersByClub = async (req, res) => {
  try {
    const { limit = 5, from = 0 } = req.query
    const query = { isDeleted: false }
    //TODO: Poblar los jugadores con su info
    //TODO: Falta filtrar por jugadores
    const [count, users] = await Promise.all([
      Club.countDocuments(query),
      Club.find(query).limit(Number(limit)).skip(Number(from)),
    ])

    res.status(200).json({ count, users })
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = { getPlayersByClub }
