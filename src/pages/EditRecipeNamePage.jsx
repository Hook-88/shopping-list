import { FaSave } from "react-icons/fa"
import Form from "../components/Form"
import PageButton from "../components/PageButton"
import PageHeader from "../components/PageHeader"
import PageMain from "../components/PageMain"
import PageTitle from "../components/PageTitle"
import TextInput from "../components/TextInput"
import ChangeItemForm from "../components/changeItemForm"
import { RecipeContext } from "../layout/RecipeLayout"
import { useContext } from "react"
import getFirstCharUpperCase from "../utility/getFirstCharUpperCase"
import { Link } from "react-router-dom"
import { FaAngleLeft } from "react-icons/fa6"
import GoBackLink from "../components/GoBackLink"

export default function EditRecipeNamePage() {
    const { setRecipeName, recipe } = useContext(RecipeContext)
    
    return (
        <>
            <PageHeader>
                <PageTitle>EDIT {recipe.name.toUpperCase()}</PageTitle>
            </PageHeader>

            <PageMain>
                <ChangeItemForm 
                    initialValue={getFirstCharUpperCase(recipe.name)}
                    onSubmit={setRecipeName}
                />

                <GoBackLink to="./..">Go back</GoBackLink>

            </PageMain>
        </>
    )
}