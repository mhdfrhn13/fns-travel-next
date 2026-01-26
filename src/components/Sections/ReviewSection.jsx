"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const ReviewSection = ({ packageId, existingReviews }) => {
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/review", {
        method: "POST",
        body: JSON.stringify({ ...formData, packageId }),
      });

      if (res.ok) {
        setMessage("Terima kasih! Review Anda sedang ditinjau admin.");
        setFormData({ name: "", rating: 5, comment: "" });
      } else {
        setMessage("Gagal mengirim review.");
      }
    } catch (err) {
      setMessage("Terjadi kesalahan.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="mt-16 border-t border-gray-100 pt-10">
      <h3 className="text-2xl font-bold text-gray-800 mb-8 font-serif">
        Ulasan Wisatawan ({existingReviews.length})
      </h3>

      <div className="grid md:grid-cols-2 gap-12">
        {/* === LIST REVIEW === */}
        <div className="space-y-6">
          {existingReviews.length === 0 ? (
            <p className="text-gray-500 italic">
              Belum ada ulasan untuk paket ini. Jadilah yang pertama!
            </p>
          ) : (
            existingReviews.map((review) => (
              <div key={review._id} className="bg-gray-50 p-5 rounded-xl">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < review.rating ? "" : "text-gray-300"}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{review.comment}</p>
              </div>
            ))
          )}
        </div>

        {/* === FORM INPUT === */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 h-fit">
          <h4 className="font-bold text-lg mb-4">Tulis Ulasan Anda</h4>

          {message ? (
            <div className="bg-green-100 text-green-700 p-3 rounded-lg text-sm mb-4">
              {message}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama
                </label>
                <input
                  required
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-travel-primary focus:outline-none"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rating
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className={`text-2xl transition-colors ${
                        star <= formData.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Komentar
                </label>
                <textarea
                  required
                  rows="3"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-travel-primary focus:outline-none"
                  value={formData.comment}
                  onChange={(e) =>
                    setFormData({ ...formData, comment: e.target.value })
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-travel-dark text-white py-2.5 rounded-lg font-bold hover:bg-black transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Mengirim..." : "Kirim Ulasan"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
