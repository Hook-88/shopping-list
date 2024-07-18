import { FaEye, FaEyeSlash } from "react-icons/fa6"

export default function ListQuickFilterButton({filter, onClick, disabled}) {

    return (
        <button 
            onClick={onClick}
            className="disabled:text-white/30"
            disabled={disabled}
        >
            <small className="flex items-center gap-1">
                {
                    filter?.length > 0 ? (
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