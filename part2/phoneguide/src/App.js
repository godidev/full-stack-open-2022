import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'Perico palotes' }
  ])
  const [newName, setNewName] = useState('')

  function checkIfExists() {
    const filter = persons.filter(({ name }) => name === newName)
    return filter.length === 0
  }

  function handleSubmit(event) {
    event.preventDefault()
    checkIfExists() ?
      setPersons(persons.concat({ name: newName })) :
      alert(`${newName} is already added to phonebook`)
    setNewName('')
  }

  function handleNameChange(event) {
    const { value } = event.target
    setNewName(value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(({ name }) =>
        <p key={name}>{name}</p>
      )}
    </div>
  )
}

export default App