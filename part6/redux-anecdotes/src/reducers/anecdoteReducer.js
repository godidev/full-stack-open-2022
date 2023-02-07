import { createSlice } from "@reduxjs/toolkit"

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    appendAnecdote(state, action){
      state.push(action.payload)
    },
    vote(state, action) {
      const id = action.payload
      return state.map(anecdote => {
        return anecdote.id === id 
        ? {...anecdote, votes: anecdote.votes + 1}
        : anecdote
      })
    }, 
    createAnecdote(state, action){
      const anecdote = action.payload
      state.push(asObject(anecdote))
    }
  }
})

export const {vote, createAnecdote, appendAnecdote} = anecdoteSlice.actions
export default anecdoteSlice.reducer