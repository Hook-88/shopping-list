import { FaAngleRight, FaAnglesRight, FaCheck, FaPlus } from "react-icons/fa6"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Main from "../components/Main"
import LinkButton from "../components/LinkButton"
import Form from "../components/Form"
import InputTekst from "../components/InputText"
import { ITEMS } from "../data"
import { useShoppingListStore, useUIStore } from "../store/store"
import List from "../components/List/index"
import { useEffect, useState } from "react"
import { doc, onSnapshot } from "firebase/firestore"
import { db } from "../firebase/firebase"

export default function ShoppingListPage() {
    const showAddItem = useUIStore(state => state.onAddItem)
    const toggleShowAddItem = useUIStore(state => state.toggleOnAddItem)
    const shoppingList = useShoppingListStore(state => state.shoppingList)
    const getShoppingList = useShoppingListStore(state => state.getShoppingList)
    const toggleCheckItem = useShoppingListStore(state => state.toggleCheckItem)

    useEffect(() => getShoppingList(), [])
    
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
                <List>
                    {
                        shoppingList.map((item, index, arr) => {
                            let liClassName;

                            if ( index !== (arr.length -1) ) {
                                liClassName += " shadow-[rgba(100,100,100,0.5)_0px_1px_0px_0px]"
                            }

                            if (item.checked) {
                                liClassName += " line-through text-white/30"
                            }

                            return (
                                <List.Item
                                    key={item.id}
                                    className={liClassName}
                                    onClick={toggleCheckItem}
                                >
                                    {item.name}
                                    {item.checked && <FaCheck />}
                                </List.Item>
                            )
                        })
                    }
                </List>
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