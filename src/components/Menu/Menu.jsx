import { createContext, useState } from "react"
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
    
    return (
        <MenuContext.Provider value={{on, setOn}}>
            <div className={MenuClassName}>
                {children}
            </div>
        </MenuContext.Provider>
    )
}

Menu.Button = MenuButton
Menu.Dropdown = MenuDropdown
Menu.Item = MenuItem

export { MenuContext }