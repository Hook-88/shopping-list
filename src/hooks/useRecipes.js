import { useState, useEffect } from "react"
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from "../firebase/firebase"

export default function useRecipes() {
    const [recipes, setRecipes] = useState(null)

    useEffect(() => {
        const collectionRef = collection(db, "recipes")
        const q = query(collectionRef, orderBy("name"))
        const unsub = onSnapshot(q, collectionSnapshot => {
            const arr = collectionSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))

            setRecipes(arr)
        })

        return unsub
    }, [])

    return recipes
}