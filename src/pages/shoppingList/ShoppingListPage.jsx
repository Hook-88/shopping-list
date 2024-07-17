import { FaEllipsis, FaMinus, FaPlus } from "react-icons/fa6"
import PageHeader from "../../components/PageHeader/PageHeader"
import { ITEMS } from "../../data"
import List from "../../components/List/List"
import Card from "../../components/Card"


export default function ShoppingListPage() {
    
    return (
        <>
            <PageHeader>
                <PageHeader.Title>Shopping list</PageHeader.Title>
                <button className="col-start-6 flex items-center justify-center">
                    <FaEllipsis />
                </button>
            </PageHeader>
            <main className="px-4 mt-12">
                <List>
                    <List.Header>
                        <List.Progress />
                        <button>
                            <small>Hide selected</small>
                        </button>
                    </List.Header>
                    <List.List>
                    {
                        ITEMS.map(item => (
                            <li key={item.id}>
                                <Card className="flex items-center justify-between">
                                    {item.name}
                                    { item.quantity > 1 && ` (${item.quantity}x)` }
                                    <div className="flex gap-2">
                                        {
                                            item.quantity > 1 && (
                                                <button className="p-1 border rounded border-white/30 bg-red-900">
                                                    <FaMinus />
                                                </button>
                                            )
                                        }
                                        <button className="p-1 border rounded border-white/30 bg-sky-900">
                                            <FaPlus />
                                        </button>
                                    </div>
                                </Card>
                            </li>
                        ))
                    }
                    </List.List>
                </List>
            </main>
        </>
    )
}