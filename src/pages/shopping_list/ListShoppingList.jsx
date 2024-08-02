import List from "../../components/List/List"
import ListItemDefault from "./ListItemDefault"
import ListItemSelected from "./ListItemSelected"
import toggleSelectFirebaseItem from "../../firebase/utility/toggleSelectFirebaseItem"
import { useContext } from "react"
import { ShoppingListPageContext } from "./ShoppingListPage"
import { useStore } from "../../store/store"
import ListQuickFilterButton from "./ListQuickFilterButton"

export default function ListShoppingList({itemsArr}) {
    const { openConfirmDialog } = useContext(ShoppingListPageContext)
    const listFilters = useStore(state => state.listFilters)
    const listItemsArray = listFilters.length > 0 ? itemsArr.filter(item => item.selected === false) : itemsArr

    return (
        <List 
            listItemsArr={itemsArr}
        >
            <List.Header>
                <List.Progress onClick={openConfirmDialog} allSelectedText="completed"/>
                <ListQuickFilterButton 
                    disabledValue={!itemsArr.some(item => item.selected === true)}
                />
            </List.Header>
            <List.Body>
                {
                    listItemsArray.map(item => (
                        <List.Item 
                            key={item.id}
                            onClick={() => toggleSelectFirebaseItem(item.id)}
                            className="border rounded border-transparent"
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