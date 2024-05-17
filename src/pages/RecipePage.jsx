import { FaEdit } from "react-icons/fa"
import Header from "../components/Header"
import MainContent from "../components/MainContent"
import { useLocation } from "react-router-dom"
import List from "../components/List/Index"
import { useEffect, useRef, useState } from "react"
import getFirstCharCapped from "../utility/getFirstCharCapped"
import { FaRegCircle, FaRegCheckCircle  } from "react-icons/fa"
import { FaCircleCheck, FaCheck, FaPlus, FaCartPlus } from "react-icons/fa6"
import DialogCard from "../components/DialogCard"
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"

export default function RecipePage() {
    const { state } = useLocation()
    const newRecipeObj = {
        ...state,
        ingredients: state.ingredients.map(ingredient => {
            
            return {
                ...ingredient,
                checked: false
            }
        })
    }
    const [recipe, setRecipe] = useState(newRecipeObj)
    const dialogRef = useRef()

    async function addSelectionToShoppingList() {
        const shoppingList = await getDoc(doc(db, "shoppingList", "wA03LYangQz8a20aIKFV"))
        const selection = 
            recipe.ingredients
                .filter(ingredient => ingredient.checked === true)
                .map(ingredient => ({...ingredient, checked: false}))

        const newShoppingList = mergeArraysByProperty(shoppingList.data().items, selection, "name")

        await updateDoc(doc(db, "shoppingList", "wA03LYangQz8a20aIKFV"), {
            items: newShoppingList
        })

        checkIngredients(false)

    }

    function mergeArraysByProperty(array1, array2, property) {
        // Concatenate arrays
        const combinedArray = [...array1, ...array2]
        
        // Filter unique objects based on the property
        const mergedArray = combinedArray.filter((obj, index, self) =>
            index === self.findIndex((t) => (
                t[property] === obj[property]
            ))
        )
        
        return mergedArray
    }

    function openConfirm() {
        dialogRef.current.showModal()
    }

    function closeConfirm() {
        dialogRef.current.close()
    }

    function toggleCheckIngredient(ingredientId) {
        setRecipe(prevRecipe => {
            
            return {
                ...prevRecipe,
                ingredients: prevRecipe.ingredients.map(ingredient => {
                    if (ingredient.id === ingredientId) {
                        
                        return {
                            ...ingredient,
                            checked: !ingredient.checked
                        }
                    } else {

                        return ingredient
                    }
                })
            }
        })
    }

    function checkIngredients(checkValue) {
        setRecipe(prevRecipe => {
            
            return {
                ...prevRecipe,
                ingredients: prevRecipe.ingredients.map(ingredient => {
                    
                    return {
                        ...ingredient,
                        checked: checkValue
                    }
                })
            }
        })
        
    }
    
    return (
        <>
            <Header className="px-4">
                <h1 className="col-span-8 col-start-3">{recipe.name.toUpperCase()}</h1>
                <button 
                    className="flex items-center justify-end pr-3 col-span-2"
                    // onClick={toggleAddRecipeOn}
                >
                    <FaEdit />
                </button>
            </Header>

            <MainContent>
                <List>
                    {
                        recipe.ingredients.map((ingredient, index, arr) => {
                            let liClassName = "flex items-center justify-between pr-4 cursor-pointer"

                            if ( index !== (arr.length - 1) ) {
                                liClassName += " shadow-[rgba(100,100,100,0.3)_0px_1px_0px_0px]"
                            }

                            return (
                                <List.Item
                                    key={ingredient.id}
                                    className={liClassName}
                                    onClick={() => toggleCheckIngredient(ingredient.id)}
                                >
                                    {getFirstCharCapped(ingredient.name)}
                                    {ingredient.checked === false ? <FaRegCircle /> : <FaCircleCheck className="text-blue-500"/>}
                                </List.Item>
                            )
                        })
                    }
                </List>

                <button
                    className="bg-white/10 py-2 px-4 rounded-lg text-left flex items-center justify-between disabled:text-red-700/40"
                    // disabled={ shoppingList.every(item => item.checked === false) }
                    onClick={() => checkIngredients(!recipe.ingredients.every(ingredient => ingredient.checked === true))}
                    >
                    {
                        recipe.ingredients.every(item => item.checked === true) ?
                        <>
                                Uncheck all
                                <FaRegCircle />
                            </> : 
                            <>
                                Check All
                                <FaCircleCheck className="text-blue-500"/>
                            </>
                    }
                    
                </button>

                <button
                    className="bg-white/10 py-2 px-4 rounded-lg text-left flex items-center justify-between disabled:text-white/40"
                    disabled={ recipe.ingredients.every(item => item.checked === false) }
                    onClick={openConfirm}
                    >
                    Add to shopping list
                    <FaCartPlus />
                </button>

            </MainContent>

            <dialog
                ref={dialogRef}
                onClick={closeConfirm}
            >
                <DialogCard 
                    question="Add ingredients to shopping list?"
                    confirmAction={addSelectionToShoppingList}
                    closeConfirm={closeConfirm}
                />
            </dialog>
        </>
    )
}