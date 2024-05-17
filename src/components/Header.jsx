import { twMerge } from "tailwind-merge"

export default function Header({children, className, ...rest}) {
    const HeaderCSS = twMerge(
        "text-center py-2 text-lg font-bold grid grid-cols-12 fixed inset-x-0 top-0 bg-black",
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