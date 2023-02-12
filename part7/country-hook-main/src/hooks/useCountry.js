import { useEffect, useState } from 'react'
import axios from 'axios'

export const useCountry = (name) => {
    const [country, setCountry] = useState(null)

    useEffect(() => {
        if (name) {
            axios
            .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
            .then(res => setCountry(res.data[0]))
            .catch(error => setCountry(null))
        }
    }, [name])
    
    console.log({country})
    return country
}