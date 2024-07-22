import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase"

export default async function addFirebaseDocToShoppingList(newItemObj) {
    const collectionRef = collection(db, "shoppingList")

    await addDoc(collectionRef, newItemObj)
}