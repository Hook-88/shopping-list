export default function InputTekst({...rest}) {
    
    return (
        <input
            {...rest}
            type="text" 
            className="py-2 text-center bg-white/10 rounded"
        />
    )
}