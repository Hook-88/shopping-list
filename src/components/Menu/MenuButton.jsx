import { useContext } from "react"
import { MenuContext } from "./Menu"
import { twMerge } from "tailwind-merge"


export default function MenuButton({children, className}) {
    const {toggleOpen} = useContext(MenuContext)
    const MenuButtonClassName = twMerge(
        "flex items-center justify-center w-full h-full",
        className 
    )
    
    return (
        <button
            className={MenuButtonClassName}
            onClick={toggleOpen}
        >
            {children}
        </button>
    )
}