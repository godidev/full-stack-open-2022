import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/getPersons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({ name: '', number: '' })
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    personService
      .getPersons()
      .then(persons => setPersons(persons))
  }, [])

  function checkIfExists() {
    const filter = persons.filter(({ name }) => name === newPerson.name)
    return filter.length !== 0
  }

  function getId() {
    const id = persons.filter(({ name }) => name === newPerson.name).map(item => item.id)[0]
    return id || 0
  }

  function handleSubmit(event) {
    event.preventDefault()
    getId()
    if (checkIfExists()) {
      const str = `${newPerson.name} is already added to phonebook, replace the old number?`
      if (window.confirm(str)) {
        const id = getId()
        personService.update(getId(), newPerson)
          .then(res =>
            setPersons(persons.map(person => person.id !== id ? person : res)))
      }
    } else {
      personService
        .create({ ...newPerson, id: (persons.length) + 1 })
        .then(res => setPersons(persons.concat(res)))
    }
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

  function deleteName(id) {
    if (window.confirm("Do you really want to delete the name?")) {
      axios.delete(`http://localhost:3001/persons/${id}`)
      personService
        .getPersons()
        .then(persons => setPersons(persons))
    }
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
      <Persons persons={persons} filterBy={filterName} deleteName={deleteName} />
    </div>
  )
}

export default App