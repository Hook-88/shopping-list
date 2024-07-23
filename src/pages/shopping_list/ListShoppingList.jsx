import List from "../../components/List/List"
import ListItemDefault from "./ListItemDefault"
import ListItemSelected from "./ListItemSelected"
import toggleSelectFirebaseItem from "../../firebase/utility/toggleSelectFirebaseItem"
import { useContext } from "react"
import { ShoppingListPageContext } from "./ShoppingListPage"
import { FaEye, FaEyeSlash } from "react-icons/fa6"
import { useStore } from "../../store/store"

export default function ListShoppingList({itemsArr}) {
    const { openConfirmDialog } = useContext(ShoppingListPageContext)
    const listFilters = useStore(state => state.listFilters)
    const clearFilters = useStore(state => state.clearFilters)
    const addFilter = useStore(state => state.addFilter)
    const listItemsArray = listFilters.length > 0 ? itemsArr.filter(item => item.selected === false) : itemsArr

    function toggleFilter() {
        if (listFilters.length > 0) {
            clearFilters()
            return
        }

        addFilter("!selected")
    }

    return (
        <List 
            listItemsArr={itemsArr}
        >
            <List.Header>
                <List.Progress onClick={openConfirmDialog}/>
                <button 
                    onClick={toggleFilter}
                    className="disabled:text-white/30"
                    disabled={!itemsArr.some(item => item.selected === true)}
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
            </List.Header>
            <List.Body>
                {
                    listItemsArray.map(item => (
                        <List.Item 
                            key={item.id}
                            onClick={() => toggleSelectFirebaseItem(item.id)}
                        >
                            {
                                item.selected ? 
                                    <ListItemSelected item={item} /> : 
                                    <ListItemDefault  item={item}/>
                            }
                        </List.Item>
                    ))
                }
            </List.Body>
        </List>
    )
}