import PageHeader from "../../components/PageHeader/PageHeader"
import ListShoppingList from "./ListShoppingList"
import useShoppingList from "../../hooks/useShoppingList"
import ConfirmModal from "../../components/Modal/ConfirmModal"
import MenuShoppingList from "./MenuShoppingList"
import Card from "../../components/Card"
import AddItemToListEl from "./AddItemToListEl"
import { useStore } from "../../store/store"

export default function ShoppingListPage() {
    const shoppingList = useShoppingList()
    

    return (
        <>
            <PageHeader>
                <PageHeader.Title>Shopping list</PageHeader.Title>
                <MenuShoppingList 
                    shoppingList={shoppingList}
                />
            </PageHeader>
            <main className="px-4 mt-12">
                <ListShoppingList 
                    itemsArr={shoppingList}
                />
            </main>
            <AddItemToListEl />
            <ConfirmModal />
            
            
        </>
    )
}