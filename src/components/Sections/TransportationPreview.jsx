import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUserFriends, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { urlFor } from "@/lib/sanity"; // Helper untuk gambar Sanity

const TransportationPreview = ({ data }) => {
  // Jika tidak ada data, jangan tampilkan section ini
  if (!data || data.length === 0) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
              Armada Kami
            </h2>
            <div className="w-20 h-1 bg-travel-pink mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilihan kendaraan terbaik untuk kenyamanan perjalanan wisata
              maupun dinas Anda.
            </p>
          </div>
        </div>

        {/* Grid Mobil */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((car) => (
            <div
              key={car._id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
            >
              {/* Gambar Mobil */}
              <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
                {car.image ? (
                  <Image
                    src={urlFor(car.image).url()}
                    alt={car.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    No Image
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-travel-dark/90 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                  {car.type || "Armada"}
                </div>
              </div>

              {/* Detail Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-travel-pink transition-colors">
                  {car.name}
                </h3>

                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4 font-medium">
                  <FaUserFriends className="text-travel-pink" />
                  <span>{car.capacity}</span>
                </div>

                {/* Footer Card */}
                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold uppercase">
                      Mulai dari
                    </span>
                    <span className="text-travel-dark font-bold">
                      {car.price}
                    </span>
                  </div>

                  <Link
                    href={`https://wa.me/6281234567890?text=Halo%20FnS%20Travel,%20saya%20tertarik%20sewa%20mobil%20${car.name}`}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all"
                  >
                    <FaWhatsapp size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON LIHAT SEMUA */}
        <div className="text-center mt-12">
          <Link
            href="/transportation"
            className="inline-flex items-center gap-2 bg-black text-white px-10 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all hover:shadow-lg transform hover:scale-105"
          >
            Lihat Semua Armada
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TransportationPreview;
