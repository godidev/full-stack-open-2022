import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/getPersons'
import Notification from './components/Notification'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({ name: '', number: '' })
  const [filterName, setFilterName] = useState('')
  const [message, setMessage] = useState(null)

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

    personService
      .create(newPerson)
      .then(res => {
        setPersons(prevPerson => prevPerson.concat(res))
        setMessage(`${newPerson.name} added to phonebook`)
      })
      .catch(error => {
        setMessage(`error: ${error.response.data.error}`)
      })

    setTimeout(() => {
      setMessage(null)
    }, 5000)
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
      axios.delete(`/api/persons/${id}`)
      personService
        .getPersons()
        .then(persons => setPersons(persons))
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} />
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