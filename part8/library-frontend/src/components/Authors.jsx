import { useMutation, useQuery } from '@apollo/client'
import { ALL_AUTHORS, EDIT_AUTHOR } from '../helpers/queries'
import { useState } from 'react'

const Authors = (props) => {
  const { loading, error, data } = useQuery(ALL_AUTHORS, { pollInterval: 3000 })
  const [name, setName] = useState('')
  const [born, setBorn] = useState(0)
  const [editBook] = useMutation(EDIT_AUTHOR)
  if (!props.show) {
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await editBook({ variables: { name, born } })
    } catch (error) {
      console.error(error.message)
    }
  }

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {data.allAuthors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Set birthyear</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <select
            name='author'
            onChange={({ target }) => setName(target.value)}
          >
            {data.allAuthors.map(({ name }) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>
            born
            <input
              type='number'
              name='born'
              value={born}
              onChange={({ target }) => setBorn(Number(target.value))}
            />
          </label>
        </div>
        <button>Update</button>
      </form>
    </div>
  )
}

export default Authors
