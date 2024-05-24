import { createContext, useState, useEffect } from "react"
import { Outlet, useParams } from "react-router-dom"
import { onSnapshot, doc, } from "firebase/firestore"
import { db } from "../firebase/firebase"

const RecipeContext = createContext()

export default function RecipeLayout() {
    const { id } = useParams()
    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        const unsub = onSnapshot(doc(db, "recipes", id), snapshot => {
            //sync up with local state
            const recipeObj = {
                ...snapshot.data(),
                // ingredients: snapshot.data().ingredients.map(ingredient => ({...ingredient, selected: false})),
                id: snapshot.id
            }

            setRecipe(recipeObj)
        })

        return unsub
    }, [])

    return (
        <RecipeContext.Provider value={{recipe}}>
            <Outlet />
        </RecipeContext.Provider>
    )
    
}

export { RecipeContext }