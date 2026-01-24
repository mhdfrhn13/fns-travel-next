"use client";

const About = () => {
  return (
    <>
      {/* BAGIAN 1: GABUNGAN ABOUT & QUOTE (2 KOLOM) */}
      {/* PERUBAHAN 1: Ditambahkan 'py-24' untuk jarak vertikal dari Hero */}
      <section id="aboutus" className="bg-white overflow-hidden py-24">
        {/* PERUBAHAN 2: Ditambahkan 'gap-8' agar teks dan foto tidak menempel */}
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-auto">
          {/* KOLOM KIRI: TEKS ABOUT US */}
          <div className="p-4 md:p-8 flex flex-col justify-center bg-white">
            <h3 className="text-3xl font-bold border-b-4 border-travel-pink inline-block pb-2 mb-6 self-start">
              About Us
            </h3>
            <p className="text-gray-500 italic text-lg mb-6">
              Mitra perjalanan terpercaya Anda untuk pengalaman liburan yang
              aman, nyaman, dan berkesan.
            </p>
            <p className="text-gray-700 leading-7 text-justify">
              "Kami memahami bahwa waktu liburan Anda sangat berharga. Oleh
              karena itu, FnS Tour and Travel hadir untuk memastikan setiap
              detik perjalanan Anda terencana dengan sempurna. Mulai dari
              akomodasi hingga destinasi tersembunyi, kami siapkan semuanya
              untuk Anda."
            </p>
          </div>

          {/* KOLOM KANAN: FOTO QUOTE (PAGARUYUNG) */}
          {/* PERUBAHAN 3: Ditambahkan 'rounded-3xl', 'shadow-xl', dan 'overflow-hidden' */}
          <div className="relative w-full h-[400px] md:h-[500px] bg-[url('/assets/pagaruyung.webp')] bg-cover bg-center flex items-center justify-center group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
            {/* Overlay Gelap */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500"></div>

            {/* Teks Quote */}
            <div className="relative z-10 max-w-[80%] text-center text-white border-2 border-white/50 p-6 md:p-10 backdrop-blur-sm bg-white/10 rounded-xl">
              <p className="text-xl md:text-2xl font-bold italic font-serif leading-relaxed">
                &quot;What is a Vacation? <br /> Lets Find Out with Us!&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
