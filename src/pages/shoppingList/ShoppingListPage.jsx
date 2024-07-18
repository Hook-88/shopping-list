import PageHeader from "../../components/PageHeader/PageHeader"
import ListShoppingList from "./ListShoppingList"
import useShoppingList from "../../hooks/useShoppingList"
import ConfirmModal from "../../components/Modal/ConfirmModal"
import MenuShoppingList from "./MenuShoppingList"
import Card from "../../components/Card"

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

            <dialog open>
                <div className="fixed inset-0 w-full h-full bg-black/20 backdrop-blur-sm text-white flex items-center px-4">
                    <Card className="bg-[#1a1a1a] py-2 px-2 border border-white/10 w-full">
                        <form action="" className="grid gap-2">
                            <input 
                                type="text" 
                                className="bg-white/10 rounded px-2 py-1"
                                placeholder="item..."
                            />
                            <div className="flex gap-2">
                                <button 
                                    className="py-1 px-6 rounded bg-green-900 flex-grow border border-white/10"
                                    // onClick={handleOnConfirm}
                                >
                                    Yes
                                </button>

                                <button 
                                    className="py-1 px-4 rounded bg-red-900 border border-white/10"
                                    type="button"
                                    // onClick={closeModal}
                                >
                                    No
                                </button>

                            </div>
                        </form>
                        
                    </Card>
                </div>
            </dialog>
                
            <ConfirmModal />
        </>
    )
}