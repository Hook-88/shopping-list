import List from "../../components/List/List"
import ShoppingListItemDefault from "./ShoppingListItemDefault"
import ShoppingListItemChecked from "./ShoppingListItemChecked"
import ListQuickFilterButton from "./ListQuickFilterButton"
import getFirebaseDoc from "../../firebase/firebaseUtility/getFirebaseDoc"
import { db } from "../../firebase/config"
import { getDoc, updateDoc } from "firebase/firestore"
import toggleSelectedFirebaseItem from "../../firebase/firebaseUtility/toggleSelectedFirebaseItem"
import useFilter from "../../hooks/useFilter"


export default function ListShoppingList({itemsArr, toggleFilterFn}) {
    const [filter, addFilter, removeFilter] = useFilter([])
    const filteredItemsArray = filter.length > 0 ? itemsArr.filter(item => item.selected === false) : itemsArr

    function toggleFilter() {
        filter.length > 0 ? removeFilter("notChecked") : addFilter("notChecked")
    }

    return (
        itemsArr ? 
        <List itemsArr={itemsArr}>
            <List.Header>
                <List.Progress />
                <ListQuickFilterButton 
                    onClick={() => toggleFilter()}
                    itemsArr={itemsArr}
                    filter={filter}
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