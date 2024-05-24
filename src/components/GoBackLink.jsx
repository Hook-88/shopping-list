import { Link } from "react-router-dom"
import { FaAngleLeft } from "react-icons/fa6"
import { twMerge } from "tailwind-merge"

export default function GoBackLink({children, className, to}) {
    const GoBackLinkCSS = twMerge(
        "flex items-center text-sm text-blue-500",
        className
    )

    return (
        // <Link
        //     to={to}
        //     className="flex items-center justify-between py-2 px-4 bg-white/10 rounded-lg"
        // >
        //     <FaAngleLeft />
        //     {children}
        // </Link>
        <Link
            className={GoBackLinkCSS}
            to={to}
        >
            <span>
                <FaAngleLeft />
            </span>
            {children}
        </Link>
    )
}