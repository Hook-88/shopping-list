import { useContext } from "react"
import { Listcontext } from "./List"

export default function ListProgress() {
    const { listItemsArr } = useContext(Listcontext)
    const totalLengthList = listItemsArr?.length
    const selectedItemsLength = listItemsArr.filter(item => item.selected === true).length
    
    return (
        <small>
            {`(${selectedItemsLength}/${totalLengthList})`}
            {
                selectedItemsLength === totalLengthList && " completed"
            }
        </small>
    )
}