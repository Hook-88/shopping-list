import { Link } from "react-router-dom"
import { FaAngleRight } from "react-icons/fa6"
import { twMerge } from "tailwind-merge"

export default function PageLink({children, className, ...rest}) {
    const PageLinkCSS = twMerge(
        "py-2 rounded-lg bg-white/10 px-4 flex items-center justify-between",
        className
    )

    return (
        <Link
            className={PageLinkCSS}
            {...rest}
        >
            {children}
            <FaAngleRight />
        </Link>
    )
    
}