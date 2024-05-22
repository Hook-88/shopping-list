import { FaPlus, FaCheck } from "react-icons/fa6"
import PageHeader from "../components/PageHeader"
import PageMain from "../components/PageMain"
import PageLink from "../components/PageLink"
import PageTitle from "../components/PageTitle"
import Form from "../components/Form"
import { useRef, useState } from "react"
import { ITEMS } from "../data"
import { IoClose } from "react-icons/io5"

export default function ShoppingListPage() {
    const [onAddItem, setOnAddItem] = useState(false)
    const [shoppingList, setShoppingList] = useState(ITEMS)
    const dialogRef = useRef()

    function toggleOnAddItem() {
        setOnAddItem(prevOnAddItem => !prevOnAddItem)
    }

    function toggleChecked(itemId) {
        setShoppingList(prevShoppinglist => prevShoppinglist.map(item => item.id === itemId ? {...item, checked: !item.checked} : item))
    }

    function openDialog() {
        dialogRef.current.showModal()
    }

    function closeDialog() {
        dialogRef.current.close()
    }

    function deleteCheckedItems() {
        setShoppingList(prevShoppinglist => prevShoppinglist.filter(item => item.checked === false) )
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
                {
                    shoppingList.length > 0 &&
                    <ul
                        className="bg-white/10 rounded-lg pl-4"
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
                }

                {   
                    onAddItem &&
                    <Form
                        className="grid"
                    >
                        <input 
                            type="text" 
                            placeholder="Item"
                            className="py-2 px-4 bg-white/10 rounded-lg text-center"
                            autoFocus 
                        />
                    </Form>
                }

                <PageLink to="recipes">Recipes</PageLink>

                <button
                    className="flex items-center justify-center py-2 px-4 bg-white/10 rounded-lg text-red-700"
                    onClick={openDialog}
                >
                    Delete checked items
                </button>

            </PageMain>

            <dialog 
                ref={dialogRef}
                className="bg-blue-700"
                onClick={closeDialog}
            >
                <div
                    className="fixed inset-0 grid place-content-center backdrop-blur-sm bg-white/30"
                >
                    <div
                        className="bg-[#1a1a1a] text-white grid rounded-lg"
                    >
                        <p className="py-2 px-4 shadow-[rgba(100,100,100,0.5)_0px_1px_0px_0px]">
                            Greetings, one and all!
                        </p>
                        <button 
                            className="py-2 shadow-[rgba(100,100,100,0.5)_0px_1px_0px_0px] flex items-center justify-center gap-1"
                            onClick={deleteCheckedItems}
                        >
                            Yes
                            <FaCheck className="text-green-600"/>
                        </button>
                        <button 
                            className="py-2 flex items-center justify-center gap-1"
                            onClick={closeDialog}
                        >
                            No
                            <IoClose className="text-xl text-red-700"/>
                        </button>
                    </div>
                </div>
            </dialog>

        </>
    )
}