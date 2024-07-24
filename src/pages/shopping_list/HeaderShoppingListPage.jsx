import PageHeader from "../../components/PageHeader"
import MenuShoppingList from "./MenuShoppingList"

export default function HeaderShoppingListPage() {
    
    return (
        <PageHeader>
            <h1 className="col-span-4 col-start-2 text-center">Shopping List</h1>
            <MenuShoppingList />
        </PageHeader>
    )
}