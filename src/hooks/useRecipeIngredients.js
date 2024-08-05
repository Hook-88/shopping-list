import { collection, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase/firebase"

export default function useRecipeIngredients(recipeId) {
    const [ingredients, setIngredients] = useState(null)

    useEffect(() => {
        const collectionRef = collection(db, `recipes/${recipeId}/ingredients`)
        const unsub = onSnapshot(collectionRef, collectionSnap => {
            const arr = collectionSnap.docs.map(doc => ({ ...doc.data(), id: doc.id}))

            setIngredients(arr)
        })

        return unsub
    }, [])

    return ingredients
}