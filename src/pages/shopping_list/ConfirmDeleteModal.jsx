import { useStore } from "../../store/store"
import Card from "../../components/Card"
import Button from "../../components/Button"
import { useEffect, useRef } from "react"

export default function ConfirmDeleteDialog() {
    const confirmDialogObj = useStore(state => state.confirmDialogObj)
    const dialogRef = useRef()

    function closeDialog() {
        dialogRef.current.close()
    }

    useEffect(() => {

    }, [])

    return (
        <dialog ref={dialogRef}>
            <div className="bg-black/10 backdrop-blur fixed inset-0 flex flex-col justify-center px-4">
                <Card className="text-center text-white px-2 pt-4">
                    <p className="mb-4">
                        Are you sure?
                    </p>
                    <div className="flex gap-2">
                        <Button
                            className="bg-green-900 flex-grow"
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