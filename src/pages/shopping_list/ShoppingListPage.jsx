import MenuShoppingList from "./MenuShoppingList"
import ListShoppingList from "./ListShoppingList"
import useShoppingList from "../../hooks/useShoppingList"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../../firebase/firebase"
import deleteShoppingListFirebaseDoc from "../../firebase/utility/deleteShoppingListFirebaseDoc"
import Card from "../../components/Card"
import Button from "../../components/Button"
import {ConfirmDeleteDialogEl} from "./ConfirmDeleteDialogEl"
import { useRef } from "react"
import { useStore } from "../../store/store"

export default function ShoppingListPage() {
    const shoppingList = useShoppingList()
    const updateConfirmDialogObj = useStore(state => state.updateConfirmDialogObj)
    const dialogRef = useRef()

    function deleteSelectedItems() {
        shoppingList.filter(item => item.selected === true)
            .forEach(selectedItem => deleteShoppingListFirebaseDoc(selectedItem.id))
    }

    function openConfirmDialog() {
        updateConfirmDialogObj({
            question: "Delete selected items?",
            onConfirm: deleteSelectedItems
        })
        dialogRef.current.showModal()
    }

    function closeConfirmDialog() {
        dialogRef.current.close()
    }

    return (
        <>
            <header className="bg-white/10 px-4 py-2 text-lg grid grid-cols-6 mb-4">
                <h1 className="col-span-4 col-start-2 text-center">Shopping List</h1>
                <MenuShoppingList 
                    deleteItemsFn={openConfirmDialog}
                />
            </header>
            <main className="px-4">
                {
                    shoppingList ? (
                        <ListShoppingList 
                            itemsArr={shoppingList}
                        />
                    ) : "Loading..."
                }   
            </main>

            <ConfirmDeleteDialogEl 
                ref={dialogRef}
                onCancel={closeConfirmDialog}
            />
        </>
    )
}