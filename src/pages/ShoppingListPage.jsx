import { FaAngleRight, FaAnglesRight, FaCheck, FaPlus } from "react-icons/fa6"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Main from "../components/Main"
import LinkButton from "../components/LinkButton"
import Form from "../components/Form"
import InputTekst from "../components/InputText"
import { ITEMS } from "../data"

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
                <ul className="bg-white/15 col-span-12 rounded">
                    {
                        ITEMS.map((item, index, arr) => {
                            let liClassName = "py-2 px-4 flex items-center justify-between cursor-pointer"

                            if ( index !== (arr.length -1) ) {
                                liClassName += " shadow-[rgba(100,100,100,0.5)_0px_1px_0px_0px]"
                            }

                            if (item.checked) {
                                liClassName += " line-through text-white/30"
                            }

                            return (
                                <li
                                    key={item.id}
                                    className={liClassName}
                                >
                                    {item.name}
                                    {item.checked && <FaCheck />}
                                </li>
                            )
                        })
                    }
                    {/* <li className="py-2 px-4 shadow-[rgba(100,100,100,0.5)_0px_1px_0px_0px]">Arroz</li>
                    <li className="py-2 px-4 shadow-[rgba(100,100,100,0.5)_0px_1px_0px_0px]">Acete</li>
                    <li className="py-2 px-4">Cervesa</li> */}
                </ul>
                {
                    showAddItem &&
                    <Form>
                        <InputTekst 
                            placeholder="Item"
                        />
                    </Form>
                }

                {!showAddItem && <LinkButton to="recipes">Recipes</LinkButton>}

            </Main>
        </>
    )
}