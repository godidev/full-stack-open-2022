import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newPerson, setNewPerson] = useState({ name: '', number: '' })
  const [filterName, setFilterName] = useState('')

  function checkIfExists() {
    const filter = persons.filter(({ name }) => name === newPerson.name)
    return filter.length === 0
  }

  function handleSubmit(event) {
    event.preventDefault()
    checkIfExists() ?
      setPersons(persons.concat({ name: newPerson.name, number: newPerson.number, id: (persons.length) + 1 })) :
      alert(`${newPerson.name} is already added to phonebook`)
    setNewPerson('')
  }

  function handleChange(event) {
    const { name, value } = event.target
    setNewPerson({ ...newPerson, [name]: value })
  }

  function handleFilter(event) {
    const { value } = event.target
    setFilterName(value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter handleFilter={handleFilter} filter={filterName} />
      <h2>Add a new</h2>
      <PersonForm
        newPerson={newPerson}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filterBy={filterName} />
    </div>
  )
}

export default App