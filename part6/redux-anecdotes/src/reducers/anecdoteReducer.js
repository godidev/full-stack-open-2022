import { createSlice } from "@reduxjs/toolkit"
import { addVote, createNewAnecdote, getAll } from "../services/anecdotes"

const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    appendAnecdote(state, action){
      state.push(action.payload)
    },
    setAnecdotes(state, action){
      return action.payload
    },
    updateAnecdotes(state, action) {
      const updatedAnecdote = action.payload
      return state.map(anecdote => {
        return (
          anecdote.id === updatedAnecdote.id
            ? updatedAnecdote
            : anecdote
        )
      })
    }
  }
})

export const {updateAnecdotes, setAnecdotes, appendAnecdote} = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await createNewAnecdote(content)
    dispatch(appendAnecdote(anecdote))
  }
} 

export const newVote = (id) => {
  return async dispatch => {
    const updatedAnecdote = await addVote(id)
    dispatch(updateAnecdotes(updatedAnecdote))
  }
}
export default anecdoteSlice.reducer