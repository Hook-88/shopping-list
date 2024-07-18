import { useContext } from "react"
import { MenuContext } from "./Menu"

export default function MenuDropdown({children}) {
    const { on, setOn } = useContext(MenuContext)

    function handleClick() {
        setOn(false)
    }
    
    return (
        on ?
        <ul 
            className="
                absolute bg-black/30 backdrop backdrop-blur-sm -z-0 top-8 right-2 border border-white/20 rounded py-1
                text-right
            "
            onClick={handleClick}
        >
            <div>
                {children}
            </div>
        </ul> : null
    )
}