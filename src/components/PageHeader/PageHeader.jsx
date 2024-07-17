import { FaEllipsis } from "react-icons/fa6"
import PageHeaderTitle from "./PageHeaderTitle"


export default function PageHeader({children}) {
    
    return (
        <header className="bg-black/10 backdrop backdrop-blur-sm px-4 py-2 grid grid-cols-6 fixed inset-x-0 top-0">
            {children}
        </header>
    )
}

PageHeader.Title = PageHeaderTitle