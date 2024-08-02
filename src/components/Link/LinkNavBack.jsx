import { Link } from "react-router-dom"
import { FaAngleLeft } from "react-icons/fa6"

export default function LinkNavBack({to = "./.."}) {
    
    return (
        <Link 
            className="flex items-center text-blue-700"
            to={to}
        >
            <FaAngleLeft />
            Back
        </Link>
    )
}