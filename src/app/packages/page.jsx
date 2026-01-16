// src/app/packages/page.jsx
"use client";

import PageHeader from "@/components/UI/PageHeader";
import { itineraries } from "@/data/itineraries";
import Link from "next/link";
import Image from "next/image";
import { FaClock, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

const Packages = () => {
  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      {/* Header Halaman */}
      <PageHeader
        title="Paket Wisata Favorit"
        image="/assets/alahanpanjang.jpg"
        subtitle="Temukan destinasi impian Anda dengan harga terbaik"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        {/* Grid Layout: 3 Kolom di Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itineraries.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
            >
              {/* --- BAGIAN 1: GAMBAR DI ATAS --- */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Badge Durasi tetap di sini */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-travel-dark shadow-sm flex items-center gap-2">
                  <FaClock className="text-travel-pink" />
                  {item.duration}
                </div>
              </div>

              {/* --- BAGIAN 2: TEKS DI BAWAH --- */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Label Lokasi Kecil */}
                <div className="flex items-center gap-1 text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <FaMapMarkerAlt className="text-travel-pink" />
                  Sumatera Barat
                </div>

                {/* Judul Paket */}
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-travel-pink transition-colors">
                  {item.title}
                </h3>

                {/* Deskripsi Singkat */}
                <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Spacer agar harga selalu di bawah */}
                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  {/* Harga */}
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-[10px] font-bold uppercase">
                      Mulai dari
                    </span>
                    <span className="text-travel-dark font-bold text-lg">
                      {item.price}
                    </span>
                  </div>

                  {/* Tombol Detail */}
                  <Link
                    href={`/itinerary/${item.id}`}
                    className="flex items-center gap-2 bg-travel-dark text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-travel-pink transition-colors shadow-md group-hover:shadow-lg"
                  >
                    Detail
                    <FaArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Packages;
