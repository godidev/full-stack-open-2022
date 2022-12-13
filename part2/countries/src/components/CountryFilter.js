import useCountries from "../services/useCountries"

export default function CountryFilter({ countries }) {
    const renderCountries = useCountries(countries)   
    return (
        <>
            {renderCountries}
        </>
    )
}