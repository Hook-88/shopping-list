import { twMerge } from "tailwind-merge"

export default function PageMain({children, className, ...rest}) {
    const PageMainCSS = twMerge(
        "mt-12 px-2 flex flex-col gap-4 pb-4",
        className
    )
    
    return (
        <main
            className={PageMainCSS}
            {...rest}
        >
            {children}
        </main>
    )
}