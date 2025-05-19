# Struktur Proyek

Berikut adalah gambaran umum struktur folder dan file utama dalam proyek ini:

```
your-project-root/
├── public/             # Aset statis (gambar, font, dll.) yang disajikan langsung
│   └── images/         # Folder untuk gambar produk dan aset lainnya
│       └── ...
├── src/                # Kode sumber aplikasi React
│   ├── components/     # Komponen React yang dapat digunakan kembali
│   │   ├── ui/         # Komponen dari shadcn/ui (jangan diedit langsung)
│   │   ├── BuyProductDialog.tsx # Dialog untuk pembelian via WhatsApp
│   │   ├── CallToActionSection.tsx # Bagian Call to Action
│   │   ├── Footer.tsx  # Komponen Footer
│   │   ├── HeroSection.tsx # Bagian Hero (atas)
│   │   ├── Navbar.tsx  # Komponen Navbar
│   │   ├── ProductCard.tsx # Komponen kartu produk
│   │   ├── ProductGrid.tsx # Grid yang menampilkan kartu produk
│   │   ├── PromoBanner.tsx # Banner promo sticky di atas
│   │   └── WhyChooseUs.tsx # Bagian 'Mengapa Memilih Kami'
│   ├── hooks/          # Custom React hooks
│   │   └── useInView.ts # Hook untuk mendeteksi elemen saat masuk viewport
│   ├── lib/            # Utility functions (misalnya cn untuk classnames)
│   │   └── utils.ts
│   ├── pages/          # Komponen untuk setiap halaman (routes)
│   │   ├── Index.tsx   # Halaman utama (Landing Page)
│   │   ├── NotFound.tsx # Halaman 404
│   │   └── WhyOurProductsPage.tsx # Halaman 'Mengapa Produk Kami'
│   ├── utils/          # Utility functions lainnya
│   │   ├── productImages.ts # Mapping ID produk ke URL gambar
│   │   └── toast.ts    # Utility untuk menampilkan toast notifications
│   ├── App.css         # CSS global (tidak banyak digunakan, styling utama di globals.css)
│   ├── App.tsx         # Komponen utama aplikasi, mengatur routing
│   ├── globals.css     # File CSS utama untuk Tailwind directives dan custom styles
│   ├── main.tsx        # Entry point aplikasi React
│   └── vite-env.d.ts   # TypeScript declaration untuk Vite
├── docs/               # Folder dokumentasi
│   ├── README.md       # Halaman utama dokumentasi
│   ├── EDITING.md      # Panduan mengedit konten
│   └── STRUCTURE.md    # Penjelasan struktur proyek ini
├── .gitignore          # File yang menentukan file/folder yang diabaikan oleh Git
├── dyad-shim.js        # File internal Dyad (abaikan)
├── eslint.config.js    # Konfigurasi ESLint
├── index.html          # File HTML utama
├── package.json        # Informasi proyek dan dependensi
├── postcss.config.js   # Konfigurasi PostCSS (untuk Tailwind)
├── tailwind.config.ts  # Konfigurasi Tailwind CSS
└── vite.config.ts      # Konfigurasi Vite
```

**Penjelasan Singkat:**

*   **`public/`**: Tempatkan aset statis di sini. File-file di sini akan disajikan langsung.
*   **`src/`**: Semua kode sumber aplikasi React Anda ada di sini.
    *   `components/`: Komponen UI yang dapat digunakan kembali. Folder `ui/` berisi komponen shadcn/ui yang sebaiknya tidak diedit langsung.
    *   `pages/`: Komponen yang merepresentasikan halaman-halaman berbeda di aplikasi Anda.
    *   `utils/`: Fungsi-fungsi pembantu yang digunakan di berbagai tempat.
*   **`docs/`**: Folder ini berisi dokumentasi proyek.
*   File konfigurasi seperti `tailwind.config.ts`, `vite.config.ts`, `package.json` berada di root proyek.

Memahami struktur ini akan memudahkan Anda menemukan file yang perlu diedit.