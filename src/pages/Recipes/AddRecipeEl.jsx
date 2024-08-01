import Card from "../../components/Card"
import Button from "../../components/Button"
import { useContext } from "react"
import { RecipesPageContext } from "./MainRecipesPage"

export default function AddRecipeEl() {
    const { closeDialog } = useContext(RecipesPageContext)

    return (
        <Card className="text-center text-white px-2 bg-[#1a1a1a] mt-4">
            <form className="grid gap-2">
                <input 
                    type="text"
                    placeholder="Recipe..."
                    className="bg-white/10 py-1 rounded px-2"
                    required
                />

                <div className="flex gap-2">
                    <Button
                        className="bg-green-900 flex-grow"
                    >
                        Add Recipe
                    </Button>

                    <Button
                        className="bg-red-900"
                        type="button"
                        onClick={closeDialog}
                    >
                        Close
                    </Button>
                </div>
            </form>
        </Card>
    )
}