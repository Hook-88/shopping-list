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
import { useEffect, useState } from "react"

export default function RecipePage() {
    const { recipeId } = useParams()
    const recipe = useRecipe(recipeId)
    const ingredients = useRecipeIngredients(recipeId)
    const [localIngredients, setLocalIngrdients] = useState(null)

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

    return ( 
        <>
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
                {
                    localIngredients ? 
                    <List listItemsArr={localIngredients}>
                        <List.Header>
                            <List.Progress />
                                <button className="text-xs">
                                    Select all
                                </button>
                        </List.Header>
                        <List.Body>
                            {
                                localIngredients.map(ingredient => {
                                    
                                    if (ingredient.selected) {
                                        
                                        return (
                                            <List.Item 
                                                className="border rounded border-white/50"
                                                key={ingredient.id}
                                                onClick={() => toggleSelectIngredient(ingredient.id)}
                                            >
                                                <Card className="flex items-center py-3">
                                                    {ingredient.name}
                                                    <FaCheck className="ml-auto"/>
                                                </Card>
                                            </List.Item>
                                        )
                                    }

                                    return (
                                        <List.Item 
                                            className="border rounded border-transparent"
                                            key={ingredient.id}
                                            onClick={() => toggleSelectIngredient(ingredient.id)}
                                        >
                                            <Card className="flex items-center py-3">
                                                {ingredient.name}
                                            </Card>
                                        </List.Item>
                                    )
                                })
                            }
                        </List.Body>
                    </List> : "Loading..."
                }
                

                <Card className="mt-8">
                    <Button className="w-full bg-green-900">
                        Add selection to shopping list
                    </Button>
                </Card>
            </PageMain>
        </>
    )
}