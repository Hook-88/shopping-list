import { useRef, useEffect } from "react"
import Card from "../../components/Card"
import { useStore } from "../../store/store"
import { useForm } from "react-hook-form"
import getStringFirstCharCap from "../../utility/getStringFirstCharCap"
import useHistoryItems from "../../hooks/useHistoryItems"
import addFirebaseDoc from "../../firebase/firebaseUtility/addFirebaseDoc"

export default function PopularItemsEl({shoppingList}) {
    const updateBanner = useStore(state => state.updateBanner)
    const historyItems = useHistoryItems()
    const filteredItems = shoppingList ? filterGroceries(shoppingList, historyItems) : []

    function handleBanner(name) {
        updateBanner(`${name} added to shopping list`)
        setTimeout(() => {
            updateBanner(null)
        }, 1000)
    }

    function handleClick(item) {
        
        const itemObj = {
            name: item.name,
            quantity: 1,
            selected: false
        }

        addFirebaseDoc("shoppingList", itemObj)
        handleBanner(itemObj.name)
    }

    function filterGroceries(list, historyGroceries) {
        // Create a Set of names from the shopping list for efficient lookup
        const shoppingListNames = new Set(list.map(item => item.name.toLowerCase()));
        
        // Filter the history groceries
        return historyGroceries.filter(item => !shoppingListNames.has(item.name.toLowerCase()));
    }
    
    return (
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
    )
}