import { useDispatch } from 'react-redux'
import { appendAnecdote } from '../reducers/anecdoteReducer'
import { createNewAnecdote } from "../services/anecdotes"

const AnecdoteForm = () => {
    const getId = () => (100000 * Math.random()).toFixed(0)

    const asObject = (anecdote) => {
        return ({
            content: anecdote,
            votes: 0,
            id: getId()
        })
    }

    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        try {
            const newAnecdote = await createNewAnecdote(asObject(anecdote))
            dispatch(appendAnecdote(newAnecdote))
        } catch (error) {
            console.log('Error posting new anecdote')
        }
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