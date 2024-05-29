import { twMerge } from "tailwind-merge"
import { Link } from "react-router-dom"
import { FaAngleRight } from "react-icons/fa6"

export default function LinkButton({children, className, ...rest}) {
    const LinkButtonClassName = twMerge(
        "col-span-12 bg-white/15 py-2 rounded flex justify-between px-4 items-center",
        className
    )
    
    return (
        <Link 
            className={LinkButtonClassName}
            {...rest}
        >
            {children}
            <FaAngleRight />
        </Link>
    )
}