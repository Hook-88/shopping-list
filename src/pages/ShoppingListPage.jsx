import { FaAngleRight, FaAnglesRight, FaCheck, FaPlus } from "react-icons/fa6"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Main from "../components/Main"
import LinkButton from "../components/LinkButton"
import Form from "../components/Form"
import InputTekst from "../components/InputText"

import { useUIStore } from "../store/store"

export default function ShoppingListPage() {
    const showAddItem = useUIStore(state => state.onAddItem)
    // const setShowAddItem = useUIStore(state => state.setOnAddItem)
    const toggleShowAddItem = useUIStore(state => state.toggleOnAddItem)
    
    return (
        <>
            <Header>
                <h1 className="col-start-3 col-span-8 text-center my-2">Shopping List</h1>
                <button 
                    className="col-span-2 flex justify-end items-center pr-4"
                    onClick={toggleShowAddItem}
                >
                    { showAddItem ? <FaCheck /> : <FaPlus /> }
                </button>
            </Header>

            <Main>
                {
                    showAddItem &&
                    <Form>
                        <InputTekst 
                            placeholder="Item"
                        />
                    </Form>
                }

                <LinkButton to="recipes">Recipes</LinkButton>
                
            </Main>
        </>
    )
}