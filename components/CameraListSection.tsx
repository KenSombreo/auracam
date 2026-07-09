"use client";

import { motion } from "framer-motion";
import { Camera, Heart, ShieldCheck, CalendarCheck, Star } from "lucide-react";
import Link from "next/link";
import { cameras } from "@/data/cameras";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 24,
    } as const, 
  },
};

const trustPoints = [
  { icon: ShieldCheck, title: "Well-maintained cameras", desc: "Always in top condition" },
  { icon: CalendarCheck, title: "Hassle-free booking", desc: "Easy reservation process" },
  { icon: Heart, title: "Trusted by creators", desc: "Loved by hundreds of customers" },
];

export function CameraListSection() {
  return (
    <section
      id="camera-list"
      className="relative py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/background2.png')",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 200 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full text-[#F3D4C8] text-xs font-semibold tracking-[0.2em] uppercase mb-6"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)" }}
          >
            <Camera className="w-4 h-4" />
            <span>Our Collection</span>
            <Camera className="w-4 h-4" />
          </div>

          <h2
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Choose Your{" "}
            <span className="italic font-normal" style={{ fontFamily: "var(--font-great), cursive" }}>
              Perfect
            </span>{" "}
            Match
          </h2>

          <div className="flex items-center justify-center gap-3 mt-5 mb-5">
            <span className="h-px w-16" style={{ background: "rgba(255,255,255,0.25)" }} />
            <span className="text-white/60">✦</span>
            <span className="h-px w-16" style={{ background: "rgba(255,255,255,0.25)" }} />
          </div>

          <p className="text-[#E8C9C0] max-w-xl mx-auto font-light text-lg">
            Curated selection of premium compact and mirrorless cameras for every creator.
          </p>

          <Heart className="w-5 h-5 mx-auto mt-4 text-[#E8C9C0]" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {cameras.map((camera) => (
            <Link href={`/cameras/${camera.slug}`} key={camera.slug}>
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-400"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <div className="aspect-[4/3] flex items-center justify-center overflow-hidden p-6">
                  <motion.img
                    src={camera.img}
                    alt={camera.name}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-md"
                    whileHover={{ rotate: -2 }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        `https://via.placeholder.com/400x300/4A0E0E/F3D4C8?text=${camera.name}`;
                    }}
                  />
                </div>

                <div className="px-6 pb-6">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-playfair), serif" }}>
                        {camera.name}
                      </h3>
                      <p className="text-[#E8C9C0]/80 text-sm mt-0.5 font-light">{camera.desc}</p>
                    </div>
                    <div
                      className="flex items-center gap-1 px-2.5 py-1 rounded-full shrink-0"
                      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                    >
                      <Star className="w-3.5 h-3.5 fill-[#F3D4C8] text-[#F3D4C8]" />
                      <span className="text-sm font-semibold text-white">{camera.rating}</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-white">{camera.price}</span>
                        <p className="text-xs text-[#E8C9C0]/70 mt-0.5">{camera.priceLong}</p>
                      </div>
                      <span
                        className="inline-flex items-center gap-1 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
                        style={{ background: "#E8B4A8", color: "#4A0E0E" }}
                      >
                        View Details
                        <span className="ml-1">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 mt-16 pt-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          {trustPoints.map((point) => (
            <div key={point.title} className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <point.icon className="w-4.5 h-4.5 text-[#E8B4A8]" />
              </div>
              <div className="text-left">
                <p className="text-white text-sm font-semibold">{point.title}</p>
                <p className="text-[#E8C9C0]/70 text-xs mt-0.5">{point.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}