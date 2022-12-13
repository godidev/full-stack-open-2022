import Country from "../components/Country"

export default function useCountries(countries){
    if (!countries.length || countries.length === 0) {
        return <p>Nothing to search</p>
    } else {
        if (countries.length === 1) {
           return countries.map(country => {
                const { area = '', capital = '', languages = '' } = country
                return (
                    <Country
                        key={capital + area}
                        area={area}
                        name={country.name.common}
                        capital={capital}
                        flag={country.flags.png}
                        languages={Object.values(languages).map(lang => lang)}
                    />
                )
            })
        } else if (countries.length > 10) {
            return <p>Too many matches, specify another filter</p>
        } else {
            return countries.map((country, index) => {
                const { population } = country
                return (
                    <p key={index + population}>
                        {country.name.common}
                    </p>
                )
            })
        }
    }
}