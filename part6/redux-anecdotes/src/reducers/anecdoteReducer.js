import { createSlice } from "@reduxjs/toolkit"
import { getAll } from "../services/anecdotes"

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
    setAnecdotes(state, action){
      return action.payload
    }
  }
})


export const {vote, setAnecdotes, appendAnecdote} = anecdoteSlice.actions
export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}
export default anecdoteSlice.reducer