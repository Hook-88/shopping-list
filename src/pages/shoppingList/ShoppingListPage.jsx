import { FaEllipsis } from "react-icons/fa6"
import PageHeader from "../../components/PageHeader/PageHeader"
import ListShoppingList from "./ListShoppingList"
import useShoppingList from "../../hooks/useShoppingList"
import Menu from "../../components/Menu/Menu"
import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../../firebase/config"


export default function ShoppingListPage() {
    const shoppingList = useShoppingList()

    async function deleteFirbaseDoc(docId) {
        const docRef = doc(db, "shoppingList", docId)

        await deleteDoc(docRef)
    }

    return (
        <>
            <PageHeader>
                <PageHeader.Title>Shopping list</PageHeader.Title>
                <Menu
                    className="col-start-6 flex"
                >
                    <Menu.Button>
                        <FaEllipsis />
                    </Menu.Button>

                    <Menu.Dropdown>
                        <Menu.Item>
                            <button
                                className="px-3 py-1 text-right"
                            >
                                Add
                            </button>
                            
                        </Menu.Item>
                        <Menu.Item>
                            <button
                                className="px-3 py-1"
                            >
                                Remove
                            </button>
                        </Menu.Item>
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