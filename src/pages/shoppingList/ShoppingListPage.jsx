import { FaEllipsis } from "react-icons/fa6";


export default function ShoppingListPage() {
    
    return (
        <>
            <header className="bg-white/10 px-4 py-2 grid grid-cols-6 fixed inset-x-0 top-0">
                <h1 className="col-span-4 col-start-2 text-nowrap text-lg text-center">Shopping List</h1>
                <button className="col-start-6 flex items-center justify-center">
                    <FaEllipsis />
                </button>
            </header>
            <main className="px-4 mt-14">
                here the list
            </main>
        </>
    )
}