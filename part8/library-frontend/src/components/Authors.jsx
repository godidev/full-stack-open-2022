import { useQuery } from '@apollo/client'
import { ALL_AUTHORS } from '../helpers/queries'

const Authors = (props) => {
  const { loading, error, data } = useQuery(ALL_AUTHORS, { pollInterval: 3000 })
  if (!props.show) {
    return null
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
      <form>
        <div>
          <label>
            name
            <input type='text' name='name' />
          </label>
        </div>
        <div>
          <label>
            born
            <input type='number' name='born' />
          </label>
        </div>
        <button>Update</button>
      </form>
    </div>
  )
}

export default Authors
