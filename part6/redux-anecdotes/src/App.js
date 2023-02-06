import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
  return (
    <div>
      <AnecdoteForm />  
      <h2>Anecdotes</h2> 
      <Filter />  
      <AnecdoteList />
      <Notification />
    </div>
  )
}

export default App