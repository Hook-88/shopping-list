import List from "../components/List"
import ListItem from "../components/ListItem"
import { FaCheck } from "react-icons/fa6"
import getFirstCharUpperCase from "../utility/getFirstCharUpperCase"

export default function ShoppingListPageItemsList({shoppingList, toggleChecked}) {
    
    return (
        <List>
            {
                shoppingList.map((item, index, arr) => {
                    let liCSS;

                    if ( index !== (arr.length - 1) ) {
                        liCSS += " shadow-[rgba(100,100,100,0.5)_0px_1px_0px_0px]"
                    }

                    if (item.checked) {
                        liCSS += " text-white/40 line-through"
                    }

                    return (
                        <ListItem
                            key={item.id}
                            className={liCSS}
                            onClick={() => toggleChecked(item.id)}
                        >
                            {getFirstCharUpperCase(item.name)}
                            {item.checked && <FaCheck />}
                        </ListItem>
                    )
                })
            }
        </List>
    )
}