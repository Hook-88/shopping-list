import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../../firebase/firebase"

export default async function modifyQuantityFirebaseItem(docId, value) {
    const docRef = doc(db, "shoppingList", docId)
    const docSnap = await getDoc(docRef)

    await updateDoc(docRef, { quantity: docSnap.data().quantity + value })
}