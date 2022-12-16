const { response, request } = require('express')
const express = require('express')
const morgan = require('morgan')
const app = express()

morgan.token('body', (req) => {
    return JSON.stringify(req.body)
})

app.use(morgan('tiny'))
app.use(express.json())

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
    response.send('hello, world')
})

app.get('/info', (request, response) => {
    const people = persons.length
    response.send(`<p>Phonebook has info for ${people} people</p> \
    <p>${new Date()}</p>`)
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.post('/api/persons', morgan(':body'), (request, response) => {
    const { name, number } = request.body
    if (!name || !number) {
        return response.status(422).json({
            error: 'Name or number missing'
        })
    }
    const hasValue = JSON.stringify(persons).includes(name)
    if (hasValue) {
        return response.status(409).json({
            error: 'Name already exists!'
        })
    }
    const id = Math.floor(Math.random() * (100000))
    const newPerson = {
        name: name,
        number: number,
        id: id
    }
    persons = persons.concat(newPerson)
    response.json(newPerson)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})