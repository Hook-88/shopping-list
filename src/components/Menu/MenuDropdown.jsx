import { useContext } from "react"
import { MenuContext } from "./Menu"
import { twMerge } from "tailwind-merge"


export default function MenuDropdown({children, className}) {
    const {open, setOpen} = useContext(MenuContext)
    const MenuDropdownClassName = twMerge(
        "absolute border border-white/30 rounded backdrop-blur bg-black/10 text-right",
        className
    )

    function handleClick() {
        setOpen(false)
    }
    
    return (
        open ?
        <ul 
            onClick={handleClick}
            className={MenuDropdownClassName}
        >
            {children}
        </ul> : null
    )
}