"use client";
import React from "react";
// Pastikan package react-icons sudah terinstall, atau gunakan SVG manual di bawah
// Jika belum ada react-icons: npm install react-icons
const handleScroll = (e) => {
  e.preventDefault();
  const element = document.getElementById("packages");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => {
  return (
    <header
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* 1. LAYER VIDEO BACKGROUND */}
      {/* UPGRADE: Menggunakan Gradient Overlay (Atas Gelap -> Tengah Bening -> Bawah Gelap) */}
      <div className="absolute top-0 left-0 w-full h-full  z-10"></div>

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/video-sumatra.mp4" type="video/mp4" />
      </video>

      {/* 2. KONTEN TENGAH */}
      <div className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto mt-[-50px]">
        {/* Judul */}
        <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 drop-shadow-2xl tracking-wide">
          Visit Indonesia
        </h1>

        {/* Deskripsi */}
        <p className="font-sans text-lg md:text-2xl font-light mb-10 max-w-2xl mx-auto tracking-wide leading-relaxed text-gray-100 drop-shadow-md">
          Ribuan pulau, ratusan budaya, satu destinasi impian. Temukan pesona
          asli Indonesia di sini.
        </p>

        {/* Tombol dengan Efek Tekan (active:scale-95) */}
        <a
          href="#packages"
          onClick={handleScroll}
          className="inline-block font-sans font-medium bg-travel-primary text-white px-10 py-4 rounded-full hover:bg-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 text-sm md:text-base tracking-widest"
        >
          EXPLORE MORE
        </a>
      </div>

      {/* 3. SCROLL INDICATOR (BARU) */}
      {/* Animasi bouncing untuk memberi tahu user ada konten di bawah */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-80 animate-bounce">
        <span className="text-[10px] md:text-xs font-light tracking-[0.2em] uppercase text-white/80">
          Scroll Down
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </header>
  );
};

export default Hero;
