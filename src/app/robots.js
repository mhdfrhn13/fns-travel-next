export default function robots() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://fnstourtravel.com"; // Sesuai dengan domain di sitemap.js Anda

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/studio/", // Melarang bot mengindeks panel Sanity Studio Anda
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || "https://fnstourtravel.com"}/sitemap.xml`,
  };
}
