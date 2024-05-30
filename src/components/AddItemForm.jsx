import { useState } from "react"
import Form from "./Form"
import InputTekst from "./InputText"

export default function AddItemForm({onSubmit = () => {}}) {
    const [formData, setFormData] = useState({})

    function handleFormChange(event) {
        const {name, value} = event.target

        setFormData(prevFormData => {

            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit() {
        onSubmit(formData)
        setFormData({itemName: ""})
    }

    return (
        <Form onSubmit={handleSubmit}>
            <InputTekst 
                placeholder="Item"
                autoFocus
                name="itemName"
                onChange={handleFormChange}
                value={formData.itemName ? formData.itemName : ""}
            />
        </Form>
    )
}