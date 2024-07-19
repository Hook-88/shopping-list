import { useState, useEffect } from "react"
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore"
import { db } from "../firebase/config"

export default function useHistoryItems() {
    const [historyItems, setHistoryItems] = useState([])

    useEffect(() => {
        const collectionRef = collection(db, "history/shoppingList/items")
        const q = query(collectionRef, where("quantity", ">", 5), orderBy("quantity", "desc"))
        const unsub = onSnapshot(q, collectionSnapshot => {
            const arr = collectionSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            
            setHistoryItems(arr)
        })

        return unsub
    }, [])

    return historyItems
}