import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export default async function deleteShoppingListFirebaseDoc(docId) {
    const docRef = doc(db, "shoppingList", docId)

    await deleteDoc(docRef)
}