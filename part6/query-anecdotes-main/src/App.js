import {useQuery } from 'react-query'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { getAll } from './services/request'

const App = () => {
  const handleVote = (anecdote) => {
    console.log('vote')
  }

  const {isLoading, isError, data, error} = useQuery('anecdotes', getAll, {
    retry: false
  })
  
  if (isError) {
    return <div>{error.message}</div>
  } else if (isLoading){
    return <div>Loading...</div>
  }

  return (
      <div>
        <h3>Anecdote app</h3>
      
        <Notification />
        <AnecdoteForm />
      
        {data.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
          </div>
        )}
      </div>
  )
}

export default App
