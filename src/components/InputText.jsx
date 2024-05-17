import { twMerge } from "tailwind-merge"

export default function InputText({className, ...rest}) {
    const InputTextCSS = twMerge(
        "py-2 rounded-lg bg-white/10 text-center font-bold",
        className 
    )

    return (
        <input 
            type="text" 
            className={InputTextCSS}
            {...rest}
        />
    )
}