import { useContext } from "react"
import { MenuContext } from "./Menu"

export default function MenuButton({children}) {
    const { setOn } = useContext(MenuContext)

    function handleClick() {
        setOn(prevOn => !prevOn)
    }
    
    return (
        <button 
            onClick={handleClick}
            className="w-full flex items-center justify-end pr-5"
        >
            {children}
        </button>
    )
}