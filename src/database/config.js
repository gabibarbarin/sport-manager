const mongoose = require('mongoose')

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.PATH_CONNECT)

    console.log('Base de Datos Online')
  } catch (error) {
    console.log(error)
    throw new Error('Error al iniciar la DB')
  }
}

module.exports = { dbConnection }
