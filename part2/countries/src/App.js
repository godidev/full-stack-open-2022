import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country';

function App() {
  const [searchCountry, setSearchCountry] = useState('')
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
    setSearchCountry(value)
  }
  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase()
      .includes(searchCountry.toLowerCase()))

  return (
    <div>
      Find countries <input onChange={handleChange} value={searchCountry} />
      <Country key={searchCountry} countries={filteredCountries} setSearchCountry={setSearchCountry} />
    </div>
  );
}

export default App;
