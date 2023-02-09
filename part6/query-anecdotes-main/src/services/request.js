import axios from "axios";

const baseURL = 'http://localhost:3001/anecdotes/'

export const getAll = () => axios.get(baseURL).then(res => res.data)

export const createAnecdote = (anecdote) => {
    return (
        axios.post(baseURL, anecdote).then(res => res.data)
    )
}