import { useContext } from "react"
import useShoppingListHistory from "../../hooks/useShoppingListHistory"
import { ShoppingListPageContext } from "./ShoppingListPage"
import getStringFirstCharCap from "../../utility/getStringFirstCharCap"
import addFirebaseDocToShoppingList from "../../firebase/utility/addFirebaseDocToShoppingList"
import { useStore } from "../../store/store"
import logItemInFirebaseHistory from "../../firebase/utility/logItemInFirebaseHistory"

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
        logItemInFirebaseHistory(itemName)
    }

    function handleBanner(itemName) {
        setBannerText(`${getStringFirstCharCap(itemName)} added to shopping list`)
        
        setTimeout(() => {
            clearBanner()
        }, 1000)
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