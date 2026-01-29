import { client } from "@/lib/sanity";

export default async function sitemap() {
  const baseUrl = "https://fns-travel-next.vercel.app"; // Ganti dengan domain asli jika sudah beli

  // 1. Ambil data slug dari Sanity untuk rute dinamis itinerary
  const query = `*[_type == "itinerary"] { "slug": slug.current, _updatedAt }`;
  const itineraries = await client.fetch(query);

  // 2. Map rute dinamis (Paket Wisata)
  const itineraryUrls = itineraries.map((item) => ({
    url: `${baseUrl}/itinerary/${item.slug}`,
    lastModified: new Date(item._updatedAt),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 3. Daftar rute statis
  const staticRoutes = [
    "",
    "/about",
    "/packages",
    "/transportation",
    "/gallery",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7, // Home memiliki prioritas tertinggi
  }));

  return [...staticRoutes, ...itineraryUrls];
}
