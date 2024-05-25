import { FaSave } from "react-icons/fa"
import Form from "../components/Form"
import PageButton from "../components/PageButton"
import PageHeader from "../components/PageHeader"
import PageMain from "../components/PageMain"
import PageTitle from "../components/PageTitle"
import TextInput from "../components/TextInput"
import ChangeItemForm from "../components/ChangeItemForm"
import { RecipeContext } from "../layout/RecipeLayout"
import { useContext } from "react"
import getFirstCharUpperCase from "../utility/getFirstCharUpperCase"
import { Link } from "react-router-dom"
import { FaAngleLeft } from "react-icons/fa6"
import GoBackLink from "../components/GoBackLink"

export default function EditRecipeNamePage() {
    const { setRecipeName, setRecipeIcon, recipe } = useContext(RecipeContext)
    
    return (
        <>
            <PageHeader>
                <GoBackLink 
                    to="./.."
                    className="col-span-2"
                >
                    Back
                </GoBackLink>
                <PageTitle className="col-span-2 col-start-3">
                    EDIT {recipe.name.toUpperCase()}
                </PageTitle>
            </PageHeader>

            <PageMain>
                <div>
                <small className="ml-4 text-white/50">RECIPE NAME</small>
                <ChangeItemForm 
                    initialValue={getFirstCharUpperCase(recipe.name)}
                    onSubmit={setRecipeName}
                />
                </div>

            </PageMain>
        </>
    )
}