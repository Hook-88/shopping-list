import { FaPlus, FaCheck } from "react-icons/fa6"
import PageHeader from "../components/PageHeader"
import PageMain from "../components/PageMain"
import PageLink from "../components/PageLink"
import PageTitle from "../components/PageTitle"
import PageButton from "../components/PageButton"
import DialogContent from "../components/DialogContent"
import ShoppingListPageItemsList from "./ShoppingListPageItemsList"
import AddItemForm from "../components/AddItemForm"
import LongPressButton from "../components/LongPressButton"
import { useEffect, useRef, useState } from "react"
import { nanoid } from "nanoid"
import { doc, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"

export default function ShoppingListPage() {
    const [onAddItem, setOnAddItem] = useState(false)
    const [shoppingList, setShoppingList] = useState([])
    const dialogRef = useRef()

    function toggleOnAddItem() {
        setOnAddItem(prevOnAddItem => !prevOnAddItem)
    }

    function toggleChecked(itemId) {
        const newArray = shoppingList.map(item => item.id === itemId ? {...item, checked: !item.checked} : item)
        updateShoppingListInFirestore(newArray)
    }

    async function updateShoppingListInFirestore(newArray) {
        const docRef = doc(db, "shoppingList", "wA03LYangQz8a20aIKFV")
        await updateDoc(docRef, {items: newArray})
    }

    function openDialog() {
        dialogRef.current.showModal()
    }

    function closeDialog() {
        dialogRef.current.close()
    }

    function deleteCheckedItems() {
        // console.log(shoppingList)
        const newArray = shoppingList.filter(item => item.checked === false)
        // console.log(newArray)

        updateShoppingListInFirestore(newArray)
    }

    function checkAll(checkValue) {
        const newArray = shoppingList.map(item => ({...item, checked: checkValue}))
        
        updateShoppingListInFirestore(newArray)
    }

    function addItem(value) {
        const itemObj = {
            name: value.toLowerCase(),
            checked: false,
            id: nanoid()
        }
        const newArray = [...shoppingList, itemObj]

        updateShoppingListInFirestore(newArray)
    }

    useEffect(() => {
        const unsub = onSnapshot(doc(db, "shoppingList", "wA03LYangQz8a20aIKFV"), snapshot => {
            //sync with local state
            setShoppingList(snapshot.data().items)
        })

        return unsub
    }, [])
    
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

                {
                    shoppingList.length > 1 && !onAddItem &&
                        <PageButton onClick={() => checkAll(!shoppingList.every(item => item.checked === true))}>
                            {
                                shoppingList && !shoppingList.every(item => item.checked === true) ? 
                                    <>
                                        Check all
                                        <FaCheck />
                                    </> : "Uncheck all"
                            }
                        </PageButton>
                }

                

                <PageLink to="recipes">Recipes</PageLink>

                {
                    shoppingList.length > 0 && !onAddItem &&
                    <PageButton
                        className="justify-center text-red-700 disabled:text-red-700/50"
                        onClick={openDialog}
                        disabled={shoppingList.every(item => item.checked === false)}
                    >
                        Delete checked items
                    </PageButton>

                }

                

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
        </>
    )
}