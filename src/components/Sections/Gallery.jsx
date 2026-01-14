"use client";
import React, { useState } from "react";
import { galleryData } from "../../data/galleryData";
import Popup from "../UI/Popup";
import Link from "next/link";

// 1. Import Komponen Swiper React
import { Swiper, SwiperSlide } from "swiper/react";

// 2. Import CSS Swiper (Wajib)
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// 3. Import Modul yang dibutuhkan (Autoplay & Pagination)
import { Autoplay, Pagination } from "swiper/modules";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Ambil maksimal 10 data saja
  const displayedGallery = galleryData.slice(0, 5);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h5 className="text-travel-pink font-bold uppercase tracking-widest text-sm mb-2">
            Our Memories
          </h5>
          <h3 className="font-serif text-4xl md:text-5xl text-travel-dark">
            Gallery Perjalanan
          </h3>
        </div>

        {/* --- CAROUSEL SECTION --- */}
        <div className="mb-12">
          <Swiper
            // Konfigurasi Module
            modules={[Autoplay, Pagination]}
            spaceBetween={20} // Jarak antar foto
            loop={true} // Agar bisa muter terus (infinite)
            autoplay={{
              delay: 3000, // Geser otomatis tiap 3 detik
              disableOnInteraction: false, // Tetap autoplay walau disentuh
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true, // Titik navigasi di bawah mengecil dinamis
            }}
            // Konfigurasi Responsif (Jumlah foto per layar)
            breakpoints={{
              320: { slidesPerView: 1 }, // HP: 1 Foto
              640: { slidesPerView: 2 }, // Tablet Kecil: 2 Foto
              1024: { slidesPerView: 4 }, // Laptop: 4 Foto
            }}
            className="pb-14" // Padding bawah untuk tempat titik-titik pagination
            style={{
              "--swiper-pagination-color": "#ff4081", // Ganti warna titik jadi Pink
              "--swiper-pagination-bullet-inactive-color": "#999999",
            }}
          >
            {displayedGallery.map((src, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative group h-[300px] overflow-hidden rounded-xl cursor-pointer shadow-lg"
                  onClick={() => setSelectedImage(src)}
                >
                  <img
                    src={src}
                    alt={`Gallery ${index}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay Gelap saat hover */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-lg tracking-widest">
                      VIEW
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Tombol View All */}
        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-block border-2 border-travel-dark text-travel-dark px-10 py-3 rounded-full font-semibold hover:bg-travel-dark hover:text-white transition-all duration-300"
          >
            View All Gallery
          </Link>
        </div>
      </div>

      {/* Popup Image (Tetap jalan) */}
      <Popup src={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
};

export default Gallery;
