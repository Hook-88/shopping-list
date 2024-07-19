import { useRef, useEffect } from "react"
import Card from "../../components/Card"
import { useStore } from "../../store/store"
import { useForm } from "react-hook-form"
import getStringFirstCharCap from "../../utility/getStringFirstCharCap"
import useHistoryItems from "../../hooks/useHistoryItems"
import addFirebaseDoc from "../../firebase/firebaseUtility/addFirebaseDoc"

export default function AddItemToListEl({shoppingList}) {
    const modalObjAddItem = useStore(state => state.modalObjAddItem)
    const updateModalObjAddItem = useStore(state => state.updateModalObjAddItem)
    const updateBanner = useStore(state => state.updateBanner)
    const bannerTekst = useStore(state => state.banner)
    const dialogRef = useRef()
    const historyItems = useHistoryItems()
    const filteredItems = shoppingList ? filterGroceries(shoppingList, historyItems) : []
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            itemName: ""
        }
    })

    function closeModal() {
        dialogRef.current.close()
        updateModalObjAddItem(null)
    }

    useEffect(() => {
        if (modalObjAddItem) {
            dialogRef.current.showModal()
            return
        }

    }, [modalObjAddItem])

    function handleOnSubmit(formData) {
        const itemObj = {
            name: formData.itemName.trim().toLowerCase(),
            quantity: 1,
            selected: false
        }
        modalObjAddItem.onSubmit(itemObj)
        handleBanner(formData.itemName)
        reset()
    }

    function handleBanner(name) {
        updateBanner(`${name} added to shopping list`)
        setTimeout(() => {
            updateBanner(null)
        }, 1000)
    }

    function closeModal() {
        dialogRef.current.close()
    }

    function handleClick(item) {
        
        const itemObj = {
            name: item.name,
            quantity: 1,
            selected: false
        }

        addFirebaseDoc("shoppingList", itemObj)
    }

    function filterGroceries(list, historyGroceries) {
        // Create a Set of names from the shopping list for efficient lookup
        const shoppingListNames = new Set(list.map(item => item.name.toLowerCase()));
        
        // Filter the history groceries
        return historyGroceries.filter(item => !shoppingListNames.has(item.name.toLowerCase()));
    }
    
    return (
        <dialog ref={dialogRef}>
            <div className="fixed inset-0 w-full h-full bg-black/20 backdrop-blur-sm text-white flex flex-col gap-4 justify-end items-center px-4">
                {
                    bannerTekst && (
                        <div className="bg-green-200/40 backdrop-blur w-full rounded border border-white/10 text-center flex-grow-0 py-4">
                            {bannerTekst}
                        </div>
                    )
                }                
                <Card className="bg-[#1a1a1a] py-2 px-2 border border-white/10 w-full">
                    <ul className="flex flex-wrap-reverse gap-2 mb-4">
                        {
                            filteredItems
                                .slice(0, 5)
                                .map(item => (
                                    <li 
                                        key={item.id}
                                        className="p-2 px-4 border border-white/30 rounded flex-grow text-center"
                                        onClick={() => handleClick(item)}
                                    >
                                        {getStringFirstCharCap(item.name)}
                                    </li>
                                ))
                        }
                    </ul>
                    <form className="grid gap-2" onSubmit={handleSubmit(handleOnSubmit)}>
                        <input 
                            type="text" 
                            className="bg-white/10 rounded px-2 py-1"
                            placeholder="item..."
                            autoFocus
                            required
                            {...register("itemName")}
                        />
                        <div className="flex gap-2">
                            <button 
                                className="py-1 px-6 rounded bg-green-900 flex-grow border border-white/10"
                            >
                                Add to list
                            </button>

                            <button 
                                className="py-1 px-4 rounded bg-red-900 border border-white/10"
                                type="button"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>

                        </div>
                    </form> 
                </Card>
            </div>
        </dialog>
    )
}