import { FaEllipsis } from "react-icons/fa6"
import PageHeader from "../../components/PageHeader/PageHeader"
import ListShoppingList from "./ListShoppingList"
import useShoppingList from "../../hooks/useShoppingList"
import Menu from "../../components/Menu/Menu"
import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../../firebase/config"
import Card from "../../components/Card"
import { useRef } from "react"
import ConfirmModal from "../../components/Modal/ConfirmModal"
import { useStore } from "../../store/store"

export default function ShoppingListPage() {
    const shoppingList = useShoppingList()
    const updateModal = useStore(state => state.updateModalObj)
    
    const dialogRef = useRef()

    async function deleteFirebaseDoc(docId) {
        const docRef = doc(db, "shoppingList", docId)

        await deleteDoc(docRef)
    }

    function deleteSelectedItems() {
        shoppingList.filter(item => item.selected === true)
            .forEach(filteredItem => deleteFirebaseDoc(filteredItem.id))
    }

    function handleOnConfirm() {
        deleteSelectedItems()
        updateModal(null)
    }

    function openDialog() {
        updateModal({
            question: "Remove checked items?",
            onConfirm: handleOnConfirm
        })
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
                                onClick={openDialog}
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
            <ConfirmModal />
            {/* <dialog ref={dialogRef}>
                <div className="fixed inset-0 w-full h-full bg-black/20 backdrop-blur-sm text-white flex items-center justify-center">
                    <Card className="bg-[#1a1a1a] flex flex-col gap-4 py-4 border border-white/10">
                        <p className="text-center">
                            Are you sure?
                        </p>
                        <div className="flex gap-2">
                            <button className="py-1 px-6 rounded bg-green-900 flex-grow border border-white/10">
                                Yes
                            </button>

                            <button className="py-1 px-4 rounded bg-red-900 border border-white/10">
                                No
                            </button>

                        </div>
                    </Card>
                </div>
            </dialog> */}
        </>
    )
}