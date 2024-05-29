export default function Form({children, onSubmit = () => {}, ...rest}) {
    
    function handleSubmit(event) {
        event.preventDefault()
        onSubmit()
    }
    
    return (
        <form 
            className="col-span-12 grid"
            onSubmit={handleSubmit} 
            {...rest}
        >
            {children}
        </form>
    )
}