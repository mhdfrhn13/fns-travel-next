"use client";

import { usePathname } from "next/navigation";

export default function HideOnStudio({ children }) {
  const pathname = usePathname();

  // Cek apakah URL saat ini diawali dengan /studio
  const isStudio = pathname.startsWith("/studio");

  // Jika sedang di halaman Sanity Studio, jangan render komponen (kembalikan null)
  if (isStudio) {
    return null;
  }

  // Jika di halaman website utama, render komponen (Navbar/CTA)
  return <>{children}</>;
}
