import { FaPlus } from "react-icons/fa6"

export default function ButtonIncrement({onClick}) {
    
    return (
        <button 
            className="p-1 border rounded border-white/30 bg-sky-900"
            onClick={onClick}
        >
            <FaPlus />
        </button>
    )
}