import { useContext } from "react"
import { ListContext } from "./List"


export default function ListProgress() {
    const { itemsArr } = useContext(ListContext)
    const itemsArrLength = itemsArr.length
    const checkedItemsArrLength = itemsArr.filter(item => item.checked === true).length

    
    
    return (
        <small>
            {`(${checkedItemsArrLength}/${itemsArrLength})`}
        </small>
    )
}