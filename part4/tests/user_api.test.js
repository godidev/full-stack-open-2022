const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const User = require('../models/user')
const { getUsernames } = require('./helpers')

const api = supertest(app)

beforeEach(async () => {
  await User.deleteMany({})

  const user = new User({ username: 'enigma69', name: 'Pedro', password: 'rotonda' })

  await user.save()
})

describe('when there is initially one user in db', () => {
  test('creation succeeds with a fresh username', async () => {
    const usersAtStart = await getUsernames()

    const newUser = {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      password: 'salainen',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await getUsernames()
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

    expect(usersAtEnd).toContain(newUser.username)
  })
})

describe('getting users data', () => {
  test('get all users', async () => {
    await api
      .get('/api/users')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
})