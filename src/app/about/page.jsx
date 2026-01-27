"use client";

import React, { useEffect } from "react";
import PageHeader from "@/components/UI/PageHeader";
import Reveal from "@/components/UI/Reveal";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pb-20 pt-[80px]">
      <PageHeader
        title="Tentang Kami"
        subtitle="Mengenal Lebih Dekat FnS Tour and Travel"
        image="/assets/blog1.jpg"
      />

      <div className="max-w-[1200px] mx-auto px-6 py-20"></div>
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal direction="left">
            <div className="relative group">
              <div className="absolute -inset-2 bg-travel-primary/20 rounded-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
              <img
                src="/assets/logo-bg.png"
                alt="Tentang FnS Travel"
                className="relative w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-xl z-10"
              />
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="space-y-6 text-gray-600 text-justify leading-relaxed font-sans text-lg">
              <p>
                <strong className="text-travel-dark text-xl">
                  FnS Tour and Travel
                </strong>{" "}
                adalah penyedia jasa perjalanan wisata dan rental kendaraan
                terpercaya yang berlokasi di Sumatera Barat. Berdiri dengan
                semangat untuk memperkenalkan keindahan alam Nusantara, kami
                telah melayani ribuan wisatawan domestik maupun mancanegara.
              </p>

              <p>
                Bermula dari layanan transportasi sederhana, kini kami
                berkembang menjadi agen perjalanan komprehensif. Kami menyajikan
                paket-paket wisata yang dirancang secara apik guna memenuhi
                kepuasan pelanggan, mulai dari wisata alam, budaya, hingga
                kuliner.
              </p>

              <p>
                Selain paket wisata,{" "}
                <strong className="text-travel-dark">FnS Tour</strong> juga
                menawarkan layanan sewa mobil untuk keperluan dinas, kunjungan
                kerja, gathering keluarga, hingga private tour. Armada kami
                selalu dalam kondisi prima, bersih, dan didukung oleh kru yang
                ramah serta berpengalaman.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
