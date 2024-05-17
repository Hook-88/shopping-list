import { FaPlus, FaCheck } from "react-icons/fa6"
import getFirstCharCapped from "../utility/getFirstCharCapped"
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
import DialogCard from "../components/DialogCard";

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

    async function checkAllItemsInFireStore(checkValue) {
        const docSnap = await getDoc(docRef)
        const newArray = docSnap.data().items.map(item => {
            
            return {
                ...item,
                checked: checkValue
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

    async function deleteSelectionFromShoppingList() {
        const newShoppingList = shoppingList.filter(item => item.checked === false)

        await updateDoc(docRef, {
            items: newShoppingList
        })
        
    }

    function openConfirm() {
        dialogRef.current.showModal()
    }

    function closeConfirm() {
        dialogRef.current.close()
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
                <main className="px-4 grid gap-4 mt-12">
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
                                            {getFirstCharCapped(item.name)}
                                            {item.checked && <FaCheck className=""/>}
                                        </List.Item>
                                    )
                                })
                            }
                        </List> 
                    

                    {addItemOn && <AddItemInput onSubmit={addItemToShoppingList}/>}

                    <button
                        className="bg-white/10 py-2 px-4 rounded-lg text-left flex items-center justify-between disabled:text-red-700/40"
                        // disabled={ shoppingList.every(item => item.checked === false) }
                        onClick={() => checkAllItemsInFireStore(!shoppingList.every(item => item.checked === true))}
                    >
                        {
                            shoppingList.every(item => item.checked === true) ?
                                <>
                                    Uncheck all
                                </> : 
                                <>
                                    Check All
                                    <FaCheck />
                                </>
                        }
                        
                    </button>

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
                onClick={closeConfirm}
            >
                <DialogCard 
                    question="Delete checked items?"
                    confirmAction={deleteSelectionFromShoppingList}
                    closeConfirm={closeConfirm}
                />
            </dialog>
        </>
    )
}