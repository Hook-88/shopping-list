
import List from "../../components/List/List"
import ShoppingListItemDefault from "./ShoppingListItemDefault"
import ShoppingListItemChecked from "./ShoppingListItemChecked"


export default function ListShoppingList({itemsArr, toggleCheckFn}) {
    
    return (
        <List itemsArr={itemsArr}>
            <List.Header>
                <List.Progress />
                <button>
                    <small>Hide selected</small>
                </button>
            </List.Header>
            <List.List>
            {
                itemsArr.map(item => (
                    <li 
                        key={item.id}
                        onClick={() => toggleCheckFn(item.id)}
                    >
                        {
                            item.checked ? 
                                <ShoppingListItemChecked item={item} /> :
                                <ShoppingListItemDefault item={item} />
                        }
                    </li>
                ))
            }
            </List.List>
        </List>
    )
}