import { useContext } from "react"
import { MenuContext } from "./Menu"

export default function MenuDropdown({children}) {
    const { on } = useContext(MenuContext)
    
    return (
        on ?
        <ul className="absolute top-6 right-5 border bg-[rgba(0,0,0,0.4)] backdrop backdrop-blur -z-10 p-8">
            {children}
        </ul> : null
    )
}