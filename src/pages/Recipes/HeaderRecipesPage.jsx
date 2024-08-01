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
import MenuRecipes from "./MenuRecipes"

export default function HeaderRecipesPage() {
    
    return (
        <PageHeader>
            <Link 
                className="flex items-center text-blue-700"
                to="./.."
            >
                <FaAngleLeft />
                Back
            </Link>
            <h1 className="col-span-4 col-start-2 text-center">Recipes</h1>
            <MenuRecipes />
        </PageHeader>
    )
}