import Card from "../../components/Card"
import { FaCheck } from "react-icons/fa6"
import getStringFirstCharCap from "../../utility/getStringFirstCharCap"


export default function ShoppingListItemChecked({item}) {
    
    return (
        <Card className="flex items-center justify-between bg-green-900">
            { getStringFirstCharCap(item.name) }
            { item.quantity > 1 && ` (${item.quantity}x)` }
            <span className="p-1 border border-transparent">
                <FaCheck />
            </span>
        </Card>
    )
}