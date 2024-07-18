import { FaEllipsis } from "react-icons/fa6"
import PageHeader from "../../components/PageHeader/PageHeader"
import ListShoppingList from "./ListShoppingList"
import { useEffect, useState } from "react"
import useShoppingList from "../../hooks/useShoppingList"
import useFilter from "../../hooks/useFilter"


export default function ShoppingListPage() {
    // const [filter, setFilter] = useState(null)
    // const [filter, addFilter] = useFilter()
    const shoppingList = useShoppingList()

    function toggleFilter() {
        addFilter("notChecked")
        // setFilter(prevFilter => prevFilter ? clearFilters() : addFilterNotChecked())
    }

    // function addFilterNotChecked() {
    //     setFilter("notChecked")
    // }

    // function clearFilters() {
    //     setFilter(null)
    // }
    
    return (
        <>
            <PageHeader>
                <PageHeader.Title>Shopping list</PageHeader.Title>
                <button 
                    className="col-start-6 flex items-center justify-center"
                >
                    <FaEllipsis />
                </button>
            </PageHeader>
            <main className="px-4 mt-12">
                <ListShoppingList 
                    itemsArr={shoppingList}
                    // filter={filter}
                    toggleFilterFn={toggleFilter}
                />
            </main>
        </>
    )
}