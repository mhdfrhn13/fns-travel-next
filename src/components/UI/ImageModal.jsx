"use client";
import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";

const ImageModal = ({ isOpen, onClose, imageSrc, title }) => {
  // Tutup modal jika tombol ESC ditekan
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose} // Klik area hitam untuk tutup
    >
      {/* Tombol Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2 bg-black/20 rounded-full"
      >
        <FaTimes size={30} />
      </button>

      {/* Container Gambar */}
      <div
        className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()} // Mencegah tutup saat klik gambar
      >
        <div className="relative w-full h-[80vh]">
          <Image
            src={imageSrc}
            alt={title || "Full Image"}
            fill
            className="object-contain"
            sizes="100vw"
            quality={90}
          />
        </div>

        {/* Caption Judul (Opsional) */}
        {title && (
          <p className="mt-4 text-white text-lg font-medium text-center bg-black/50 px-4 py-2 rounded-full">
            {title}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageModal;
