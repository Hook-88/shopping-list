import { FaEllipsis, FaMinus, FaPlus } from "react-icons/fa6"
import PageHeader from "../../components/PageHeader/PageHeader"
import ListShoppingList from "./ListShoppingList"
import { useState } from "react"
import { ITEMS } from "../../data"


export default function ShoppingListPage() {
    const modifiedItems = ITEMS.map(item => ({...item, checked: false}))
    const [shoppingListItems, setShoppingListItems] = useState(modifiedItems)

    function toggleCheckItem(itemId) {
        setShoppingListItems(prevShoppingListItems => prevShoppingListItems.map(item => item.id === itemId ? {...item, checked : !item.checked} : item))
    }
    
    return (
        <>
            <PageHeader>
                <PageHeader.Title>Shopping list</PageHeader.Title>
                <button className="col-start-6 flex items-center justify-center">
                    <FaEllipsis />
                </button>
            </PageHeader>
            <main className="px-4 mt-12">
                <ListShoppingList 
                    itemsArr={shoppingListItems}
                    toggleCheckFn={toggleCheckItem}
                />
            </main>
        </>
    )
}