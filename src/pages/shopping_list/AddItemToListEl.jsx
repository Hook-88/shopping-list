import Card from "../../components/Card"
import { forwardRef } from "react"
import Banner from "../../components/Banner"
import FormAddItem from "./FormAddItem"
import PopularItemsEl from "./PopularItemsEl"

export default function AddItemToList(props, ref) {

    function closeDialog() {
        props.onCancel()
    }

    return (
        <dialog ref={ref}>
            <div className="bg-black/10 backdrop-blur fixed inset-0 flex flex-col justify-end px-4 pb-4">    
                <Banner />

                <Card className="text-center text-white px-2 bg-[#1a1a1a] mt-4">
                    <PopularItemsEl />
                    <FormAddItem onCancel={closeDialog} />
                </Card>

            </div>
        </dialog>
    )
}

export const AddItemToListEl = forwardRef(AddItemToList)