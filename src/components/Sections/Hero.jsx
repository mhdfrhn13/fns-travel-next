"use client";
import React from "react";

const Hero = () => {
  return (
    <header
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* 1. LAYER VIDEO BACKGROUND (TETAP ADA) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/videoSumatra.mp4" type="video/mp4" />
      </video>

      {/* 2. KONTEN TENGAH (DIPERBARUI FONT & GAYANYA) */}
      <div className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto">
        {/* Judul: Menggunakan Font Serif (Playfair Display) agar elegan */}
        <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 drop-shadow-lg tracking-wide">
          Visit Indonesia
        </h1>

        {/* Deskripsi: Menggunakan Font Sans (Poppins) yang bersih */}
        <p className="font-sans text-lg md:text-2xl font-light mb-10 max-w-2xl mx-auto tracking-wide leading-relaxed text-white/90">
          Ribuan pulau, ratusan budaya, satu destinasi impian. Temukan pesona
          asli Indonesia di sini.
        </p>

        {/* Tombol: Dibuat Rounded Full agar sesuai tema modern */}
        <a
          href="#blog"
          className="inline-block font-sans font-medium bg-travel-pink text-white px-10 py-4 rounded-full hover:bg-pink-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-sm md:text-base tracking-widest"
        >
          EXPLORE MORE
        </a>
      </div>
    </header>
  );
};

export default Hero;
