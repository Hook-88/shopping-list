import Header from "../components/Header"
import MainContent from "../components/MainContent"
import List from "../components/List/Index"
import getFirstCharCapped from "../utility/getFirstCharCapped"
import PageLink from "../components/PageLink"
import { Link, useLocation } from "react-router-dom"
import { FaAngleRight } from "react-icons/fa6"
import DialogCard from "../components/DialogCard"
import { useRef } from "react"

export default function EditRecipePage() {
    const { state } = useLocation()
    const dialogRef = useRef()

    function openConfirm() {
        dialogRef.current.showModal()
    }

    function closeConfirm() {
        dialogRef.current.close()
    }

    return (
        <>
            <Header>
                <h1 className="col-span-8 col-start-3">Edit {state.name.toUpperCase()}</h1>
            </Header>

            <MainContent>
                <div>
                    <h2 className="ml-4 mb-1 text-gray-400 font-thin text-sm">NAME RECIPE</h2>
                    <PageLink
                        to="name"
                    >
                        {getFirstCharCapped(state.name)}
                    </PageLink>
                </div>

                <div>
                    <h2 className="ml-4 mb-1 text-gray-400 font-thin text-sm">INGREDIENTS RECIPE</h2>
                    <List>
                        {
                            state.ingredients.map((ingredient, index, arr) => {
                                let liClassName = "flex items-center justify-between pr-4 cursor-pointer"

                                if ( index !== (arr.length - 1) ) {
                                    liClassName += " shadow-[rgba(100,100,100,0.3)_0px_1px_0px_0px]"
                                }

                                return (
                                    <Link
                                        key={ingredient.id}
                                        to={ingredient.id}
                                    >
                                        <List.Item
                                            className={liClassName}
                                        >
                                            {getFirstCharCapped(ingredient.name)}
                                            <FaAngleRight />
                                        </List.Item>
                                    </Link>
                                )
                            })
                        }
                    </List>
                </div>


                <button
                    className="bg-white/10 py-2 px-4 mt-4 rounded-lg flex items-center justify-center text-red-700 disabled:text-white/40"
                    // disabled={ recipe.ingredients.every(item => item.checked === false) }
                    onClick={openConfirm}
                    >
                    Delete recipe
                </button>

            </MainContent>

            <dialog
                ref={dialogRef}
                onClick={closeConfirm}
            >
                <DialogCard 
                    question="Are you sure you want to delete this recipe?"
                    // confirmAction={addSelectionToShoppingList}
                    closeConfirm={closeConfirm}
                />
            </dialog>
        </>
    )
    
}