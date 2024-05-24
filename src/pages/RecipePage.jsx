import { useParams, Link } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import PageTitle from "../components/PageTitle"
import { useContext, useEffect, useRef, useState } from "react"
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"
import { FaEdit } from "react-icons/fa"
import { FaRegCircle, FaCircleCheck, FaCartPlus, FaAngleLeft } from "react-icons/fa6"
import PageMain from "../components/PageMain"
import List from "../components/List"
import ListItem from "../components/ListItem"
import getFirstCharUpperCase from "../utility/getFirstCharUpperCase"
import PageButton from "../components/PageButton"
import PageLink from "../components/PageLink"
import DialogContent from "../components/DialogContent"
import { RecipeContext } from "../layout/RecipeLayout"
import getMergedArraysByProperty from "../utility/getMergedArraysByProperty"
import GoBackLink from "../components/GoBackLink"

export default function RecipePage() {
    const { recipe } = useContext(RecipeContext)
    const [recipeLocal, setRecipeLocal] = useState(null)
    const dialogRef = useRef()

    function closeDialog() {
        dialogRef.current.close()
    }

    function openDialog() {
        dialogRef.current.showModal()
    }
    
    useEffect(() => {
        if (recipe && recipe.ingredients) {
            const recipeObj = {
                ...recipe,
                ingredients: recipe.ingredients.map(ingredient => ({...ingredient, selected: false}))
            }
            
            setRecipeLocal(recipeObj)
        }

    }, [recipe])

    function toggleSelect(ingredientId) {
        setRecipeLocal(prevRecipe => {
            
            return {
                ...prevRecipe,
                ingredients: prevRecipe.ingredients.map(ingredient => ingredient.id === ingredientId ? {...ingredient, selected: !ingredient.selected}: ingredient)
            }
        })
    }

    function selectAll(selectValue) {
        setRecipeLocal(prevRecipe => {

            return {
                ...prevRecipe, 
                ingredients: prevRecipe.ingredients.map(ingredient => ({...ingredient, selected: selectValue}))
            }
        })
    }

    async function addSelectionToShoppingListDoc() {
        const docRef = doc(db, "shoppingList", "wA03LYangQz8a20aIKFV")
        const currentShoppingList = await getDoc(docRef)
        const selection = recipeLocal.ingredients.filter(ingredient => ingredient.selected === true)
        const newShoppingList = getMergedArraysByProperty(currentShoppingList.data().items, selection, "id")
        
        await updateDoc(docRef, {items: newShoppingList})
        
    }

    function handleAddIngredientsToShoppingList() {
        addSelectionToShoppingListDoc()
        selectAll(false)
    }
    
    return (
        recipeLocal?.name ?
        <>
            <PageHeader>
                <GoBackLink to="./..">Recipes</GoBackLink>
                <PageTitle>{recipeLocal.name.toUpperCase()}</PageTitle>
                <Link
                    className="flex items-center justify-end pr-4"
                    to="edit"
                >
                    <FaEdit />
                </Link>
            </PageHeader>

            <PageMain className="">
                <div className="grid">
                    <small className="ml-4 text-white/50">INGREDIENTS</small>
                    <List className="mb-4">
                        {
                            recipeLocal.ingredients.map((ingredient, index, arr) => {
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
                        className={!recipeLocal.ingredients.every(ingredient => ingredient.selected === true) ? "font-bold" : ""}
                        onClick={() => selectAll(!recipeLocal.ingredients.every(ingredient => ingredient.selected === true))}
                    >
                        {
                            !recipeLocal.ingredients.every(ingredient => ingredient.selected === true) ?
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

                    <PageButton 
                        onClick={openDialog}
                        className="disabled:text-white/30 mt-4"
                        disabled={recipeLocal.ingredients.every(ingredients => ingredients.selected === false)}
                    >
                        Add selection to shopping list
                        <FaCartPlus />
                    </PageButton>
                </div>

                <div>
                <small className="ml-4 text-white/50">NAVIGATION</small>
                    <PageLink
                        to="/"
                    >
                        Shopping List
                    </PageLink>
                </div>
                

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