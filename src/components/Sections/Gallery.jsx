"use client";

import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { FaMapMarkerAlt } from "react-icons/fa";

// 1. Import komponen Popup yang baru
import Popup from "../UI/Popup";

// Import Swiper & Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Gallery = ({ data }) => {
  // State untuk menyimpan URL gambar yang dipilih
  // Kita simpan URL-nya langsung agar lebih mudah dipassing ke Popup
  const [selectedImageSrc, setSelectedImageSrc] = useState(null);

  if (!data || data.length === 0) return null;

  return (
    <section className="py-20 bg-gray-50" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Galeri Perjalanan
          </h2>
          <div className="w-20 h-1 bg-travel-pink mx-auto rounded-full"></div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12 px-4"
        >
          {data.map((item) => (
            <SwiperSlide key={item._id} className="h-auto pb-2">
              <div
                // 2. Saat diklik, set URL gambar resolusi tinggi ke state
                onClick={() =>
                  setSelectedImageSrc(urlFor(item.image).width(1200).url())
                }
                className="relative group rounded-xl overflow-hidden shadow-lg h-96 w-full cursor-pointer"
                role="button"
              >
                {/* Gambar Thumbnail */}
                <Image
                  src={urlFor(item.image).width(600).height(800).url()}
                  alt={item.title || "Gallery"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay & Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-5 w-full text-white pointer-events-none">
                  {item.category && (
                    <span className="text-xs font-bold bg-travel-pink px-2 py-1 rounded text-white mb-2 inline-block">
                      {item.category}
                    </span>
                  )}
                  <h3 className="text-xl font-bold mb-1 truncate">
                    {item.title}
                  </h3>
                  {item.location && (
                    <div className="flex items-center gap-2 text-sm text-gray-200">
                      <FaMapMarkerAlt className="text-travel-pink flex-shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 3. Panggil Komponen Popup */}
        {/* Render hanya jika selectedImageSrc tidak null */}
        {selectedImageSrc && (
          <Popup
            src={selectedImageSrc}
            onClose={() => setSelectedImageSrc(null)}
          />
        )}
      </div>

      {/* Style Navigasi Swiper */}
      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background-color: #f43f5e !important;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          background: rgba(0, 0, 0, 0.3);
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: #f43f5e;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
