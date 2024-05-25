import { useEffect, useState } from "react"
import PageHeader from "../components/PageHeader"
import PageMain from "../components/PageMain"
import PageTitle from "../components/PageTitle"
import { addDoc, collection, onSnapshot } from "firebase/firestore"
import { db } from "../firebase/firebase"
import List from "../components/List"
import ListItem from "../components/ListItem"
import { Link, useNavigate } from "react-router-dom"
import getFirstCharUpperCase from "../utility/getFirstCharUpperCase"
import { FaAngleRight, FaPlus, FaCheck, FaAngleLeft } from "react-icons/fa6"
import AddItemForm from "../components/AddItemForm"
import PageLink from "../components/PageLink"
import GoBackLink from "../components/GoBackLink"

export default function RecipesPage() {
    const [recipes, setRecipes] = useState([])
    const [onAddItem, setOnAddItem] = useState(false)
    const navigate = useNavigate()

    function toggleOnAddItem() {
        setOnAddItem(prevOnAddItem => !prevOnAddItem)
    }

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "recipes"), snapshot => {
            //sync up with local state
            const newRecipesArray = snapshot.docs.map(doc => ({name: doc.data().name, id: doc.id}))

            setRecipes(newRecipesArray)
        })

        return unsub
    }, [])

    async function AddRecipe(recipeName) {
        const recipeObj = {
            name: recipeName.toLowerCase(),
            ingredients: []
        }
        const docref = await addDoc(collection(db, "recipes"), recipeObj)
        navigate(`${docref.id}/edit`)

    }
    
    return (
        <>
            <PageHeader>
                <GoBackLink
                    className="col-span-2"
                    to="./.."
                >
                    Shopping list
                </GoBackLink>
                <PageTitle
                    className="col-span-2 col-start-3"
                >
                    RECIPES
                </PageTitle>
                <button
                    className="flex items-center justify-end pr-4 col-start-6"
                    onClick={toggleOnAddItem}
                >
                    { onAddItem ? <FaCheck /> : <FaPlus /> }
                </button>
            </PageHeader>
            <PageMain>
                <List>
                    {
                        recipes
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((recipe, index, arr) => {
                                let liCSS;

                                if( index !== (arr.length - 1) ) {
                                    liCSS = " shadow-[rgba(100,100,100,0.5)_0px_1px_0px_0px]"
                                }

                                return (
                                    <Link
                                        key={recipe.id}
                                        to={recipe.id}
                                    >
                                        <ListItem className={liCSS}>
                                            {getFirstCharUpperCase(recipe.name)}
                                            <FaAngleRight />
                                        </ListItem>
                                    </Link>
                                )
                            })
                    }
                </List>

                { onAddItem && <AddItemForm onSubmit={AddRecipe}/>  }

            </PageMain>
        </>
    )
}