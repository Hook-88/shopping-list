import { useParams, Link } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import PageTitle from "../components/PageTitle"
import { useEffect, useRef, useState } from "react"
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"
import { FaEdit } from "react-icons/fa"
import { FaRegCircle, FaCircleCheck, FaCartPlus } from "react-icons/fa6"
import PageMain from "../components/PageMain"
import List from "../components/List"
import ListItem from "../components/ListItem"
import getFirstCharUpperCase from "../utility/getFirstCharUpperCase"
import PageButton from "../components/PageButton"
import PageLink from "../components/PageLink"
import DialogContent from "../components/DialogContent"

export default function RecipePage() {
    const { id } = useParams()
    const [recipe, setRecipe] = useState({})
    const dialogRef = useRef()

    function closeDialog() {
        dialogRef.current.close()
    }

    function openDialog() {
        dialogRef.current.showModal()
    }

    function toggleSelect(ingredientId) {
        setRecipe(prevRecipe => {
            
            return {
                ...prevRecipe,
                ingredients: prevRecipe.ingredients.map(ingredient => ingredient.id === ingredientId ? {...ingredient, selected: !ingredient.selected}: ingredient)
            }
        })
    }

    function selectAll(selectValue) {
        setRecipe(prevRecipe => {

            return {
                ...prevRecipe, 
                ingredients: prevRecipe.ingredients.map(ingredient => ({...ingredient, selected: selectValue}))
            }
        })
    }

    async function addSelectionToShoppingListDoc() {
        const docRef = doc(db, "shoppingList", "wA03LYangQz8a20aIKFV")
        const currentShoppingList = await getDoc(docRef)
        const selection = recipe.ingredients.filter(ingredient => ingredient.selected === true)
        const newShoppingList = mergeArraysByProperty(currentShoppingList.data().items, selection, "id")
        
        // await updateDoc(docRef, {items: [...currentShoppingList.data().items, ...selection]})
        await updateDoc(docRef, {items: newShoppingList})
        
    }

    function mergeArraysByProperty(array1, array2, property) {
        // Concatenate arrays
        const combinedArray = array1.concat(array2)
        
        // Filter unique objects based on the property
        const mergedArray = combinedArray.filter((obj, index, self) =>
            index === self.findIndex((t) => (
                t[property] === obj[property]
            ))
        )
        
        return mergedArray
    }

    function handleAddIngredientsToShoppingList() {
        addSelectionToShoppingListDoc()
        selectAll(false)
    }

    useEffect(() => {
        const unsub = onSnapshot(doc(db, "recipes", id), snapshot => {
            //sync up with local state
            const recipeObj = {
                ...snapshot.data(),
                ingredients: snapshot.data().ingredients.map(ingredient => ({...ingredient, selected: false})),
                id: snapshot.id
            }

            setRecipe(recipeObj)
        })

        return unsub
    }, [])
    
    return (
        Object.keys(recipe).length > 0 ?
        <>
            <PageHeader>
                <PageTitle>{recipe.name.toUpperCase()}</PageTitle>
                <Link
                    className="flex items-center justify-end pr-4"
                    to="edit"
                >
                    <FaEdit />
                </Link>
            </PageHeader>

            <PageMain>
                <List>
                    {
                        recipe.ingredients.map((ingredient, index, arr) => {
                            let liCSS;

                            if( index !== (arr.length - 1) ) {
                                liCSS += " shadow-[rgba(100,100,100,0.5)_0px_1px_0px_0px]"
                            }

                            if (ingredient.selected) {
                                liCSS += " font-bold"
                            }

                            return (
                                <ListItem 
                                    key={ingredient.id} 
                                    className={liCSS}
                                    onClick={() => toggleSelect(ingredient.id)}
                                >
                                    {getFirstCharUpperCase(ingredient.name)}
                                    {
                                        ingredient.selected === true ? <FaCircleCheck className="text-blue-500"/> : <FaRegCircle className="text-blue-500"/>
                                    }
                                </ListItem>
                            )
                        })
                    }
                </List>
                <PageButton
                    className={!recipe.ingredients.every(ingredient => ingredient.selected === true) ? "font-bold" : ""}
                    onClick={() => selectAll(!recipe.ingredients.every(ingredient => ingredient.selected === true))}
                >
                    {
                        !recipe.ingredients.every(ingredient => ingredient.selected === true) ?
                        <>
                            Select all
                            <FaCircleCheck className="text-blue-500"/>
                        </> : 
                        <>
                            Deselect all
                            <FaRegCircle className="text-blue-500"/>
                        </>
                    }
                </PageButton>

                <PageButton onClick={openDialog}>
                    Add to shopping list
                    <FaCartPlus />
                </PageButton>

                <PageLink
                    to="/"
                >
                    Shopping List
                </PageLink>
            </PageMain>

            <dialog 
                ref={dialogRef}
                className="bg-blue-700"
                onClick={closeDialog}
            >
                <DialogContent 
                    confrimQuestion="Add selection to shopping list?"
                    onConfirm={handleAddIngredientsToShoppingList}
                    closeDialog={closeDialog}
                />
            </dialog>
        </> : null
    )
}