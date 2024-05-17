import { FaPlus, FaCheck } from "react-icons/fa6"

import SHOPPINGLISTDATA from "../data"
import { useEffect, useState } from "react"
import Header from "../components/Header"
import List from "../components/List/Index"
import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"
import Form from "../components/Form"
import InputText from "../components/InputText"
import AddItemInput from "../components/AddItemInput"
import { nanoid } from "nanoid"

export default function ShoppingListPage() {
    const [shoppingList, setShoppingList] = useState(null)
    const docRef = doc(db, "shoppingList", "wA03LYangQz8a20aIKFV")

    useEffect(() => {
        const unsub = onSnapshot(docRef, snapshot => {
            // sync up with local state
            setShoppingList(snapshot.data().items)
        })

        return unsub
    }, [])

    async function toggleCheckedInFireStore(itemId) {
        const docSnap = await getDoc(docRef)
        const newArray = docSnap.data().items.map(item => {
            if (item.id === itemId) {
                
                return {
                    ...item,
                    checked: !item.checked
                }
            } else {

                return item
            }
        })
        
        await updateDoc(docRef, {
            items: newArray         
        })

    }

    async function addItemToShoppingList(value) {
        const newItemObj = {
            name: value.toLowerCase(),
            checked: false,
            id: nanoid()
        }

        await updateDoc(docRef, {
            items: arrayUnion(newItemObj)
        })

        
    }
    
    return (
        <>
            <Header className="px-4">
                <h1 className="col-span-8 col-start-3">SHOPPING LIST</h1>
                <button className="flex items-center justify-end pr-4 col-span-2">
                    <FaPlus />
                </button>
            </Header>

            <main className="px-4 grid gap-4">
                {
                    shoppingList ?
                    <List>
                        {
                            shoppingList.map((item, index, arr) => {
                                let liClassName = "flex items-center justify-between pr-4 cursor-pointer"

                                if (index !== (arr.length - 1)) {
                                    liClassName += " shadow-[rgba(100,100,100,0.3)_0px_1px_0px_0px]"
                                }

                                if (item.checked) {
                                    liClassName += " text-white/30 line-through"
                                }

                                
                                return (
                                    <List.Item 
                                        key={item.id}
                                        className={liClassName}
                                        onClick={() => toggleCheckedInFireStore(item.id)}
                                    >
                                        {item.name}
                                        {item.checked && <FaCheck className=""/>}
                                    </List.Item>
                                )
                            })
                        }
                    </List> : "Loading..."
                }

                {/* TODO make FORM and INPUT components */}

                <AddItemInput onSubmit={addItemToShoppingList}/>
            </main>
        </>
    )
}