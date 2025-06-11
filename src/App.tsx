import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function IframeWrapper({ src }: { src: string }) {
  return (
    <iframe
      src={src}
      className="w-full h-full border-0"
      title="App"
      sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
    />
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="h-screen w-full">
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Iframe routes for external apps */}
            <Route path="/kyc/*" element={<IframeWrapper src="https://vitalvida-kyc.vercel.app" />} />
            <Route path="/inventory/*" element={<IframeWrapper src="https://vitalvida-inventory-command-35.vercel.app" />} />
            <Route path="/telesales/*" element={<IframeWrapper src="https://vitalvida-telesales-dashboard.vercel.app" />} />
            <Route path="/delivery/*" element={<IframeWrapper src="https://vitalvida-delivery-pulse.vercel.app" />} />
            <Route path="/command-center/*" element={<IframeWrapper src="https://vitalvida-command-center-elite.vercel.app" />} />
            <Route path="/investor/*" element={<IframeWrapper src="https://vitalvida-investor-cockpit.vercel.app" />} />
            <Route path="/ceo/*" element={<IframeWrapper src="https://vitalvida-ceo-center-africa.vercel.app" />} />
            {/* Keep your existing 404 route at the end */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
