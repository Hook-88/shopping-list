import { useRef, useState } from "react"

export default function LongPressButton({
    children, 
    onClick = () => {}, 
    onLongPress = () => {}, 
    delay = 500
}) {
    const [isLongPress, setIsLongPress] = useState(false)
    const timeRef = useRef(null)

    function startPress(event) {
        event.preventDefault()
        timeRef.current = setTimeout(() => {
            setIsLongPress(true)
            onLongPress()
        }, delay)
    }

    function endPress(event) {
        event.preventDefault()
        clearTimeout(timeRef.current)

        if (!isLongPress) {
            onClick()
            setIsLongPress(false)
        }
        
        setIsLongPress(false)
    }

    return (
        <div 
            className="cursor-pointer select-none"
            onMouseDown={startPress}
            onMouseUp={endPress}
            onMouseLeave={endPress}
            onTouchStart={startPress}
            onTouchEnd={endPress}
            onTouchMove={endPress}
        >
            {children}
        </div>
    )
    
}