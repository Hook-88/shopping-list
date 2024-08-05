import PageHeader from "../../components/PageHeader"
import { Link, useParams } from "react-router-dom"
import { FaAngleLeft, FaCheck } from "react-icons/fa6"
import LinkNavBack from "../../components/Link/LinkNavBack"
import PageMain from "../../components/PageMain"
import List from "../../components/List/List"
import Card from "../../components/Card"
import Button from "../../components/Button"
import getStringFirstCharCap from "../../utility/getStringFirstCharCap"
import useRecipe from "../../hooks/useRecipe"
import useRecipeIngredients from "../../hooks/useRecipeIngredients"
import { createContext, useEffect, useState } from "react"
import ListIngredients from "./ListIngredients"
import addFirebaseDocToShoppingList from "../../firebase/utility/addFirebaseDocToShoppingList"

const RecipePageContext = createContext()

export default function RecipePage() {
    const { recipeId } = useParams()
    const recipe = useRecipe(recipeId)
    const ingredients = useRecipeIngredients(recipeId)
    const [localIngredients, setLocalIngrdients] = useState(null)
    const noneSelected = localIngredients?.every(ingredient => ingredient.selected === false)

    useEffect(() => {
        setLocalIngrdients(
            ingredients?.map(ingredient => ({ ...ingredient, selected: false}))
        )

    }, [ingredients])

    function toggleSelectIngredient(ingredientId) {
        setLocalIngrdients(
            prevLocalIngredients => prevLocalIngredients
                .map(ingredient => ingredient.id === ingredientId ? 
                    {...ingredient, selected:!ingredient.selected} 
                    : ingredient 
                )
        )
    }

    function selectAllIngredients(value) {
        setLocalIngrdients(
            prevLocalIngredients => prevLocalIngredients
                .map(ingredient => ({ ...ingredient, selected: value}))
        )
    }

    function addIngredientsToShoppingist() {
        const selectedIngredients = localIngredients.filter(ingredient => ingredient.selected === true)
        
        selectedIngredients.forEach(ingredient => {
            const ingredientObj = {
                name: ingredient.name,
                quantity: 1,
                selected: false
            }

            addFirebaseDocToShoppingList(ingredientObj)
        })
    }

    return ( 
        <RecipePageContext.Provider value={
            {
                localIngredients,
                selectAllIngredients,
                toggleSelectIngredient
            }
        }>
            <PageHeader>
                <LinkNavBack />
                <h1 className="col-span-4 col-start-2 text-center">
                    {
                        recipe?.name ?
                            getStringFirstCharCap(recipe.name) :
                            "Loading..."
                    }
                </h1>
            </PageHeader>
            <PageMain>
                <ListIngredients />

                {
                    localIngredients &&
                    <Card className="mt-8">
                        <Button
                            onClick={addIngredientsToShoppingist}
                            disabled={noneSelected} 
                            className="
                                w-full bg-green-900
                              disabled:bg-green-900/50 
                              disabled:text-white/50
                            "
                        >
                            Add selection to shopping list
                        </Button>
                    </Card>
                }
                
                
            </PageMain>
        </RecipePageContext.Provider>
    )
}

export { RecipePageContext }