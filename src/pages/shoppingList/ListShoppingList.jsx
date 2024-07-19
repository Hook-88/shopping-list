import List from "../../components/List/List"
import ShoppingListItemDefault from "./ShoppingListItemDefault"
import ShoppingListItemChecked from "./ShoppingListItemChecked"
import ListQuickFilterButton from "./ListQuickFilterButton"
import toggleSelectedFirebaseItem from "../../firebase/firebaseUtility/toggleSelectedFirebaseItem"
import { useStore } from "../../store/store"
import deleteFirebaseDoc from "../../firebase/firebaseUtility/deleteFirebaseDoc"

export default function ListShoppingList({itemsArr}) {
    const filters = useStore(state => state.filters)
    const addFilter = useStore(state => state.addFilter)
    const clearFilters = useStore(state => state.clearFilters)
    const filteredItemsArray = filters.length > 0 ? itemsArr.filter(item => item.selected === false) : itemsArr
    const someItemsChecked = itemsArr?.some(item => item.selected === true)
    const updateModalObj = useStore(state => state.updateModalObj)

    function toggleFilter() {

        if (filters.length > 0) {
            clearFilters()

            return
        }

        addFilter("notChecked")
    }

    function handleClick() {
        updateModalObj({
            question: "Delete checked items",
            onConfirm: handleOnConfirm
        })
    }

    function handleOnConfirm() {
        deleteSelectedItems()
    }

    function deleteSelectedItems() {
        itemsArr.filter(item => item.selected === true)
            .forEach(filteredItem => deleteFirebaseDoc("shoppingList", filteredItem.id))
    }


    return (
        itemsArr ? 
        <List itemsArr={itemsArr}>
            <List.Header>
                <List.Progress 
                    onClick={handleClick}
                />
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