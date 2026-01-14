"use client";

import { useEffect } from "react";
import Link from "next/link";
import { itineraries } from "@/data/itineraries";
import PageHeader from "@/components/UI/PageHeader";
import Reveal from "@/components/UI/Reveal";

export default function PackagesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pb-20 pt-[80px]">
      <PageHeader
        title="All Tour Packages"
        subtitle="Temukan berbagai pilihan destinasi wisata terbaik kami di seluruh Nusantara."
        image="/assets/blog1.jpg"
      />

      <div className="max-w-[1200px] mx-auto px-6 py-20"></div>

      <div className="max-w-[1000px] mx-auto px-4">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {itineraries.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row h-auto md:h-[250px] border border-gray-100 hover:shadow-xl transition-shadow"
              >
                {/* Gambar */}
                <div
                  className="w-full md:w-1/2 h-[200px] md:h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>

                {/* Teks Deskripsi */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                  <h4 className="text-xl font-bold mb-2 text-travel-dark">
                    <Link
                      href={`/itinerary/${item.id}`}
                      className="hover:text-travel-pink transition"
                    >
                      {item.title}
                    </Link>
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                    {item.description}
                  </p>
                  <div className="mt-auto">
                    <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded text-gray-500 mr-2">
                      {item.duration}
                    </span>
                    <Link
                      href={`/itinerary/${item.id}`}
                      className="text-travel-pink font-bold text-sm hover:underline"
                    >
                      Read More &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
