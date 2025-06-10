import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function IframeWrapper({ src, title }: { src: string; title?: string }) {
  return (
    <div className="h-screen w-full flex flex-col">
      {title && (
        <header className="bg-gray-900 text-white px-6 py-4 shadow-lg">
          <h1 className="text-2xl font-bold">{title}</h1>
        </header>
      )}
      <div className="flex-1">
        <iframe
          src={src}
          className="w-full h-full border-0"
          title="App"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
        />
      </div>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="h-screen w-full">          <Routes>
            <Route path="/" element={<Index />} />
            {/* Iframe routes for external apps */}
            <Route path="/kyc/*" element={<IframeWrapper src="https://vitalvida-kyc.vercel.app" title="Vitalvida KYC & Recruitment Portal" />} />
            <Route path="/inventory/*" element={<IframeWrapper src="https://vitalvida-inventory-command-35.vercel.app" title="Vitalvida Inventory + DA Command Center" />} />
            <Route path="/telesales/*" element={<IframeWrapper src="https://vitalvida-telesales-dashboard.vercel.app" title="VITALVIDA TELESALES MODE" />} />
            <Route path="/delivery/*" element={<IframeWrapper src="https://vitalvida-delivery-pulse.vercel.app" title="VitalVida Portal" />} />
            <Route path="/command-center/*" element={<IframeWrapper src="https://vitalvida-command-center-elite.vercel.app" title="Vitalvida Financial Command Center" />} />
            <Route path="/investor/*" element={<IframeWrapper src="https://vitalvida-investor-cockpit.vercel.app" title="VitalVida Investor Portal" />} />
            {/* Keep your existing 404 route at the end */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;