"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const pathname = usePathname();

  // 1. Cek apakah ini halaman Home
  const isHomePage = pathname === "/";

  // 2. Logika Scroll
  useEffect(() => {
    const changeNavBg = () => {
      if (window.scrollY >= 80) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", changeNavBg);
    return () => window.removeEventListener("scroll", changeNavBg);
  }, []);

  // 3. Logika Scroll to Top
  const handleLogoClick = (e) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const isSolidNavbar = !isHomePage || navBg || isMobileMenuOpen;

  // LOGIKA STYLE BARU (Glassmorphism)
  // Saat solid (di-scroll), kita gunakan backdrop-blur dan bg-white dengan opacity
  const textColorClass = isSolidNavbar ? "text-travel-dark" : "text-white";

  const navBackgroundClass = isSolidNavbar
    ? "bg-white/80 backdrop-blur-md shadow-sm py-4 border-b border-white/20" // <--- UPGRADE DI SINI
    : "bg-transparent py-6";

  return (
    <nav
      className={`fixed w-full top-0 left-0 transition-all duration-300 z-[999] ${navBackgroundClass}`}
    >
      <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center">
        {/* LOGO */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className="relative h-10 w-36 md:h-12 md:w-48 cursor-pointer transition-all duration-300" // Atur ukuran container logo di sini (h-8 = 32px, w-32 = 128px)
        >
          <Image
            src={
              isSolidNavbar
                ? "/assets/logo-utama-black.png"
                : "/assets/logo-utama-white.png"
            }
            alt="Travel Logo"
            fill
            className="object-contain object-left" // object-left agar logo rata kiri
            priority // Penting agar logo langsung muncul tanpa loading
            sizes="((max-width: 768px) 144px, 192px"
          />
        </Link>
        {/* DESKTOP MENU */}
        <ul
          className={`hidden md:flex gap-8 font-sans font-medium text-sm tracking-wide ${textColorClass}`}
        >
          {[
            "Home",
            "Tentang Kami",
            "Packages",
            "Transportation",
            "Gallery",
            "Contact",
          ].map((item) => (
            <li key={item}>
              {[
                "Packages",
                "Gallery",
                "Tentang Kami",
                "Contact",
                "Transportation",
              ].includes(item) ? (
                <Link
                  href={
                    item === "Tentang Kami"
                      ? "/about"
                      : item === "Contact"
                        ? "/contact"
                        : `/${item.toLowerCase()}`
                  }
                  className="hover:text-travel-primary transition-colors duration-300"
                >
                  {item}
                </Link>
              ) : (
                <Link
                  href={`/#${item.toLowerCase().replace(" ", "")}`}
                  className="hover:text-travel-primary transition-colors duration-300"
                >
                  {item}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* HAMBURGER BUTTON */}
        <button
          className={`md:hidden focus:outline-none p-2 ${textColorClass}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-xl flex flex-col animate-fade-in border-t border-gray-100">
            <ul className="flex flex-col text-travel-dark font-medium">
              {[
                "Home",
                "Tentang Kami",
                "Packages",
                "Transportation",
                "Gallery",
                "Contact",
              ].map((item) => (
                <li key={item} className="border-b border-gray-100">
                  {[
                    "Packages",
                    "Gallery",
                    "Tentang Kami",
                    "Contact",
                    "Transportation",
                  ].includes(item) ? (
                    <Link
                      href={
                        item === "Tentang Kami"
                          ? "/about"
                          : item === "Contact"
                            ? "/contact"
                            : `/${item.toLowerCase()}`
                      }
                      className="block py-4 px-6 hover:bg-gray-50 hover:text-travel-primary transition"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ) : (
                    <Link
                      href={`/#${item.toLowerCase().replace(" ", "")}`}
                      className="block py-4 px-6 hover:bg-gray-50 hover:text-travel-primary transition"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
