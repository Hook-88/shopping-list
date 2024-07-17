import ListHeader from "./ListHeader"
import ListProgress from "./ListProgress"
import ListList from "./ListList"
import { createContext } from "react"

const ListContext = createContext()

export default function List({children, itemsArr}) {
    
    return (
        <ListContext.Provider value={{itemsArr}}>
            <div>
                {children}
            </div>
        </ListContext.Provider>
    )
}

List.Header = ListHeader
List.Progress = ListProgress
List.List = ListList

export { ListContext }