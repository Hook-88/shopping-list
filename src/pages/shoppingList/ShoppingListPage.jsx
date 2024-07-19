import PageHeader from "../../components/PageHeader/PageHeader"
import ListShoppingList from "./ListShoppingList"
import useShoppingList from "../../hooks/useShoppingList"
import ConfirmModal from "../../components/Modal/ConfirmModal"
import MenuShoppingList from "./MenuShoppingList"
import AddItemToListEl from "./AddItemToListEl"
import { useEffect } from "react"
import { useStore } from "../../store/store"
import addFirebaseDoc from "../../firebase/firebaseUtility/addFirebaseDoc"
import Card from "../../components/Card"

export default function ShoppingListPage() {
    const shoppingList = useShoppingList()
    const updateModalObjAddItem = useStore(state => state.updateModalObjAddItem)

    function openAddItemEl() {
        updateModalObjAddItem({
            onSubmit: handleOnSubmit
        })
    }

    function handleOnSubmit(itemObj) {
        addFirebaseDoc("shoppingList", itemObj)
    }

    return (
        <>
            <PageHeader>
                <PageHeader.Title>Shopping list</PageHeader.Title>
                <MenuShoppingList 
                    shoppingList={shoppingList}
                />
            </PageHeader>
            <main className="px-4 mt-12">
                {
                    shoppingList?.length > 0 ? (
                        <ListShoppingList 
                            itemsArr={shoppingList}
                        />
                    ) : (
                        <Card className="px-2">
                            <button 
                                className="bg-green-900 rounded border border-white/30 w-full py-1"
                                onClick={openAddItemEl}
                            >
                                Start Adding items
                            </button>
                        </Card>
                    )
                }
                
            </main>
            <AddItemToListEl 
                shoppingList={shoppingList}
            />
            <ConfirmModal />
            
            
        </>
    )
}