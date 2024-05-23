import { FaCheck } from "react-icons/fa6"
import { IoClose } from "react-icons/io5"

export default function DialogContent({confrimQuestion, onConfirm, closeDialog}) {

    
    return (
        <div
            className="fixed inset-0 px-2 grid place-content-center backdrop-blur-sm bg-white/30"
        >
            <div
                className="bg-[#1a1a1a] text-white grid rounded-lg"
            >
                <p className="py-2 px-4 text-center shadow-[rgba(100,100,100,0.5)_0px_1px_0px_0px]">
                    {confrimQuestion}
                </p>
                <button 
                    className="py-2 shadow-[rgba(100,100,100,0.5)_0px_1px_0px_0px] flex items-center justify-center gap-1"
                    onClick={onConfirm}
                >
                    Yes
                    <FaCheck className="text-green-600"/>
                </button>
                <button 
                    className="py-2 flex items-center justify-center gap-1"
                    onClick={closeDialog}
                >
                    No
                    <IoClose className="text-xl text-red-700"/>
                </button>
            </div>
        </div>
    )
}