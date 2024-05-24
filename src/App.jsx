import { BrowserRouter, Routes, Route } from "react-router-dom"
import ShoppingListPage from "./pages/ShoppingListPage"
import RecipesPage from "./pages/RecipesPage"
import RecipeLayout from "./layout/RecipeLayout"
import RecipePage from "./pages/RecipePage"
import EditRecipePage from "./pages/EditRecipePage"

export default function App() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ShoppingListPage /> }/>
                <Route path="/recipes" element={<RecipesPage />}/>
                <Route path="/recipes/:id" element={<RecipeLayout />}>
                    <Route index element={<RecipePage />}/>
                    <Route path="edit" element={<EditRecipePage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
  }