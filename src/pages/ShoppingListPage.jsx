import { FaPlus, FaCheck } from "react-icons/fa6"

import SHOPPINGLISTDATA from "../data"
import { useState } from "react"
import Header from "../components/Header"
import List from "../components/List/Index"

export default function ShoppingListPage() {
    const [shoppingList, setShoppingList] = useState(SHOPPINGLISTDATA)
    
    return (
        <>
            <Header className="px-4">
                <h1 className="col-span-8 col-start-3">SHOPPING LIST</h1>
                <button className="flex items-center justify-end pr-4 col-span-2">
                    <FaPlus />
                </button>
            </Header>

            <main className="px-4">
                <List>
                    {
                        shoppingList.map((item, index, arr) => {
                            let liClassName = "flex items-center justify-between pr-4"

                            if (index !== (arr.length - 1)) {
                                liClassName += " shadow-[rgba(100,100,100,0.3)_0px_1px_0px_0px]"
                            }

                            if (item.checked) {
                                liClassName += " text-white/30 line-through"
                            }

                            
                            return (
                                <List.Item 
                                    key={item.id}
                                    className={liClassName}
                                >
                                    {item.name}
                                    {item.checked && <FaCheck className=""/>}
                                </List.Item>
                            )
                        })
                    }
                </List>
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