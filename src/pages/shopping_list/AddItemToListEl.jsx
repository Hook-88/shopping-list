import Card from "../../components/Card"
import { forwardRef, useContext } from "react"
import Banner from "../../components/Banner"
import FormAddItem from "./FormAddItem"
import useShoppingListHistory from "../../hooks/useShoppingListHistory"
import { ShoppingListPageContext } from "./ShoppingListPage"
import getStringFirstCharCap from "../../utility/getStringFirstCharCap"
import addFirebaseDocToShoppingList from "../../firebase/utility/addFirebaseDocToShoppingList"
import { useStore } from "../../store/store"

export default function AddItemToList(props, ref) {
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

    function closeDialog() {
        props.onCancel()
    }

    function handleClick(itemName) {
        const itemObj = {
            name: itemName,
            quantity: 1,
            selected: false
        }

        addFirebaseDocToShoppingList(itemObj)
        handleBanner(itemName)
    }

    function handleBanner(itemName) {
        setBannerText(`${getStringFirstCharCap(itemName)} added to shopping list`)
        setTimeout(() => {
            clearBanner()
        }, 1000)
    }

    return (
        <dialog ref={ref}>
            <div className="bg-black/10 backdrop-blur fixed inset-0 flex flex-col justify-end px-4 pb-4">    
                <Banner />

                <Card className="text-center text-white px-2 bg-[#1a1a1a] mt-4">
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
                    </ul>
                    <FormAddItem onCancel={closeDialog}/>
                </Card>
            </div>
        </dialog>
    )
}

export const AddItemToListEl = forwardRef(AddItemToList)