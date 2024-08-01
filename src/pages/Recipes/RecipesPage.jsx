import PageMain from "../../components/PageMain"
import Card from "../../components/Card"
import ListRecipes from "./ListRecipes"
import { createContext, useEffect, useRef, useState } from "react"
import useRecipes from "../../hooks/useRecipes"
import HeaderRecipesPage from "./HeaderRecipesPage"
import MainRecipesPage from "./MainRecipesPage"
import Button from "../../components/Button"
import AddRecipeEl from "./AddRecipeEl"

const RecipesPageContext = createContext()

export default function RecipesPage() {
    const recipes = useRecipes()
    const dialogRef = useRef()

    function openDialog() {
        dialogRef.current.showModal()
    }

    function closeDialog() {
        dialogRef.current.close()
    }
    
    return (
        <RecipesPageContext.Provider value={{
            openDialog,
            closeDialog,
            recipes
        }}>
            <HeaderRecipesPage />
            <MainRecipesPage />

            <dialog ref={dialogRef}>
                <div 
                    className="
                        bg-black/10 backdrop-blur fixed inset-0 
                        flex flex-col justify-end px-4 pb-4
                    "
                >
                    <AddRecipeEl />    
                </div>
            </dialog>

        </RecipesPageContext.Provider>
    )
}

export { RecipesPageContext }