import { twMerge } from "tailwind-merge"

export default function Card({children, className}) {
    const CardClassName = twMerge(
        "bg-white/10 rounded px-4 py-2",
        className
    )
    
    return (
        <div className={CardClassName}>
            {children}
        </div>
    )
}