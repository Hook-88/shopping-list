import { FaCheck } from "react-icons/fa6"
import { CgClose } from "react-icons/cg"

export default function DialogCard({question, closeConfirm, confirmAction}) {
    
    return (
        <div className="fixed inset-0 grid place-content-center backdrop-blur-md bg-white/20">
            <div className="w-full max-w-lg bg-[#171717] text-white grid rounded-lg">
            <h2 className="py-2 px-4 shadow-[rgba(100,100,100,0.3)_0px_1px_0px_0px]">
                {question}
            </h2>
            <button 
                className="flex justify-center items-center py-2 mx-2 shadow-[rgba(100,100,100,0.3)_0px_1px_0px_0px] gap-2"
                onClick={confirmAction}
                onOpenAutoFocus={(e) => e.preventDefault()}
            >
                Yes <FaCheck className="text-green-700"/>
            </button>

            <button 
                className="flex justify-center items-center py-2 gap-2"
                onClick={closeConfirm}
            >
                No <CgClose className="text-red-700 text-lg"/>
            </button>
            </div>
        </div>
    )
}