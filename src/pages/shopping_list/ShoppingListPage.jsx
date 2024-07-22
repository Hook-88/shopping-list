import { FaEllipsis } from "react-icons/fa6"
import Menu from "../../components/Menu/Menu"

export default function ShoppingListPage() {
    
    return (
        <>
            <header className="bg-white/10 px-4 py-2 text-lg grid grid-cols-6">
                <h1 className="col-span-4 col-start-2 text-center">Shopping List</h1>
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
            </header>
            <main>

            </main>
        </>
    )
}