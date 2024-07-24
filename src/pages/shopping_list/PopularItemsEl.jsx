import { useContext } from "react"
import useShoppingListHistory from "../../hooks/useShoppingListHistory"
import { ShoppingListPageContext } from "./ShoppingListPage"
import getStringFirstCharCap from "../../utility/getStringFirstCharCap"
import addFirebaseDocToShoppingList from "../../firebase/utility/addFirebaseDocToShoppingList"
import { useStore } from "../../store/store"
import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../../firebase/firebase"

export default function PopularItemsEl() {
    const setBannerText = useStore(state => state.setBannerText)
    const clearBanner = useStore(state => state.clearBanner)
    const shoppingListHistory = useShoppingListHistory()
    const { shoppingList } = useContext(ShoppingListPageContext)
    const popularItems = getFilteredArray()

    function getFilteredArray() {
        const shoppingListStringArr = shoppingList?.map(item => item.name)
        const shoppingListHistoryStringArr = shoppingListHistory?.map(historyItem => historyItem.name)
        const filteredArr = shoppingListHistoryStringArr?.filter(item => {
            
            if (shoppingListStringArr.includes(item)) {
                return false
            }

            return true
        })

        return filteredArr
    }

    function handleClick(itemName) {
        const itemObj = {
            name: itemName,
            quantity: 1,
            selected: false
        }

        addFirebaseDocToShoppingList(itemObj)
        handleBanner(itemName)
        logItemInHistory(itemName)
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
        popularItems?.length > 0 ?
        <ul className="flex flex-wrap-reverse gap-2 mb-4">
            {
                popularItems?.slice(0, 5)
                    .map(item => (
                        <li 
                            key={item}
                            className="border rounded py-2 px-4 flex-grow"
                            onClick={() => handleClick(item)}
                        >
                            {getStringFirstCharCap(item)}
                        </li>
                    ))
            }
        </ul> : null
    )
}