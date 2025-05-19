import React, { useState } from 'react'; // Import useState
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import PromoBanner from "./components/PromoBanner";
import Footer from "./components/Footer";
import WhyOurProductsPage from "./pages/WhyOurProductsPage";
import { cn } from '@/lib/utils'; // Import cn

const queryClient = new QueryClient();

const App = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true); // Tambahkan state visibilitas banner

  // Hitung padding top berdasarkan visibilitas banner
  // Tinggi banner sekitar 58px (py-2.5 = 10px top/bottom + tinggi konten)
  const paddingTopClass = isBannerVisible ? 'pt-[58px]' : 'pt-0';

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {/* Teruskan state dan setter ke PromoBanner */}
            <PromoBanner isVisible={isBannerVisible} setIsVisible={setIsBannerVisible} />
            
            {/* Terapkan padding bersyarat menggunakan cn */}
            <div className={cn("flex-grow flex flex-col", paddingTopClass)}>
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/why-our-products" element={<WhyOurProductsPage />} />
                  <Route path="/products" element={<div className="p-8 text-center">Halaman Produk (Segera Hadir)</div>} />
                  <Route path="/contact" element={<div className="p-8 text-center">Halaman Kontak (Segera Hadir)</div>} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
            <Footer />
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;