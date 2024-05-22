import { Link } from "react-router-dom"
import { FaPlus, FaAngleRight } from "react-icons/fa6"

export default function ShoppingListPage() {
    
    return (
        <>
            <header
                className="text-lg px-2 py-2 grid grid-cols-6 fixed inset-x-0 top-0"
            >
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

            </header>

            <main
                className="mt-12 px-2"
            >
                <Link
                    className="flex items-center justify-between py-2 px-4 bg-white/15 rounded-lg"
                >
                    Recipes
                    <FaAngleRight />
                </Link>
            </main>
        </>
    )
}