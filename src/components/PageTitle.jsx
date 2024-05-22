import { twMerge } from "tailwind-merge"

export default function PageTitle({children, className, ...rest}) {
    const PageTitleCSS = twMerge(
        "col-span-4 col-start-2 text-center font-bold",
        className
    )
    
    return (
        <h1
            className={PageTitleCSS}
            {...rest}
        >
            {children}
        </h1>
    )
}