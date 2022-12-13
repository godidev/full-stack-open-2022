export default function CountryList({ countries, setSearchCountry }) {
    return countries.map(country => {
        const name = country.name.common
        return (
            <div key={name}>
                {name} <button value={name} onClick={(e) => setSearchCountry(e.target.value)}>show</button>
            </div>)
    })
}