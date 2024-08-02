import PageHeader from "../../components/PageHeader"
import MenuRecipes from "./MenuRecipes"
import LinkNavBack from "../../components/Link/LinkNavBack"

export default function HeaderRecipesPage() {
    
    return (
        <PageHeader>
            <LinkNavBack />

            <h1 className="col-span-4 col-start-2 text-center">Recipes</h1>

            <MenuRecipes />
        </PageHeader>
    )
}