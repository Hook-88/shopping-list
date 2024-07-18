import getFirebaseDoc from "./getFirebaseDoc"
import { db } from "../config"
import { getDoc, updateDoc } from "firebase/firestore"

export default function modifyQuantityFirebaseItem(itemId) {
    const firestoreDatabase = getFirebaseDoc(db)
    const shoppingListDatabase = firestoreDatabase("shoppingList")
    const shoppingItemRef = shoppingListDatabase(itemId)

    return function(value) {
        shoppingItemRef(docRef => {
            modifyQuantityFireStoreItem(docRef, value)
        })
        
    }

}

async function modifyQuantityFireStoreItem(docRef, value) {
    const docSnap = await getDoc(docRef)

    await updateDoc(docRef, { quantity: docSnap.data().quantity + value })
}