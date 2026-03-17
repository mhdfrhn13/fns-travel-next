# Dokumentasi Proyek: FNS Travel Next

**FNS Travel Next** adalah platform aplikasi web modern untuk layanan agen perjalanan yang dibangun menggunakan **Next.js 16** dan terintegrasi dengan **Sanity CMS**. Aplikasi ini dirancang untuk menyajikan informasi paket wisata, armada transportasi, dan galeri destinasi secara dinamis dan responsif.

## 1. Spesifikasi Teknologi
* **Framework Utama**: Next.js 16.1.1 (App Router).
* **Library UI**: React 19.2.3 dan React DOM 19.2.3.
* **Manajemen Konten (CMS)**: Sanity (menggunakan `next-sanity` dan `@sanity/client`).
* **Styling**: Tailwind CSS 4, Styled Components, dan PostCSS.
* **Animasi & Interaksi**: Swiper (Carousel) dan React Icons.

## 2. Struktur Proyek
Aplikasi ini mengikuti struktur direktori standar Next.js dengan penekanan pada modularitas:
* **`src/app/`**: Berisi rute aplikasi (halaman) seperti `about`, `contact`, `gallery`, `itinerary`, `packages`, dan `transportation`.
* **`src/components/`**: Terbagi menjadi `Sections` (bagian besar halaman) dan `UI` (komponen kecil yang dapat digunakan kembali).
* **`src/sanity/`**: Berisi konfigurasi CMS dan skema data untuk `car`, `gallery`, `itinerary`, dan `review`.
* **`src/lib/`**: Utilitas konfigurasi, termasuk client Sanity dan konstanta aplikasi.

## 3. Fitur Utama Halaman Beranda
Halaman utama (`src/app/page.js`) mengimplementasikan pengambilan data sisi server (Server-side fetching) dengan fitur berikut:
* **Data Fetching**: Mengambil data `gallery`, `packages` (itinerary unggulan), dan `cars` (armada) secara asinkron dari Sanity.
* **Incremental Static Regeneration (ISR)**: Konten diatur untuk divalidasi ulang setiap 60 detik guna memastikan data tetap segar tanpa mengorbankan performa.
* **Komponen Visual**:
    * **Hero**: Bagian pembuka halaman.
    * **About**: Informasi profil layanan dengan animasi reveal.
    * **Gallery**: Menampilkan foto-foto destinasi dalam format carousel.
    * **Packages (BlogList)**: Daftar paket wisata populer.
    * **TransportationPreview**: Daftar armada kendaraan yang tersedia.

## 4. Skema Data (Sanity CMS)
Aplikasi menggunakan beberapa tipe dokumen utama:
1.  **Car**: Menyimpan informasi nama, tipe, gambar, kapasitas, dan harga kendaraan.
2.  **Gallery**: Menyimpan koleksi foto destinasi beserta lokasi dan kategori.
3.  **Itinerary**: Menyimpan detail paket wisata, termasuk judul, slug, harga, durasi, dan status unggulan (*isFeatured*).
4.  **Review**: Mengelola ulasan dari pelanggan.

## 5. Panduan Pengembangan

### Instalasi Dependensi
Gunakan npm untuk menginstal semua library yang diperlukan:
```bash
npm install
