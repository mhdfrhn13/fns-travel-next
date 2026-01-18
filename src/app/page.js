import Hero from "../components/Sections/Hero";
import About from "../components/Sections/About";
import Gallery from "../components/Sections/Gallery";
import BlogList from "../components/Sections/BlogList";
import TransportationPreview from "../components/Sections/TransportationPreview";
import Reveal from "../components/UI/Reveal";
import { client } from "@/lib/sanity";

// Revalidate data setiap 60 detik
export const revalidate = 60;

// Fungsi Fetch Data (Gallery, Packages, Cars)
async function getHomeData() {
  const query = `{
    "gallery": *[_type == "gallery"] | order(_createdAt desc)[0...6] {
      _id,
      image,
      title,
      location,
      category
    },
    "packages": *[_type == "itinerary"] | order(_createdAt desc)[0...3] {
      _id,
      title,
      "slug": slug.current,
      image,
      price,
      duration,
      description
    },
    "cars": *[_type == "car"] | order(price asc)[0...3] { 
      _id,
      name,
      type,
      image,
      capacity,
      price
    }
  }`;

  return await client.fetch(query);
}

const Home = async () => {
  // Ambil data dari Sanity
  const { gallery, packages, cars } = await getHomeData();

  return (
    <main className="bg-white overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. ABOUT SECTION */}
      <Reveal direction="left">
        <About />
      </Reveal>

      {/* 3. QUOTE SECTION (Pagaruyung) */}
      <Reveal direction="right">
        <section className="bg-[url('/assets/pagaruyung.webp')] bg-fixed bg-cover bg-center py-32 md:py-48 text-center relative group">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          <div className="max-w-[1000px] mx-auto bg-white/80 p-10 rounded-lg inline-block relative z-10">
            <p className="text-2xl font-bold italic text-black">
              &quot;Satu pulau, sejuta cerita. Padukan gemerlap kota, warisan
              adat, dan pesona alam dalam satu perjalanan.&quot;
            </p>
          </div>
        </section>
      </Reveal>

      {/* 4. GALLERY SECTION */}
      <Reveal direction="left">
        <Gallery data={gallery} />
      </Reveal>

      {/* 5. PAKET POPULER (BlogList) */}
      <Reveal direction="right">
        <BlogList data={packages} />
      </Reveal>

      {/* 6. ARMADA KAMI (TransportationPreview) */}
      <Reveal direction="up">
        <TransportationPreview data={cars} />
      </Reveal>
    </main>
  );
};

export default Home;
