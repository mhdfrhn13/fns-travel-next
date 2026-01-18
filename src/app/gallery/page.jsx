"use client"; // Ubah menjadi Client Component karena butuh interaksi (onClick)

import React, { useState, useEffect } from "react";
import PageHeader from "@/components/UI/PageHeader";
import Image from "next/image";
import Reveal from "@/components/UI/Reveal";
import { FaMapMarkerAlt } from "react-icons/fa";
import { client, urlFor } from "@/lib/sanity";
import ImageModal from "@/components/UI/ImageModal"; // 1. Import Modal

const GalleryPage = () => {
  const [gallery, setGallery] = useState([]);

  // State untuk Modal
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch data di client side (karena ini sekarang Client Component)
  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "gallery"] | order(_createdAt desc)`;
      const data = await client.fetch(query);
      setGallery(data);
    };
    fetchData();
  }, []);

  // Handler buka modal
  const openModal = (image, title) => {
    setSelectedImage({ src: urlFor(image).url(), title });
    setIsModalOpen(true);
  };

  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      <PageHeader
        title="Galeri Perjalanan"
        subtitle="Momen-momen indah yang telah kami abadikan bersama para pelanggan setia."
        image="/assets/pagaruyung.webp"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        {gallery.length === 0 && (
          <div className="text-center bg-white p-12 rounded-2xl shadow-lg">
            <h3 className="text-xl text-gray-600">Memuat Galeri...</h3>
          </div>
        )}

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {gallery.map((item, index) => (
            <Reveal key={item._id} direction="up" delay={index * 0.05}>
              <div
                className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer"
                onClick={() => openModal(item.image, item.title)} // 2. Tambah Event Click
              >
                <div className="relative w-full">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.title || "Gallery Image"}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  )}

                  {/* Overlay dengan icon zoom */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.title}
                    </span>

                    {item.location && (
                      <div className="flex items-center gap-2 text-gray-200 text-sm mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        <FaMapMarkerAlt className="text-travel-pink" />
                        <span>{item.location}</span>
                      </div>
                    )}

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 bg-white/20 p-3 rounded-full backdrop-blur-sm">
                      <span className="text-sm font-bold">Lihat Foto</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. Render Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={selectedImage?.src}
        title={selectedImage?.title}
      />
    </main>
  );
};

export default GalleryPage;
