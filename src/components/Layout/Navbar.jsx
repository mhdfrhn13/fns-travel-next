"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaChevronDown, FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  // Data Wilayah untuk Dropdown Packages
  const regions = [
    { title: "Sumatra", slug: "sumatra" },
    { title: "Jawa dan Bali", slug: "jawa-bali" },
    { title: "Lainnya", slug: "lainnya" },
  ];

  useEffect(() => {
    const changeNavBg = () => {
      if (window.scrollY >= 80) setNavBg(true);
      else setNavBg(false);
    };
    window.addEventListener("scroll", changeNavBg);
    return () => window.removeEventListener("scroll", changeNavBg);
  }, []);

  const isSolidNavbar = !isHomePage || navBg || isMobileMenuOpen;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isSolidNavbar ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <Link
          href="/"
          className="relative w-44 h-14 transition-transform duration-300 hover:scale-105"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Image
            src={
              isSolidNavbar
                ? "/assets/logo-utama-black.png"
                : "/assets/logo-utama-white.png"
            }
            alt="FnS Travel Logo"
            fill
            className="object-contain"
          />
        </Link>

        {/* DESKTOP MENU - Urutan Baru */}
        <ul
          className={`hidden md:flex items-center gap-7 font-semibold ${
            isSolidNavbar ? "text-gray-800" : "text-white"
          }`}
        >
          {/* 1. HOME */}
          <li>
            <Link
              href="/"
              className="hover:text-travel-primary transition uppercase text-sm tracking-wider"
            >
              Home
            </Link>
          </li>

          {/* 2. TENTANG KAMI */}
          <li>
            <Link
              href="/about"
              className="hover:text-travel-primary transition uppercase text-sm tracking-wider"
            >
              Tentang Kami
            </Link>
          </li>

          {/* 3. PACKAGES (DROPDOWN) */}
          <li
            className="relative group"
            onMouseEnter={() => setIsPackagesOpen(true)}
            onMouseLeave={() => setIsPackagesOpen(false)}
          >
            {/* Ganti baris 98-105 pada Navbar.jsx */}
            <Link
              href="/packages"
              className="flex items-center gap-1 hover:text-travel-primary transition py-2 uppercase text-sm tracking-wider"
            >
              Paket Wisata{" "}
              <FaChevronDown
                className={`text-xs transition-transform duration-300 ${isPackagesOpen ? "rotate-180" : ""}`}
              />
            </Link>

            <div
              className={`absolute top-full left-0 w-52 bg-white shadow-xl rounded-xl py-3 border border-gray-100 transition-all duration-300 ${
                isPackagesOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <Link
                href="/packages"
                className="block px-5 py-2 text-gray-700 hover:bg-gray-50 hover:text-travel-primary text-sm border-b border-gray-50"
              >
                Semua Wilayah
              </Link>
              {regions.map((region) => (
                <Link
                  key={region.slug}
                  href={`/packages?region=${region.slug}`}
                  className="block px-5 py-2 text-gray-700 hover:bg-gray-50 hover:text-travel-primary text-sm"
                >
                  {region.title}
                </Link>
              ))}
            </div>
          </li>

          {/* 4. TRANSPORTATION */}
          <li>
            <Link
              href="/transportation"
              className="hover:text-travel-primary transition uppercase text-sm tracking-wider"
            >
              Transportasi
            </Link>
          </li>

          {/* 5. GALLERY */}
          <li>
            <Link
              href="/gallery"
              className="hover:text-travel-primary transition uppercase text-sm tracking-wider"
            >
              Galeri
            </Link>
          </li>

          {/* 6. CONTACT */}
          <li>
            <Link
              href="/contact"
              className="hover:text-travel-primary transition uppercase text-sm tracking-wider"
            >
              Kontak
            </Link>
          </li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className={`md:hidden text-2xl ${isSolidNavbar ? "text-gray-800" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY - Urutan Baru */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen border-t border-gray-100" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col text-gray-800 font-medium py-4">
          <li>
            <Link
              href="/"
              className="block py-3 px-8 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="block py-3 px-8 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tentang Kami
            </Link>
          </li>

          {/* PACKAGES MOBILE ACCORDION */}
          <li>
            <button
              className="flex justify-between items-center w-full py-3 px-8 text-left hover:bg-gray-50"
              onClick={() => setIsPackagesOpen(!isPackagesOpen)}
            >
              Paket Wisata{" "}
              <FaChevronDown
                className={`transition-transform duration-300 ${isPackagesOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`bg-gray-50 transition-all duration-300 overflow-hidden ${isPackagesOpen ? "max-h-60" : "max-h-0"}`}
            >
              <Link
                href="/packages"
                className="block py-3 px-12 text-sm border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Semua Wilayah
              </Link>
              {regions.map((region) => (
                <Link
                  key={region.slug}
                  href={`/packages?region=${region.slug}`}
                  className="block py-3 px-12 text-sm border-b border-gray-100 last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {region.title}
                </Link>
              ))}
            </div>
          </li>

          <li>
            <Link
              href="/transportation"
              className="block py-3 px-8 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Transportasi
            </Link>
          </li>

          <li>
            <Link
              href="/gallery"
              className="block py-3 px-8 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Galeri
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="block py-3 px-8 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
