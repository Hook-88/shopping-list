import { Link } from "react-router-dom"
import { FaPlus, FaAngleRight } from "react-icons/fa6"
import PageHeader from "../components/PageHeader"
import PageMain from "../components/PageMain"
import PageLink from "../components/PageLink"

export default function ShoppingListPage() {
    
    return (
        <>
            <PageHeader>

                <h1
                    className="col-span-4 col-start-2 text-center font-bold"
                >
                    SHOPPING LIST
                </h1>

                <button
                    className="flex items-center justify-end pr-4"
                >
                <FaPlus />
                </button>

            </PageHeader>

            <PageMain>
                <PageLink to="recipes">Recipes</PageLink>
            </PageMain>
        </>
    )
}