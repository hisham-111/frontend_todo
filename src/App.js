import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomeScreenComponents/home.jsx";
import TodoPage from "./pages/todoPage/todoPage.jsx";

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="/TodoPage" element={<TodoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
