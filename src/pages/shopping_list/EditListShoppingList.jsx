import List from "../../components/List/List"
import ListItemDefault from "./ListItemDefault"
import ListItemSelected from "./ListItemSelected"
import toggleSelectFirebaseItem from "../../firebase/utility/toggleSelectFirebaseItem"
import { useContext } from "react"
import { ShoppingListPageContext } from "./ShoppingListPage"
import { useStore } from "../../store/store"
import ListQuickFilterButton from "./ListQuickFilterButton"
import EditListItemDefault from "./EditListItemDefault"
import EditListItemSelected from "./EditListItemSelected"

export default function EditListShoppingList({itemsArr}) {
    const { openConfirmDialog } = useContext(ShoppingListPageContext)
    const listFilters = useStore(state => state.listFilters)
    const listItemsArray = listFilters.length > 0 ? itemsArr.filter(item => item.selected === false) : itemsArr

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
                    listItemsArray.map(item => (
                        <List.Item 
                            key={item.id}
                            // onClick={() => toggleSelectFirebaseItem(item.id)}
                            // className={"border rounded" + item.selected ? "border-white" : "border-transparent"}
                            className={`border rounded ${item.selected ? "border-white/40" : "border-transparent"}`}
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