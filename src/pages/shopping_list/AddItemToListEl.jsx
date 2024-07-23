import { useStore } from "../../store/store"
import Card from "../../components/Card"
import Button from "../../components/Button"
import { useEffect, useRef, forwardRef } from "react"
import { useForm } from "react-hook-form"
import addFirebaseDocToShoppingList from "../../firebase/utility/addFirebaseDocToShoppingList"
import Banner from "../../components/Banner"
import getStringFirstCharCap from "../../utility/getStringFirstCharCap"

export default function AddItemToList(props, ref) {
    const setBannerText = useStore(state => state.setBannerText)
    const clearBanner = useStore(state => state.clearBanner)
    const { reset, handleSubmit, register } = useForm({
        defaultValues: {
            itemName: ""
        }
    })

    function closeDialog() {
        props.onCancel()
    }

    function handleOnSubmit(formData) {
        const itemObj = {
            name: formData.itemName.trim().toLowerCase(),
            selected: false,
            quantity: 1
        }

        addFirebaseDocToShoppingList(itemObj)
        handleBanner(itemObj.name)
        reset()
    }

    function handleBanner(itemName) {
        setBannerText(`${getStringFirstCharCap(itemName)} added to shopping list`)
        setTimeout(() => {
            clearBanner()
        }, 1000)
    }

    return (
        <dialog ref={ref}>
            <div className="bg-black/10 backdrop-blur fixed inset-0 flex flex-col justify-end px-4 pb-4">
                
                <Banner />

                <Card className="text-center text-white px-2 bg-[#1a1a1a] mt-4">
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
                                // onClick={handleOnConfirm}
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
                </Card>
            </div>
        </dialog>
    )
}

export const AddItemToListEl = forwardRef(AddItemToList)