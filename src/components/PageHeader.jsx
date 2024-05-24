import { twMerge } from "tailwind-merge"

export default function PageHeader({children, className, ...rest}) {
    const PageHeaderCSS = twMerge(
        "px-2 pt-3 pb-1 grid grid-cols-6 fixed inset-x-0 top-0 bg-black",
        className
    )
    
    return (
        <header
            className={PageHeaderCSS}
            {...rest}
        >
            {children}
        </header>
    )
}