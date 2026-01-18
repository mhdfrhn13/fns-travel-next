"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { urlFor } from "@/lib/sanity";
import ImageModal from "@/components/UI/ImageModal"; // 1. Import Modal

const Gallery = ({ data }) => {
  // State Modal
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!data || data.length === 0) return null;

  // Handler
  const openModal = (image, title) => {
    if (image) {
      setSelectedImage({ src: urlFor(image).url(), title });
      setIsModalOpen(true);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            Galeri Perjalanan
          </h2>
          <div className="w-24 h-1 bg-travel-pink mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Momen-momen indah yang telah kami abadikan bersama para pelanggan
            setia FnS Tour.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {data.map((item) => (
            <SwiperSlide key={item._id}>
              <div
                className="relative group overflow-hidden rounded-2xl h-[300px] md:h-[350px] cursor-pointer"
                onClick={() => openModal(item.image, item.title)} // 2. Tambah Event Click
              >
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.title || "Gallery"}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
                    <p className="font-bold text-lg">{item.title}</p>
                    {item.location && (
                      <p className="text-sm text-gray-200">{item.location}</p>
                    )}

                    <p className="text-xs mt-2 text-center w-full bg-white/20 py-1 rounded-full backdrop-blur-sm">
                      Klik untuk memperbesar
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 3. Render Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={selectedImage?.src}
        title={selectedImage?.title}
      />
    </section>
  );
};

export default Gallery;
