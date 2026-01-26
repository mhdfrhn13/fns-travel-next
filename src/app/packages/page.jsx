import React from "react";
import { client, urlFor } from "@/lib/sanity";
import PageHeader from "@/components/UI/PageHeader";
import Link from "next/link";
import Image from "next/image";
import { FaClock, FaTag, FaArrowRight } from "react-icons/fa6"; // Update ke fa6
import Reveal from "@/components/UI/Reveal";

// 1. IMPORT KOMPONEN CTA BARU
import CustomTripCTA from "@/components/UI/CustomTripCTA";

// Fetch data paket (semua)
async function getPackages() {
  // Menambahkan _createdAt desc agar paket terbaru muncul duluan
  const query = `*[_type == "itinerary"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    image,
    price,
    duration,
    description
  }`;
  return await client.fetch(query);
}

const PackagesPage = async () => {
  const packages = await getPackages();

  return (
    <main className="bg-white pb-20 pt-[80px]">
      <Reveal direction="down">
        <PageHeader
          title="Paket Wisata"
          subtitle="Temukan petualangan tak terlupakan di Sumatera Barat"
          image="/assets/background-bromo.jpg"
        />
      </Reveal>

      <div className="max-w-[1200px] mx-auto px-6 py-20">
        {/* Pengecekan jika data kosong agar tidak error */}
        {packages?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Reveal key={pkg._id} direction="up" delay={index * 0.1}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col h-full">
                  {/* === 1. FOTO BISA DIKLIK (Rasio Asli) === */}
                  <Link
                    href={`/itinerary/${pkg.slug}`}
                    className="relative w-full overflow-hidden block cursor-pointer"
                  >
                    {pkg.image && (
                      <Image
                        src={urlFor(pkg.image).url()}
                        alt={pkg.title}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}

                    {/* Badge Harga Modern (Pojok Kanan Atas) */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-travel-primary shadow-sm flex items-center gap-1 z-10">
                      <FaTag /> Mulai {pkg.price}
                    </div>
                  </Link>

                  {/* === 2. KONTEN BODY === */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Meta Info: Durasi */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 font-medium">
                      <FaClock className="text-travel-primary" />
                      <span>{pkg.duration}</span>
                    </div>

                    {/* Judul */}
                    <Link href={`/itinerary/${pkg.slug}`}>
                      <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3 group-hover:text-travel-primary transition-colors cursor-pointer">
                        {pkg.title}
                      </h3>
                    </Link>

                    {/* Deskripsi (Line Clamp) */}
                    <p className="font-sans text-gray-600 mb-6 text-sm line-clamp-3 leading-relaxed flex-grow">
                      {pkg.description}
                    </p>

                    {/* Footer Card: Divider & Link */}
                    <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        All Inclusive
                      </span>

                      <Link
                        href={`/itinerary/${pkg.slug}`}
                        className="flex items-center gap-2 text-travel-primary font-semibold text-sm hover:gap-3 transition-all"
                      >
                        Lihat Detail <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
            <p className="font-medium text-lg">
              Belum ada paket wisata yang tersedia saat ini.
            </p>
            <p className="text-sm">Silakan kembali lagi nanti.</p>
          </div>
        )}
      </div>

      {/* 2. CUSTOM TRIP CTA (PALING BAWAH) */}
      <CustomTripCTA />
    </main>
  );
};

export default PackagesPage;
