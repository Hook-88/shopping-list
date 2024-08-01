import Card from "../../components/Card"
import getStringFirstCharCap from "../../utility/getStringFirstCharCap"
import { FaCheck } from "react-icons/fa6"

export default function EditListItemDefault({item}) {
    
    return (
        <Card className="flex items-center justify-between py-3">
            {getStringFirstCharCap(item.name)}
            <span className="p-1.5 border border-transparent text-transparent">
                <FaCheck />
            </span>
        </Card>
    )
}