import { BrowserRouter, Routes, Route } from "react-router-dom"
import ShoppingListPage from "./pages/ShoppingListPage"
import RecipesPage from "./pages/RecipesPage"
import RecipePage from "./pages/RecipePage"

export default function App() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ShoppingListPage /> }/>
                <Route path="/recipes" element={<RecipesPage />}/>
                <Route path="/recipes/:id" element={<RecipePage />}/>
            </Routes>
        </BrowserRouter>
    )
  }