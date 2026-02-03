import React from "react";
import PageHeader from "@/components/UI/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { FaUserFriends, FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import Reveal from "@/components/UI/Reveal";

// 1. Import Sanity Client
import { client, urlFor } from "@/lib/sanity";

// 2. Fungsi Fetch Data (Tanpa useEffect!)
async function getCars() {
  // Query GROQ: Ambil semua data tipe 'car'
  const query = `*[_type == "car"] | order(price asc)`;
  const data = await client.fetch(query);
  return data;
}

// 3. Tambahkan 'async' pada komponen
const Transportation = async () => {
  const cars = await getCars(); // Fetch data di server

  return (
    <main className="bg-white pb-20 pt-[80px]">
      <PageHeader
        title="Sewa Mobil & Transportasi"
        image="/assets/pageHeader.jpg"
        subtitle="Armada terawat dengan sopir berpengalaman"
      />
      <div className="max-w-[1200px] mx-auto px-6 py-20"></div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <Reveal key={car._id} direction="up" delay={index * 0.1}>
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
                {/* GAMBAR DARI SANITY */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  {car.image && (
                    <Image
                      src={urlFor(car.image).url()} // Helper function untuk URL gambar
                      alt={car.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-gray-900">
                      {car.name}
                    </h3>
                  </div>

                  {/* Kapasitas */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4 font-medium">
                    <FaUserFriends className="text-travel-primary" />
                    <span>{car.capacity}</span>
                  </div>

                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                    {car.description}
                  </p>

                  {/* Fitur */}
                  <div className="mb-6 space-y-2">
                    {car.features &&
                      car.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs text-gray-600"
                        >
                          <FaCheckCircle className="text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                  </div>

                  {/* Harga & Button */}
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-gray-400 text-[10px] font-bold uppercase">
                        Harga Sewa
                      </span>
                      <span className="text-travel-dark font-bold text-lg">
                        {car.price}
                      </span>
                    </div>

                    <Link
                      href={`https://wa.me/6281234567890?text=Halo%20FnS%20Travel,%20saya%20ingin%20sewa%20mobil%20${car.name}`}
                      target="_blank"
                      className="flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
                    >
                      <FaWhatsapp size={16} />
                      Booking
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

export default Transportation;
