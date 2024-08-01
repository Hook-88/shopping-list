import { twMerge } from "tailwind-merge"

export default function MenuItem({children, className}) {
    const liClassName = twMerge(
        "border-b border-white/30 last:border-none",
        className
    )
    
    return (
        <li className={liClassName}>
            {children}
        </li>
    )
}