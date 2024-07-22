import { useState, useEffect } from "react"
import { collection, onSnapshot } from "firebase/firestore"
import { db } from "../firebase/firebase"

export default function useShoppingList() {
    const [shoppingList, setShoppingList] = useState(null)

    useEffect(() => {
        const collectionref = collection(db, "shoppingList")
        const unsub = onSnapshot(collectionref, snapshot => {
            const arr = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))

            setShoppingList(arr)
        })

        return unsub
    }, [])
    
    return shoppingList
}