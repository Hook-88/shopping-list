import { db } from "../config"
import { doc, getDoc, updateDoc } from "firebase/firestore"

export default async function modifyQuantityFirebaseItem(itemId, value) {
    const docRef = doc(db, "shoppingList", itemId)
    const docSnap = await getDoc(docRef)

    await updateDoc(docRef, { quantity: docSnap.data().quantity + value })

}
