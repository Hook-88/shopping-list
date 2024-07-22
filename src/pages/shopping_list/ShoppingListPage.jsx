import MenuShoppingList from "./MenuShoppingList"
import ListShoppingList from "./ListShoppingList"
import useShoppingList from "../../hooks/useShoppingList"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../../firebase/firebase"

export default function ShoppingListPage() {
    const shoppingList = useShoppingList()

    async function toggleSelectFirebaseItem(docId) {
        const docRef = doc(db, "shoppingList", docId)
        const docSnap = await getDoc(docRef)

        await updateDoc(docRef, { selected: !docSnap.data().selected })
    }
    
    return (
        <>
            <header className="bg-white/10 px-4 py-2 text-lg grid grid-cols-6 mb-4">
                <h1 className="col-span-4 col-start-2 text-center">Shopping List</h1>
                <MenuShoppingList />
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
        </>
    )
}