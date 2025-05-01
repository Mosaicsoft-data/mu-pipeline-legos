
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FeaturesPage from "./pages/FeaturesPage";
import PipelineBuilderPage from "./pages/PipelineBuilderPage";
import SolutionKitsPage from "./pages/SolutionKitsPage";
import DocsPage from "./pages/DocsPage";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AIPipelinesPage from "./pages/AIPipelinesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pipeline-builder" element={<PipelineBuilderPage />} />
          <Route path="/solution-kits" element={<SolutionKitsPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/AIPipelinesPage" element={<AIPipelinesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
