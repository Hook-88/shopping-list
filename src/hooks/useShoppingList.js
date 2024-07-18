import { collection, onSnapshot } from "firebase/firestore"
import { db } from "../firebase/config"
import { useState, useEffect } from "react"


export default function useShoppingList() {
    const [shoppingList, setShoppingList] = useState(null)
    const collectionRef = collection(db, "shoppingList")

    useEffect(() => {
        const unsub = onSnapshot(collectionRef, collectionSnapshot => {
            const arr = collectionSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
            setShoppingList(arr)
        })

        return unsub
    }, [])

    return shoppingList
}           