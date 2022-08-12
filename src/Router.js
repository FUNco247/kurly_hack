import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./routes/MainPage";
import CategoryPage from "./routes/CategoryPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:categoryId" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
