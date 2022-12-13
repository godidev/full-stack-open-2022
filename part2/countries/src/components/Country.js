import CountryList from "./CountryList"
import Weather from "./Weather"

export default function Country({ countries, setSearchCountry }) {
    if (countries.length === 1) {
        return (countries.map(country => {
            const { capital, area, languages, latlng } = country
            const flag = country.flags.png
            const name = country.name.common
            const lang = Object.values(languages).map(lang => lang)
            return (
                <div key={name}>
                    <h1>{name}</h1>
                    <p>Capital: {capital}</p>
                    <p>Area: {area}</p>
                    <p><strong>Languages:</strong></p>
                    <ul>
                        {lang.map(lang => <li key={lang}>{lang}</li>)}
                    </ul>
                    <img alt='' src={flag}></img>
                    <Weather coordinates={latlng} capital={capital}/>
                </div>
            )
        }))
    }
    if (countries.length > 10) return <div>Too many matches, specify another filter</div>
    return <CountryList countries={countries} setSearchCountry={setSearchCountry} />
}