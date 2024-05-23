import { twMerge } from "tailwind-merge"

export default function PageButton({children, className, ...rest}) {
    const PageButtonCSS = twMerge(
        "flex items-center justify-between py-2 px-4 bg-white/10 rounded-lg",
        className
    )
    
    return (
        <button
            className={PageButtonCSS}
            {...rest}
        >
            {children}
        </button>
    )
}