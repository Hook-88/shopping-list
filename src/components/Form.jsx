export default function Form(
    {
        children, 
        onSubmit = () => {}, 
        ...rest
    }
) {
    
    function handleSubmit(e) {
        e.preventDefault()
        onSubmit()
    }

    return (
        <form
            onSubmit={handleSubmit}
            {...rest}
        >
            {children}
        </form>
    )
    
}