import { useStore } from "../../store/store"
import Button from "../../components/Button"
import { useForm } from "react-hook-form"
import addFirebaseDocToShoppingList from "../../firebase/utility/addFirebaseDocToShoppingList"
import getStringFirstCharCap from "../../utility/getStringFirstCharCap"
import logItemInFirebaseHistory from "../../firebase/utility/logItemInFirebaseHistory"

export default function FormAddItem({onCancel}) {
    const setBannerText = useStore(state => state.setBannerText)
    const clearBanner = useStore(state => state.clearBanner)
    const { reset, handleSubmit, register } = useForm({
        defaultValues: {
            itemName: ""
        }
    })

    function closeDialog() {
        onCancel()
    }

    function handleOnSubmit(formData) {
        const itemObj = {
            name: formData.itemName.trim().toLowerCase(),
            selected: false,
            quantity: 1
        }

        addFirebaseDocToShoppingList(itemObj)
        handleBanner(itemObj.name)
        logItemInFirebaseHistory(itemObj.name)
        reset()
    }

    function handleBanner(itemName) {
        setBannerText(`${getStringFirstCharCap(itemName)} added to shopping list`)
        
        setTimeout(() => {
            clearBanner()
        }, 1000)
    }

    return (
        <form className="grid gap-2" onSubmit={handleSubmit(handleOnSubmit)}>
            <input 
                type="text"
                placeholder="Item..."
                className="bg-white/10 py-1 rounded px-2"
                required
                {...register("itemName")} 
            />

            <div className="flex gap-2">
                <Button
                    className="bg-green-900 flex-grow"
                >
                    Add item
                </Button>

                <Button
                    className="bg-red-900"
                    onClick={closeDialog}
                    type="button"
                >
                    Close
                </Button>
            </div>
        </form>
    )
}