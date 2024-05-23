import { useState } from "react"
import Form from "./Form"
import TextInput from "./TextInput"

export default function AddItemForm({onSubmit = () => {}}) {
    const [formData, setFormData]= useState("")

    function handleChange(event) {
        setFormData(event.target.value)
    }

    function handleSubmit() {
        onSubmit(formData)
        setFormData("")
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