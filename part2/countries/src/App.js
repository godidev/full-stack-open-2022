import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchCountry from './components/SearchCountry';
import CountryFilter from './components/CountryFilter';

function App() {
  const [query, setQuery] = useState({ filter: '', countries: {} })
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/countries')
      .then(response => {
        const { data } = response
        const country = data.map(item => item)
        setCountries(country)
      })
  }, [])

  function handleChange(event) {
    const { value } = event.target
    const result = countries.filter(country => {
      return (
        country.name.common.toLowerCase().includes(
          value.toLowerCase())
      )
    })
    setQuery({
      filter: value,
      countries: result
    })
  }

  return (
    <div>
      <SearchCountry handleChange={handleChange} value={query.filter || ''} />
      <CountryFilter countries={query.countries} />
    </div>
  );
}

export default App;
