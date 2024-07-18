import { useState } from "react"

export default function useFilter(initalValue) {
    const [filterArr, setFilterArr] = useState(initalValue)

    function addFilter(filter) {
        setFilterArr(prevFilterArr => {
            const inArr = prevFilterArr.find(filterItem => filterItem === filter)

            if (inArr) {
                
                return prevFilterArr
            }

            return [...prevFilterArr, filter]
        })
    }

    function removeFilter(filter) {
        setFilterArr(prevFilterArr => {
            const inArr = prevFilterArr.find(filterItem => filterItem === filter)

            if (!inArr) {
                
                return prevFilterArr
            }

            return prevFilterArr.filter(filterItem => filterItem !== filter)
        })
    }

    return [filterArr, addFilter, removeFilter]
}