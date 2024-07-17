import List from "../../components/List/List"
import ShoppingListItemDefault from "./ShoppingListItemDefault"
import ShoppingListItemChecked from "./ShoppingListItemChecked"
import ListQuickFilterButton from "./ListQuickFilterButton"


export default function ListShoppingList({itemsArr, toggleCheckFn, filter, toggleFilterFn}) {
    const filteredItemsArray = filter ? itemsArr.filter(item => item.checked === false) : itemsArr

    return (
        <List itemsArr={itemsArr}>
            <List.Header>
                <List.Progress />
                <ListQuickFilterButton 
                    onClick={toggleFilterFn}
                    itemsArr={itemsArr}
                    filter={filter}
                />
            </List.Header>
            <List.List>
            {
                filteredItemsArray.map(item => (
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