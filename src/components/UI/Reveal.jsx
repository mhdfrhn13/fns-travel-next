"use client";
import { useEffect, useRef, useState } from "react";

const Reveal = ({ children, delay = 0, direction = "bottom" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 } // Elemen akan muncul saat 10% bagiannya terlihat
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // LOGIKA POSISI (Saat Tersembunyi)
  const getHiddenClass = () => {
    switch (direction) {
      case "left":
        return "opacity-0 -translate-x-24"; // Geser -6rem ke Kiri
      case "right":
        return "opacity-0 translate-x-24"; // Geser 6rem ke Kanan
      case "bottom":
      default:
        return "opacity-0 translate-y-24"; // Geser 6rem ke Bawah
    }
  };

  // LOGIKA POSISI (Saat Terlihat)
  // Kita paksa reset semua translate ke 0 agar kembali ke posisi semula
  const getVisibleClass = () => "opacity-100 translate-x-0 translate-y-0";

  return (
    <div
      ref={ref}
      // duration-1000 = Durasi animasi 1 detik
      className={`transition-all duration-1000 ease-out ${
        isVisible ? getVisibleClass() : getHiddenClass()
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
