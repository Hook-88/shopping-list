import { BrowserRouter, Routes, Route } from "react-router-dom"
import ShoppingListPage from "./pages/shopping_list/ShoppingListPage"
import RecipesPage from "./pages/Recipes/RecipesPage"

export default function App() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ShoppingListPage />}/>
                <Route path="/recipes" element={<RecipesPage />}/>
            </Routes>
        </BrowserRouter>
    )
  } 