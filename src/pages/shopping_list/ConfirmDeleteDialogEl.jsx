import { useStore } from "../../store/store"
import Card from "../../components/Card"
import Button from "../../components/Button"
import { useEffect, useRef, forwardRef } from "react"

export default function ConfirmDeleteDialog(props, ref) {
    const confirmDialogObj = useStore(state => state.confirmDialogObj)
    const question = confirmDialogObj?.question ? confirmDialogObj.question : "Are you positive?"

    function closeDialog() {
        props.onCancel()
    }

    function handleOnConfirm() {
        confirmDialogObj.onConfirm()
        setTimeout(() => {
            closeDialog()
        }, 100)

    }

    return (
        <dialog ref={ref}>
            <div className="bg-black/10 backdrop-blur fixed inset-0 flex flex-col justify-center px-4">
                <Card className="text-center text-white px-2 pt-4">
                    <p className="mb-4">
                        {question}
                    </p>
                    <div className="flex gap-2">
                        <Button
                            className="bg-green-900 flex-grow"
                            onClick={handleOnConfirm}
                        >
                            Yes
                        </Button>

                        <Button
                            className="bg-red-900"
                            onClick={closeDialog}
                        >
                            No
                        </Button>
                    </div>
                </Card>
            </div>
        </dialog>
    )
}

export const ConfirmDeleteDialogEl = forwardRef(ConfirmDeleteDialog)