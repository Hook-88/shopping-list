import { twMerge } from "tailwind-merge"



export default function PageHeaderTitle({children, className}) {
    const PageHeaderTitleClassName = twMerge(
        "col-span-4 col-start-2 text-nowrap text-lg text-center",
        className
    )
    
    return (
        <h1 className={PageHeaderTitleClassName}>{children}</h1>
    )
}