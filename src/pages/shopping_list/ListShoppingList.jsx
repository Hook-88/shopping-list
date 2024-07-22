import List from "../../components/List/List"

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
                        <List.Item key={item.id}>
                            {item.name}
                        </List.Item>
                    ))
                }
            </List.Body>
        </List>
    )
}