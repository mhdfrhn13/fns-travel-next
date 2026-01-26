import React from "react";
import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaChevronRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* KOLOM 1: TENTANG & SOSMED */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              FnS Travel
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Sahabat perjalanan terbaik Anda menjelajahi keindahan alam dan
              budaya Sumatera Barat. Nikmati pengalaman liburan tak terlupakan
              bersama kami.
            </p>

            {/* TOMBOL SOSIAL MEDIA */}
            <div className="flex gap-4">
              {/* Instagram */}
              <Link
                href="https://www.instagram.com/fnstourandtravel/"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-red-500 hover:to-purple-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </Link>

              {/* Facebook */}
              <Link
                href="https://web.facebook.com/profile.php?id=61586778124542"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </Link>

              {/* TikTok */}
              <Link
                href="https://www.tiktok.com/@fnstourandtravel"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-black hover:text-white hover:border hover:border-gray-700 transition-all duration-300 transform hover:-translate-y-1"
                aria-label="TikTok"
              >
                <FaTiktok size={18} />
              </Link>
            </div>
          </div>

          {/* KOLOM 2: KONTAK */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b-2 border-travel-primary pb-2 inline-block">
              Hubungi Kami
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-travel-primary mt-1 flex-shrink-0" />
                <span>
                  Jl. Kirab Remaja No.32, Puhun Tembok, Bukittinggi, Sumatera
                  Barat
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaPhone className="text-travel-primary flex-shrink-0" />
                <a
                  href="https://wa.me/6285365968845"
                  className="hover:text-travel-primary transition-colors"
                >
                  +62 853-6596-8845
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-travel-primary flex-shrink-0" />
                <a
                  href="mailto:fnsholiday@gmail.com"
                  className="hover:text-travel-primary transition-colors"
                >
                  fnsholiday@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* KOLOM 3: TAUTAN CEPAT (LENGKAP) */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b-2 border-travel-primary pb-2 inline-block">
              Tautan Cepat
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Beranda", link: "/" },
                { name: "Tentang Kami", link: "/about" },
                { name: "Paket Wisata", link: "/packages" },
                { name: "Sewa Mobil", link: "/transportation" },
                { name: "Galeri", link: "/gallery" },
                { name: "Kontak", link: "/contact" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="flex items-center gap-2 text-gray-400 hover:text-travel-primary hover:translate-x-2 transition-all duration-300 group"
                  >
                    <FaChevronRight className="text-xs text-gray-600 group-hover:text-travel-primary transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} FnS Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
