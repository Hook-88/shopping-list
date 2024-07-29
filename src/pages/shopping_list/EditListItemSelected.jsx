import Card from "../../components/Card"
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa6"
import getStringFirstCharCap from "../../utility/getStringFirstCharCap"
import Button from "../../components/Button"
import { FaEdit } from "react-icons/fa"
import { useForm } from "react-hook-form"

export default function EditListItemSelected({item}) {
    const {register, reset, handleSubmit} = useForm({
        defaultValues: {
            itemName: getStringFirstCharCap(item?.name)
        }
    })
    
    return (
        <Card className="py-3 px-2 grid">
            <form>
                <input 
                    type="text" 
                    placeholder="item..."
                    className="py-1 px-2 w-full rounded bg-white/10 mb-2 border border-transparent"
                    {...register("itemName")}
                    autoFocus 
                />

            <div className="flex gap-2">
                <Button
                    className="bg-green-900 flex-grow"
                >
                    Save
                </Button>

                <Button
                    className="bg-red-900"
                    type="button"
                >
                    Cancel
                </Button>
            </div>

            </form>
        </Card>
    )
}