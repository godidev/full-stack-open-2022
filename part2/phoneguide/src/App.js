import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: 987456321 },
    { name: 'Perico palotes', number: 362514789 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  function checkIfExists() {
    const filter = persons.filter(({ name }) => name === newName)
    return filter.length === 0
  }

  function handleSubmit(event) {
    event.preventDefault()
    checkIfExists() ?
      setPersons(persons.concat({ name: newName, number: newNumber })) :
      alert(`${newName} is already added to phonebook`)
    setNewName('')
  }

  function handleNameChange(event) {
    const { value } = event.target
    setNewName(value)
  }

  function handleNumberChange(event) {
    const { value } = event.target
    setNewNumber(value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          number: <input type="number" onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(({ name, number }) =>
        <p key={name}>{name} <strong>{number}</strong></p>
      )}
    </div>
  )
}

export default App