import { FaPlus, FaCheck } from "react-icons/fa6"
import { CgClose } from "react-icons/cg";

import SHOPPINGLISTDATA from "../data"
import { useEffect, useRef, useState } from "react"
import Header from "../components/Header"
import List from "../components/List/Index"
import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"
import Form from "../components/Form"
import InputText from "../components/InputText"
import AddItemInput from "../components/AddItemInput"
import { nanoid } from "nanoid"
import { IoClose, IoCloseOutline } from "react-icons/io5"

export default function ShoppingListPage() {
    const [shoppingList, setShoppingList] = useState(null)
    const [addItemOn, setAddItemOn] = useState(false)
    const dialogRef = useRef()

    function toggleAddItemOn() {
        setAddItemOn(prevAddItemOn => !prevAddItemOn)
    }

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

    function openConfirm() {
        dialogRef.current.showModal()
    }
    
    return (
        <>
            <Header className="px-4">
                <h1 className="col-span-8 col-start-3">SHOPPING LIST</h1>
                <button 
                    className="flex items-center justify-end pr-4 col-span-2"
                    onClick={toggleAddItemOn}
                >
                    { addItemOn ? <FaCheck /> : <FaPlus />}
                </button>
            </Header>

            {
                shoppingList ?
                <main className="px-4 grid gap-4">
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
                        </List> 
                    

                    {addItemOn && <AddItemInput onSubmit={addItemToShoppingList}/>}

                    <button
                        className="bg-white/10 py-2 rounded-lg text-red-700 disabled:text-red-700/40"
                        disabled={ shoppingList.every(item => item.checked === false) }
                        onClick={openConfirm}
                    >
                        Delete Checked Items
                    </button>

                </main> : "Loading..."
            }
            <dialog
                ref={dialogRef}
                className="bg-[#171717]"
            >
                <div className="fixed inset-0 grid place-content-center backdrop-blur-md bg-white/20">
                    <div className="w-full max-w-lg bg-[#171717] text-white grid rounded-lg">
                    <h2 className="py-2 px-4 shadow-[rgba(100,100,100,0.3)_0px_1px_0px_0px]">
                        Delete checked Items?
                    </h2>
                    <button className="flex justify-center items-center py-2 mx-2 shadow-[rgba(100,100,100,0.3)_0px_1px_0px_0px] gap-2">
                        Yes <FaCheck className="text-green-700"/>
                    </button>

                    <button className="flex justify-center items-center py-2 gap-2">
                        No <CgClose className="text-red-700 text-lg"/>
                    </button>
                    </div>
                </div>
            </dialog>
        </>
    )
}