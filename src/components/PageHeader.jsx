import { twMerge } from "tailwind-merge"

export default function PageHeader({children, className, ...rest}) {
    const PageHeaderCSS = twMerge(
        "text-lg px-2 py-2 grid grid-cols-6 fixed inset-x-0 top-0 bg-black",
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