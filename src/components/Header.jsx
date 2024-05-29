import { twMerge } from "tailwind-merge"

export default function Header({children, className}) {
    const HeaderClassName = twMerge(
        "font-bold px-4 grid grid-cols-12 text-lg fixed inset-x-0 top-0",
        className
    )
    
    return (
        <header className={HeaderClassName}>
            {children}
        </header>
    )
}