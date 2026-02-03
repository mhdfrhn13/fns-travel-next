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
        image="/assets/pageHeader.jpg"
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
                adalah penyedia layanan perjalanan dan transportasi yang
                berdedikasi untuk menghadirkan pengalaman jelajah yang bermakna
                bagi setiap wisatawan. Kami percaya bahwa setiap perjalanan
                bukan sekadar perpindahan tempat, melainkan momen untuk
                menciptakan kenangan baru yang berkesan, aman, dan nyaman.
                Berfokus pada keindahan alam dan kekayaan budaya lokal, kami
                hadir sebagai mitra perjalanan yang siap menemani setiap langkah
                eksplorasi Anda.
              </p>

              <p>
                Layanan kami dirancang secara fleksibel untuk memenuhi berbagai
                kebutuhan, mulai dari paket wisata yang terencana dengan baik
                hingga penyewaan armada kendaraan yang prima untuk keperluan
                pribadi, keluarga, maupun instansi. Dengan dukungan tim yang
                profesional dan mengenal medan dengan baik, kami berkomitmen
                untuk memberikan pelayanan yang tulus dan berkualitas demi
                kepuasan pelanggan yang menjadi prioritas utama kami.
              </p>

              <p>
                <strong className="text-travel-dark italic">
                  "Jelajahi setiap sudut destinasi dengan kenyamanan tanpa
                  batas. Mari temukan makna liburan yang sesungguhnya bersama
                  kami!"
                </strong>{" "}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
