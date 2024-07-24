import { useStore } from "../../store/store"
import Button from "../../components/Button"
import { useForm } from "react-hook-form"
import addFirebaseDocToShoppingList from "../../firebase/utility/addFirebaseDocToShoppingList"
import getStringFirstCharCap from "../../utility/getStringFirstCharCap"
import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../../firebase/firebase"

export default function FormAddItem({onCancel}) {
    const setBannerText = useStore(state => state.setBannerText)
    const clearBanner = useStore(state => state.clearBanner)
    const { reset, handleSubmit, register } = useForm({
        defaultValues: {
            itemName: ""
        }
    })

    function closeDialog() {
        onCancel()
    }

    function handleOnSubmit(formData) {
        const itemObj = {
            name: formData.itemName.trim().toLowerCase(),
            selected: false,
            quantity: 1
        }

        addFirebaseDocToShoppingList(itemObj)
        handleBanner(itemObj.name)
        logItemInHistory(itemObj.name)
        reset()
    }

    function handleBanner(itemName) {
        setBannerText(`${getStringFirstCharCap(itemName)} added to shopping list`)
        setTimeout(() => {
            clearBanner()
        }, 1000)
    }

    async function logItemInHistory(itemName) {
        const collectionRef = collection(db, "history/shoppingList/items")
        const q = query(collectionRef, where("name", "==", itemName))
        const queryDocs = await getDocs(q)
        


        if (queryDocs.docs.length > 0) {
            // increment quantity in firebase history
            queryDocs.forEach(doc => {
                incrementHistoryItemQuantity(doc.id)
            })

            return
        }

        await addDoc(collectionRef, {name: itemName, quantity: 1})
        
    }

    async function incrementHistoryItemQuantity(docId) {
        const docRef = doc(db, "history/shoppingList/items", docId)
        const docSnap = await getDoc(docRef)

        await updateDoc(docRef, { quantity: docSnap.data().quantity + 1 })
    }

    return (
        <form className="grid gap-2" onSubmit={handleSubmit(handleOnSubmit)}>
            <input 
                type="text"
                placeholder="Item..."
                className="bg-white/10 py-1 rounded px-2"
                required
                {...register("itemName")} 
            />

            <div className="flex gap-2">
                <Button
                    className="bg-green-900 flex-grow"
                >
                    Add item
                </Button>

                <Button
                    className="bg-red-900"
                    onClick={closeDialog}
                    type="button"
                >
                    Close
                </Button>
            </div>
        </form>
    )
}