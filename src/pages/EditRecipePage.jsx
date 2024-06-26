import { Link, useNavigate } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import PageLink from "../components/PageLink"
import PageMain from "../components/PageMain"
import PageTitle from "../components/PageTitle"
import { FaAngleRight, FaCheck, FaPlus, FaAngleLeft } from "react-icons/fa6"
import getFirstCharUpperCase from "../utility/getFirstCharUpperCase"
import { useContext, useEffect, useRef, useState } from "react"
import List from "../components/List"
import ListItem from "../components/ListItem"
import { RecipeContext } from "../layout/RecipeLayout"
import DialogContent from "../components/DialogContent"
import AddItemForm from "../components/AddItemForm"
import PageButton from "../components/PageButton"
import GoBackLink from "../components/GoBackLink"
import { db } from "../firebase/firebase"

export default function EditRecipePage() {
    const { recipe, addIngredient, deleteRecipe } = useContext(RecipeContext)
    const [onAddItem, setOnAddItem] = useState(false)
    const dialogRef = useRef()
    const navigate = useNavigate()

    function toggleOnAddItem() {
        setOnAddItem(prevOnAddItem => !prevOnAddItem)
    }

    function openDialog() {
        dialogRef.current.showModal()
    }

    function closeDialog() {
        dialogRef.current.close()
    }

    function handleDelete() {
        deleteRecipe()
        navigate("./../..")
    }

    useEffect(() => {
        if (recipe.ingredients && recipe.ingredients.length === 0) {
            setOnAddItem(true)
        }

    }, [recipe])
    
    return (
        Object.keys(recipe).length > 0 ?
        <>
            <PageHeader>
                <GoBackLink to="./..">
                    {getFirstCharUpperCase(recipe.name)}
                </GoBackLink>
                <PageTitle>EDIT RECIPE</PageTitle>

                <button
                    className="flex items-center justify-end pr-4"
                    onClick={toggleOnAddItem}
                >
                    { onAddItem ? <FaCheck /> : <FaPlus /> }
                </button>
            </PageHeader>

            <PageMain>
                <div>
                <small className="ml-4 text-white/50">NAME RECIPE</small>
                <PageLink to="name">{getFirstCharUpperCase(recipe.name)}</PageLink>
                </div>

                <div>
                    <small className="ml-4 text-white/50">INGREDIENTS</small>
                    {
                        recipe.ingredients.length > 0 &&
                        <List className="mb-4">
                            {
                                recipe.ingredients.map((ingredient, index, arr) => {
                                    let liCSS;

                                    if ( index !== (arr.length - 1) ) {
                                        liCSS += " shadow-[rgba(100,100,100,0.5)_0px_1px_0px_0px]"
                                    }

                                    return (
                                        <Link
                                            to={`ingredients/${ingredient.id}`}
                                            key={ingredient.id}
                                            state={{ingredient}}
                                        >
                                            <ListItem
                                                className={liCSS}
                                            >
                                                {getFirstCharUpperCase(ingredient.name)}
                                                <FaAngleRight />
                                            </ListItem>
                                        </Link>
                                    )
                                })
                            }
                        </List>
                    }
                    
                    { onAddItem && <AddItemForm onSubmit={addIngredient} /> }

                </div>

                <PageButton
                    className="justify-center text-red-700 mt-4"
                    onClick={openDialog}
                >
                    Delete Recipe
                </PageButton>

                

            </PageMain>

            <dialog
                ref={dialogRef}
                onClick={closeDialog}
            >
                <DialogContent 
                    confrimQuestion="Are you sure you want to delete the Recipe?"
                    onConfirm={handleDelete}
                />
            </dialog>

        </> : null
    )
}

// TODO Add component voor optional ingredients