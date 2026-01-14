"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { itineraries } from "@/data/itineraries";

export default function ItineraryDetail() {
  const params = useParams(); // Ambil parameter dari URL
  const { slug } = params;

  const data = itineraries.find((item) => item.id === slug);
  const [activeTab, setActiveTab] = useState("summary");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <div className="text-center py-20 mt-20">Paket tidak ditemukan.</div>
    );
  }

  return (
    <div className="bg-white pb-20">
      {/* HEADER BANNER */}
      <header
        className="h-[60vh] bg-cover bg-center flex items-end justify-center relative"
        style={{ backgroundImage: `url(${data.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        <div className="z-10 text-center px-4 pb-32 animate-fade-in max-w-[900px]">
          <h1 className="text-white text-3xl md:text-5xl font-serif font-bold mb-4 drop-shadow-lg leading-tight">
            {data.title}
          </h1>
          <div className="flex justify-center gap-4 md:gap-6 text-white/90 font-medium text-sm md:text-base">
            <span className="bg-white/10 border border-white/20 px-5 py-2 rounded-full backdrop-blur-md flex items-center gap-2">
              ⏱ {data.duration}
            </span>
            <span className="bg-travel-pink px-5 py-2 rounded-full shadow-lg flex items-center gap-2">
              🏷 {data.price || "Best Price"}
            </span>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-[1100px] mx-auto px-4 -mt-20 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden min-h-[500px]">
          {/* TABS NAVIGATION */}
          <div className="flex border-b border-gray-100 bg-gray-50/50">
            {["summary", "itinerary"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-6 text-sm md:text-base font-bold uppercase tracking-widest transition-all relative
                    ${
                      activeTab === tab
                        ? "text-travel-pink bg-white"
                        : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                    }
                  `}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-travel-pink"></div>
                )}
              </button>
            ))}
          </div>

          <div className="p-6 md:p-10">
            {activeTab === "summary" && (
              <div className="animate-fade-in space-y-10">
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-serif font-bold text-travel-dark mb-4 border-l-4 border-travel-pink pl-4">
                    Tentang Paket Ini
                  </h3>
                  <p className="text-gray-600 leading-loose text-justify text-lg">
                    {data.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-4 border-b border-emerald-200 pb-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                        ✓
                      </div>
                      <h4 className="text-lg font-bold text-emerald-800">
                        Price Includes
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {data.includes?.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-700 text-sm"
                        >
                          <span className="text-emerald-500 mt-0.5">●</span>{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-rose-50 rounded-xl p-6 border border-rose-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-4 border-b border-rose-200 pb-3">
                      <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold">
                        ✕
                      </div>
                      <h4 className="text-lg font-bold text-rose-800">
                        Price Excludes
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {data.excludes?.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-700 text-sm"
                        >
                          <span className="text-rose-400 mt-0.5">●</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "itinerary" && (
              <div className="animate-fade-in space-y-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif font-bold text-travel-dark">
                    Jadwal Perjalanan
                  </h3>
                  <p className="text-gray-500">Rincian kegiatan harian Anda</p>
                </div>
                <div className="space-y-12 relative">
                  <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-[2px] bg-gray-100 -translate-x-1/2"></div>
                  {data.days.map((day, index) => (
                    <div
                      key={day.day}
                      className={`flex flex-col md:flex-row items-center gap-8 ${
                        index % 2 !== 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="w-full md:w-1/2">
                        <div className="relative group overflow-hidden rounded-xl shadow-lg h-[280px]">
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full font-bold text-travel-pink text-sm shadow-sm z-10">
                            HARI {day.day}
                          </div>
                          <img
                            src={day.image || data.image}
                            alt={day.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 relative">
                        <div
                          className={`hidden md:block absolute top-1/2 w-4 h-4 bg-travel-pink rounded-full border-4 border-white shadow-md z-10 ${
                            index % 2 !== 0 ? "-right-[42px]" : "-left-[42px]"
                          }`}
                        ></div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                          <h4 className="text-xl font-bold text-gray-800 mb-3 leading-snug">
                            {day.title}
                          </h4>
                          <ul className="space-y-2">
                            {day.activities.map((act, idx) => (
                              <li
                                key={idx}
                                className="text-gray-600 text-sm flex gap-3 items-start"
                              >
                                <span className="min-w-[6px] h-[6px] rounded-full bg-travel-pink mt-1.5"></span>{" "}
                                {act}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 text-center pb-10">
          <a
            href={`https://wa.me/6285365968845?text=Halo%2C%20saya%20tertarik%20booking%20paket%20${data.title}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-travel-pink text-white text-lg font-bold py-4 px-12 rounded-full shadow-lg hover:bg-pink-700 hover:-translate-y-1 transition-all"
          >
            <span>Booking via WhatsApp</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.69 9-8.25s-4.03-8.25-9-8.25S3 7.44 3 12c0 2.1.96 4.1 2.7 5.6C5.7 19.65 12 20.25 12 20.25z"
              />
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
}
