import Hero from "../components/Sections/Hero";
import About from "../components/Sections/About";
import Gallery from "../components/Sections/Gallery";
import BlogList from "../components/Sections/BlogList";
import TransportationPreview from "../components/Sections/TransportationPreview";
import Reveal from "../components/UI/Reveal";
import { client } from "@/lib/sanity";
import CustomTripCTA from "@/components/UI/CustomTripCTA";

// Revalidate data setiap 60 detik
export const revalidate = 60;

// Fungsi Fetch Data (Gallery, Packages, Cars)
async function getHomeData() {
  const query = `{
    "gallery": *[_type == "gallery"] | order(_createdAt desc)[0...8] { // <--- UBAH JADI 5 (0...5 mengambil index 0 s/d 4)
      _id,
      image,
      title,
      location,
      category
    },
    "packages": *[_type == "itinerary" && isFeatured == true] | order(_createdAt desc)[0...3]{
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

      {/* 4. GALLERY SECTION (Carousel) */}
      {/* Reveal dihapus atau disesuaikan karena Carousel sudah punya animasi sendiri, tapi tetap pakai Reveal boleh */}
      <Reveal direction="up">
        <Gallery data={gallery} />
      </Reveal>

      {/* 5. PAKET POPULER (BlogList) */}
      <div id="packages">
        <Reveal direction="right">
          <BlogList data={packages} />
        </Reveal>
      </div>

      {/* 6. ARMADA KAMI (TransportationPreview) */}
      <Reveal direction="up">
        <TransportationPreview data={cars} />
      </Reveal>
    </main>
  );
};

export default Home;
