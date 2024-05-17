import { twMerge } from "tailwind-merge"

export default function ListItem({children, className, ...rest}) {
    const listItemCSS = twMerge(
        "py-2",
        className
    )
    
    return (
        <li 
            className={listItemCSS}
            {...rest}
        >
            {children}
        </li>
    )
}