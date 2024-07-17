import { FaEllipsis } from "react-icons/fa6"
import PageHeader from "../../components/PageHeader/PageHeader"
import { ITEMS } from "../../data"


export default function ListHeader({children}) {
    
    return (
        <header className="flex items-center justify-between">
            {children}
        </header>
    )
}