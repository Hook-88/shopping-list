import { BrowserRouter, Routes, Route } from "react-router-dom"
import ShoppingListPage from "./pages/ShoppingListPage"
import RecipesPage from "./pages/RecipesPage"
import RecipePage from "./pages/RecipePage"
import EditRecipePage from "./pages/EditRecipePage"
import EditRecipeNamePage from "./pages/EditRecipeNamePage"

export default function App() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ShoppingListPage />}/>
                <Route path="recipes" element={<RecipesPage />}/>
                <Route path="recipes/:id" element={<RecipePage />}/>
                <Route path="recipes/:id/edit" element={<EditRecipePage />}/>
                <Route path="recipes/:id/edit/name" element={<EditRecipeNamePage />}/>
            </Routes>
        </BrowserRouter>
    )
  }