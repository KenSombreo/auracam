// components/BookingReviewsSection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Camera, MessageSquare, ExternalLink } from "lucide-react";

export function BookingReviewsSection() {
  return (
    <section
      id="booking-reviews"   // ✅ changed from "proof-reviews" to match navbar
      className="relative py-20 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #FFF0F5 0%, #FFD1DC 45%, #FFB6C1 100%)",
      }}
    >
      {/* Decorative blurs – soft pink */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-100/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{
              fontFamily: "var(--font-playfair), serif",
              color: "#800000",
            }}
          >
            Trusted by <span style={{ color: "#A52A2A" }}>Creators</span>
          </h2>
          <p
            className="mt-3 text-[#8B1A4A] max-w-xl mx-auto text-lg"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            See our latest bookings and honest feedback from renters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Booking Proof Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-white/70 backdrop-blur-sm rounded-3xl border border-pink-200/40 shadow-lg hover:shadow-xl transition-all p-6 md:p-8 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#800000]/10 flex items-center justify-center mb-4">
              <Camera className="w-8 h-8 text-[#800000]" />
            </div>
            <h3
              className="text-2xl font-bold text-[#800000]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Booking Proof
            </h3>
            <p className="text-gray-600 mt-2 text-sm" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Real bookings, verified and completed.
            </p>
            <Link
              href="/booking-proof"
              className="mt-6 inline-flex items-center gap-2 bg-[#800000] text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-pink-200 hover:shadow-pink-300 transition-all hover:scale-105"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              View Proof <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Honest Review Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-white/70 backdrop-blur-sm rounded-3xl border border-pink-200/40 shadow-lg hover:shadow-xl transition-all p-6 md:p-8 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#800000]/10 flex items-center justify-center mb-4">
              <MessageSquare className="w-8 h-8 text-[#800000]" />
            </div>
            <h3
              className="text-2xl font-bold text-[#800000]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Honest Reviews
            </h3>
            <p className="text-gray-600 mt-2 text-sm" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              What our renters say about their experience.
            </p>
            <Link
              href="/reviews"
              className="mt-6 inline-flex items-center gap-2 bg-[#800000] text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-pink-200 hover:shadow-pink-300 transition-all hover:scale-105"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Read Reviews <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-[#8B1A4A] text-sm" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            📸 All bookings and reviews are authentic – we value transparency.
          </p>
        </motion.div>
      </div>
    </section>
  );
}