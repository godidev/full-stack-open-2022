import axios from "axios"

export default function getWeather(coordinates) {
    const API_KEY = process.env.REACT_APP_API_KEY
    return (
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&appid=${API_KEY}`)
            .then(response => {
                return(response.data)
            }
    ))
}