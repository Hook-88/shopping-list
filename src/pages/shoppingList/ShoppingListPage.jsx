import { FaEllipsis } from "react-icons/fa6"
import PageHeader from "../../components/PageHeader/PageHeader"
import ListShoppingList from "./ListShoppingList"
import useShoppingList from "../../hooks/useShoppingList"
import Menu from "../../components/Menu/Menu"


export default function ShoppingListPage() {
    const shoppingList = useShoppingList()

    return (
        <>
            <PageHeader>
                <PageHeader.Title>Shopping list</PageHeader.Title>
                {/* <button 
                    className="col-start-6 flex items-center justify-center"
                >
                    <FaEllipsis />
                </button> */}
                <Menu
                    className="col-start-6 flex"
                >
                    <Menu.Button>
                        <FaEllipsis />
                    </Menu.Button>

                    <Menu.Dropdown>
                        <Menu.Item>Add</Menu.Item>
                        <Menu.Item>Remove</Menu.Item>
                    </Menu.Dropdown>
                </Menu>

            </PageHeader>
            <main className="px-4 mt-12">
                <ListShoppingList 
                    itemsArr={shoppingList}
                />

                
            </main>
        </>
    )
}