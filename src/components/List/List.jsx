import { twMerge } from "tailwind-merge"

export default function List({children, className, ...rest}) {
    const listCSS = twMerge(
        "bg-white/10 rounded-lg pl-4",
        className
    )
    
    return (
        <ul 
            className={listCSS}
            {...rest}
        >
            {children}
        </ul>
    )
}