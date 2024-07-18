import { useRef, useEffect } from "react"
import Card from "../../components/Card"
import { useStore } from "../../store/store"
import { useForm } from "react-hook-form"

export default function AddItemToListEl() {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            itemName: ""
        }
    })
    const modalObjAddItem = useStore(state => state.modalObjAddItem)
    const updateModalObjAddItem = useStore(state => state.updateModalObjAddItem)
    const dialogRef = useRef()

    function closeModal() {
        dialogRef.current.close()
        updateModalObjAddItem(null)
    }

    useEffect(() => {
        if (modalObjAddItem) {
            dialogRef.current.showModal()
            return
        }

    }, [modalObjAddItem])

    function handleOnSubmit() {
        modalObjAddItem.onSubmit()
        reset()
    }

    function closeModal() {
        dialogRef.current.close()
    }
    
    return (
        <dialog ref={dialogRef}>
            <div className="fixed inset-0 w-full h-full bg-black/20 backdrop-blur-sm text-white flex items-center px-4">
                <Card className="bg-[#1a1a1a] py-2 px-2 border border-white/10 w-full">
                    <form className="grid gap-2" onSubmit={handleSubmit(handleOnSubmit)}>
                        <input 
                            type="text" 
                            className="bg-white/10 rounded px-2 py-1"
                            placeholder="item..."
                            required
                            {...register("itemNAme")}
                        />
                        <div className="flex gap-2">
                            <button 
                                className="py-1 px-6 rounded bg-green-900 flex-grow border border-white/10"
                                // onClick={handleOnSubmit}
                            >
                                Add to list
                            </button>

                            <button 
                                className="py-1 px-4 rounded bg-red-900 border border-white/10"
                                type="button"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>

                        </div>
                    </form>
                    
                </Card>
            </div>
        </dialog>
    )
}