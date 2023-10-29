import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomeScreenComponents/home.jsx";
import ProtectedRoute from "./components/utils/protectedRoute.js";
import Unauthorized from "./pages/Unauthorized/Unauthorized.js";
import TodoPage from "./pages/todoPage/todoPage.jsx";
import NotFound from "./pages/404/404page.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/TodoPage"
          element={
            <ProtectedRoute>
              <TodoPage />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
