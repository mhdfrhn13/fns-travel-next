"use client";

import React, { useEffect, useState } from "react";
import PageHeader from "@/components/UI/PageHeader";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xeeejkap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white pb-20 pt-[80px]">
      <PageHeader
        title="Hubungi Kami"
        subtitle="Kami Siap Membantu Rencana Perjalanan Anda"
        image="/assets/pagaruyung.webp"
      />
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-travel-pink mb-4">
            Contact us
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            {status === "success" && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                <strong>Berhasil!</strong> Pesan Anda telah terkirim.
              </div>
            )}
            {status === "error" && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                <strong>Gagal!</strong> Terjadi kesalahan.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Your Name (required)
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 p-3 rounded focus:outline-none focus:border-travel-pink focus:ring-1 focus:ring-travel-pink transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Your Email (required)
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 p-3 rounded focus:outline-none focus:border-travel-pink focus:ring-1 focus:ring-travel-pink transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 p-3 rounded focus:outline-none focus:border-travel-pink focus:ring-1 focus:ring-travel-pink transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 p-3 rounded focus:outline-none focus:border-travel-pink focus:ring-1 focus:ring-travel-pink transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-travel-pink text-white font-bold py-3 px-8 rounded hover:bg-opacity-90 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>

          <div className="space-y-8 md:pl-10 border-l border-gray-100">
            {/* ... Bagian Info Kontak sama persis, hanya render HTML statis ... */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-travel-pink mb-4">
                Contact us
              </h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  <span className="font-bold text-travel-dark">Email :</span>{" "}
                  fnsholiday@gmail.com
                </p>
                <p>
                  <span className="font-bold text-travel-dark">
                    Whatsapp/phone :
                  </span>{" "}
                  +62 853-6596-8845
                </p>
              </div>
            </div>
            {/* ... Bagian Social Media (sama persis) ... */}
          </div>
        </div>
      </div>
    </div>
  );
}
