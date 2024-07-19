import { FaEllipsis } from "react-icons/fa6"
import Menu from "../../components/Menu/Menu"
import { useStore } from "../../store/store"
import deleteFirebaseDoc from "../../firebase/firebaseUtility/deleteFirebaseDoc"
import addFirebaseDoc from "../../firebase/firebaseUtility/addFirebaseDoc"

export default function MenuShoppingList({shoppingList}) {
    const updateModal = useStore(state => state.updateModalObj)
    const updateModalAddItem = useStore(state => state.updateModalObjAddItem)
    const clearFilters = useStore(state => state.clearFilters)
    const someItemsChecked = shoppingList ? shoppingList.some(item => item.selected === true) : false
    
    function openAddItemEl() {
        updateModalAddItem({
            onSubmit: handleOnSubmit
        })
    }

    function handleOnSubmit(itemObj) {
        addFirebaseDoc("shoppingList", itemObj)
    }

    function openDialog() {
        updateModal({
            question: "Remove checked items?",
            onConfirm: handleOnConfirm
        })
    }

    function handleOnConfirm() {
        deleteSelectedItems()
        clearFilters()
        updateModal(null)
    }

    function deleteSelectedItems() {
        shoppingList.filter(item => item.selected === true)
            .forEach(filteredItem => deleteFirebaseDoc("shoppingList", filteredItem.id))
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
                        className="px-3 py-1 disabled:text-white/20"
                        onClick={openDialog}
                        disabled={!someItemsChecked}

                    >
                        Remove
                    </button>
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}