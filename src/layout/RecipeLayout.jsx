import { createContext, useState, useEffect } from "react"
import { Outlet, useParams } from "react-router-dom"
import { onSnapshot, doc, updateDoc, } from "firebase/firestore"
import { db } from "../firebase/firebase"
import { nanoid } from "nanoid"

const RecipeContext = createContext()

export default function RecipeLayout() {
    const { id } = useParams()
    const [recipe, setRecipe] = useState({})
    const docRef = doc(db, "recipes", id)

    async function addIngredient(value) {
        const ingredientObj = {
            id: nanoid(),
            name: value.trim().toLowerCase()
        }
        const newIngredientsArray = [...recipe.ingredients, ingredientObj]

        await updateDoc(docRef, {ingredients: newIngredientsArray})
    }

    async function setRecipeName(value) {
        await updateDoc(docRef, {name: value.trim().toLowerCase()})
    }

    useEffect(() => {
        const unsub = onSnapshot(docRef, snapshot => {
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
        <RecipeContext.Provider value={{recipe, addIngredient, setRecipeName}}>
            <Outlet />
        </RecipeContext.Provider>
    )
    
}

export { RecipeContext }