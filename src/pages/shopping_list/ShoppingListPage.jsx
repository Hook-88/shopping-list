import MenuShoppingList from "./MenuShoppingList"
import ListShoppingList from "./ListShoppingList"
import useShoppingList from "../../hooks/useShoppingList"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../../firebase/firebase"
import deleteShoppingListFirebaseDoc from "../../firebase/utility/deleteShoppingListFirebaseDoc"
import Card from "../../components/Card"
import Button from "../../components/Button"
import ConfirmDeleteDialog from "./ConfirmDeleteModal"

export default function ShoppingListPage() {
    const shoppingList = useShoppingList()

    function deleteSelectedItems() {
        shoppingList.filter(item => item.selected === true)
            .forEach(selectedItem => deleteShoppingListFirebaseDoc(selectedItem.id))
    }
    
    return (
        <>
            <header className="bg-white/10 px-4 py-2 text-lg grid grid-cols-6 mb-4">
                <h1 className="col-span-4 col-start-2 text-center">Shopping List</h1>
                <MenuShoppingList 
                    deleteItemsFn={deleteSelectedItems}
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

            <ConfirmDeleteDialog />

            {/* <dialog open>
                <div className="bg-black/10 backdrop-blur fixed inset-0 flex flex-col justify-center px-4">
                    <Card className="text-center text-white px-2 pt-4">
                        <p className="mb-4">
                            Are you sure?
                        </p>
                        <div className="flex gap-2">
                            <Button
                                className="bg-green-900 flex-grow"
                            >
                                Yes
                            </Button>

                            <Button
                                className="bg-red-900"
                            >
                                No
                            </Button>
                        </div>
                    </Card>
                </div>
            </dialog> */}
        </>
    )
}