const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const { dbConnection } = require('./src/database/config')
const apiRoutes = require('./src/routes/index')

const port = process.env.PORT || 5000

// Configuracion
app.use(cors())
app.use(express.json())
dbConnection()

// Server Routes
app.use('/api', apiRoutes)

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
})
