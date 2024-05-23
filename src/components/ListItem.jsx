import { twMerge } from "tailwind-merge"

export default function ListItem({children, className, ...rest}) {
    const ListItemCSS = twMerge(
        "py-2 pr-4 flex items-center justify-between cursor-pointer",
        className
    )
    return (
        <li
            className={ListItemCSS}
            {...rest}
        >
            {children}
        </li>
    )
    
}