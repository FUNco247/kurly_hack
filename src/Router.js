import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./routes/MainPage";
import CategoryPage from "./routes/CategoryPage";
import DetailPage from "./routes/DetailPage";
import NewsPage from "./routes/NewsPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:productId" element={<DetailPage />} />
        <Route path="/:categoryId" element={<CategoryPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
