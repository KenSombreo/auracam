"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const imagePaths = [
  "/reviews/1.png",
  "/reviews/2.png",
  "/reviews/3.png",
  "/reviews/4.png",
  "/reviews/5.png",
  "/reviews/6.png",
  "/reviews/7.png",
  "/reviews/8.png",
  "/reviews/9.png",
  "/reviews/10.png",
];

export default function ReviewsPage() {
  const validImages = imagePaths.filter(() => true);

  return (
    <div
      className="min-h-screen py-12 sm:py-20 px-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #FFF0F5 0%, #FFD1DC 45%, #FFB6C1 100%)",
      }}
    >
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-100/20 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#800000] hover:text-[#A52A2A] transition-colors mb-8 text-sm"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="bg-white/70 backdrop-blur-sm rounded-3xl border border-pink-200/40 shadow-xl p-6 md:p-8">
          <h1
            className="text-3xl md:text-4xl font-bold text-center"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#800000" }}
          >
            Honest <span style={{ color: "#A52A2A" }}>Reviews</span>
          </h1>
          <p
            className="text-[#8B1A4A] text-center mt-2 text-sm md:text-base"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Real feedback from our community – we value transparency.
          </p>

          {validImages.length > 0 ? (
            <div className="mt-8 columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
              {validImages.map((path, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
                >
                  <Image
                    src={path}
                    alt={`Review ${idx + 1}`}
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={idx < 3}
                    unoptimized={process.env.NODE_ENV === "development"}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-white text-xs font-medium bg-pink-500/30 backdrop-blur-sm px-3 py-1 rounded-full">
                      ★ Real Review
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center text-[#8B1A4A] py-12">
              <p>No reviews available yet.</p>
              <p className="text-sm mt-2">Check back soon for real customer feedback!</p>
            </div>
          )}

          <div className="text-center text-[#8B1A4A]/60 text-xs mt-8">
            All reviews are authentic – we never fake feedback.
          </div>
        </div>
      </div>
    </div>
  );
}