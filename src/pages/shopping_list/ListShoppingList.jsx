import List from "../../components/List/List"
import ListItemDefault from "./ListItemDefault"
import ListItemSelected from "./ListItemSelected"
import toggleSelectFirebaseItem from "../../firebase/utility/toggleSelectFirebaseItem"
import { useContext } from "react"
import { ShoppingListPageContext } from "./ShoppingListPage"

export default function ListShoppingList({itemsArr}) {
    const {openConfirmDialog} = useContext(ShoppingListPageContext)

    return (
        <List 
            listItemsArr={itemsArr}
        >
            <List.Header>
                <List.Progress onClick={openConfirmDialog}/>
            </List.Header>
            <List.Body>
                {
                    itemsArr.map(item => (
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