import { FaEllipsis } from "react-icons/fa6"
import Menu from "../../components/Menu/Menu"
import { useContext } from "react"
import { RecipesPageContext } from "./RecipesPage"

export default function MenuRecipes() {
    const { openDialog } = useContext(RecipesPageContext)
    
    return (
        <Menu>
            <Menu.Button className="justify-end">
                <FaEllipsis />
            </Menu.Button>
            <Menu.Dropdown className="right-0 top-10">
                <Menu.Item>
                    <button 
                        className="px-4 py-2 text-nowrap"
                        onClick={openDialog}
                    >
                        Add recipe
                    </button>
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}