import { useState } from "react"
import Form from "./Form"
import InputText from "./InputText"

export default function AddItemInput({onSubmit, placeholder}) {
    const [formData, setFormData] = useState("")

    function handleFormChange(event) {
        setFormData(event.target.value)
    }

    function handleSubmit() {
        onSubmit(formData)
        setFormData("")
    }


    
    return (
        <Form className="grid" onSubmit={handleSubmit}>
            <InputText 
                placeholder={placeholder}
                onChange={handleFormChange}
                value={formData}
                autoFocus
            />
        </Form>
    )
}