import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AccountPage } from "./pages/AccountPage";
import { AdminArticleNewPage } from "./pages/AdminArticleNewPage";
import { AdminPage } from "./pages/AdminPage";
import { ArticlePage } from "./pages/ArticlePage";
import { ArticlesPage } from "./pages/ArticlesPage";
import { CategoryPage } from "./pages/CategoryPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectPage } from "./pages/ProjectPage";
import { RegisterPage } from "./pages/RegisterPage";
import { SubscriptionPage } from "./pages/SubscriptionPage";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return null;
}

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <ScrollToTop />
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artikel" element={<ArticlesPage />} />
          <Route path="/artikel/:slug" element={<ArticlePage />} />
          <Route path="/rubrik/:category" element={<CategoryPage />} />
          <Route path="/abo" element={<SubscriptionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/konto" element={<AccountPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/artikel-neu" element={<AdminArticleNewPage />} />
          <Route path="/projekt" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
