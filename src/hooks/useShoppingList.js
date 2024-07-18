import { collection, onSnapshot } from "firebase/firestore"
import { db } from "../firebase/config"
import { useState, useEffect } from "react"
import getFirebaseCollection from "../firebase/firebaseUtility/getFirebaseCollection"


export default function useShoppingList() {
    const [shoppingList, setShoppingList] = useState(null)
    const getData = getFirebaseCollection(db)
    const getShoppingListRef = getData("shoppingList")

    useEffect(() => {
        const unsub = getShoppingListRef(collectionRef => {
            onSnapshot(collectionRef, snapshot => {
                const arr = snapshot.docs.map(doc => ({ ...doc.data(), id:doc.id }))
                setShoppingList(arr)
            })
        })

        return unsub
    }, [])

    return shoppingList
}           