import React from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProductImageUrl } from '@/utils/productImages'; // Import utilitas gambar

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onBuyNowClick: (product: Product) => void; // Prop baru
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onBuyNowClick }) => {
  const originalPricePlaceholder = `Rp${(parseInt(product.price.replace(/\D/g, '')) * 1.3).toLocaleString('id-ID')}`;
  const imageUrl = getProductImageUrl(product.id); // Ambil URL gambar berdasarkan ID

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      {/* Area Gambar */}
      {imageUrl ? ( // Jika ada URL gambar
        <img
          src={imageUrl}
          alt={`Gambar produk ${product.name}`}
          className="w-full h-40 sm:h-48 object-cover" // object-cover untuk memastikan gambar mengisi area tanpa distorsi
        />
      ) : ( // Jika tidak ada URL gambar, tampilkan placeholder
        <div className="w-full h-40 sm:h-48 bg-gray-200 dark:bg-slate-700 flex items-center justify-center text-gray-500 dark:text-slate-400">
          <span className="text-xs sm:text-sm">Gambar Produk</span>
        </div>
      )}

      {/* Content Area */}
      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        <h3 className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-200 mb-1 truncate" title={product.name}>
          {product.name}
        </h3>
        
        <div className="flex items-center my-1 sm:my-1.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="text-gray-300 dark:text-gray-600 fill-current" />
          ))}
        </div>

        <p className="text-xs text-gray-400 dark:text-gray-500 line-through">
          {originalPricePlaceholder} 
        </p>

        <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mt-0.5">
          {product.price}
        </p>

        <Button 
          className="w-full mt-auto bg-yellow-500 text-black hover:bg-yellow-600 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:text-black"
          size="sm"
          onClick={() => onBuyNowClick(product)}
        >
          Beli Sekarang
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;