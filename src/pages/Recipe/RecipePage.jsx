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
import { createContext, useEffect, useRef, useState } from "react"
import ListIngredients from "./ListIngredients"
import addFirebaseDocToShoppingList from "../../firebase/utility/addFirebaseDocToShoppingList"
import { DialogEl } from "../../components/Dialog"
import Menu from "../../components/Menu/Menu"
import { FaEllipsis } from "react-icons/fa6"

const RecipePageContext = createContext()

export default function RecipePage() {
    const { recipeId } = useParams()
    const recipe = useRecipe(recipeId)
    const ingredients = useRecipeIngredients(recipeId)
    const [localIngredients, setLocalIngrdients] = useState(null)
    const noneSelected = localIngredients?.every(ingredient => ingredient.selected === false)
    const dialogRef = useRef()
    const [dialogContent, setDialogContent] = useState(null)
    

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

    function handleClickAddSelection() {
        openDialog()
    }

    function handleAddIngredientsToShoppingList() {
        addIngredientsToShoppingist()
        selectAllIngredients(false)
        setDialogContent(<ConfirmNavigateToShoppingList />)
    }

    function openDialog() {
        setDialogContent(<ConfirmAddSelectionModal />)
        dialogRef.current.showModal()
    }

    function closeDialog() {
        dialogRef.current.close()
    }

    function ConfirmAddSelectionModal() {
        
        return (
            <Card className="text-center text-white px-2 bg-[#1a1a1a] mt-4">
                <p className="mb-4">
                    Add selection to shopping list?
                </p>

                <div className="flex gap-2">
                    <Button
                        className="bg-green-900 flex-grow"
                        onClick={handleAddIngredientsToShoppingList}
                    >
                        Yes
                    </Button>

                    <Button
                        className="bg-red-900"
                        onClick={closeDialog}
                    >
                        No
                    </Button>
                </div>
            </Card>
        )
    }

    function ConfirmNavigateToShoppingList() {

        return (
            <Card className="text-center text-white px-2 bg-[#1a1a1a] mt-4">
                <p className="mb-4">
                    Go to shopping list?
                </p>

                <div className="flex gap-2">
                    <Link 
                        to="/"
                        className="flex-grow"
                    >
                        <Button
                            className="bg-green-900 w-full"
                        >
                            Yes
                        </Button>
                    </Link>

                    <Button
                        className="bg-red-900"
                        onClick={closeDialog}
                    >
                        No
                    </Button>
                </div>
            </Card>
        )
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
                <Menu>
                    <Menu.Button className="justify-end">
                        <FaEllipsis />
                    </Menu.Button>
                    <Menu.Dropdown className="right-0 top-10">
                        <Menu.Item>
                            <Link
                                to="edit" 
                                className="px-4 py-2 text-nowrap"
                            >
                                Edit recipe
                            </Link>
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </PageHeader>
            <PageMain>
                <ListIngredients />

                {
                    localIngredients &&
                    <Card className="mt-8">
                        <Button
                            onClick={handleClickAddSelection}
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

            <DialogEl ref={dialogRef}>
                {dialogContent}
            </DialogEl>


        </RecipePageContext.Provider>
    )
}

export { RecipePageContext }