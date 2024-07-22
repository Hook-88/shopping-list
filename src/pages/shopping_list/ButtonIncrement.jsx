import { FaPlus } from "react-icons/fa6"

export default function ButtonIncrement({onClick}) {
    
    return (
        <button 
            className="p-1.5 border border-white/30 rounded bg-sky-900"
            onClick={onClick}
        >
            <FaPlus />  
        </button>
    )
}