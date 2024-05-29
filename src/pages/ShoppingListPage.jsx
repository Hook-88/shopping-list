import { FaAngleRight, FaAnglesRight, FaPlus } from "react-icons/fa6"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Main from "../components/Main"
import LinkButton from "../components/LinkButton"

export default function ShoppingListPage() {
    
    return (
        <>
            <Header>
                <h1 className="col-start-3 col-span-8 text-center my-2">Shopping List</h1>
                <button className="col-span-2 flex justify-end items-center pr-4">
                    <FaPlus />
                </button>
            </Header>

            <Main>
                <LinkButton to="recipes">Recipes</LinkButton>
            </Main>
        </>
    )
}