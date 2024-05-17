import Header from "../components/Header"
import MainContent from "../components/MainContent"
import List from "../components/List/Index"
import { FaAngleRight, FaPlus, FaCheck } from "react-icons/fa6"
import { Link } from "react-router-dom"
import getFirstCharCapped from "../utility/getFirstCharCapped"
import AddItemInput from "../components/AddItemInput"
import { useEffect, useState } from "react"
import { addDoc, collection, onSnapshot } from "firebase/firestore"
import { db } from "../firebase/firebase"
import useStateAndToggle from "../hooks/useStateAndToggle"

export default function RecipesPage() {
    const [recipes, setRecipes] = useState(null)
    const [addRecipeOn, setAddRecipeOn, toggleAddRecipeOn] = useStateAndToggle(false)

    async function addRecipe(value) {
        await addDoc(collection(db, "recipes"), {
            name: value,
            ingredients: []
        })
        
    }

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "recipes"), snapshot => {
            //sync up with local state
            const newRecipesArray = snapshot.docs.map(doc => {

                return {
                    ...doc.data(),
                    id: doc.id
                }
            })

            setRecipes(newRecipesArray)
        })

        return unsub

    },[])
    
    return (
        <>
            <Header className="px-4">
                <h1 className="col-span-8 col-start-3">RECIPES</h1>
                <button 
                    className="flex items-center justify-end pr-3 col-span-2"
                    onClick={toggleAddRecipeOn}
                >
                    { addRecipeOn ? <FaCheck /> : <FaPlus />}
                </button>
            </Header>

            {
                recipes ?
                <MainContent>
                    <List>
                        {
                            recipes.map((recipe, index, arr) => {
                                let css = "flex items-center justify-between pr-4"
                                
                                if ( index !== (arr.length -1) ) {
                                    css += " shadow-[rgba(100,100,100,0.3)_0px_1px_0px_0px]"
                                }

                                return (
                                    <Link
                                        to={recipe.id}
                                        key={recipe.id}
                                        state={recipe}
                                    >
                                        <List.Item className={css}>
                                            {getFirstCharCapped(recipe.name)}
                                            <FaAngleRight />
                                        </List.Item>
                                    </Link>
                                )
                            })
                        }
                    </List>
                    {
                        addRecipeOn && 
                        <AddItemInput placeholder="Name recipe" onSubmit={addRecipe}/>
                    }

                </MainContent> : "loading"
            }
        </>
    )
}