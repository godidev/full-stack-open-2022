import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  function checkIfExists() {
    const filter = persons.filter(({ name }) => name === newName)
    return filter.length === 0
  }

  function handleSubmit(event) {
    event.preventDefault()
    checkIfExists() ?
      setPersons(persons.concat({ name: newName, number: newNumber, id: (persons.length) + 1 })) :
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

  function handleFilter(event) {
    const { value } = event.target
    setFilterName(value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <form>
        <div>Filter shown with <input onChange={handleFilter} value={filterName} /></div>
      </form>
      <h2>Add a new</h2>
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
      {persons.filter(person => person.name
        .toLowerCase()
        .includes(filterName))
        .map(({ id, name, number }) =>
          <p key={id}>{name} <strong>{number}</strong></p>
        )}
    </div>
  )
}

export default App