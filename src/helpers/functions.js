const nodemailer = require('nodemailer')

const traductionTypePeople = (type) => {
  if (type === 'player') {
    return 'Jugador'
  }

  return 'Entrenador'
}

const sendEmail = (email = '', action = '', typePeople = '') => {
  let transport = nodemailer.createTransport({
    host: process.env.HOST_EMAIL,
    port: process.env.PORT_EMAIL,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.PASS_EMAIL,
    },
  })

  const message = {
    from: 'sport@manager.com',
    to: email,
    subject: `${action} de ${typePeople}`,
    html: `<h3>Actualización de su relación laboral con el club</h3>
    Acorde a lo que se arreglo con su representante usted fue dado de <b>${action}</b> en el club.`,
  }

  transport.sendMail(message, (err, info) => {
    if (err) {
      return true
    } else {
      return false
    }
  })
}

module.exports = { sendEmail, traductionTypePeople }
