import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../../firebase/firebase"

export default async function toggleSelectFirebaseItem(docId) {
    const docRef = doc(db, "shoppingList", docId)
    const docSnap = await getDoc(docRef)

    await updateDoc(docRef, { selected: !docSnap.data().selected })
}