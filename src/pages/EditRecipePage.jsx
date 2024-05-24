import { Link, useParams } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import PageLink from "../components/PageLink"
import PageMain from "../components/PageMain"
import PageTitle from "../components/PageTitle"
import { FaAngleRight, FaCheck, FaPlus } from "react-icons/fa6"
import { db } from "../firebase/firebase"
import getFirstCharUpperCase from "../utility/getFirstCharUpperCase"
import { useState, useEffect } from "react"
import { onSnapshot, doc } from "firebase/firestore"
import List from "../components/List"
import ListItem from "../components/ListItem"

export default function EditRecipePage() {
    const {id} = useParams()
    const [recipe, setRecipe] = useState({})
    
    useEffect(() => {
        const unsub = onSnapshot(doc(db, "recipes", id), snapshot => {
            //sync up with local state
            const recipeObj = {
                ...snapshot.data(),
                ingredients: snapshot.data().ingredients.map(ingredient => ({...ingredient, selected: false})),
                id: snapshot.id
            }

            setRecipe(recipeObj)
        })

        return unsub
    }, [])

    // TODO add logic to add ingredients to shoppinglist
    
    return (
        Object.keys(recipe).length > 0 ?
        <>
            <PageHeader>
                <PageTitle>EDIT RECIPE</PageTitle>

                <button
                    className="flex items-center justify-end pr-4"
                    // onClick={toggleOnAddItem}
                >
                    {/* { onAddItem ? <FaCheck /> : <FaPlus /> } */}
                    <FaPlus />
                </button>
            </PageHeader>

            <PageMain>
                <div>
                <small className="ml-4 text-white/50">NAME RECIPE</small>
                <PageLink to="name">{getFirstCharUpperCase(recipe.name)}</PageLink>
                </div>

                <div>
                    <small className="ml-4 text-white/50">INGREDIENTS</small>
                    <List>
                        {
                            recipe.ingredients.map((ingredient, index, arr) => {
                                let liCSS;

                                if ( index !== (arr.length - 1) ) {
                                    liCSS += " shadow-[rgba(100,100,100,0.5)_0px_1px_0px_0px]"
                                }

                                return (
                                    <Link
                                        to={`ingredients/${ingredient.id}`}
                                        key={ingredient.id}
                                    >
                                        <ListItem
                                            className={liCSS}
                                        >
                                            {getFirstCharUpperCase(ingredient.name)}
                                            <FaAngleRight />
                                        </ListItem>
                                    </Link>
                                )
                            })
                        }
                    </List>
                </div>

            </PageMain>
        </> : null
    )
}