import { useQuery } from 'react-query'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { getAll } from './services/request'
import { NotificationContextProvider } from './context/NotificationContext'
import AnecdoteList from './components/AnecdoteList'

const App = () => {
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
        <NotificationContextProvider>
          <Notification />
          <AnecdoteForm />
          <AnecdoteList data={data}/>
          {}
        </NotificationContextProvider>
      </div>
  )
}

export default App
