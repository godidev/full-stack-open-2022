export default function Country({ flag = '', name = '', capital = '', languages = '', area = 0 }) {
    return (
        (<div>
            <h1>{name}</h1>
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
            <p><strong>Languages:</strong></p>
            <ul>
                {languages.map(lang => <li key={lang}>{lang}</li>)}
            </ul>
            <img alt='' src={flag}></img>
        </div>)
    )
}