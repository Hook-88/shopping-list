import useShoppingList from "../../hooks/useShoppingList"
import deleteShoppingListFirebaseDoc from "../../firebase/utility/deleteShoppingListFirebaseDoc"
import { ConfirmDeleteDialogEl } from "./ConfirmDeleteDialogEl"
import { createContext, useRef } from "react"
import { useStore } from "../../store/store"
import { AddItemToListEl } from "./AddItemToListEl"
import HeaderShoppingListPage from "./HeaderShoppingListPage"
import MainShoppingListPage from "./MainShoppingListPage"

const ShoppingListPageContext = createContext()

export default function ShoppingListPage() {
    const shoppingList = useShoppingList()
    const updateConfirmDialogObj = useStore(state => state.updateConfirmDialogObj)
    const dialogRef = useRef()
    const addItemToListRef = useRef()

    function openConfirmDialog() {
        updateConfirmDialogObj({
            question: "Delete selected items?",
            onConfirm: deleteSelectedItems
        })
        dialogRef.current.showModal()
    }

    function deleteSelectedItems() {
        shoppingList.filter(item => item.selected === true)
            .forEach(selectedItem => deleteShoppingListFirebaseDoc(selectedItem.id))
    }

    function closeConfirmDialog() {
        dialogRef.current.close()
    }
    
    function closeAddItemToListEl() {
        addItemToListRef.current.close()
    }
    
    function openAddItemEl() {
        addItemToListRef.current.showModal()
    }

    return (
        <ShoppingListPageContext.Provider value={{
            openConfirmDialog,
            shoppingList,
            openAddItemEl,
        }}>
            <HeaderShoppingListPage />
            <MainShoppingListPage />

            <ConfirmDeleteDialogEl 
                ref={dialogRef}
                onCancel={closeConfirmDialog}
            />

            <AddItemToListEl 
                onCancel={closeAddItemToListEl}
                ref={addItemToListRef}
            />

        </ShoppingListPageContext.Provider>
    )
}

export { ShoppingListPageContext }