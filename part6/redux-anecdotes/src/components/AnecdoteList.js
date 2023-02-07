import { useDispatch, useSelector } from 'react-redux'
import { newVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)

    const sortByLikes = anecdote => {
      return ([...anecdote].sort((a, b) => {
        return b.votes - a.votes
      }))
    }

    const filterAnecdotes = anecdote => {
      return (
        anecdote.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
      )
    }

    const handleClick = (id) => {
      dispatch(newVote(id))
      dispatch({type: 'notification/setNotification', payload: 'Voted!'})
      setTimeout(() => {
        dispatch({type: 'notification/setNotification', payload: null})
      }, 5000)
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
              <button onClick={() => handleClick(anecdote.id)}>vote</button>
            </div>
          </div>
          )}
        </>
    )
}

export default AnecdoteList