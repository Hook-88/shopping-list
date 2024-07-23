import { FaEye, FaEyeSlash } from "react-icons/fa6"
import { useStore } from "../../store/store"

export default function ListQuickFilterButton({disabledValue}) {
    const listFilters = useStore(state => state.listFilters)
    const clearFilters = useStore(state => state.clearFilters)
    const addFilter = useStore(state => state.addFilter)

    function toggleFilter() {
        if (listFilters.length > 0) {
            clearFilters()
            return
        }

        addFilter("!selected")
    }

    return (
        <button 
            onClick={toggleFilter}
            className="disabled:text-white/30"
            disabled={disabledValue}
        >
            <small className="flex items-center gap-1">
                {
                    listFilters.length > 0 ? (
                        <>
                            Show selected <FaEye />
                        </>
                    ) : (
                        <>
                            Hide selected <FaEyeSlash />
                        </>
                    ) 
                }
                
            </small>
        </button>
    )
}