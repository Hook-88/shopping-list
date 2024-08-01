import PageMain from "../../components/PageMain"
import Card from "../../components/Card"
import ListRecipes from "./ListRecipes"
import { createContext, useEffect, useRef, useState } from "react"
import useRecipes from "../../hooks/useRecipes"
import HeaderRecipesPage from "./HeaderRecipesPage"
import MainRecipesPage from "./MainRecipesPage"

const RecipesPageContext = createContext()

export default function RecipesPage() {
    const recipes = useRecipes()
    const dialogRef = useRef()

    function openDialog() {
        dialogRef.current.showModal()
    }
    
    return (
        <RecipesPageContext.Provider value={{
            openDialog,
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

                    <Card className="text-center text-white px-2 bg-[#1a1a1a] mt-4">
                        here the form
                    </Card>
                </div>
            </dialog>

        </RecipesPageContext.Provider>
    )
}

export { RecipesPageContext }