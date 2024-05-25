import PageHeader from "../components/PageHeader"
import PageTitle from "../components/PageTitle"
import { useLocation, useParams, useNavigate, Link } from "react-router-dom"
import getFirstCharUpperCase from "../utility/getFirstCharUpperCase"
import PageMain from "../components/PageMain"
import ChangeItemForm from "../components/changeItemForm"
import { useContext, useEffect, useState, useRef } from "react"
import { RecipeContext } from "../layout/RecipeLayout"
import Form from "../components/Form"
import TextInput from "../components/TextInput"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"
import PageButton from "../components/PageButton"
import { FaSave } from "react-icons/fa"
import { FaCheck, FaAngleLeft } from "react-icons/fa6"
import DialogContent from "../components/DialogContent"
import GoBackLink from "../components/GoBackLink"

export default function EditIngredientPage() {
    const { recipe } = useContext(RecipeContext)
    const { ingredientId } = useParams()
    const [localIngredient, setLocalIngredient] = useState(null)
    const [formData, setFormData] = useState(localIngredient ? localIngredient : "")
    const navigate = useNavigate()

    const dialogRef = useRef()

    function closeDialog() {
        dialogRef.current.close()
    }

    function openDialog() {
        dialogRef.current.showModal()
    }
    
    function handleFormChange(event) {
        setFormData(event.target.value)
    }

    function handleSubmit() {
        setIngredientName(localIngredient.id, formData)
    }

    async function setIngredientName(id, value) {
        const docRef = doc(db, "recipes", recipe.id)
        
        const newIngredientsArray = recipe.ingredients.map(ingredient => ingredient.id === id ? ({...ingredient, name: value.toLowerCase()}): ingredient)
        
        await updateDoc(docRef, {ingredients: newIngredientsArray})

    }

    async function deleteIngredient(id) {
        const docRef = doc(db, "recipes", recipe.id)
        
        const newIngredientsArray = recipe.ingredients.filter(ingredient => ingredient.id !== id)
        
        await updateDoc(docRef, {ingredients: newIngredientsArray})
    }

    function handleDeleteIngredient() {
        deleteIngredient(localIngredient.id)
        navigate("./../..")
    }

    useEffect(() => {
        if (recipe.ingredients) {
            setLocalIngredient(recipe.ingredients.filter(ingredient => ingredient.id === ingredientId)[0])
        }

    }, [recipe])

    useEffect(() => {
        if (localIngredient) {
            setFormData(localIngredient.name)
        }

    }, [localIngredient])

    return (
        <>
            <PageHeader>
                <GoBackLink to="./../.."
                >
                    Back
                </GoBackLink>
                <PageTitle>
                    EDIT INGREDIENT
                </PageTitle>
            </PageHeader>

            <PageMain>
                <div>
                    <small className="ml-4 text-white/50">RECIPE NAME</small>
                    <Form
                        className="grid gap-4"
                        onSubmit={handleSubmit}
                    >
                        <TextInput 
                            placeholder="ingredient"
                            value={formData.length > 0 ? getFirstCharUpperCase(formData) : formData}
                            onChange={handleFormChange}
                            required
                        />

                        {/* <PageButton
                            className="justify-center gap-2"
                        >
                            Save
                            <FaCheck className="text-green-700"/>
                        </PageButton> */}
                    </Form>
                </div>

                <PageButton
                    className="justify-center text-red-700 mt-4"
                    onClick={openDialog}
                >
                    Delete ingredient
                </PageButton>

            </PageMain>

            <dialog
                ref={dialogRef}
                onClick={closeDialog}
            >
                <DialogContent 
                    confrimQuestion="Are you sure you want to delete the ingredient?"
                    onConfirm={handleDeleteIngredient}
                />
            </dialog>
        </>
    )
}