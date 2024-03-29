import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        dispatch(createAnecdote(anecdote))
        event.target.anecdote.value = ''
      }

    return (
        <>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
            <div><input name='anecdote' placeholder='anecdote'/></div>
            <button>create</button>
        </form>
        </>
    )
}

export default AnecdoteForm