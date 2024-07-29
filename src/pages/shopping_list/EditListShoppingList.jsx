import List from "../../components/List/List"
import ListItemDefault from "./ListItemDefault"
import ListItemSelected from "./ListItemSelected"
import toggleSelectFirebaseItem from "../../firebase/utility/toggleSelectFirebaseItem"
import { useContext, useEffect, useState } from "react"
import { ShoppingListPageContext } from "./ShoppingListPage"
import { useStore } from "../../store/store"
import ListQuickFilterButton from "./ListQuickFilterButton"
import EditListItemDefault from "./EditListItemDefault"
import EditListItemSelected from "./EditListItemSelected"

export default function EditListShoppingList({itemsArr}) {
    const [editItemsArr, setEditItemsArr] = useState([])

    useEffect(() => {
        setEditItemsArr(itemsArr.map(item => ({...item, selected: false})))
    }, [])

    function selectItem(itemId) {
        setEditItemsArr(prevItems => 
            prevItems.map(item => item.id === itemId ? 
                {...item, selected: true} : 
                {...item, selected: false}
            )
        )
    }

    return (
        <List 
            listItemsArr={itemsArr}
        >
            <List.Header>
                <small className="text-center w-full">
                    Select item to edit
                </small>
            </List.Header>
            <List.Body>
                {
                    editItemsArr.map(item => (
                        <List.Item 
                            key={item.id}
                            className={`border rounded ${item.selected ? "border-white/40" : "border-transparent"}`}
                            onClick={() => selectItem(item.id)}
                        >
                            {
                                item.selected ? 
                                    <EditListItemSelected item={item} /> : 
                                    <EditListItemDefault  item={item}/>
                            }
                        </List.Item>
                    ))
                }
            </List.Body>
        </List>
    )
}