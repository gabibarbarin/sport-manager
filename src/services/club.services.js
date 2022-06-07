const Club = require('../models/clubs.model')
const People = require('../models/peoples.model')

const createClubService = (infoClub) => {
  return Club.create(infoClub)
}

const findClubAndPersonByIdService = (clubId, personId) => {
  return Promise.all([Club.findById({ _id: clubId }), People.findById({ _id: personId })])
}

const findClubById = (_id) => {
  return Club.findById({ _id }).populate('people')
}

const addPeopleClubService = (club, person, salary) => {
  const availableBudget = club.budget - salary
  club.budget = availableBudget
  club.people.push(person)

  person.salary = salary
  person.club = club

  return Promise.all([club.save(), person.save()])
}

const addOnlyPersonToClub = (club, people, salary) => {
  const remainingBudget = club.budget - salary

  club.budget = remainingBudget
  club.people.push(people._id)
  return club.save()
}

const removePeopleClubService = (club, personObj, personId) => {
  club.budget = club.budget + personObj.salary
  club.people = club.people.filter((personElement) => personElement != personId)

  return Promise.all([club.save(), People.findOneAndUpdate({ _id: personId }, { $unset: { club: '', salary: '' } })])
}

const editBudgetClubService = (club, budget) => {
  let minimumBudget = 0
  club.people.forEach(({ salary }) => (minimumBudget += salary))
  club.budget = budget - minimumBudget

  club.save()

  return club.budget
}

const getPlayersByClubService = (query, limit, from) => {
  return Promise.all([People.countDocuments(query), People.find(query).limit(Number(limit)).skip(Number(from))])
}

module.exports = {
  addOnlyPersonToClub,
  addPeopleClubService,
  createClubService,
  editBudgetClubService,
  findClubAndPersonByIdService,
  findClubById,
  getPlayersByClubService,
  removePeopleClubService,
}
