"use client";

import React, { useState } from "react";
import { urlFor } from "@/lib/sanity";
import Popup from "../UI/Popup";

// Import Swiper untuk Carousel Mobile
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Gallery = ({ data }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-travel-dark mb-4">
            Gallery Keindahan
          </h2>
          <p className="font-sans text-gray-600 max-w-2xl mx-auto">
            Potret momen tak terlupakan dari berbagai destinasi eksklusif kami.
          </p>
        </div>

        {/* --- TAMPILAN MOBILE: CAROUSEL (Muncul hanya di layar < md) --- */}
        <div className="block md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {data?.map((item) => (
              <SwiperSlide key={item._id}>
                <div
                  className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg"
                  onClick={() => setSelectedImg(urlFor(item.image).url())}
                >
                  <img
                    src={urlFor(item.image).url()}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                    <p className="text-travel-gold text-xs uppercase tracking-widest">
                      {item.location}
                    </p>
                    <h3 className="text-white font-serif text-lg font-bold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* --- TAMPILAN DESKTOP: BENTO GRID (Muncul hanya di layar >= md) --- */}
        <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-4 h-[600px]">
          {data?.map((item, index) => (
            <div
              key={item._id}
              onClick={() => setSelectedImg(urlFor(item.image).url())}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer shadow-lg
                ${index === 0 ? "col-span-2 row-span-2" : ""} 
                ${index === 1 ? "col-span-2 row-span-1" : ""}
                ${index >= 2 ? "col-span-1 row-span-1" : ""}
              `}
            >
              <img
                src={urlFor(item.image).url()}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-travel-gold text-xs uppercase tracking-widest mb-1">
                  {item.location}
                </span>
                <h3 className="text-white font-serif text-xl font-bold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup tetap bisa digunakan di Mobile maupun Desktop */}
      <Popup src={selectedImg} onClose={() => setSelectedImg(null)} />
    </section>
  );
};

export default Gallery;
