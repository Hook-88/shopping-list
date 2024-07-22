import { createContext, useEffect, useRef, useState } from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"
import MenuItem from "./MenuItem"

const MenuContext = createContext()

export default function Menu({children}) {
    const [open, setOpen] = useState(false)
    const menuRef = useRef()

    function toggleOpen() {
        setOpen(prevOpen => !prevOpen)
    }

    useEffect(() => {
        const handler = event => {
            
            if (!menuRef.current.contains(event.target)) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handler)

        return () => document.removeEventListener("mousedown", handler)
    }, [])
    
    return (
        <MenuContext.Provider value={{
            open,
            setOpen,
            toggleOpen
        }}>
            <div className="relative" ref={menuRef}>
                {children}
            </div>
        </MenuContext.Provider>
    )
}

Menu.Button = MenuButton
Menu.Dropdown = MenuDropdown
Menu.Item = MenuItem

export { MenuContext }