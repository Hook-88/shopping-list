import List from "../../components/List/List"
import ListItemDefault from "./ListItemDefault"
import ListItemSelected from "./ListItemSelected"
import toggleSelectFirebaseItem from "../../firebase/utility/toggleSelectFirebaseItem"

export default function ListShoppingList({itemsArr}) {

    
    return (
        <List 
            listItemsArr={itemsArr}
        >
            <List.Header>
                <List.Progress />
            </List.Header>
            <List.Body>
                {
                    itemsArr.map(item => (
                        <List.Item 
                            key={item.id}
                            onClick={() => toggleSelectFirebaseItem(item.id)}
                        >
                            {
                                item.selected ? <ListItemSelected item={item} /> : <ListItemDefault  item={item}/>
                            }
                        </List.Item>
                    ))
                }
            </List.Body>
        </List>
    )
}