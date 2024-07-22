import { createContext } from "react"
import ListBody from "./ListBody"
import ListHeader from "./ListHeader"
import ListProgress from "./ListProgress"
import ListItem from "./ListItem"

const Listcontext = createContext()

export default function List({children, listItemsArr = []}) {
    
    return (
        <Listcontext.Provider value={{
            listItemsArr
        }}>
            <div>
                {children}
            </div>
        </Listcontext.Provider>
    )
}

List.Header = ListHeader
List.Progress = ListProgress
List.Body = ListBody
List.Item = ListItem


export { Listcontext }