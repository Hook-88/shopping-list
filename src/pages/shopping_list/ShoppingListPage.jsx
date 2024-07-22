import MenuShoppingList from "./MenuShoppingList"
import ListShoppingList from "./ListShoppingList"
import useShoppingList from "../../hooks/useShoppingList"

export default function ShoppingListPage() {
    const shoppingList = useShoppingList()
    
    return (
        <>
            <header className="bg-white/10 px-4 py-2 text-lg grid grid-cols-6 mb-4">
                <h1 className="col-span-4 col-start-2 text-center">Shopping List</h1>
                <MenuShoppingList />
            </header>
            <main className="px-4">
                {
                    shoppingList ? (
                        <ListShoppingList 
                            itemsArr={shoppingList}
                        />
                    ) : "Loading..."
                }   
            </main>
        </>
    )
}