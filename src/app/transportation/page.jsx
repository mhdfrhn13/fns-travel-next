"use client";

import React, { useEffect } from "react";
import PageHeader from "@/components/UI/PageHeader";
import { cars } from "@/data/cars";
import Image from "next/image";
import Link from "next/link";
import { FaUserFriends, FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import Reveal from "@/components/UI/Reveal";

const Transportation = () => {
  // Scroll ke atas saat halaman dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      {/* Header Halaman - Gunakan gambar yang relevan dari folder assets */}
      <PageHeader
        title="Sewa Mobil & Transportasi"
        image="/assets/kelok9.jpg" // Ganti dengan gambar header yang sesuai (misal: jalanan/mobil)
        subtitle="Armada terawat dengan sopir berpengalaman untuk kenyamanan perjalanan Anda"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <Reveal key={car.id} direction="up" delay={index * 0.1}>
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
                {/* --- Gambar Mobil --- */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  {/* Note: Pastikan file gambar ada di public/assets/ */}
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    // Placeholder jika gambar belum ada (opsional)
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/600x400?text=No+Image";
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-travel-dark text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    {car.type}
                  </div>
                </div>

                {/* --- Detail Mobil --- */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-travel-pink transition-colors">
                      {car.name}
                    </h3>
                  </div>

                  {/* Kapasitas */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4 font-medium">
                    <FaUserFriends className="text-travel-pink" />
                    <span>{car.capacity}</span>
                  </div>

                  <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">
                    {car.description}
                  </p>

                  {/* Fitur (List kecil) */}
                  <div className="mb-6 space-y-2">
                    {car.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-gray-600"
                      >
                        <FaCheckCircle className="text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-gray-400 text-[10px] font-bold uppercase">
                        Harga Sewa
                      </span>
                      <span className="text-travel-dark font-bold text-lg">
                        {car.price}
                      </span>
                    </div>

                    {/* Tombol Booking WA */}
                    <Link
                      href={`https://wa.me/6281234567890?text=Halo%20FnS%20Travel,%20saya%20ingin%20sewa%20mobil%20${car.name}`}
                      target="_blank"
                      className="flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors shadow-md hover:shadow-lg"
                    >
                      <FaWhatsapp size={16} />
                      Booking
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Transportation;
