import PageMain from "../../components/PageMain"
import Card from "../../components/Card"
import ListShoppingList from "./ListShoppingList"
import Button from "../../components/Button"
import { useContext } from "react"
import { ShoppingListPageContext } from "./ShoppingListPage"

export default function MainShoppingListPage() {
    const { shoppingList, openAddItemEl } = useContext(ShoppingListPageContext)
    
    return (
        <PageMain>
            {
                shoppingList && shoppingList.length > 0 ? (
                    <ListShoppingList 
                        itemsArr={shoppingList}
                    />
                ) : (
                    <Card className="py-3">
                        <Button 
                            className="w-full bg-green-900"
                            onClick={openAddItemEl}
                        >
                            Start adding items
                        </Button>
                    </Card>  
                )
            }
        </PageMain>
    )
}