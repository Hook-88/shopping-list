import Card from "../../components/Card"
import getStringFirstCharCap from "../../utility/getStringFirstCharCap"
import modifyQuantityFirebaseItem from "../../firebase/utility/modifyQuantityFirebaseItem"
import ButtonIncrement from "./ButtonIncrement"
import ButtonDecrement from "./ButtonDecrement"

export default function ListItemDefault({item}) {

    function handleClickIncrement(event) {
        event.stopPropagation()
        modifyQuantityFirebaseItem(item.id, 1)
    }

    function handleClickDecrement(event) {
        event.stopPropagation()
        modifyQuantityFirebaseItem(item.id, -1)
    }
    
    return (
        <Card className="flex items-center justify-between py-3">
            {getStringFirstCharCap(item.name)}
            {
                item.quantity > 1 && ` (${item.quantity}x)`
            }
            <div className="flex gap-2">
                {
                    item.quantity > 1 && (
                        <ButtonDecrement 
                            onClick={handleClickDecrement}
                        />
                    )
                }
                <ButtonIncrement 
                    onClick={handleClickIncrement}
                />
            </div>
        </Card>
    )
}