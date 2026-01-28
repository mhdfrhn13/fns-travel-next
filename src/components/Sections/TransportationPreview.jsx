"use client";
import React from "react";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import { FaUserGroup, FaCarSide, FaWhatsapp } from "react-icons/fa6";
import { getWhatsAppLink } from "@/lib/utils";
import { WA_MESSAGES } from "@/lib/constants";

const TransportationPreview = ({ data }) => {
  return (
    <section id="transportation" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="text-travel-primary font-bold tracking-wider text-sm uppercase mb-2 block">
              Transportasi Nyaman
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-travel-dark">
              Armada Kami
            </h2>
            <p className="mt-4 text-gray-600 font-sans">
              Perjalanan aman dan nyaman dengan unit terbaru dan driver
              berpengalaman.
            </p>
          </div>
          <Link
            href="/transportation"
            className="hidden md:inline-flex items-center font-medium text-travel-dark hover:text-travel-primary transition-colors"
          >
            Lihat Semua Armada &rarr;
          </Link>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.map((car) => (
            <div
              key={car._id}
              className="group bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* 1. Image Container */}
              <div className="relative aspect-[16/10] bg-gray-50 rounded-xl overflow-hidden mb-6">
                {/* Background dekoratif bulat di belakang mobil */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-travel-primary/5 rounded-full blur-2xl group-hover:bg-travel-primary/10 transition-colors"></div>

                {car.image && (
                  <img
                    src={urlFor(car.image).url()}
                    alt={car.name}
                    className="relative w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>

              {/* 2. Car Details */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 font-serif">
                      {car.name}
                    </h3>
                    <p className="text-sm text-gray-500">{car.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-travel-primary">
                      {car.price}
                    </p>
                    <p className="text-xs text-gray-400">/ hari</p>
                  </div>
                </div>

                {/* Spesifikasi (Grid Kecil) */}
                <div className="grid grid-cols-2 gap-3 py-4 border-t border-b border-gray-50">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <FaUserGroup className="text-travel-primary" />
                    <span>{car.capacity} Orang</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <FaCarSide className="text-travel-primary" />
                    <span>Unit {car.type}</span>
                  </div>
                </div>

                {/* Action Button */}
                <a
                  href={getWhatsAppLink(WA_MESSAGES.carBooking(car.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-travel-primary transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-lg" /> Sewa Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/transportation"
            className="text-sm font-bold underline text-travel-dark"
          >
            Lihat Semua Armada
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TransportationPreview;
