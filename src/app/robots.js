export default function robots() {
  const baseUrl = "https://fns-travel-next.vercel.app"; // Sesuai dengan domain di sitemap.js Anda

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/studio/", // Melarang bot mengindeks panel Sanity Studio Anda
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
