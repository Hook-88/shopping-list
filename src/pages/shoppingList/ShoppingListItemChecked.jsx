import Card from "../../components/Card"
import ButtonIncrement from "../../components/Buttons/ButtonIncrement"
import ButtonDecrement from "../../components/Buttons/ButtonDecrement"
import { FaCheck } from "react-icons/fa6"


export default function ShoppingListItemChecked({item}) {
    
    return (
        <Card className="flex items-center justify-between bg-green-900">
            {item.name}
            { item.quantity > 1 && ` (${item.quantity}x)` }
            <span className="p-1 border border-transparent">
                <FaCheck />
            </span>
            {/* <div className="flex gap-2">
                { item.quantity > 1 && <ButtonDecrement /> }
                <ButtonIncrement />
            </div>   */}
        </Card>
    )
}