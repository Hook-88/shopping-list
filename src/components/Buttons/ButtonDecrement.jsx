import { FaMinus } from "react-icons/fa6"

export default function ButtonDecrement({onClick}) {
    
    return (
        <button 
            className="p-1 border rounded border-white/30 bg-red-900"
            onClick={onClick}
        >
            <FaMinus />
        </button>
    )
}