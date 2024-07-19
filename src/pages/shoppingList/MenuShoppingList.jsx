import { FaEllipsis } from "react-icons/fa6"
import PageHeader from "../../components/PageHeader/PageHeader"
import ListShoppingList from "./ListShoppingList"
import useShoppingList from "../../hooks/useShoppingList"
import Menu from "../../components/Menu/Menu"
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore"
import { db } from "../../firebase/config"
import ConfirmModal from "../../components/Modal/ConfirmModal"
import { useStore } from "../../store/store"

export default function MenuShoppingList({shoppingList}) {
    const updateModal = useStore(state => state.updateModalObj)
    const updateModalAddItem = useStore(state => state.updateModalObjAddItem)

    async function addFirebaseDoc(itemObj) {
        const collectionRef = collection(db, "shoppingList")

        await addDoc(collectionRef, itemObj)
    }

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

    function openAddItemEl() {
        updateModalAddItem({
            onSubmit: addFirebaseDoc
        })
    }

    return (
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
                        onClick={openAddItemEl}
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
    )
}