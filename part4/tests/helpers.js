
const app = require('../index')
const supertest = require('supertest')
const User = require('../models/user')
const api = supertest(app)

const getUsernames = async () => {
  const userNames = await User.find({})
  return userNames.map(user => user.username)
}

const getOneUserId = async () => {
  const user = await User.findOne({})
  return user._id
}

module.exports = {
  getUsernames,
  getOneUserId
}