import { useContext } from "react"
import { Listcontext } from "./List"

export default function ListProgress({onClick = () => {}}) {
    const { listItemsArr } = useContext(Listcontext)
    const totalLengthList = listItemsArr?.length
    const selectedItemsLength = listItemsArr.filter(item => item.selected === true).length
    
    function handleClick() {
        if (selectedItemsLength === totalLengthList) {
            onClick()
        }
    }

    return (
        <small onClick={handleClick}>
            {`(${selectedItemsLength}/${totalLengthList})`}
            {
                selectedItemsLength === totalLengthList && " completed"
            }
        </small>
    )
}