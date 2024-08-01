import { doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase"

export default async function updateFirebaseShoppingListDoc(docId, value) {
    const docRef = doc(db, "shoppingList", docId)
    
    await updateDoc(docRef, {name: value})
}