import List from "../../components/List/List"
import ShoppingListItemDefault from "./ShoppingListItemDefault"
import ShoppingListItemChecked from "./ShoppingListItemChecked"
import { FaEye, FaEyeSlash } from "react-icons/fa6"


export default function ListQuickFilterButton({itemsArr, filter, onClick}) {
    const someItemsChecked = itemsArr.some(item => item.selected === true)

    return (
        <button 
            onClick={onClick}
            className="disabled:text-white/30"
            disabled={!someItemsChecked}
        >
            <small className="flex items-center gap-1">
                {
                    filter ? (
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