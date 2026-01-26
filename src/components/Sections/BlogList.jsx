"use client";

import React from "react";
import Image from "next/image"; // Menggunakan Image Next.js sesuai repo awal
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import { FaClock, FaTag, FaArrowRight } from "react-icons/fa6";

const BlogList = ({ data }) => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-travel-dark mb-4">
            Paket Populer
          </h2>
          <p className="font-sans text-gray-500 max-w-2xl mx-auto">
            Pilihan paket wisata terbaik yang paling diminati oleh para
            traveler. Nikmati pengalaman tak terlupakan bersama kami.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.map((item) => (
            <div
              key={item._id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col h-full"
            >
              {/* 1. Image Wrapper (RASIO ASLI SESUAI REPO AWAL) */}
              <Link
                href={`/itinerary/${item.slug}`}
                className="relative w-full overflow-hidden block cursor-pointer"
              >
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }} // Mengikuti dimensi asli gambar
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                {/* Overlay Badge Harga */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-travel-primary shadow-sm flex items-center gap-1 z-10">
                  <FaTag /> Mulai {item.price}
                </div>
              </Link>

              {/* 2. Content Body */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta Info: Durasi */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <FaClock className="text-travel-primary" />
                  <span>{item.duration}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-bold text-gray-800 mb-3 group-hover:text-travel-primary transition-colors">
                  <Link href={`/itinerary/${item.slug}`}>{item.title}</Link>
                </h3>

                {/* Description (Line Clamp 3 Baris agar rapi) */}
                <p className="font-sans text-gray-600 mb-6 text-sm line-clamp-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Divider Spacer */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Termasuk Hotel & Transport
                  </span>

                  {/* Link Button */}
                  <Link
                    href={`/itinerary/${item.slug}`}
                    className="flex items-center gap-2 text-travel-primary font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Lihat Detail <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Lihat Semua */}
        <div className="text-center mt-12">
          <Link
            href="/packages"
            className="inline-block border-2 border-travel-dark text-travel-dark font-medium px-8 py-3 rounded-full hover:bg-travel-dark hover:text-white transition-all duration-300"
          >
            Lihat Semua Paket
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
