import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

// 1. Import Font dari Google (Playfair Display & Poppins)
import { Playfair_Display, Poppins } from "next/font/google";

// 2. Konfigurasi Font Judul (Serif)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif", // Variabel CSS untuk Tailwind
  display: "swap",
});

// 3. Konfigurasi Font Teks (Sans)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans", // Variabel CSS untuk Tailwind
  display: "swap",
});

export const metadata = {
  title: "FnS Travel | Jelajah Nusantara",
  description: "Agen perjalanan wisata terbaik di Sumatera Barat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      {/* 4. Masukkan variabel font ke body */}
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased font-sans bg-gray-50 text-gray-800`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {/* Floating WA Button */}
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center gap-2"
        >
          {/* Icon WA bisa pakai react-icons/fa */}
          <span className="font-bold">Chat Kami</span>
        </a>
      </body>
    </html>
  );
}
