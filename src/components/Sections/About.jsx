"use client";
const About = () => {
  return (
    <>
      <section id="aboutus" className="py-12 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold border-b-4 border-travel-pink inline-block pb-2 mb-6">
            About Us
          </h3>
          <p className="text-gray-400 italic text-lg mb-6">
            Mitra perjalanan terpercaya Anda untuk pengalaman liburan yang aman,
            nyaman, dan berkesan.
          </p>
          <p className="text-gray-700 leading-7">
            "Kami memahami bahwa waktu liburan Anda sangat berharga. Oleh karena
            itu, FnS Tour and Travel hadir untuk memastikan setiap detik
            perjalanan Anda terencana dengan sempurna..."
          </p>
        </div>
      </section>

      <section id="support" className="py-12 bg-[#f5f6f6]">
        <div className="max-w-[1000px] mx-auto px-4 flex flex-col md:flex-row justify-around gap-8 text-center">
          {[
            {
              img: "matahari.png",
              title: "In Every Condition",
              desc: "Kami siap melayani perjalanan Anda di segala musim.",
            },
            {
              img: "tas.png",
              title: "Professional Team",
              desc: "Tim kami berpengalaman mengurus setiap detail perjalanan.",
            },
            {
              img: "kompas.png",
              title: "Expert Hikers",
              desc: "Dipandu oleh pemandu lokal berpengalaman.",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex-1">
              <img
                src={`/assets/${item.img}`}
                alt={item.title}
                className="w-[50px] mx-auto mb-4"
              />
              <h6 className="font-bold text-lg mb-2">{item.title}</h6>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
