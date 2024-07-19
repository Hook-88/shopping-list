import List from "../../components/List/List"
import ShoppingListItemDefault from "./ShoppingListItemDefault"
import ShoppingListItemChecked from "./ShoppingListItemChecked"
import ListQuickFilterButton from "./ListQuickFilterButton"
import toggleSelectedFirebaseItem from "../../firebase/firebaseUtility/toggleSelectedFirebaseItem"
import { useStore } from "../../store/store"


export default function ListShoppingList({itemsArr}) {
    const filters = useStore(state => state.filters)
    const addFilter = useStore(state => state.addFilter)
    const clearFilters = useStore(state => state.clearFilters)
    const filteredItemsArray = filters.length > 0 ? itemsArr.filter(item => item.selected === false) : itemsArr
    const someItemsChecked = itemsArr?.some(item => item.selected === true)

    function toggleFilter() {

        if (filters.length > 0) {
            clearFilters()

            return
        }

        addFilter("notChecked")
    }


    return (
        itemsArr ? 
        <List itemsArr={itemsArr}>
            <List.Header>
                <List.Progress />
                <ListQuickFilterButton 
                    onClick={() => toggleFilter()}
                    disabled={!someItemsChecked}
                />
            </List.Header>
            <List.List>
            {
                filteredItemsArray.map(item => (
                    <li 
                        key={item.id}
                        onClick={() => toggleSelectedFirebaseItem(item.id)}
                    >
                        {
                            item.selected ? 
                                <ShoppingListItemChecked item={item} /> :
                                <ShoppingListItemDefault 
                                    item={item}
                                />
                        }
                    </li>
                ))
            }
            </List.List>
        </List> : null
    )
}