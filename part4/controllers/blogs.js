const blogsRouter = require('express').Router()
const { request } = require('../app')
const blog = require('../models/blog')
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs)
})

blogsRouter.post('/', async (request, response) => {
  const { body } = request
  if (!body.title || !body.url) {
    response.status(400).end()
  } else {
    const blog = new Blog(request.body)
    blog.likes = blog.likes || 0

    const result = await blog.save()
    response.status(201).json(result)
  }
})

blogsRouter.delete('/:name', async (request, response) => {
  const name = request.params.name

  await Blog.findOneAndDelete({ title: name })
  response.status(204).end()
})

blogsRouter.put('/:name', async (request, response) => {
  const name = request.params.name
  await blog.findOneAndUpdate({ name: name }, { likes: 35 })
  response.status(204).end()
})

module.exports = blogsRouter