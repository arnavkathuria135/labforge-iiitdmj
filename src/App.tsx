import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Home from "./pages/Home";
import Facilities from "./pages/Facilities";
import Research from "./pages/Research";
import BooksPage from "./pages/publications/Books";
import PatentsPage from "./pages/publications/Patents";
import ArticlesPage from "./pages/publications/Articles";
import CurrentTeam from "./pages/people/Current";
import Alumni from "./pages/people/Alumni";
import Students from "./pages/people/Students";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications/books" element={<BooksPage />} />
            <Route path="/publications/patents" element={<PatentsPage />} />
            <Route path="/publications/articles" element={<ArticlesPage />} />
            <Route path="/people/current" element={<CurrentTeam />} />
            <Route path="/people/alumni" element={<Alumni />} />
            <Route path="/people/students" element={<Students />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;