# Dokumentasi Proyek Web NamaSitus

Selamat datang di dokumentasi proyek web NamaSitus! Aplikasi ini dibangun menggunakan React, TypeScript, Tailwind CSS, dan Vite. Dokumentasi ini akan membantu Anda memahami struktur proyek, cara menjalankannya, dan cara mengedit konten.

## Daftar Isi

1.  [Pengantar](#pengantar)
2.  [Teknologi yang Digunakan](#teknologi-yang-digunakan)
3.  [Memulai Proyek](#memulai-proyek)
    *   [Prasyarat](#prasyarat)
    *   [Instalasi](#instalasi)
    *   [Menjalankan Aplikasi Secara Lokal](#menjalankan-aplikasi-secara-lokal)
4.  [Struktur Proyek](#struktur-proyek)
5.  [Mengedit Konten](#mengedit-konten)
6.  [Build untuk Produksi](#build-untuk-produksi)

## Pengantar

Proyek ini adalah template website sederhana untuk menampilkan produk digital dan informasi terkait. Dirancang agar responsif, modern, dan mudah diedit.

## Teknologi yang Digunakan

*   **React**: Library JavaScript untuk membangun antarmuka pengguna.
*   **TypeScript**: Superset JavaScript yang menambahkan pengetikan statis.
*   **Tailwind CSS**: Framework CSS utility-first untuk styling cepat dan responsif.
*   **Vite**: Build tool yang cepat untuk proyek web modern.
*   **React Router**: Untuk navigasi antar halaman.
*   **shadcn/ui**: Komponen UI yang dapat diakses dan dapat disesuaikan.
*   **Lucide React**: Koleksi ikon.

## Memulai Proyek

Ikuti langkah-langkah ini untuk menjalankan proyek di mesin lokal Anda.

### Prasyarat

Pastikan Anda memiliki Node.js dan npm (atau yarn/pnpm) terinstal di komputer Anda.

*   [Node.js](https://nodejs.org/) (disarankan versi LTS)

### Instalasi

1.  Clone repositori ini ke komputer lokal Anda:
    ```bash
    # Jika menggunakan Git
    git clone <URL_REPOSITORI_ANDA>
    cd <nama_folder_proyek>
    ```
2.  Instal dependensi proyek:
    ```bash
    npm install
    # atau
    yarn install
    # atau
    pnpm install
    ```

### Menjalankan Aplikasi Secara Lokal

Setelah dependensi terinstal, Anda dapat menjalankan server pengembangan:

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

Aplikasi akan berjalan di `http://localhost:8080` (atau port lain jika 8080 sudah digunakan). Anda dapat melihat perubahan secara langsung saat Anda mengedit kode.

## Struktur Proyek

Untuk memahami struktur folder dan file proyek, lihat file [STRUCTURE.md](./STRUCTURE.md).

## Mengedit Konten

Untuk panduan tentang cara mengedit teks, gambar, produk, dan bagian lain dari website, lihat file [EDITING.md](./EDITING.md).

## Build untuk Produksi

Untuk membuat versi aplikasi yang dioptimalkan untuk produksi, jalankan perintah berikut:

```bash
npm run build
# atau
yarn build
# atau
pnpm build
```

Ini akan membuat folder `dist` di root proyek Anda yang berisi file-file statis yang siap di-deploy ke server web statis mana pun (misalnya Netlify, Vercel, GitHub Pages, dll.).

---

Terima kasih telah menggunakan template ini! Jika Anda memiliki pertanyaan, jangan ragu untuk menghubungi.