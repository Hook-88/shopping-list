import { FaAngleRight, FaAnglesRight, FaPlus } from "react-icons/fa6"
import { Link } from "react-router-dom"

export default function ShoppingListPage() {
    
    return (
        <>
            <header className="font-bold px-4 grid grid-cols-12 text-lg fixed inset-x-0 top-0">
                <h1 className="col-start-3 col-span-8 text-center my-2">Shopping List</h1>
                <button className="col-span-2 flex justify-end items-center pr-4">
                    <FaPlus />
                </button>
            </header>

            <main className="mt-12 px-4 grid grid-cols-12">
                <Link className="col-span-12 bg-white/15 py-2 rounded flex justify-between px-4 items-center">
                    Recipes
                    <FaAngleRight />
                </Link>
            </main>
        </>
    )
}