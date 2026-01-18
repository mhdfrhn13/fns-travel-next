import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaClock, FaArrowRight } from "react-icons/fa";
import { urlFor } from "@/lib/sanity"; // Import helper urlFor

// Terima props { data }
const BlogList = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
              Paket Populer
            </h2>
            <div className="w-24 h-1 bg-travel-pink"></div>
          </div>
          <Link
            href="/packages"
            className="hidden md:flex items-center gap-2 text-travel-pink font-bold hover:gap-4 transition-all"
          >
            Lihat Semua <FaArrowRight />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((pkg) => (
            <div
              key={pkg._id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="relative h-60 overflow-hidden">
                {pkg.image ? (
                  <Image
                    src={urlFor(pkg.image).url()}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <FaClock className="text-orange-500" /> {pkg.duration}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 line-clamp-1 group-hover:text-travel-pink transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {pkg.description}
                </p>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-gray-400 block">
                      Mulai dari
                    </span>
                    <span className="text-lg font-bold text-green-600">
                      {pkg.price}
                    </span>
                  </div>
                  <Link
                    href={`/itinerary/${pkg.slug}`}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-travel-pink hover:text-white transition-colors"
                  >
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Mobile */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 text-travel-pink font-bold"
          >
            Lihat Semua Paket <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
