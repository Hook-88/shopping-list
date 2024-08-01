import { Link } from "react-router-dom"
import PageHeader from "../../components/PageHeader"
import { FaAngleRight } from "react-icons/fa6"
import List from "../../components/List/List"
import getStringFirstCharCap from "../../utility/getStringFirstCharCap"

export default function ListRecipes({listItemArr}) {
    
    return (
        <List>
            <List.Body>
                {
                    listItemArr.map(recipe => (
                        <List.Item key={recipe.id}>
                            <Link
                                to={recipe.id} 
                                className="
                                    border border-blue-700/60 bg-transparent text-blue-700 
                                    flex items-center justify-between px-4 py-2 rounded
                                "
                            >
                                {getStringFirstCharCap(recipe.name)}
                                <FaAngleRight />
                            </Link>
                        </List.Item>
                    ))
                }
            </List.Body>
        </List>
    )
}