import { createSlice } from "@reduxjs/toolkit"

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
    }
  }
})

export const {vote, createAnecdote, appendAnecdote} = anecdoteSlice.actions
export default anecdoteSlice.reducer