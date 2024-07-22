import { FaMinus } from "react-icons/fa6"

export default function ButtonDecrement({onClick}) {
    
    return (
        <button 
            className="p-1.5 border border-white/30 rounded bg-red-900"
            onClick={onClick}
        >
            <FaMinus />
        </button>
    )
}