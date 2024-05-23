import { FaPlus, FaCheck } from "react-icons/fa6"
import PageHeader from "../components/PageHeader"
import PageMain from "../components/PageMain"
import PageLink from "../components/PageLink"
import PageTitle from "../components/PageTitle"
import PageButton from "../components/PageButton"
import DialogContent from "../components/DialogContent"
import ShoppingListPageItemsList from "./ShoppingListPageItemsList"
import AddItemForm from "../components/AddItemForm"
import { useRef, useState } from "react"
import { ITEMS } from "../data"
import { nanoid } from "nanoid"

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
                    <ShoppingListPageItemsList 
                        toggleChecked={toggleChecked}
                        shoppingList={shoppingList}
                    />
                }

                { onAddItem && <AddItemForm onSubmit={addItem}/>  }

                <PageButton onClick={() => checkAll(!shoppingList.every(item => item.checked === true))}>
                    {
                        shoppingList && !shoppingList.every(item => item.checked === true) ? 
                            <>
                                Check all
                                <FaCheck />
                            </> : "Uncheck all"
                    }
                </PageButton>

                <PageLink to="recipes">Recipes</PageLink>

                <PageButton
                    className="justify-center text-red-700 disabled:text-red-700/50"
                    onClick={openDialog}
                    disabled={shoppingList.every(item => item.checked === false)}
                >
                    Delete checked items
                </PageButton>

            </PageMain>

            <dialog 
                ref={dialogRef}
                className="bg-blue-700"
                onClick={closeDialog}
            >
                <DialogContent 
                    confrimQuestion="Are you sure want to delete the checked items?"
                    onConfirm={deleteCheckedItems}
                    closeDialog={closeDialog}
                />
            </dialog>

            {/* Todo cup code in components */}

        </>
    )
}