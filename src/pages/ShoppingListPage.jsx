import { FaPlus, FaCheck } from "react-icons/fa6"
import PageHeader from "../components/PageHeader"
import PageMain from "../components/PageMain"
import PageLink from "../components/PageLink"
import Form from "../components/Form"
import { useState } from "react"

export default function ShoppingListPage() {
    const [onAddItem, setOnAddItem] = useState(false)

    function toggleOnAddItem() {
        setOnAddItem(prevOnAddItem => !prevOnAddItem)
    }
    
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
                    onClick={toggleOnAddItem}
                >
                    {
                        onAddItem ? <FaCheck /> : <FaPlus />
                    }
                </button>

            </PageHeader>

            <PageMain>
                <PageLink to="recipes">Recipes</PageLink>
                {   
                    onAddItem &&
                    <Form
                        className="grid"
                    >
                        <input 
                            type="text" 
                            placeholder="Item"
                            className="py-2 px-4 bg-white/15 rounded-lg text-center"
                            autoFocus 
                        />
                    </Form>
                }

            </PageMain>
        </>
    )
}