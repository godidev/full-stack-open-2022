const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)

const blogs = [
  {
    title: 'this is blog 1',
    author: 'godidev',
    url: 'www.asdf.com',
    likes: 288
  },
  {
    title: 'this is blog 2',
    author: 'facundo',
    url: 'www.qwerty.com',
    likes: 18
  }
]

beforeEach(async () => {
  await Blog.deleteMany({})

  const blog1 = new Blog(blogs[0])
  await blog1.save()

  const blog2 = new Blog(blogs[1])
  await blog2.save()
})

describe('Get data from database', () => {
  test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('Is ID field defined as `id` instead of `_id`', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body[0].id).toBeDefined()
  })
})

describe('Add blogs to database', () => {
  test('when request doesn\'t include likes', async () => {
    const newBlog = {
      title: 'prueba',
      author: 'prueba',
      url:'prueba'
    }

    const response = await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    expect(response.body.likes).toBe(0)
  })

  test('when request doesn\'t include title or url', async () => {
    const newBlog ={
      author: 'prueba',
      likes: 24
    }

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(400)
  })
})

describe('delete blogs from database', () => {
  test('delete exising blog', async () => {
    await api
      .delete('/api/blogs/this is blog 1')
      .expect(204)
  })
})

describe('update blogs from database', () => {
  test('update exising blog', async () => {
    await api
      .put('/api/blogs/this is blog 1')
      .expect(204)
  })
})

afterAll(() => {
  mongoose.connection.close()
})