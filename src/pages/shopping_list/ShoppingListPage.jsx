import MenuShoppingList from "./MenuShoppingList"
import ListShoppingList from "./ListShoppingList"
import useShoppingList from "../../hooks/useShoppingList"
import deleteShoppingListFirebaseDoc from "../../firebase/utility/deleteShoppingListFirebaseDoc"
import {ConfirmDeleteDialogEl} from "./ConfirmDeleteDialogEl"
import { createContext, useRef } from "react"
import { useStore } from "../../store/store"
import { AddItemToListEl } from "./AddItemToListEl"
import Card from "../../components/Card"
import Button from "../../components/Button"
import useFilter from "../../hooks/useFilter"

const ShoppingListPageContext = createContext()

export default function ShoppingListPage() {
    const shoppingList = useShoppingList()
    const updateConfirmDialogObj = useStore(state => state.updateConfirmDialogObj)
    const dialogRef = useRef()
    const addItemToListRef = useRef()

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

    function openAddItemEl() {
        addItemToListRef.current.showModal()
    }

    function closeAddItemToListEl() {
        addItemToListRef.current.close()
    }

    return (
        <ShoppingListPageContext.Provider value={{
            openConfirmDialog,
            shoppingList,
            openAddItemEl,
        }}>
            <header className="bg-white/10 px-4 py-2 text-lg grid grid-cols-6 mb-4">
                <h1 className="col-span-4 col-start-2 text-center">Shopping List</h1>
                <MenuShoppingList />
            </header>
            <main className="px-4">
                {
                    shoppingList && shoppingList.length > 0 ? (
                        <ListShoppingList 
                            itemsArr={shoppingList}
                        />
                    ) : (
                        <Card className="py-3">
                            <Button 
                                className="w-full bg-green-900"
                                onClick={openAddItemEl}
                            >
                                Start adding items
                            </Button>
                        </Card>  
                    )
                }
            </main>

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