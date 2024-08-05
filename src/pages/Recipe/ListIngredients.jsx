import { FaCheck } from "react-icons/fa6"
import List from "../../components/List/List"
import Card from "../../components/Card"
import getStringFirstCharCap from "../../utility/getStringFirstCharCap"
import { useContext } from "react"
import { RecipePageContext } from "./RecipePage"

export default function ListIngredients() {
    const { 
        toggleSelectIngredient, 
        localIngredients, 
        selectAllIngredients 
    }  = useContext(RecipePageContext)

    const allIngredientsSelected = localIngredients?.every(ingredient => ingredient.selected === true)

    return ( 
        localIngredients ? 
            <List listItemsArr={localIngredients}>
                <List.Header>
                    <List.Progress />
                        <button 
                            className="text-xs"
                            onClick={() => selectAllIngredients(!allIngredientsSelected)}
                        >
                            {
                                allIngredientsSelected ? 
                                    "Select none" : "Select all"
                            }
                        </button>
                </List.Header>
                <List.Body>
                    {
                        localIngredients.map(ingredient => {
                            
                            if (ingredient.selected) {
                                
                                return (
                                    <List.Item 
                                        className="border rounded border-white/50"
                                        key={ingredient.id}
                                        onClick={() => toggleSelectIngredient(ingredient.id)}
                                    >
                                        <Card className="flex items-center py-3">
                                            {getStringFirstCharCap(ingredient.name)}
                                            <FaCheck className="ml-auto"/>
                                        </Card>
                                    </List.Item>
                                )
                            }

                            return (
                                <List.Item 
                                    className="border rounded border-transparent"
                                    key={ingredient.id}
                                    onClick={() => toggleSelectIngredient(ingredient.id)}
                                >
                                    <Card className="flex items-center py-3">
                                        {getStringFirstCharCap(ingredient.name)}
                                    </Card>
                                </List.Item>
                            )
                        })
                    }
                </List.Body>
            </List> : "Loading..."
    )
}