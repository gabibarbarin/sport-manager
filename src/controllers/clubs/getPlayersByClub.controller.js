const People = require('../../models/peoples.model')

const getPlayersByClub = async (req, res) => {
  try {
    const { _id, limit = 5, from = 0, fullName } = req.query

    const query = fullName ? { club: _id, fullName: fullName } : { club: _id }

    const [count, users] = await Promise.all([
      People.countDocuments(query),
      People.find(query).limit(Number(limit)).skip(Number(from)),
    ])

    res.status(200).json({ count, users })
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = { getPlayersByClub }
