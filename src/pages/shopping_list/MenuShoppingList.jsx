import { FaEllipsis } from "react-icons/fa6"
import Menu from "../../components/Menu/Menu"

export default function MenuShoppingList() {
    
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
                    <button className="px-4 py-2">
                        Remove
                    </button>
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}