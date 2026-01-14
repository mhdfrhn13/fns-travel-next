"use client";
import React from "react";

const PageHeader = ({ title, subtitle, image }) => {
  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={image || "/assets/blog1.jpg"} // Gambar default jika tidak ada props image
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Overlay Gelap agar teks terbaca jelas */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* 2. KONTEN JUDUL */}
      <div className="relative z-10 text-center px-4 mt-10">
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-md animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p
            className="font-sans text-lg md:text-xl text-white/90 font-light tracking-wider animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {subtitle}
          </p>
        )}

        {/* Garis Hiasan Kecil */}
        <div
          className="w-24 h-1 bg-travel-pink mx-auto mt-6 rounded-full animate-zoom-in"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </div>
  );
};

export default PageHeader;
