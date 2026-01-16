import Hero from "../components/Sections/Hero";
import About from "../components/Sections/About";
import Gallery from "../components/Sections/Gallery";
import BlogList from "../components/Sections/BlogList";
import Reveal from "../components/UI/Reveal";

const Home = () => {
  return (
    <main className="bg-white overflow-x-hidden">
      <Hero />
      <Reveal direction="left">
        <About />
      </Reveal>
      <Reveal direction="right">
        <Gallery />
      </Reveal>

      {/* Quote Section (Singkat) */}
      <Reveal direction="left">
        <section className="bg-[url('/assets/pagaruyung.jpg')] bg-fixed bg-cover bg-center py-32 md:py-48 text-center relative group">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          <div className="max-w-[1000px] mx-auto bg-white/80 p-10 rounded-lg inline-block">
            <p className="text-2xl font-bold italic text-black">
              &quot;Satu pulau, sejuta cerita. Padukan gemerlap kota, warisan
              adat, dan pesona alam dalam satu perjalanan.&quot;
            </p>
          </div>
        </section>
      </Reveal>
      <Reveal direction="right">
        <BlogList />
      </Reveal>
    </main>
  );
};

export default Home;
