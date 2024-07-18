import { useEffect, useRef } from "react"
import { useStore } from "../../store/store"
import Card from "../Card"

export default function ConfirmModal() {
    const modalObj = useStore(state => state.modalObj)
    const updateModal = useStore(state => state.updateModalObj)
    const dialogRef = useRef()

    function closeModal() {
        dialogRef.current.close()
        updateModal(null)
    }

    useEffect(() => {
        if (modalObj) {
            dialogRef.current.showModal()
            return
        }

        // dialogRef.current.close()

    }, [modalObj])

    function handleOnConfirm() {
        modalObj.onConfirm
        closeModal()
    }
    
    return (
        <dialog ref={dialogRef}>
            <div className="fixed inset-0 w-full h-full bg-black/20 backdrop-blur-sm text-white flex items-center justify-center">
                <Card className="bg-[#1a1a1a] flex flex-col gap-4 py-4 border border-white/10">
                    <p className="text-center">
                        {modalObj?.question}
                    </p>
                    <div className="flex gap-2">
                        <button 
                            className="py-1 px-6 rounded bg-green-900 flex-grow border border-white/10"
                            onClick={modalObj?.onConfirm}
                        >
                            Yes
                        </button>

                        <button 
                            className="py-1 px-4 rounded bg-red-900 border border-white/10"
                            onClick={closeModal}
                        >
                            No
                        </button>

                    </div>
                </Card>
            </div>
        </dialog>
    )
}