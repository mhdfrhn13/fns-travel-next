"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation"; // Import untuk membaca URL params
import { client, urlFor } from "@/lib/sanity";
import PageHeader from "@/components/UI/PageHeader";
import Link from "next/link";
import Image from "next/image";
import { FaClock, FaTag, FaArrowRight } from "react-icons/fa6";
import Reveal from "@/components/UI/Reveal";
import CustomTripCTA from "@/components/UI/CustomTripCTA";

// Komponen Konten Utama (diperlukan Suspense agar useSearchParams bekerja di Next.js)
const PackagesContent = () => {
  const searchParams = useSearchParams();
  const regionParam = searchParams.get("region"); // Mengambil ?region=...

  const [packages, setPackages] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [activeRegion, setActiveRegion] = useState("semua");
  const [loading, setLoading] = useState(true);

  const categories = [
    { title: "Semua", value: "semua" },
    { title: "Sumatra", value: "sumatra" },
    { title: "Jawa dan Bali", value: "jawa-bali" },
    { title: "Lainnya", value: "lainnya" },
  ];

  // 1. Fetch data dari Sanity
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const query = `*[_type == "itinerary"] | order(_createdAt desc) {
          _id,
          title,
          "slug": slug.current,
          image,
          price,
          duration,
          description,
          region
        }`;
        const data = await client.fetch(query);
        setPackages(data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  // 2. Sinkronisasi activeRegion dengan URL parameter
  useEffect(() => {
    if (regionParam) {
      setActiveRegion(regionParam);
    } else {
      setActiveRegion("semua");
    }
  }, [regionParam]);

  // 3. Logika Filter Otomatis
  useEffect(() => {
    if (activeRegion === "semua") {
      setFilteredPackages(packages);
    } else {
      const filtered = packages.filter((pkg) => pkg.region === activeRegion);
      setFilteredPackages(filtered);
    }
  }, [activeRegion, packages]);

  const handleFilter = (regionValue) => {
    // Saat tombol diklik manual, kita update state (opsional: bisa juga update URL)
    setActiveRegion(regionValue);
  };

  return (
    <>
      {/* Menu Filter Wilayah */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => handleFilter(cat.value)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeRegion === cat.value
                ? "bg-travel-primary text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* List Paket Wisata */}
      {loading ? (
        <div className="text-center py-20 text-gray-500">
          Memuat paket wisata...
        </div>
      ) : filteredPackages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg, index) => (
            <Reveal key={pkg._id} direction="up" delay={index * 0.1}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col h-full">
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
                      style={{ width: "100%", height: "auto" }} // Mengikuti dimensi asli gambar
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                </Link>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <FaClock className="text-travel-primary" />{" "}
                    <span>{pkg.duration}</span>
                  </div>
                  <Link href={`/itinerary/${pkg.slug}`}>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 group-hover:text-travel-primary transition-colors line-clamp-2 min-h-[3.5rem]">
                      {pkg.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-6 text-sm line-clamp-3 leading-relaxed flex-grow">
                    {pkg.description}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-sm font-bold text-travel-primary">
                      {pkg.price}
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
            Belum ada paket wisata untuk wilayah ini.
          </p>
        </div>
      )}
    </>
  );
};

// Komponen Utama Page
const PackagesPage = () => {
  return (
    <main className="bg-white pb-20 pt-[80px]">
      <Reveal direction="down">
        <PageHeader
          title="Paket Wisata"
          subtitle="Temukan petualangan terbaik Anda"
          image="/assets/pageHeader.jpg"
        />
      </Reveal>

      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Suspense diperlukan saat menggunakan useSearchParams di Next.js Client Component */}
        <Suspense fallback={<div>Memuat halaman...</div>}>
          <PackagesContent />
        </Suspense>
      </div>

      <CustomTripCTA />
    </main>
  );
};

export default PackagesPage;
