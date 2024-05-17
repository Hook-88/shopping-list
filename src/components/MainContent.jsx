import { twMerge } from "tailwind-merge"

export default function MainContent({children, className, ...rest}) {
    const MainContentCSS = twMerge(
        "px-4 grid gap-4 mt-12",
        className
    )
    
    return (
        <main
            className={MainContentCSS}
            {...rest}
        >
            {children}
        </main>
    )
}