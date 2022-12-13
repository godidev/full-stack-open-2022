import { useState, useEffect } from "react";
import getWeather from "../services/getWeather"

export default function Weather({ coordinates, capital }) {
    const [isLoading, setLoading] = useState(true);
    const [weather, setWeather] = useState([])
    useEffect(() => {
        getWeather(coordinates).then(res => {
            setWeather(res)
            setLoading(false);
        })
    }, [coordinates])

    if (isLoading) {
        return <p>Loading</p>
    }

    return (
        <div className="weather">
            <h2>Weather in {capital}</h2>
            <p>Temperature {weather.main.temp / 10} Celsius</p>
            <p>Wind {weather.wind.speed}</p>
        </div>
    )
}