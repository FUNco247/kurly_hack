import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./routes/MainPage";
import CategoryPage from "./routes/CategoryPage";
import DetailPage from "./routes/DetailPage";
import NewsPage from "./routes/NewsPage";
import ThanksPage from "./routes/ThanksPage";
import SubscribePage from "./routes/SubscribePage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/thanks" element={<ThanksPage />} />
        <Route path="/product/:productId" element={<DetailPage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
