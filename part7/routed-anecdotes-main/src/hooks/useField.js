import { useState } from "react";

export const useField = () => {
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return {
        value,
        handleChange
    }
}