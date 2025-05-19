// src/utils/productImages.ts

// Objek yang memetakan ID produk ke URL gambar
// GANTI URL PLACEHOLDER INI DENGAN URL GAMBAR PRODUK ANDA YANG SEBENARNYA
const productImages: { [key: number]: string } = {
  1: '/images/contoh.png', // Contoh: Ganti dengan URL gambar Ebook React
  2: '/images/contoh.png', // Contoh: Ganti dengan URL gambar Template Website
  3: '/images/contoh.png', // Contoh: Ganti dengan URL gambar Icon Pack
  4: '/images/contoh.png', // Contoh: Ganti dengan URL gambar Kursus Tailwind
  5: '/images/contoh.png', // Contoh: Ganti dengan URL gambar UI/UX Kit
  6: '/images/contoh.png', // Contoh: Ganti dengan URL gambar Plugin WordPress
  7: '/images/contoh.png', // Contoh: Ganti dengan URL gambar Mockup Mug
  8: '/images/contoh.png', // Contoh: Ganti dengan URL gambar Presentasi Bisnis
  101: '/images/contoh.png', // Contoh: Ganti dengan URL gambar Produk Bundle
  // Tambahkan mapping untuk produk lain jika ada
};

/**
 * Mendapatkan URL gambar untuk ID produk tertentu.
 * @param productId ID produk.
 * @returns URL gambar atau undefined jika tidak ditemukan.
 */
export const getProductImageUrl = (productId: number): string | undefined => {
  return productImages[productId];
};