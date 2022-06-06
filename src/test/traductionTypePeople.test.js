const { traductionTypePeople } = require('../helpers/functions')

describe('Unit Test - Traduction type people', () => {
  test('Should return jugador after entering Player', () => {
    const result = traductionTypePeople('player')

    expect(result).toBe('Jugador')
  })

  test('Should return entrenador after entering Trainer', () => {
    const result = traductionTypePeople('trainer')

    expect(result).toBe('Entrenador')
  })

  test('Should return Entrenador after entering an empty or undefined string', () => {
    const result = traductionTypePeople('')

    expect(result).toBe('Entrenador')
  })

  test('Should return Entrenador after entering an empty or undefined string', () => {
    const result = traductionTypePeople('')

    expect(typeof result).toBe('string')
  })
})
