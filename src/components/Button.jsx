import { twMerge } from "tailwind-merge"

export default function Button({children, className, ...rest}) {
    const ButtonClassName = twMerge(
        "px-4 py-1 border border-white/30 rounded",
        className
    )

    return (
        <button 
            className={ButtonClassName}
            {...rest}
        >
            {children}
        </button>
    )
}