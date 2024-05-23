import { FaPlus, FaCheck } from "react-icons/fa6"
import PageHeader from "../components/PageHeader"
import PageMain from "../components/PageMain"
import PageLink from "../components/PageLink"
import PageTitle from "../components/PageTitle"
import Form from "../components/Form"
import TextInput from "../components/TextInput"
import List from "../components/List"
import ListItem from "../components/ListItem"
import { useRef, useState } from "react"
import { ITEMS } from "../data"
import { IoClose } from "react-icons/io5"
import { nanoid } from "nanoid"

export default function ShoppingListPage() {
    const [onAddItem, setOnAddItem] = useState(false)
    const [shoppingList, setShoppingList] = useState(ITEMS)
    const [formData, setFormData] = useState("")
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

    function checkAll(checkValue) {
        setShoppingList(prevShoppinglist => prevShoppinglist.map(item => ({...item, checked: checkValue})))
    }

    function addItem(value) {
        const itemObj = {
            name: value.toLowerCase(),
            checked: false,
            id: nanoid()
        }

        setShoppingList(prevShoppinglist => [...prevShoppinglist, itemObj])

    }

    function handleFormChange(event) {
        setFormData(event.target.value)
        
    }

    function handleSubmit() {
        addItem(formData)
        setFormData("")

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
                    <List>
                        {
                            shoppingList.map((item, index, arr) => {
                                let liCSS;

                                if ( index !== (arr.length - 1) ) {
                                    liCSS += " shadow-[rgba(100,100,100,0.5)_0px_1px_0px_0px]"
                                }

                                if (item.checked) {
                                    liCSS += " text-white/40 line-through"
                                }

                                return (
                                    <ListItem
                                        key={item.id}
                                        className={liCSS}
                                        onClick={() => toggleChecked(item.id)}
                                    >
                                        {item.name}
                                        {item.checked && <FaCheck />}
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                }

                {   
                    onAddItem &&
                    <Form
                        className="grid"
                        onSubmit={handleSubmit}
                    >
                        <TextInput 
                            placeholder="Item"
                            value={formData}
                            onChange={handleFormChange}
                            autoFocus 
                        />
                    </Form>
                }

                <button
                    className="flex items-center justify-between py-2 px-4 bg-white/10 rounded-lg"
                    onClick={() => checkAll(!shoppingList.every(item => item.checked === true))}
                >
                    {
                        shoppingList && !shoppingList.every(item => item.checked === true) ? 
                            <>
                                Check all
                                <FaCheck />
                            </> : "Uncheck all"
                    }
                </button>

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

            {/* Todo cup code in components */}

        </>
    )
}