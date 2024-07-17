import ListHeader from "./ListHeader"
import ListProgress from "./ListProgress"

export default function List({children}) {
    
    return (
        <div>
            {children}
        </div>
    )
}

List.Header = ListHeader
List.Progress = ListProgress