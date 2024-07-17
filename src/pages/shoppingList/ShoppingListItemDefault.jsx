import Card from "../../components/Card"
import ButtonIncrement from "../../components/Buttons/ButtonIncrement"
import ButtonDecrement from "../../components/Buttons/ButtonDecrement"


export default function ShoppingListItemDefault({item}) {
    
    return (
        <Card className="flex items-center justify-between">
            {item.name}
            { item.quantity > 1 && ` (${item.quantity}x)` }
            <div className="flex gap-2">
                { item.quantity > 1 && <ButtonDecrement /> }
                <ButtonIncrement />
            </div>  
        </Card>
    )
}