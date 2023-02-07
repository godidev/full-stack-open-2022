import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
    return ({
        content: anecdote,
        votes: 0,
        id: getId()
    })
}

export const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export const createNewAnecdote = async (anecdote) => {
    const response = await axios.post(baseUrl, asObject(anecdote))
    return response.data
  }
