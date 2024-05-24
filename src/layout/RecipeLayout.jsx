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

    async function setIngredientName(ingredientId, value) {
        // const newIngredientsArray = recipe.ingredients.map(ingredient => ingredient.id === ingredientId ? ({...ingredient, name: value}) : ingredient)
        const newIngredientsArray = getMutatedIngredientsArray(ingredientId, "ingredients", value.toLowerCase())
        console.log(newIngredientsArray)
        await updateDoc(docRef, {ingredients: newIngredientsArray})
    }

    function getMutatedIngredientsArray(ingredientId, ingredientProp, propValue) {
        return recipe.ingredients.map(ingredient => ingredient.id === ingredientId ? ({...ingredient, [ingredientProp]: propValue}) : ingredient)
    }

    useEffect(() => {
        const unsub = onSnapshot(docRef, snapshot => {
            //sync up with local state
            const recipeObj = {
                ...snapshot.data(),
                id: snapshot.id
            }

            setRecipe(recipeObj)
        })

        return unsub
    }, [])

    return (
        <RecipeContext.Provider value={{recipe, addIngredient, setRecipeName, setIngredientName}}>
            <Outlet />
        </RecipeContext.Provider>
    )
    
}

export { RecipeContext }