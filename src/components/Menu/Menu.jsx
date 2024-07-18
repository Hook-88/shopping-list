import { createContext, useEffect, useRef, useState } from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"
import MenuItem from "./MenuItem"
import { twMerge } from "tailwind-merge"

const MenuContext = createContext()

export default function Menu({children, className}) {
    const [on, setOn] = useState(false)
    const MenuClassName = twMerge(
        "relative",
        className
    )
    const menuRef = useRef()

    useEffect(() => {

        function handler(event) {
            if (!menuRef.current.contains(event.target)) {
                setOn(false)
            }
            
        }
        
        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }

    }, [])
    
    return (
        <MenuContext.Provider value={{on, setOn}}>
            <div 
                className={MenuClassName}
                ref={menuRef}
            >
                {children}
            </div>
        </MenuContext.Provider>
    )
}

Menu.Button = MenuButton
Menu.Dropdown = MenuDropdown
Menu.Item = MenuItem

export { MenuContext }