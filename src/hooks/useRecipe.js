import { doc, onSnapshot } from "firebase/firestore"
import { db } from "../firebase/firebase"
import { useEffect, useState } from "react"

export default function useRecipe(recipeId) {
    const [recipe, setRecipe] = useState(null)
    
    useEffect(() => {
        const docRef = doc(db, "recipes", recipeId)
        const unsub = onSnapshot(docRef, docSnap => {
            const obj = {
                ...docSnap.data(),
                id: recipeId
            }

            setRecipe(obj)
        })

        return unsub
    }, [])
    
    return recipe
}