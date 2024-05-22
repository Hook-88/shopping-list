import { twMerge } from "tailwind-merge"
import { Link } from "react-router-dom"
import { FaAngleRight } from "react-icons/fa6"

export default function PageLink({children, className, ...rest}) {
    const PageLinkCSS = twMerge(
        "flex items-center justify-between py-2 px-4 bg-white/15 rounded-lg",
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