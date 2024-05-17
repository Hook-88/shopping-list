import { FaPlus } from "react-icons/fa6";


export default function ShoppingListPage() {
    
    return (
        <>
            <header className="text-center py-2 text-lg font-bold grid grid-cols-9">
                <h1 className="col-span-7 col-start-2">SHOPPING LIST</h1>
                <button className="flex items-center justify-center">
                    <FaPlus />
                </button>
            </header>
        </>
    )
}