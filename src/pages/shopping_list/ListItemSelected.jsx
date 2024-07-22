import Card from "../../components/Card"
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa6"
import getStringFirstCharCap from "../../utility/getStringFirstCharCap"

export default function ListItemSelected({item}) {
    
    return (
        <Card className="flex items-center justify-between py-3 bg-green-900">
            {getStringFirstCharCap(item.name)}
            {
                item.quantity > 1 && ` (${item.quantity}x)`
            }
            <span className="p-1.5 border border-transparent">
                <FaCheck />
            </span>
        </Card>
    )
}