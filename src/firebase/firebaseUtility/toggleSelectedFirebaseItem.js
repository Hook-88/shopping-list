import getFirebaseDoc from "./getFirebaseDoc"
import { db } from "../config"
import { getDoc, updateDoc } from "firebase/firestore"

export default function toggleSelectedFirebaseItem(itemId) {
    const firestoreDatabase = getFirebaseDoc(db)
    const shoppingListDatabase = firestoreDatabase("shoppingList")
    const shoppingItemRef = shoppingListDatabase(itemId)

    shoppingItemRef(docRef => {
        toggleSelectItem(docRef)
    })

}

async function toggleSelectItem(docRef) {
    const docSnap = await getDoc(docRef)

    await updateDoc(docRef, { selected: !docSnap.data().selected })
}