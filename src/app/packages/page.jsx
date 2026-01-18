import React from "react";
import PageHeader from "@/components/UI/PageHeader";
import Link from "next/link";
import Image from "next/image";
import { FaClock, FaTag, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import Reveal from "@/components/UI/Reveal";

// 1. Import Client Sanity
import { client, urlFor } from "@/lib/sanity";

// 2. Konfigurasi Revalidate (Opsional: agar data update tiap 60 detik)
export const revalidate = 60;

// 3. Fungsi Fetch Data
async function getPackages() {
  const query = `*[_type == "itinerary"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    image,
    duration,
    price,
    description,
    includes
  }`;

  return await client.fetch(query);
}

const Packages = async () => {
  const packages = await getPackages();

  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      {/* Header Halaman */}
      <PageHeader
        title="Paket Wisata Eksklusif"
        image="/assets/lembah-harau.webp" // Pastikan gambar ini ada di folder public/assets
        subtitle="Temukan pengalaman liburan tak terlupakan di Ranah Minang"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        {/* State Kosong (Jika belum input data di Sanity) */}
        {packages.length === 0 && (
          <div className="text-center bg-white p-10 rounded-2xl shadow-lg">
            <h3 className="text-xl text-gray-600">
              Belum ada paket wisata yang tersedia saat ini.
            </h3>
            <p className="text-gray-400 mt-2">
              Silakan cek kembali nanti atau hubungi admin.
            </p>
          </div>
        )}

        {/* Grid Paket */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Reveal key={pkg._id} direction="up" delay={index * 0.1}>
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
                {/* Image Wrapper */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-white">
                  {" "}
                  {/* <--- 1. Ubah background jadi putih */}
                  {pkg.image ? (
                    <Image
                      src={urlFor(pkg.image).url()}
                      alt={pkg.title}
                      fill
                      // 2. Ganti 'object-cover' jadi 'object-contain' di bawah ini
                      className="object-contain transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
                      No Image
                    </div>
                  )}
                  {/* Badge Durasi (Overlay) */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5 text-xs font-bold text-gray-800">
                    <FaClock className="text-orange-500" />
                    {pkg.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {pkg.title}
                  </h3>

                  <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-grow">
                    {pkg.description}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-gray-100 my-4"></div>

                  {/* Footer Card: Harga & Tombol */}
                  <div className="flex items-end justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400 mb-1">
                        Mulai dari
                      </span>
                      <div className="flex items-center gap-1 text-green-600 font-bold text-lg">
                        <FaTag size={14} />
                        {pkg.price}
                      </div>
                    </div>

                    <Link
                      href={`/itinerary/${pkg.slug}`}
                      className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors group-hover:translate-x-1"
                    >
                      <FaArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Packages;
