import { FaPlus } from "react-icons/fa6"

import shoppingListData from "../data"
import { useState } from "react"

export default function ShoppingListPage() {
    const [shoppingList, setShoppingList] = useState(shoppingListData)
    
    return (
        <>
            <header className="text-center py-2 text-lg font-bold grid grid-cols-12">
                <h1 className="col-span-8 col-start-3">SHOPPING LIST</h1>
                <button className="flex items-center justify-center col-span-2">
                    <FaPlus />
                </button>
            </header>

            <main className="grid grid-cols-12 px-4">
                <ul className="bg-white/10 rounded-lg col-span-12">
                    {
                        shoppingList.map(item => {
                            
                            return (
                                <li key={item.id}>
                                    {item.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </main>
        </>
    )
}