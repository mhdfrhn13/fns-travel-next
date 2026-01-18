/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tambahkan konfigurasi images ini:
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },

  // Konfigurasi sebelumnya (jika ada) tetap biarkan:
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  reactStrictMode: true,
};

export default nextConfig;
