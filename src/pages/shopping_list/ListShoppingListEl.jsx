import PageMain from "../../components/PageMain"
import Card from "../../components/Card"
import ListShoppingList from "./ListShoppingList"
import Button from "../../components/Button"
import { useContext } from "react"
import { ShoppingListPageContext } from "./ShoppingListPage"
import EditListShoppingList from "./EditListShoppingList"

export default function ListShoppingListEl() {
    const { shoppingList, editItemsView } = useContext(ShoppingListPageContext)
    
    return (
        editItemsView ? 
            <EditListShoppingList 
                itemsArr={shoppingList}
            /> :
            <ListShoppingList 
                itemsArr={shoppingList}
            /> 
    )
}