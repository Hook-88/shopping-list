import { FaEllipsis } from "react-icons/fa6"
import Menu from "../../components/Menu/Menu"
import { useContext } from "react"
import { ShoppingListPageContext } from "./ShoppingListPage"

export default function MenuShoppingList() {
    const { openConfirmDialog, shoppingList } = useContext(ShoppingListPageContext)
    const someItemsSelected = shoppingList ? shoppingList.some(item => item.selected === true) : false
    
    return (
        <Menu>
            <Menu.Button className="justify-end">
                <FaEllipsis />
            </Menu.Button>
            <Menu.Dropdown className="right-0 top-10">
                <Menu.Item>
                    <button className="px-4 py-2">
                        Add
                    </button>
                </Menu.Item>
                <Menu.Item>
                    <button 
                        className="px-4 py-2 disabled:text-white/30"
                        onClick={openConfirmDialog}
                        disabled={!someItemsSelected}
                    >
                        Remove
                    </button>
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}