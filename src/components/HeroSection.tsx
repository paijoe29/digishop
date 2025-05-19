import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import ProductCard from './ProductCard';
import BuyProductDialog from './BuyProductDialog'; // Import dialog
// Tidak perlu import getProductImageUrl di sini karena ProductCard sudah menggunakannya

interface Product { // Pastikan interface ini konsisten
  id: number;
  name: string;
  price: string;
  description: string;
}

const bundleProduct: Product[] = [ // Ubah menjadi array agar konsisten
  {
    id: 101, // ID unik untuk bundle
    name: 'Paket Bundle Eksklusif!',
    price: 'Rp 499.000',
    description: 'Dapatkan semua produk digital unggulan kami dalam satu paket hemat. Penawaran terbatas, jangan sampai kehabisan!',
  },
];

// GANTI DENGAN NOMOR WHATSAPP ANDA YANG AKTIF (format: 628xxxxxxxxxx)
const YOUR_WHATSAPP_NUMBER_HERO = "6281234567890"; // CONTOH! (bisa sama atau beda dengan ProductGrid)

const HeroSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [isHeroDialogOpen, setIsHeroDialogOpen] = useState(false);
  const [selectedHeroProduct, setSelectedHeroProduct] = useState<Product | null>(null);

  const handleOpenHeroDialog = (product: Product) => {
    setSelectedHeroProduct(product);
    setIsHeroDialogOpen(true);
  };

  return (
    <section ref={ref} className="bg-white text-gray-800 py-20 overflow-hidden dark:bg-slate-900 dark:text-gray-200">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className={cn(
            "flex-1 text-center md:text-left",
            inView && "animate-in fade-in-from-left duration-700 ease-out"
          )}>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-black dark:text-white">
              Transformasi Digital Anda Dimulai Di Sini
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-400">
              Temukan koleksi produk digital inovatif yang dirancang khusus untuk membantu Anda mencapai kesuksesan. Dari template website yang elegan, ebook panduan mendalam, hingga aset desain premium, kami menyediakan alat yang Anda butuhkan untuk meningkatkan proyek, bisnis, atau keterampilan kreatif Anda. Jelajahi solusi yang efisien dan berkualitas tinggi.
            </p>
            <div className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center md:justify-start",
              inView && "animate-in fade-in-from-left duration-700 ease-out delay-200"
            )}>
              <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-600 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:text-black">
                Jelajahi Produk Unggulan
              </Button>
              <Button variant="link" className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-500">
                 Pelajari Lebih Lanjut <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className={cn(
            "flex-1 w-full md:w-auto flex justify-center md:justify-end",
            inView && "animate-in fade-in-from-right duration-700 ease-out delay-400"
          )}>
            <Carousel className="w-full max-w-sm md:max-w-md lg:max-w-lg">
              <CarouselContent className="-ml-4">
                {bundleProduct.map((item) => (
                  <CarouselItem key={item.id} className="pl-4 basis-full">
                    <div className="p-1 h-full">
                       {/* ProductCard sudah menggunakan getProductImageUrl */}
                       <ProductCard product={item} onBuyNowClick={handleOpenHeroDialog} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
      <BuyProductDialog
        isOpen={isHeroDialogOpen}
        onOpenChange={setIsHeroDialogOpen}
        product={selectedHeroProduct}
        whatsappNumber={YOUR_WHATSAPP_NUMBER_HERO}
      />
    </section>
  );
};

export default HeroSection;