import { useState } from "react"
import Form from "./Form"
import TextInput from "./TextInput"

export default function ChangeItemForm({onSubmit = () => {}, initialValue}) {
    const [formData, setFormData]= useState(initialValue)

    function handleChange(event) {
        setFormData(event.target.value)
    }

    function handleSubmit() {
        onSubmit(formData)
    }
    
    return (
        <Form
            className="grid"
            onSubmit={handleSubmit}
        >
            <TextInput 
                placeholder="Item"
                value={formData}
                onChange={handleChange}
                autoFocus 
            />
        </Form>
    )
}