import Card from "../../components/Card"
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa6"
import getStringFirstCharCap from "../../utility/getStringFirstCharCap"
import Button from "../../components/Button"
import { FaEdit } from "react-icons/fa"

export default function EditListItemSelected({item}) {
    
    return (
        <Card className="py-0.5 flex items-center justify-between pr-0">
                {getStringFirstCharCap(item.name)}
                <button className="px-4 py-4 border border-transparent">
                    <FaEdit />
                </button>
            {/* <div className="flex gap-4">
                <Button className="flex-grow bg-cyan-900">
                    Edit
                </Button>

                <Button className="bg-red-900">
                    Cancel
                </Button>
            </div> */}
        </Card>
    )
}