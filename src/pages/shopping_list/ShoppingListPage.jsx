import MenuShoppingList from "./MenuShoppingList"
import { ITEMS } from "../../data"
import List from "../../components/List/List"

export default function ShoppingListPage() {
    
    return (
        <>
            <header className="bg-white/10 px-4 py-2 text-lg grid grid-cols-6 mb-4">
                <h1 className="col-span-4 col-start-2 text-center">Shopping List</h1>
                <MenuShoppingList />
            </header>
            <main className="px-4">
                <List listItemsArr={ITEMS}>
                    <List.Header>
                        <List.Progress />
                    </List.Header>
                    <List.Body>
                        {
                            ITEMS.map(item => (
                                <List.Item key={item.id}>
                                    {item.name}
                                </List.Item>
                            ))
                        }
                    </List.Body>
                </List>
            </main>
        </>
    )
}