import { useState } from "react"

export default function useFilter() {
    const [filters, setFilters] = useState([])

    function addFilter(filterString) {
        if (filters.includes(filterString)) {    
            
            return
        }

        setFilters(prevFilters => [...prevFilters, filterString])
    }

    function removeFilter(filterString) {
        if (!filters.includes(filterString)) {    
            
            return
        }

        setFilters(prevFilters => prevFilters.filter(filter => filter !== filterString))
    }

    function clearFilters() {
        setFilters([])
    }

    return [
        filters, 
        {
            addFilter, 
            removeFilter, 
            clearFilters

        }

    ]
}