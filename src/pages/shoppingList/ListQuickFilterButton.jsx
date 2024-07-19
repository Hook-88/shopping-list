import { FaEye, FaEyeSlash } from "react-icons/fa6"
import { useStore } from "../../store/store"

export default function ListQuickFilterButton({onClick, disabled}) {
    const fiters = useStore(state => state.filters)

    return (
        <button 
            onClick={onClick}
            className="disabled:text-white/30"
            disabled={disabled}
        >
            <small className="flex items-center gap-1">
                {
                    fiters.length > 0 ? (
                        <>
                            Show selected
                            <FaEye />
                        </>
                    ) : (
                        <>
                            Hide selected
                            <FaEyeSlash />
                        </>
                    )
                }
                
            </small>
    
        </button>
)
}