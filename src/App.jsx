import { BrowserRouter, Routes, Route } from "react-router-dom"
import ShoppingListPage from "./pages/shopping_list/ShoppingListPage"

export default function App() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ShoppingListPage />}/>
            </Routes>
        </BrowserRouter>
    )
  } 