import { useState, useEffect } from "react"
import { collection, onSnapshot, query, where, orderBy } from "firebase/firestore"
import { db } from "../firebase/firebase"

export default function useShoppingListHistory() {
    const [shoppingListHistory, setShoppingListHistory] = useState(null)

    useEffect(() => {
        const collectionref = collection(db, "history/shoppingList/items")
        const q = query(collectionref, where("quantity", ">", 1), orderBy("quantity", "desc"))
        const unsub = onSnapshot(q, snapshot => {
            const arr = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))

            setShoppingListHistory(arr)
        })

        return unsub
    }, [])
    
    return shoppingListHistory
}