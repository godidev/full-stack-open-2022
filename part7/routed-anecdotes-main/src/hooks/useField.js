import { useState } from "react";

export const useField = () => {
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const reset = () => {
        setValue('')
    }

    return {
        value,
        handleChange,
        reset
    }
}