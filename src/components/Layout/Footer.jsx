import Link from "next/link";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#343a40] text-white pt-16 pb-8 border-t-4 border-travel-pink"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* KOLOM 1: INFO */}
          <div>
            <h5 className="text-xl font-bold mb-6 text-travel-pink">
              About FnS Travel
            </h5>
            <p className="text-gray-300 text-sm leading-7 text-justify">
              FnS Tour and Travel hadir untuk mewujudkan liburan impian Anda.
              Kami melayani paket wisata alam, budaya, dan kuliner terbaik di
              seluruh Nusantara dengan standar pelayanan profesional dan harga
              terbaik.
            </p>
          </div>

          {/* KOLOM 2: CONTACT */}
          <div>
            <h5 className="text-xl font-bold mb-6 text-travel-pink">
              Contact Us
            </h5>
            <div className="text-gray-300 text-sm space-y-4">
              <p className="flex items-start gap-3">
                <span className="font-bold min-w-[60px]">Address:</span>
                <span>
                  Jl. Kirab Remaja No.32, Bukittinggi, Sumatera Barat, Indonesia
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="font-bold min-w-[60px]">WA:</span>
                <span>+62 853-6596-8845</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="font-bold min-w-[60px]">Email:</span>
                <span>fnsholiday@gmail.com</span>
              </p>
            </div>
          </div>

          {/* KOLOM 3: LINKS */}
          <div>
            <h5 className="text-xl font-bold mb-6 text-travel-pink">
              Quick Links
            </h5>
            <ul className="text-sm text-gray-300 space-y-3">
              <li>
                <Link
                  href="/#home"
                  className="hover:text-travel-pink hover:translate-x-2 transition-all inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-travel-pink hover:translate-x-2 transition-all inline-block"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="hover:text-travel-pink hover:translate-x-2 transition-all inline-block"
                >
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-travel-pink hover:translate-x-2 transition-all inline-block"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-travel-pink hover:translate-x-2 transition-all inline-block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} FnS Tour and Travel. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
