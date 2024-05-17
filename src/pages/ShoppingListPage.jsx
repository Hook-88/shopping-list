import { FaPlus, FaCheck, FaAngleRight } from "react-icons/fa6"
import { Link } from "react-router-dom"
import getFirstCharCapped from "../utility/getFirstCharCapped"
import { useEffect, useRef, useState } from "react"
import Header from "../components/Header"
import List from "../components/List/Index"
import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"
import AddItemInput from "../components/AddItemInput"
import { nanoid } from "nanoid"
import DialogCard from "../components/DialogCard"
import MainContent from "../components/MainContent"
import PageLink from "../components/PageLink"

export default function ShoppingListPage() {
    const [shoppingList, setShoppingList] = useState(null)
    const [addItemOn, setAddItemOn] = useState(false)
    const dialogRef = useRef()
    const docRef = doc(db, "shoppingList", "wA03LYangQz8a20aIKFV")

    function toggleAddItemOn() {
        setAddItemOn(prevAddItemOn => !prevAddItemOn)
    }

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

    useEffect(() => {
        const unsub = onSnapshot(docRef, snapshot => {
            // sync up with local state
            setShoppingList(snapshot.data().items)
        })

        return unsub
    }, [])
    
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
                <MainContent>
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

                    {
                        shoppingList.length > 0 &&
                        <>
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
                        </>
                    }
                    <PageLink to="recipes">Recipes</PageLink>

                </MainContent> : "Loading..."
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