import { BrowserRouter, Routes, Route } from "react-router-dom"
import ShoppingListPage from "./pages/ShoppingListPage"
import RecipesPage from "./pages/RecipesPage"
import RecipeLayout from "./layout/RecipeLayout"
import RecipePage from "./pages/RecipePage"
import EditRecipePage from "./pages/EditRecipePage"
import EditRecipeNamePage from "./pages/EditRecipeNamePage"
import EditIngredientPage from "./pages/EditIngredientPage"

export default function App() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ShoppingListPage /> }/>
                <Route path="/recipes" element={<RecipesPage />}/>
                <Route path="/recipes/:id" element={<RecipeLayout />}>
                    <Route index element={<RecipePage />}/>
                    <Route path="edit" element={<EditRecipePage />}/>
                    <Route path="edit/name" element={<EditRecipeNamePage />}/>
                    <Route path="edit/ingredients/:ingredientId" element={<EditIngredientPage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
  }