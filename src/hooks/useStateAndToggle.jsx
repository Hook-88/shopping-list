import { useState } from "react"

export default function useStateAndToggle(initialValue) {
    const [on, setOn] = useState(initialValue)

    function toggleOn() {
        setOn(prevOn => !prevOn)
    }

    return [on, setOn, toggleOn]
}