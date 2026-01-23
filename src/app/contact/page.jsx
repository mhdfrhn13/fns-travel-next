"use client";

import React, { useState } from "react";
import PageHeader from "@/components/UI/PageHeader";
import Reveal from "@/components/UI/Reveal"; // 1. Import Reveal
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaCheckCircle,
  FaPaperPlane,
  FaSpinner,
} from "react-icons/fa";
import Link from "next/link";

const ContactPage = () => {
  // STATE UNTUK FORM
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // FUNGSI SUBMIT KE FORMSPREE
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.target);
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeeejkap"; // Ganti dengan ID Anda

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSuccess(true);
        e.target.reset();
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, "errors")) {
          setErrorMessage(data.errors.map((error) => error.message).join(", "));
        } else {
          setErrorMessage("Terjadi kesalahan saat mengirim pesan.");
        }
      }
    } catch (error) {
      setErrorMessage("Gagal terhubung ke server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white pb-20 pt-[80px]">
      {/* 2. Wrap Header dengan Reveal */}
      <Reveal>
        <PageHeader
          title="Hubungi Kami"
          subtitle="Kami siap membantu merencanakan liburan impian Anda"
          image="/assets/pagaruyung.webp"
        />
      </Reveal>

      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* === KOLOM KIRI: INFO KONTAK & SOSMED === */}
          {/* 3. Wrap Kolom Kiri dengan Reveal (Slide dari Kiri) */}
          <div className="lg:col-span-1 space-y-8">
            <Reveal direction="left" delay={0.2}>
              {/* Kartu Informasi Kontak */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-travel-pink mb-8">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  Kantor Kami
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-travel-pink flex-shrink-0">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Alamat</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Jl. Kirab Remaja No.32, Puhun Tembok, Kota Bukittinggi,
                        Sumatera Barat
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-travel-pink flex-shrink-0">
                      <FaPhone size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Telepon / WA</h4>
                      <p className="text-gray-600 text-sm">+62 853-6596-8845</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-travel-pink flex-shrink-0">
                      <FaEnvelope size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Email</h4>
                      <p className="text-gray-600 text-sm">
                        fnsholiday@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sosial Media */}
              <div className="bg-gray-900 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-travel-pink/20 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-travel-pink/30 transition-all"></div>

                <h3 className="text-xl font-bold mb-6 relative z-10">
                  Ikuti Petualangan Kami
                </h3>

                <div className="flex gap-4 relative z-10">
                  <Link
                    href="https://www.instagram.com/fnstourandtravel/"
                    target="_blank"
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-red-500 hover:to-purple-500 hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/10"
                  >
                    <FaInstagram size={24} />
                  </Link>
                  <Link
                    href="https://web.facebook.com/profile.php?id=61586778124542"
                    target="_blank"
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 hover:bg-blue-600 hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/10"
                  >
                    <FaFacebook size={24} />
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@fnstourandtravel"
                    target="_blank"
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 hover:bg-black hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/10"
                  >
                    <FaTiktok size={22} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          {/* === KOLOM KANAN: FORM PESAN === */}
          {/* 4. Wrap Kolom Kanan dengan Reveal (Slide dari Kanan) */}
          <div className="lg:col-span-2">
            <Reveal direction="right" delay={0.4}>
              <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-travel-pink mb-8">
                {isSuccess ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-fade-in">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6 shadow-lg">
                      <FaCheckCircle size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      Pesan Terkirim!
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto mb-8">
                      Terima kasih telah menghubungi kami. Tim FnS Travel akan
                      segera membalas pesan Anda.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-8 py-3 bg-gray-900 text-white rounded-full font-bold hover:bg-travel-pink transition-colors"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                      Kirim Pesan
                    </h3>
                    <p className="text-gray-500 mb-8">
                      Punya pertanyaan seputar paket wisata? Silakan isi form di
                      bawah ini.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">
                            Nama Lengkap
                          </label>
                          <input
                            type="text"
                            name="name"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-travel-pink focus:ring-2 focus:ring-travel-pink/20 outline-none transition-all"
                            placeholder="Nama Anda"
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-travel-pink focus:ring-2 focus:ring-travel-pink/20 outline-none transition-all"
                            placeholder="email@contoh.com"
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Subjek
                        </label>
                        <input
                          type="text"
                          name="subject"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-travel-pink focus:ring-2 focus:ring-travel-pink/20 outline-none transition-all"
                          placeholder="Tanya Paket Wisata..."
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Pesan
                        </label>
                        <textarea
                          name="message"
                          rows="5"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-travel-pink focus:ring-2 focus:ring-travel-pink/20 outline-none transition-all resize-none"
                          placeholder="Tulis pesan Anda di sini..."
                          required
                          disabled={isSubmitting}
                        ></textarea>
                      </div>

                      {errorMessage && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center">
                          {errorMessage}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 bg-travel-pink text-white font-bold py-4 rounded-xl hover:bg-pink-600 transition-colors shadow-lg shadow-pink-200 transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <FaSpinner className="animate-spin" /> Mengirim...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane /> Kirim Pesan Sekarang
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
