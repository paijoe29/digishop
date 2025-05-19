import React, { useState } from 'react';
import ProductCard from './ProductCard';
import BuyProductDialog from './BuyProductDialog'; // Import dialog
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import { Separator } from "@/components/ui/separator";

// Definisikan ulang interface Product di sini atau import dari lokasi bersama jika ada
interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
}

const products: Product[] = [
  { id: 1, name: 'Ebook Panduan React Lengkap dari A sampai Z untuk Pemula', price: 'Rp 150.000', description: 'Panduan lengkap belajar React dari dasar hingga mahir.' },
  { id: 2, name: 'Template Website Minimalis Modern & Responsif', price: 'Rp 200.000', description: 'Template siap pakai dengan desain bersih dan modern.' },
  { id: 3, name: 'Icon Pack Premium (1000+ Ikon Vektor)', price: 'Rp 75.000', description: 'Koleksi icon berkualitas tinggi untuk berbagai proyek desain.' },
  { id: 4, name: 'Kursus Online Tailwind CSS: Kuasai dalam 7 Hari', price: 'Rp 300.000', description: 'Belajar styling cepat dan efisien dengan Tailwind CSS.' },
  { id: 5, name: 'Kit Desain UI/UX Pro untuk Figma & Sketch', price: 'Rp 250.000', description: 'Aset lengkap untuk mempercepat alur kerja desain UI/UX Anda.' },
  { id: 6, name: 'Plugin WordPress Kustom: Optimasi SEO Otomatis', price: 'Rp 400.000', description: 'Plugin unik untuk menambahkan fungsionalitas khusus ke situs Anda.' },
  { id: 7, name: 'Mockup Mug Couple Keren', price: 'Rp 50.000', description: 'Mockup realistis untuk presentasi desain mug Anda.' },
  { id: 8, name: 'Desain Presentasi Bisnis Profesional (PPT & Keynote)', price: 'Rp 120.000', description: 'Template presentasi yang memukau untuk meeting penting.' },
];

// GANTI DENGAN NOMOR WHATSAPP ANDA YANG AKTIF (format: 628xxxxxxxxxx)
const YOUR_WHATSAPP_NUMBER = "6281234567890"; // CONTOH!

const ProductGrid: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenDialog = (product: Product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const sectionClasses = cn(
    "py-20 text-foreground scroll-mt-20", 
    "bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900", 
    inView && "animate-in fade-in slide-in-from-bottom duration-700 ease-out"
  );

  return (
    <React.Fragment>
      <div id="products" ref={ref} className={sectionClasses}>
        <div className="container mx-auto max-w-screen-xl px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-left sm:text-center">
            Produk Unggulan Kami
          </h2>
          <div className="flex justify-start sm:justify-center mb-6">
            <Separator className="w-24 h-1 bg-primary/80 rounded-full" />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 text-left sm:text-center">
            Temukan solusi digital yang Anda butuhkan.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {products.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onBuyNowClick={handleOpenDialog} 
              />
            ))}
          </div>
        </div>
      </div>
      <BuyProductDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        product={selectedProduct}
        whatsappNumber={YOUR_WHATSAPP_NUMBER}
      />
    </React.Fragment>
  );
};

export default ProductGrid;