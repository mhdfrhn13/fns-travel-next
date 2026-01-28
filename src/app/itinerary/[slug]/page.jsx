import React from "react";
import { client, urlFor } from "@/lib/sanity";
import PageHeader from "@/components/UI/PageHeader";
import Image from "next/image";
import Link from "next/link";
import {
  FaClock,
  FaWhatsapp,
  FaCheck,
  FaTimes,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import Reveal from "@/components/UI/Reveal";
import { notFound } from "next/navigation";
import ReviewSection from "@/components/Sections/ReviewSection";
import {
  IoTimeOutline,
  IoWalletOutline,
  IoWarningOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";
import { getWhatsAppLink } from "@/lib/utils";
import { WA_MESSAGES } from "@/lib/constants";

// 1. Fungsi Fetch Data Detail
async function getItinerary(slug) {
  const query = `*[_type == "itinerary" && slug.current == $slug][0]{
    _id,
    title,
    image,
    duration,
    price,
    description,
    includes,
    excludes,
    days[] {
      day,
      title,
      image,
      activities
    },
    "reviews": *[_type == "review" && package._ref == ^._id && isApproved == true] | order(_createdAt desc) {
      _id,
      name,
      rating,
      comment
    }
  }`;

  const data = await client.fetch(query, { slug });
  return data;
}

// 2. Fungsi Generate Metadata untuk SEO & Share Link
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getItinerary(slug);

  if (!data) {
    return {
      title: "Paket Tidak Ditemukan | FnS Travel",
      description: "Mohon maaf, paket wisata yang Anda cari tidak tersedia.",
    };
  }

  // Ambil URL gambar untuk Open Graph (Ukuran rekomendasi 1200x630)
  const ogImage = data.image
    ? urlFor(data.image).width(1200).height(630).url()
    : "/assets/lembah-harau.webp"; // Fallback image jika tidak ada foto

  return {
    title: `${data.title} | FnS Travel`,
    description: data.description
      ? data.description.substring(0, 160) + "..." // Potong deskripsi agar pas di Google
      : `Nikmati perjalanan seru ${data.title} bersama FnS Travel. Booking sekarang!`,
    openGraph: {
      title: data.title,
      description: data.description
        ? data.description.substring(0, 160)
        : "Agen perjalanan wisata terbaik di Sumatera Barat.",
      url: `https://fnstravel.com/itinerary/${slug}`, // Sesuaikan dengan domain asli Anda nanti
      siteName: "FnS Travel",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
      type: "website",
    },
  };
}

// 2. Komponen Utama
const ItineraryDetail = async ({ params }) => {
  const { slug } = await params;
  const data = await getItinerary(slug);

  if (!data) {
    return notFound();
  }

  return (
    <main className="bg-white min-h-screen pb-20">
      {/* --- HEADER --- */}
      <PageHeader
        title={data.title}
        image={
          data.image ? urlFor(data.image).url() : "/assets/lembah-harau.webp"
        }
        subtitle={`Paket Wisata ${data.duration} Terbaik`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* === KOLOM KIRI (KONTEN UTAMA) === */}
          <div className="lg:col-span-2 space-y-10">
            {/* 1. Deskripsi & Highlight */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-travel-pink" />
                Tentang Destinasi
              </h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line text-justify">
                {data.description}
              </p>
            </div>

            {/* 2. Itinerary Harian (Timeline) */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 flex items-center gap-2">
                <FaCalendarAlt className="text-travel-pink" />
                Rencana Perjalanan
              </h2>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {data.days?.map((day, index) => (
                  <Reveal key={index} direction="up" delay={index * 0.1}>
                    <div className="relative flex items-start group">
                      {/* Bullet Point Timeline */}
                      <div className="absolute left-0 ml-5 -translate-x-1/2 md:translate-x-0 top-0 mt-1">
                        <div className="w-4 h-4 rounded-full bg-travel-pink border-4 border-white shadow-md group-hover:scale-125 transition-transform"></div>
                      </div>

                      <div className="ml-12 w-full">
                        <span className="text-xs font-bold text-travel-pink uppercase tracking-wider mb-1 block">
                          Hari Ke-{day.day}
                        </span>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                          {day.title}
                        </h3>

                        {/* Foto Kegiatan (Opsional per hari) */}
                        {day.image && (
                          <div className="relative w-full h-48 md:h-64 mb-4 rounded-xl overflow-hidden shadow-sm">
                            <Image
                              src={urlFor(day.image).url()}
                              alt={day.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}

                        {/* List Aktivitas */}
                        <ul className="space-y-2">
                          {day.activities?.map((act, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-gray-600 text-sm md:text-base"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* --- FITUR BARU: KARTU PEMBERITAHUAN (WARNING) --- */}
            <div className="bg-orange-50 border-l-4 border-orange-400 p-5 rounded-r-lg mt-8 animate-fade-in">
              <div className="flex items-start gap-3">
                <IoWarningOutline className="text-orange-500 text-2xl flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-orange-800 text-sm uppercase tracking-wide mb-1">
                    Penting Dibaca
                  </h4>
                  <p className="text-orange-700 text-sm leading-relaxed">
                    Jadwal perjalanan sewaktu-waktu bisa berubah sesuai kondisi
                    lapangan, lalu lintas, dan cuaca demi keselamatan dan
                    kenyamanan bersama.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Review Section (BARU) */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <ReviewSection
                packageId={data._id}
                existingReviews={data.reviews || []}
              />
            </div>
          </div>

          {/* === KOLOM KANAN (SIDEBAR STICKY) === */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Card Harga & Booking */}
              <Reveal direction="left" delay={0.2}>
                <div className="bg-white rounded-2xl shadow-xl p-6 border-t-4 border-travel-pink">
                  <div className="flex items-center gap-2 text-gray-500 mb-2">
                    <FaClock />
                    <span className="text-sm font-medium">{data.duration}</span>
                  </div>
                  <div className="mb-6">
                    <p className="text-sm text-gray-400">Harga mulai dari</p>
                    <p className="text-3xl font-bold text-travel-dark">
                      {data.price}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      *Harga dapat berubah sewaktu-waktu
                    </p>
                  </div>

                  <Link
                    href={getWhatsAppLink(
                      WA_MESSAGES.packageBooking(data.title),
                    )}
                    target="_blank"
                    className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-green-200 transform hover:-translate-y-1"
                  >
                    <FaWhatsapp size={20} />
                    Booking via WhatsApp
                  </Link>
                </div>
              </Reveal>

              {/* Card Include/Exclude */}
              <Reveal direction="left" delay={0.4}>
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                  <h3 className="font-bold text-gray-800 mb-4 text-lg border-b pb-2">
                    Fasilitas
                  </h3>

                  {/* Includes */}
                  <div className="mb-6">
                    <p className="text-sm font-bold text-green-600 mb-3 flex items-center gap-2">
                      <FaCheck className="bg-green-100 p-1 rounded-full text-xl" />{" "}
                      Termasuk
                    </p>
                    <ul className="space-y-2">
                      {data.includes?.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-600 flex items-start gap-2"
                        >
                          <span className="text-green-500 mt-1">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excludes */}
                  {data.excludes && data.excludes.length > 0 && (
                    <div>
                      <p className="text-sm font-bold text-red-500 mb-3 flex items-center gap-2">
                        <FaTimes className="bg-red-100 p-1 rounded-full text-xl" />{" "}
                        Tidak Termasuk
                      </p>
                      <ul className="space-y-2">
                        {data.excludes.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-600 flex items-start gap-2"
                          >
                            <span className="text-red-400 mt-1">✕</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ItineraryDetail;
