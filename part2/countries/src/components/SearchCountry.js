export default function SearchCountry({handleChange, value}){
    return (
        <div>Find countries <input onChange={handleChange} value={value} /></div>
    )
}