import MenuShoppingList from "./MenuShoppingList"

export default function ShoppingListPage() {
    
    return (
        <>
            <header className="bg-white/10 px-4 py-2 text-lg grid grid-cols-6">
                <h1 className="col-span-4 col-start-2 text-center">Shopping List</h1>
                <MenuShoppingList />
            </header>
            <main>

            </main>
        </>
    )
}