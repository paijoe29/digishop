# Mengedit Konten Website

Panduan ini menjelaskan cara mengedit berbagai bagian konten pada website Anda.

## Mengedit Teks

Sebagian besar teks pada halaman (judul, paragraf, deskripsi) dapat ditemukan langsung di dalam komponen React yang sesuai di folder `src/pages/` atau `src/components/`.

*   **Halaman Utama (`/`)**: Teks di Hero Section, Why Choose Us, Product Grid, dan Call to Action ada di file-file komponen di `src/components/`:
    *   `src/components/HeroSection.tsx`
    *   `src/components/WhyChooseUs.tsx`
    *   `src/components/ProductGrid.tsx` (untuk judul dan deskripsi section)
    *   `src/components/CallToActionSection.tsx`
*   **Halaman "Mengapa Produk Kami" (`/why-our-products`)**: Teks ada di `src/pages/WhyOurProductsPage.tsx`.
*   **Navbar**: Teks link navigasi ada di `src/components/Navbar.tsx`.
*   **Footer**: Teks di footer ada di `src/components/Footer.tsx`.
*   **Promo Banner**: Teks promo ada di `src/components/PromoBanner.tsx`.

Buka file komponen yang relevan, cari teks yang ingin Anda ubah, dan edit langsung di dalam JSX.

## Mengedit Daftar Produk

Daftar produk utama yang ditampilkan di halaman utama (`/`) didefinisikan dalam array `products` di file `src/components/ProductGrid.tsx`.

```typescript
const products: Product[] = [
  { id: 1, name: 'Ebook Panduan React...', price: 'Rp 150.000', description: '...' },
  { id: 2, name: 'Template Website...', price: 'Rp 200.000', description: '...' },
  // ... produk lainnya
];
```

*   Untuk **mengubah detail produk** (nama, harga, deskripsi), edit objek yang ada dalam array ini.
*   Untuk **menambah produk baru**, tambahkan objek baru ke dalam array `products`. Pastikan `id` unik.
*   Untuk **menghapus produk**, hapus objek yang sesuai dari array.

Produk bundle di Hero Section didefinisikan dalam array `bundleProduct` di `src/components/HeroSection.tsx`. Edit dengan cara yang sama.

## Mengganti Gambar Produk

Gambar produk direferensikan berdasarkan `id` produk menggunakan file utilitas `src/utils/productImages.ts`.

1.  **Tempatkan File Gambar**: Letakkan file gambar produk Anda (misalnya `.png`, `.jpg`, `.webp`) di dalam folder `public/images/` di root proyek Anda.
2.  **Update `productImages.ts`**: Buka `src/utils/productImages.ts` dan perbarui atau tambahkan entri dalam objek `productImages` untuk memetakan `id` produk ke path file gambar yang baru Anda tempatkan.

    ```typescript
    const productImages: { [key: number]: string } = {
      1: '/images/ebook-react-baru.png', // Ganti path ini
      101: '/images/bundle-terbaru.jpg', // Tambahkan atau ganti
      // ... pastikan semua produk yang ingin ditampilkan gambarnya ada di sini
    };
    ```
    Gunakan path yang dimulai dari `/`, yang merujuk ke folder `public`.

Jika sebuah `id` produk tidak ada dalam objek `productImages`, placeholder "Gambar Produk" akan ditampilkan secara otomatis.

## Mengganti Nomor WhatsApp

Nomor WhatsApp yang digunakan untuk redirect dari dialog pembelian didefinisikan dalam konstanta di file `src/components/ProductGrid.tsx` dan `src/components/HeroSection.tsx`.

*   Buka `src/components/ProductGrid.tsx` dan cari `YOUR_WHATSAPP_NUMBER`. Ganti nilainya dengan nomor WhatsApp Anda (format internasional tanpa `+`, misal `6281234567890`).
*   Buka `src/components/HeroSection.tsx` dan cari `YOUR_WHATSAPP_NUMBER_HERO`. Ganti nilainya dengan nomor WhatsApp Anda.

```typescript
// Contoh di ProductGrid.tsx
const YOUR_WHATSAPP_NUMBER = "6281234567890"; // GANTI INI!
```

## Mengedit Styling (Tailwind CSS)

Proyek ini menggunakan Tailwind CSS. Anda dapat mengedit styling dengan:

*   **Mengubah Kelas Tailwind**: Tambahkan, hapus, atau ubah kelas utility Tailwind langsung di atribut `className` elemen JSX. Lihat [dokumentasi Tailwind CSS](https://tailwindcss.com/docs).
*   **Mengubah Konfigurasi Tailwind**: Edit `tailwind.config.ts` untuk menyesuaikan tema (warna, font, spasi, dll.) atau menambahkan utility kustom. Setelah mengedit `tailwind.config.ts`, Anda mungkin perlu me-restart server pengembangan.
*   **Menambahkan CSS Kustom**: Untuk styling yang tidak bisa ditangani oleh utility Tailwind, Anda bisa menambahkan CSS kustom di `src/globals.css`.

## Menambah Halaman Baru

1.  Buat file komponen React baru di folder `src/pages/` (misalnya `src/pages/AboutUs.tsx`).
2.  Buat komponen React di dalamnya.
3.  Buka `src/App.tsx`.
4.  Impor komponen halaman baru Anda.
5.  Tambahkan `<Route>` baru di dalam `<Routes>` untuk path halaman baru Anda.

    ```typescript jsx
    // src/App.tsx
    import AboutUs from "./pages/AboutUs"; // Import komponen baru
    // ... impor lainnya

    const App = () => {
      // ... state dan lainnya
      return (
        // ...
        <BrowserRouter>
          {/* ... banner dan navbar */}
          <main className={cn("flex-grow", paddingTopClass)}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/why-our-products" element={<WhyOurProductsPage />} />
              <Route path="/about-us" element={<AboutUs />} /> {/* Tambahkan Route baru */}
              {/* ... routes lainnya */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          {/* ... footer */}
        </BrowserRouter>
        // ...
      );
    };
    ```
6.  Tambahkan link ke halaman baru di `src/components/Navbar.tsx` jika diperlukan.

## Menambah Komponen Baru

1.  Buat file komponen React baru di folder `src/components/` (misalnya `src/components/TestimonialSection.tsx`).
2.  Buat komponen React di dalamnya.
3.  Impor komponen baru tersebut di halaman atau komponen lain di mana Anda ingin menggunakannya.
4.  Render komponen baru tersebut di dalam JSX.

```typescript jsx
// Contoh: Menambah TestimonialSection ke halaman utama (Index.tsx)
// src/pages/Index.tsx
import TestimonialSection from '../components/TestimonialSection'; // Import komponen baru
// ... impor lainnya

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      {/* ... HeroSection */}
      {/* ... Separator */}
      {/* ... WhyChooseUs */}
      {/* ... Separator */}
      <TestimonialSection /> {/* Render komponen baru di sini */}
      {/* ... ProductGrid */}
      {/* ... CallToActionSection */}
    </div>
  );
};
```

Dengan panduan ini, Anda seharusnya bisa mulai mengedit dan menyesuaikan website sesuai kebutuhan Anda!