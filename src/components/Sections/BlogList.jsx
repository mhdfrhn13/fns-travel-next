"use client";
import Link from "next/link";
import { itineraries } from "../../data/itineraries";

const BlogList = () => {
  const latestPackages = itineraries.slice(0, 3); // Tampilkan 3 biar pas grid

  return (
    <section id="blog" className="py-20 md:py-32 bg-[#f8f9fa]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Judul Section Elegan */}
        <div className="mb-12">
          <h5 className="text-travel-pink font-bold uppercase tracking-widest text-sm mb-2">
            Explore Now
          </h5>
          <h3 className="font-serif text-4xl md:text-5xl text-travel-dark">
            Find Your Dream Destination
          </h3>
        </div>

        {/* Grid Kartu Modern */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {latestPackages.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-[30px] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Gambar Full Rounded Top */}
              <div className="h-[250px] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-travel-dark shadow-sm">
                  {item.duration}
                </div>
              </div>

              {/* Konten Kartu */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1 text-gray-400 text-xs mb-3">
                  <span>📍 Indonesia</span>
                  <span>•</span>
                  <span>Adventure</span>
                </div>

                <h4 className="font-serif text-2xl font-bold mb-3 text-travel-dark group-hover:text-travel-pink transition-colors">
                  <Link href={`/itinerary/${item.id}`}>{item.title}</Link>
                </h4>

                <p className="text-gray-500 text-sm line-clamp-2 mb-6 flex-grow">
                  {item.description}
                </p>

                {/* Tombol Bawah */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <Link
                    href={`/itinerary/${item.id}`}
                    className="bg-travel-dark text-white px-5 py-2 rounded-full text-sm hover:bg-travel-pink transition-colors"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol View All */}
        <div className="text-center">
          <Link
            href="/packages"
            className="inline-block border-2 border-travel-dark text-travel-dark px-8 py-3 rounded-full font-semibold hover:bg-travel-dark hover:text-white transition-all"
          >
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
