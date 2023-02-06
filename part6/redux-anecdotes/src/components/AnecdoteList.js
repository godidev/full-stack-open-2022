import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)

    const sortByLikes = anecdote => {
      return (anecdote.sort((a, b) => {
        return b.votes - a.votes
      }))
    }

    const filterAnecdotes = anecdote => {
      return (
        anecdote.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
      )
    }

    return (
        <>
        {filterAnecdotes(sortByLikes(anecdotes))
        .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
          </div>
        </div>
      )}
        </>
    )
}

export default AnecdoteList