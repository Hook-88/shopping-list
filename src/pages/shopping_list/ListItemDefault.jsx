import Card from "../../components/Card"
import { FaMinus, FaPlus } from "react-icons/fa6"
import getStringFirstCharCap from "../../utility/getStringFirstCharCap"

export default function ListItemDefault({item}) {
    
    return (
        <Card className="flex items-center justify-between py-3">
            {getStringFirstCharCap(item.name)}
            {
                item.quantity > 1 && ` (${item.quantity}x)`
            }
            <div className="flex gap-2">
                {
                    item.quantity > 1 && (
                        <button className="p-1.5 border border-white/30 rounded bg-red-900">
                            <FaMinus />
                        </button>
                    )
                }
                <button className="p-1.5 border border-white/30 rounded bg-sky-900">
                    <FaPlus />  
                </button>

            </div>
        </Card>
    )
}