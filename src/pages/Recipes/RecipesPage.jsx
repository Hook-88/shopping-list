import { Link } from "react-router-dom"
import PageHeader from "../../components/PageHeader"
import { FaAngleLeft, FaAngleRight, FaEllipsis } from "react-icons/fa6"
import PageMain from "../../components/PageMain"
import List from "../../components/List/List"
import Card from "../../components/Card"
import ListRecipes from "./ListRecipes"
import Menu from "../../components/Menu/Menu"
import { useEffect, useState } from "react"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { db } from "../../firebase/firebase"

export default function RecipesPage() {
    const [recipes, setRecipes] = useState(null)

    useEffect(() => {
        const collectionRef = collection(db, "recipes")
        const q = query(collectionRef, orderBy("name"))
        const unsub = onSnapshot(q, collectionSnapshot => {
            const arr = collectionSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))

            setRecipes(arr)
        })

        return unsub
    }, [])

    
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
                        <Menu.Item className="px-4 py-2 text-nowrap">
                            Add Recipe
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
        </>
    )
}