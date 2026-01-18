"use client";
import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity"; // Pastikan path ini sesuai dengan project Anda
import Popup from "../UI/Popup"; // Import komponen Popup yang sudah dibuat sebelumnya

const Gallery = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!data || data.length === 0) return null;

  return (
    // PERBAIKAN: Menambahkan py-20 (padding atas-bawah) dan bg-white
    <section className="py-20 bg-white relative z-10">
      <div className="container mx-auto px-4">
        {/* TAMBAHAN: Header Judul agar ada jarak visual yang rapi dari section Quote */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Galeri Perjalanan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kumpulan momen indah tak terlupakan dari para wisatawan yang telah
            menjelajahi Sumatera Barat bersama kami.
          </p>
        </div>

        {/* Grid Galeri */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {data.map((item) => (
            <div
              key={item._id}
              className="group relative h-64 md:h-72 cursor-pointer overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              onClick={() =>
                setSelectedImage(urlFor(item.image).width(1200).url())
              }
            >
              <Image
                src={urlFor(item.image).width(600).height(600).url()}
                alt={item.title || "Gallery"}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        {/* Fitur Popup */}
        {selectedImage && (
          <Popup src={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </div>
    </section>
  );
};

export default Gallery;
