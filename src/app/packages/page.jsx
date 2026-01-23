import React from "react";
import { client, urlFor } from "@/lib/sanity";
import PageHeader from "@/components/UI/PageHeader";
import Link from "next/link";
import Image from "next/image";
import { FaClock } from "react-icons/fa";
import Reveal from "@/components/UI/Reveal";

// Fetch data paket (semua)
async function getPackages() {
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
    <main className="bg-gray-50 min-h-screen pb-20">
      <Reveal direction="down">
        <PageHeader
          title="Paket Wisata"
          subtitle="Temukan petualangan tak terlupakan di Sumatera Barat"
          image="/assets/background-bromo.jpg"
        />
      </Reveal>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Reveal key={pkg._id} direction="up" delay={index * 0.1}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col h-full">
                {/* === 1. FOTO BISA DIKLIK === */}
                <Link
                  href={`/itinerary/${pkg.slug}`}
                  className="relative w-full overflow-hidden block cursor-pointer"
                >
                  <Image
                    src={urlFor(pkg.image).url()}
                    alt={pkg.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Badge Durasi */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <FaClock /> {pkg.duration}
                  </div>
                </Link>

                <div className="p-6 flex flex-col flex-grow">
                  {/* === 2. JUDUL BISA DIKLIK === */}
                  <Link href={`/itinerary/${pkg.slug}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-travel-pink transition-colors cursor-pointer">
                      {pkg.title}
                    </h3>
                  </Link>

                  <p className="text-travel-pink font-bold text-lg mb-4">
                    {pkg.price}
                  </p>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow">
                    {pkg.description}
                  </p>

                  <Link
                    href={`/itinerary/${pkg.slug}`}
                    className="w-full block text-center bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-travel-pink transition-colors mt-auto"
                  >
                    Lihat Detail Paket
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PackagesPage;
