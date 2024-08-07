import { forwardRef } from "react"

function Dialog({children}, ref) {
    
    return (
        <dialog ref={ref}>
            <div className="bg-black/10 backdrop-blur fixed inset-0 flex flex-col justify-center px-4 pb-4">
                {children}
            </div>
        </dialog>
    )
}

export const DialogEl = forwardRef(Dialog)