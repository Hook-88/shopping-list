import PageMain from "../../components/PageMain"
import Card from "../../components/Card"
import ListRecipes from "./ListRecipes"
import { createContext, useContext, useEffect, useRef, useState } from "react"
import useRecipes from "../../hooks/useRecipes"
import HeaderRecipesPage from "./HeaderRecipesPage"
import { RecipesPageContext } from "./RecipesPage"

export default function MainRecipesPage() {
    const { recipes } = useContext(RecipesPageContext)
    
    return (
        <PageMain>
            {
                recipes ? (
                    <ListRecipes 
                        listItemArr={recipes}
                    />
                ) : "Loading..."
            }
            
        </PageMain>
    )
}

export { RecipesPageContext }