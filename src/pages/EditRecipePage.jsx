import { Link } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import PageLink from "../components/PageLink"
import PageMain from "../components/PageMain"
import PageTitle from "../components/PageTitle"
import { FaAngleRight, FaCheck, FaPlus } from "react-icons/fa6"
import getFirstCharUpperCase from "../utility/getFirstCharUpperCase"
import { useContext } from "react"
import List from "../components/List"
import ListItem from "../components/ListItem"
import { RecipeContext } from "../layout/RecipeLayout"

export default function EditRecipePage() {
    const { recipe } = useContext(RecipeContext)

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