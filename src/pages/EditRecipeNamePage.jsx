import { useLocation, useParams } from "react-router-dom"
import Header from "../components/Header"
import MainContent from "../components/MainContent"
import InputText from "../components/InputText"
import Form from "../components/Form"
import getFirstCharCapped from "../utility/getFirstCharCapped"
import { doc, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"
import { useEffect, useState } from "react"

export default function EditRecipeNamePage() {
    const { id } = useParams()
    const [recipe, setRecipe] = useState(null)
    const [formData, setFormData] = useState("")

    function handleChange(event) {
        setFormData(event.target.value)
    }

    async function changeRecipeName() {
        const docRef = doc(db, "recipes", id)

        await updateDoc(docRef, {name: formData.toLowerCase()})
        setRecipe(prevFormData => ({...prevFormData, name: formData}))
    
    }

    useEffect(() => {
        const unsub = onSnapshot(doc(db, "recipes", id), snapshot => {
            //sync with local state
            setRecipe(snapshot.data())

        })

        return unsub
    }, [])

    useEffect(() => {
        if (recipe) {
            setFormData(recipe.name)
        }
        
    }, [recipe])

    
    return (
        recipe ?
        <>
            <Header>
                <h1 className="col-span-8 col-start-3">Edit {recipe.name.toUpperCase()}</h1>
            </Header>

            <MainContent>
                <Form 
                    className="grid"
                    onSubmit={changeRecipeName}
                >
                    <InputText 
                        placeholder="name recipe"
                        onChange={handleChange}
                        value={getFirstCharCapped(formData)} 
                    />
                </Form>
            </MainContent>
        </> : "loading...."
    )
}