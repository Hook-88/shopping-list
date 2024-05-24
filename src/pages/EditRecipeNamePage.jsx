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

                <Link
                    to="./.."
                    className="flex items-center justify-between py-2 px-4 bg-white/10 rounded-lg"
                >
                    <FaAngleLeft />
                    Go back
                </Link>

            </PageMain>
        </>
    )
}