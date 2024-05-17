import { twMerge } from "tailwind-merge"

export default function Header({children, className, ...rest}) {
    const HeaderCSS = twMerge(
        "text-center py-2 text-lg font-bold grid grid-cols-12",
        className
    )
    
    return (
        <header 
            className={HeaderCSS}
            {...rest}
        >
            {children}
        </header>
    )
}