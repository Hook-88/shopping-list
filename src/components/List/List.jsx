import ListHeader from "./ListHeader"
import ListProgress from "./ListProgress"
import ListList from "./ListList"

export default function List({children}) {
    
    return (
        <div>
            {children}
        </div>
    )
}

List.Header = ListHeader
List.Progress = ListProgress
List.List = ListList