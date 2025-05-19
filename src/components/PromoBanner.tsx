import React from 'react'; // Hapus useState
import { X, Megaphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PromoBannerProps {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ isVisible, setIsVisible }) => { // Terima props
  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-[60]",
        "bg-red-600 text-white",
        "px-4 py-2.5",
        "flex items-center justify-between gap-4",
        "transition-all duration-300 ease-in-out",
        !isVisible && "transform -translate-y-full opacity-0"
      )}
      role="alert"
      aria-live="polite"
    >
      <div className="flex-grow flex items-center gap-2 marquee-container">
        <Megaphone size={20} className="flex-shrink-0" />
        <p className="text-sm font-medium marquee-text">
          <span className="font-semibold">Promo Spesial!</span> Dapatkan diskon 30% untuk semua produk digital. Gunakan kode: <span className="font-bold underline">HEMAT30</span>
        </p>
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsVisible(false)} // Panggil setter dari props
        className="text-white hover:bg-red-700 hover:text-white rounded-full h-7 w-7"
        aria-label="Tutup notifikasi promo"
      >
        <X size={18} />
      </Button>
    </div>
  );
};

export default PromoBanner;