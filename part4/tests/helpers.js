
const app = require('../index')
const supertest = require('supertest')
const User = require('../models/user')
const api = supertest(app)

const getUsers = async () => {
  const userNames = await User.find({})
  return userNames.map(user => user.username)
}

module.exports = {
  getUsers
}