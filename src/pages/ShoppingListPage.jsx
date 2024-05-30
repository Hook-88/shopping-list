import { FaAngleRight, FaAnglesRight, FaCheck, FaPlus } from "react-icons/fa6"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Main from "../components/Main"
import LinkButton from "../components/LinkButton"
import Form from "../components/Form"
import InputTekst from "../components/InputText"
import { ITEMS } from "../data"
import List from "../components/List/index"
import { useEffect, useState } from "react"
import { doc, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"
import getFirstCharUpperCase from "../utility/getFirstCharUpperCase"
import AddItemForm from "../components/AddItemForm"
import { nanoid } from "nanoid"

export default function ShoppingListPage() {
    const [shoppingList, setShoppingList] = useState([])
    const [onAddItem, setOnAddItem] = useState(false)
    const docRef = doc(db, "shoppingList", "wA03LYangQz8a20aIKFV")

    function toggleOnAddItem() {
        setOnAddItem(prevOnAddItem => !prevOnAddItem)
    }

    async function toggleCheckItem(itemId) {
        const newItemsArray = shoppingList.map(item => item.id === itemId ? {...item, checked: !item.checked} : item)

        await updateDoc(docRef, {items: newItemsArray})
    }

    async function addItemToShoppingList(item) {
        const itemObj = {
            id: nanoid(),
            name: item.itemName.toLowerCase(),
            checked: false
        }
        const newItemsArray = [...shoppingList, itemObj]

        await updateDoc(docRef, {items: newItemsArray})
    }

    async function deleteCheckedItemFromShoppingList() {
        const newItemsArray = shoppingList.filter(item => item.checked === false)

        await updateDoc(docRef, {items: newItemsArray})
    }

    useEffect(() => {
        const unsub = onSnapshot(doc(db, "shoppingList", "wA03LYangQz8a20aIKFV"), snapshot => {
            setShoppingList(snapshot.data().items)
            
        })
        
        return unsub
    },[])
    
    return (
        <>
            <Header>
                <h1 className="col-start-3 col-span-8 text-center my-2">Shopping List</h1>
                <button 
                    className="col-span-2 flex justify-end items-center pr-4"
                    onClick={toggleOnAddItem}
                >
                    { onAddItem ? <FaCheck /> : <FaPlus /> }
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
                                    onClick={() => toggleCheckItem(item.id)}
                                >
                                    {getFirstCharUpperCase(item.name)}
                                    {item.checked && <FaCheck />}
                                </List.Item>
                            )
                        })
                    }
                </List>
                {
                    onAddItem &&
                    <AddItemForm onSubmit={addItemToShoppingList} />
                }

                <button 
                    className="col-span-12 py-2 bg-white/10 rounded text-red-700"
                    onClick={deleteCheckedItemFromShoppingList}
                >
                    Delete checked items
                </button>

                {!onAddItem && <LinkButton to="recipes">Recipes</LinkButton>}

            </Main>
        </>
    )
}