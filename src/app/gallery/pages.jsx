"use client";

import { useState, useEffect } from "react";
import Popup from "@/components/UI/Popup";
import { galleryData } from "@/data/galleryData";
import PageHeader from "@/components/UI/PageHeader";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pb-20 pt-[80px]">
      <PageHeader
        title="Our Complete Gallery"
        subtitle="Kumpulan momen indah dari perjalanan para traveler bersama FnS Tour and Travel."
        image="/assets/blog1.jpg"
      />
      <div className="max-w-[1200px] mx-auto px-6 py-20"></div>

      <div className="max-w-[1000px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryData.map((src, index) => (
            <div
              key={index}
              className="relative group h-[250px] overflow-hidden rounded-xl shadow-md cursor-pointer hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-4xl font-light transform scale-50 group-hover:scale-100 transition-transform duration-300">
                  +
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Popup src={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}
