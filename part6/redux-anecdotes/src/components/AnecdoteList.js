import { useDispatch, useSelector } from 'react-redux'
import { newVote } from '../reducers/anecdoteReducer'
import { newNotification } from '../reducers/notificationReducer'

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

    const handleClick = (content, id) => {
      dispatch(newVote(id))
      dispatch(newNotification(`You voted ${content}`, 5))
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
              <button onClick={() => handleClick(anecdote.content,anecdote.id)}>vote</button>
            </div>
          </div>
          )}
        </>
    )
}

export default AnecdoteList