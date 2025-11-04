import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import FarmerDashboard from "./pages/FarmerDashboard";
import CitizenWellness from "./pages/CitizenWellness";
import MunicipalDashboard from "./pages/MunicipalDashboard";
import NotFound from "./pages/NotFound";
import { Header } from "./components/Header";

const queryClient = new QueryClient();

const App = () => {
  const [demoMode, setDemoMode] = useState(true);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Header demoMode={demoMode} onToggleDemo={() => setDemoMode(!demoMode)} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/farmer" element={<FarmerDashboard demoMode={demoMode} />} />
            <Route path="/citizen" element={<CitizenWellness demoMode={demoMode} />} />
            <Route path="/municipal" element={<MunicipalDashboard demoMode={demoMode} />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
