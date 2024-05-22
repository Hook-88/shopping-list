import { FaPlus, FaCheck } from "react-icons/fa6"
import PageHeader from "../components/PageHeader"
import PageMain from "../components/PageMain"
import PageLink from "../components/PageLink"
import PageTitle from "../components/PageTitle"
import Form from "../components/Form"
import { useState } from "react"
import { ITEMS } from "../data"

export default function ShoppingListPage() {
    const [onAddItem, setOnAddItem] = useState(false)
    const [shoppingList, setShoppingList] = useState(ITEMS)

    function toggleOnAddItem() {
        setOnAddItem(prevOnAddItem => !prevOnAddItem)
    }

    function toggleChecked(itemId) {
        setShoppingList(prevShoppinglist => prevShoppinglist.map(item => item.id === itemId ? {...item, checked: !item.checked} : item))
    }
    
    return (
        <>
            <PageHeader>
                <PageTitle>SHOPPING LIST</PageTitle>

                <button
                    className="flex items-center justify-end pr-4"
                    onClick={toggleOnAddItem}
                >
                    { onAddItem ? <FaCheck /> : <FaPlus /> }
                </button>

            </PageHeader>

            <PageMain>
                <PageLink to="recipes">Recipes</PageLink>

                <ul
                    className="bg-white/15 rounded-lg pl-4"
                >
                    {
                        shoppingList.map((item, index, arr) => {
                            let liCSS = "py-2 pr-4 flex items-center justify-between cursor-pointer"

                            if ( index !== (arr.length - 1) ) {
                                liCSS += " shadow-[rgba(100,100,100,0.5)_0px_1px_0px_0px]"
                            }

                            if (item.checked) {
                                liCSS += " text-white/40 line-through"
                            }

                            return (
                                <li
                                    key={item.id}
                                    className={liCSS}
                                    onClick={() => toggleChecked(item.id)}
                                >
                                    {item.name}
                                    {item.checked && <FaCheck />}
                                </li>
                            )
                        })
                    }
                </ul>

                {   
                    onAddItem &&
                    <Form
                        className="grid"
                    >
                        <input 
                            type="text" 
                            placeholder="Item"
                            className="py-2 px-4 bg-white/15 rounded-lg text-center"
                            autoFocus 
                        />
                    </Form>
                }

            </PageMain>
        </>
    )
}