import { twMerge } from "tailwind-merge"

export default function TextInput({className, ...rest}) {
    const TextInputCSS = twMerge(
        "py-2 px-4 bg-white/10 rounded-lg text-center",
        className
    )

    return (
        <input 
            type="text" 
            className={TextInputCSS}
            {...rest}
        />
    )
}