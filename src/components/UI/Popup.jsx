"use client";
import React from "react";
import ReactDOM from "react-dom"; // 1. Import ReactDOM

const Popup = ({ src, onClose }) => {
  if (!src) return null;

  // 2. Gunakan createPortal untuk memindahkan Popup ke luar elemen utama
  // Ini mencegah popup tertutup oleh elemen lain atau rusak karena animasi
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Container Gambar Relative agar tombol close bisa menempel padanya */}
      <div
        className="relative max-w-[90vw] max-h-[90vh] flex justify-center"
        onClick={(e) => e.stopPropagation()} // Agar klik gambar tidak menutup popup
      >
        {/* GAMBAR UTAMA */}
        <img
          src={src}
          alt="Popup View"
          className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain animate-zoom-in border border-white/20"
        />

        {/* TOMBOL CLOSE (Diperbaiki Posisinya) */}
        <button
          className="absolute -top-5 -right-5 md:-top-6 md:-right-6 bg-white text-black hover:bg-travel-primary hover:text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 cursor-pointer border-2 border-gray-100"
          onClick={onClose}
          title="Close"
        >
          {/* Ikon Silang SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5 md:w-6 md:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>,
    document.body, // 3. Render langsung ke Body HTML
  );
};

export default Popup;
