const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs)
})

blogsRouter.post('/', async (request, response) => {
  const { body } = request
  if (!body.title || !body.url) {
    response.status(400).end()
  } else {
    const { title, author, url, likes = 0, userId } = body

    const user = await User.findById(userId)

    const blog = new Blog({
      title,
      author,
      url,
      likes,
      user: user._id
    })

    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog.id)
    await user.save()
    response.status(201).json(savedBlog)
  }
})

blogsRouter.delete('/:name', async (request, response) => {
  const name = request.params.name

  await Blog.findOneAndDelete({ title: name })
  response.status(204).end()
})

blogsRouter.put('/:name', async (request, response) => {
  const name = request.params.name
  await Blog.findOneAndUpdate({ name: name }, { likes: 35 })
  response.status(204).end()
})

module.exports = blogsRouter