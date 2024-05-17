import { FaPlus } from "react-icons/fa6"

import SHOPPINGLISTDATA from "../data"
import { useState } from "react"

export default function ShoppingListPage() {
    const [shoppingList, setShoppingList] = useState(SHOPPINGLISTDATA)
    
    return (
        <>
            <header className="text-center py-2 text-lg font-bold grid grid-cols-12">
                <h1 className="col-span-8 col-start-3">SHOPPING LIST</h1>
                <button className="flex items-center justify-center col-span-2">
                    <FaPlus />
                </button>
            </header>

            <main className="grid grid-cols-12 px-4">
                <ul className="bg-white/10 rounded-lg col-span-12 pl-4">
                    {
                        shoppingList.map((item, index, arr) => {
                            let liClassName = "py-2"

                            if (index !== (arr.length - 1)) {
                                liClassName += " shadow-[rgba(100,100,100,0.3)_0px_1px_0px_0px]"
                            }

                            
                            return (
                                <li 
                                    key={item.id}
                                    className={liClassName}
                                >
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

{/* <List>
            {
                shoppingList.items.map((item, index, arr) => {
                    let classNameGen;

                    if (index !== arr.length - 1) {
                        classNameGen += " shadow-[rgba(100,100,100,0.5)_0px_1px_0px_0px]"
                    }

                    if (item.checked) {
                        classNameGen += " flex items-center justify-between text-white/20 line-through italic"
                    }

                    return (
                        <ListItem
                            key={item.id}
                            className={classNameGen}
                            onClick={() => togglePropInFirebase(AddItemObj, item.id, "checked")}
                        >
                            {getCapString(item.name)}
                            {item.checked ? <FaCheck /> : null}
                        </ListItem>
                    )

                })
            }
        </List> */}