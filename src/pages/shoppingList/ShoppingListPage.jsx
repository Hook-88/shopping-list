import { FaEllipsis } from "react-icons/fa6"
import PageHeader from "../../components/PageHeader/PageHeader"
import { ITEMS } from "../../data"
import List from "../../components/List/List"


export default function ShoppingListPage() {
    
    return (
        <>
            <PageHeader>
                <PageHeader.Title>Shopping list</PageHeader.Title>
                <button className="col-start-6 flex items-center justify-center">
                    <FaEllipsis />
                </button>
            </PageHeader>
            <main className="px-4 mt-14">
                <List>
                    <List.Header>
                        <List.Progress />
                        <button>
                            <small>Hide selected</small>
                        </button>
                    </List.Header>
                    <ul>
                        {
                            ITEMS.map(item => (
                                <li key={item.id}>
                                    {item.name}
                                </li>
                            ))
                        }
                    </ul>

                </List>
            </main>
        </>
    )
}