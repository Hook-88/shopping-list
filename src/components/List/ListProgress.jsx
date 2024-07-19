import { useContext } from "react"
import { ListContext } from "./List"


export default function ListProgress({onClick = () => {}}) {
    const { itemsArr } = useContext(ListContext)
    const itemsArrLength = itemsArr.length
    const checkedItemsArrLength = itemsArr.filter(item => item.selected === true).length

    function handleClick() {
        if (itemsArrLength === checkedItemsArrLength) {
            onClick()
        }

        return
    }


    return (
        <small onClick={handleClick}>
            {`(${checkedItemsArrLength}/${itemsArrLength})`}
        </small>
    )
}