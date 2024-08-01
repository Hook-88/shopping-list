import { Link } from "react-router-dom"
import PageHeader from "../../components/PageHeader"
import { FaAngleLeft, FaAngleRight, FaEllipsis } from "react-icons/fa6"
import PageMain from "../../components/PageMain"
import List from "../../components/List/List"
import Card from "../../components/Card"
import ListRecipes from "./ListRecipes"
import Menu from "../../components/Menu/Menu"
import { useEffect, useRef, useState } from "react"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { db } from "../../firebase/firebase"
import useRecipes from "../../hooks/useRecipes"

export default function RecipesPage() {
    const recipes = useRecipes()
    const dialogRef = useRef()

    function openDialog() {
        dialogRef.current.showModal()
    }
    
    return (
        <>
            <PageHeader>
                <Link 
                    className="flex items-center text-blue-700"
                    to="./.."
                >
                    <FaAngleLeft />
                    Back
                </Link>
                <h1 className="col-span-4 col-start-2 text-center">Recipes</h1>
                <Menu>
                    <Menu.Button className="justify-end">
                        <FaEllipsis />
                    </Menu.Button>
                    <Menu.Dropdown className="right-0 top-10">
                        <Menu.Item>
                            <button 
                                className="px-4 py-2 text-nowrap"
                                onClick={openDialog}
                            >
                                Add recipe
                            </button>
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </PageHeader>
            <PageMain>
                {
                    recipes ? (
                        <ListRecipes 
                            listItemArr={recipes}
                        />
                    ) : "Loading..."
                }
                
            </PageMain>

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

        </>
    )
}