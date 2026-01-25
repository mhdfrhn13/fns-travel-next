"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaWhatsapp,
  FaTimes,
  FaMapMarkedAlt,
  FaPenFancy,
} from "react-icons/fa";

const CustomTripCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Muncul perlahan setelah 2 detik
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // --- TAMPILAN 1: ICON KECIL (MINIMIZED) ---
  // Muncul jika user menekan tombol close.
  // Posisi bottom-24 (sekitar 6rem/96px) agar berada DI ATAS tombol WA standar.
  if (isMinimized) {
    return (
      <div
        onClick={() => setIsMinimized(false)}
        className={`fixed z-50 right-4 md:right-8 bottom-24 cursor-pointer transition-all duration-500 transform ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
        }`}
      >
        <div className="group relative flex items-center justify-center w-12 h-12 bg-white text-travel-pink rounded-full shadow-lg border-2 border-travel-pink hover:bg-travel-pink hover:text-white transition-colors">
          {/* Tooltip Hover */}
          <span className="absolute right-full mr-3 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Buat Custom Trip
          </span>
          <FaPenFancy size={18} />
        </div>
      </div>
    );
  }

  // --- TAMPILAN 2: CARD BESAR (EXPANDED) ---
  return (
    <div
      className={`fixed z-50 transition-all duration-700 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      } bottom-4 right-4 md:bottom-8 md:right-8 w-[90%] md:w-auto left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0`}
    >
      <div className="bg-white p-5 rounded-2xl shadow-2xl border-t-4 border-travel-pink flex flex-col md:flex-row items-center gap-4 md:max-w-md relative animate-fade-in-up">
        {/* Tombol Minimize (-) / Close (X) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsMinimized(true);
          }}
          className="absolute -top-3 -right-3 bg-gray-800 text-white p-1.5 rounded-full shadow-md hover:bg-gray-600 transition-colors z-10"
          aria-label="Minimize widget"
        >
          <FaTimes size={12} />
        </button>

        {/* Icon & Teks */}
        <div className="flex items-center gap-3 text-left">
          <div className="bg-travel-pink/10 p-3 rounded-full text-travel-pink shrink-0">
            <FaMapMarkedAlt size={24} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm md:text-base leading-tight">
              Bingung pilih paket?
            </h4>
            <p className="text-xs md:text-sm text-gray-500 mt-1 leading-snug">
              Buat <i>itinerary</i> liburan impianmu sendiri bersama kami!
            </p>
          </div>
        </div>

        {/* Tombol CTA */}
        <Link
          href="https://wa.me/6281234567890?text=Halo%20FnS%20Travel,%20saya%20ingin%20konsultasi%20untuk%20Custom%20Trip..."
          target="_blank"
          className="bg-travel-pink text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-pink-700 transition-all shadow-lg hover:shadow-pink-200 whitespace-nowrap w-full md:w-auto justify-center"
        >
          <FaWhatsapp size={18} />
          Buat Trip Personal
        </Link>
      </div>
    </div>
  );
};

export default CustomTripCTA;
