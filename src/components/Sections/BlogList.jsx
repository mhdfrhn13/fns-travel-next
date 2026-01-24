"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import { FaClock, FaArrowRight } from "react-icons/fa";

const BlogList = ({ data }) => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Paket Wisata Populer
          </h2>
          <div className="w-20 h-1 bg-travel-pink mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pilihan destinasi terbaik yang paling diminati oleh para wisatawan.
            Temukan pengalaman liburan impian Anda di sini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              {/* === 1. FOTO BISA DIKLIK === */}
              {/* Dibungkus Link agar mengarah ke detail */}
              <Link
                href={`/itinerary/${item.slug}`}
                className="relative w-full overflow-hidden block cursor-pointer"
              >
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </Link>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <FaClock className="text-travel-pink" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* === 2. JUDUL BISA DIKLIK === */}
                <Link href={`/itinerary/${item.slug}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-travel-pink transition-colors cursor-pointer">
                    {item.title}
                  </h3>
                </Link>

                <p className="text-gray-600 mb-6 line-clamp-2 flex-grow">
                  {item.description}
                </p>

                <Link
                  href={`/itinerary/${item.slug}`}
                  className="inline-flex items-center gap-2 text-travel-pink font-bold hover:gap-3 transition-all"
                >
                  Lihat Detail <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* BUTTON LIHAT SEMUA */}
        <div className="text-center mt-12">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 bg-black text-white px-10 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all hover:shadow-lg transform hover:scale-105"
          >
            Lihat Semua Paket
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

export default BlogList;
