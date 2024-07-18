import Card from "../../components/Card"
import ButtonIncrement from "../../components/Buttons/ButtonIncrement"
import ButtonDecrement from "../../components/Buttons/ButtonDecrement"
import getStringFirstCharCap from "../../utility/getStringFirstCharCap"
import modifyQuantityFirebaseItem from "../../firebase/firebaseUtility/modifyQuantityFirebaseItem"


export default function ShoppingListItemDefault({item}) {
    const modifyQuantity = modifyQuantityFirebaseItem(item.id)

    function handleClickIncrement(event) {
        event.stopPropagation()
        modifyQuantity(1)
    }
    
    function handleClickDecrement(event) {
        event.stopPropagation()
        modifyQuantity(-1)
    }

    return (
        <Card className="flex items-center justify-between">
            { getStringFirstCharCap(item.name) }
            { item.quantity > 1 && ` (${item.quantity}x)` }
            <div className="flex gap-2">
                { item.quantity > 1 && <ButtonDecrement onClick={handleClickDecrement} /> }
                <ButtonIncrement onClick={handleClickIncrement}/>
            </div>  
        </Card>
    )
}