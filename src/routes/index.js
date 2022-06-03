const express = require('express')
const router = express.Router()

const clubsRoutes = require('./clubs.routes')
const peopleRoutes = require('./people.routes')

router.use('/clubs', clubsRoutes)
router.use('/people', peopleRoutes)

module.exports = router
