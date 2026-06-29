"use client";

import { motion } from "framer-motion";
import { Camera, Sparkles } from "lucide-react";
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
    },
  },
};

export function CameraListSection() {
  return (
    <section
      id="camera-list"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #4A0E0E 0%, #6B1A1A 40%, #8B1A1A 100%)",
      }}
    >
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rose-300/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-200/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 200 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-pink-200 text-sm font-medium border border-pink-200/20 mb-4">
            <Camera className="w-4 h-4" />
            <span>Our Collection</span>
            <Sparkles className="w-3 h-3" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-['Quicksand',_sans-serif]">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-pink-200 to-pink-400 bg-clip-text text-transparent">
              Perfect Match
            </span>
          </h2>
          <p className="mt-3 text-pink-200/80 max-w-xl mx-auto font-light text-lg">
            Curated selection of premium compact and mirrorless cameras for every creator.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {cameras.map((camera) => (
            <Link href={`/cameras/${camera.slug}`} key={camera.slug}>
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-400 overflow-hidden border border-pink-200/30 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-pink-100/0 to-pink-100/0 group-hover:from-pink-100/20 group-hover:to-pink-50/30 transition-all duration-500 pointer-events-none" />

                <div className="aspect-[4/3] bg-gradient-to-br from-pink-100/70 to-rose-100/40 flex items-center justify-center overflow-hidden p-4">
                  <motion.img
                    src={camera.img}
                    alt={camera.name}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-md"
                    whileHover={{ rotate: -2 }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        `https://via.placeholder.com/400x300/FCE7F3/800000?text=${camera.name}`;
                    }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#4A0E0E] font-['Quicksand',_sans-serif]">
                        {camera.name}
                      </h3>
                      <p className="text-pink-600 text-sm mt-0.5 font-light">{camera.desc}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-pink-50 px-2.5 py-1 rounded-full border border-pink-200/50">
                      <span className="text-sm font-semibold text-gray-700">{camera.rating}</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-pink-200/40">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-[#4A0E0E]">{camera.price}</span>
                        <p className="text-xs text-gray-500 mt-0.5">{camera.priceLong}</p>
                      </div>
                      <span className="inline-flex items-center gap-1 bg-[#4A0E0E] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-pink-200/50 group-hover:shadow-pink-300/70 transition-all hover:scale-105">
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
      </div>
    </section>
  );
}