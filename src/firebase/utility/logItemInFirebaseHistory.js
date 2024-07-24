import { collection, query, where, getDocs, doc, getDoc, updateDoc, addDoc } from "firebase/firestore"
import { db } from "../firebase"

export default  async function logItemInFirebaseHistory(itemName) {
    const collectionRef = collection(db, "history/shoppingList/items")
    const q = query(collectionRef, where("name", "==", itemName))
    const queryDocs = await getDocs(q)

    if (queryDocs.docs.length > 0) {
        // increment quantity in firebase history
        queryDocs.forEach(doc => {
            incrementHistoryItemQuantity(doc.id)
        })

        return
    }

    await addDoc(collectionRef, {name: itemName, quantity: 1})
    
}

async function incrementHistoryItemQuantity(docId) {
    const docRef = doc(db, "history/shoppingList/items", docId)
    const docSnap = await getDoc(docRef)

    await updateDoc(docRef, { quantity: docSnap.data().quantity + 1 })
}
