import "./globals.css"; // Pastikan CSS Tailwind sudah di-import di sini
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

export const metadata = {
  title: "FnS Travel | Jelajah Nusantara",
  description: "Agen perjalanan wisata terbaik di Sumatera Barat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
