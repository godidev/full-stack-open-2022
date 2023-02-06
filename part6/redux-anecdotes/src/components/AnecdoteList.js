import { useDispatch, useSelector } from 'react-redux'

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
      dispatch({type: 'anecdotes/vote', payload: id})
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