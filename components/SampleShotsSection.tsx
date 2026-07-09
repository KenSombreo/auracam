"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// ====== ALL YOUR IMAGES ======
const allShots = [
  { title: "G7X II - 1", img: "/g7xii/1.png" },
  { title: "G7X II - 2", img: "/g7xii/2.png" },
  { title: "G7X III - 1", img: "/g7xiii/1.png" },
  { title: "R50 - 1", img: "/r50/1.png" },
  { title: "R50 - 2", img: "/r50/2.png" },
  { title: "R50 - 3", img: "/r50/3.png" },
  { title: "R50 - 4", img: "/r50/4.png" },
  { title: "R50 - 5", img: "/r50/5.png" },
  { title: "R50 - 6", img: "/r50/6.png" },
  { title: "M100 - 1", img: "/m100/1.png" },
  { title: "M100 - 2", img: "/m100/2.png" },
  { title: "M100 - 3", img: "/m100/3.png" },
  { title: "RX100 - 1", img: "/rx100/1.png" },
];

// ====== DISTRIBUTE INTO 3 ROWS ======
const total = allShots.length;
const rowSize = Math.ceil(total / 3);
const row1 = allShots.slice(0, rowSize);
const row2 = allShots.slice(rowSize, rowSize * 2);
const row3 = allShots.slice(rowSize * 2);

// Helper to clean title: remove " - 1", " - 2", etc.
const cleanTitle = (title: string) => title.replace(/\s*-\s*\d+$/, "");

// ====== ROW COMPONENT (CSS animation) ======
function ScrollingRowCSS({
  images,
  direction = "left",
  speed = 20,
}: {
  images: typeof allShots;
  direction?: "left" | "right";
  speed?: number;
}) {
  const directionClass = direction === "left" ? "animate-scroll-left" : "animate-scroll-right";
  const duplicated = [...images, ...images, ...images];

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex gap-4 w-max ${directionClass}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicated.map((shot, idx) => (
          <div
            key={idx}
            className="relative w-64 h-80 flex-shrink-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-pink-200/40 group bg-white/40"
          >
            <img
              src={shot.img}
              alt={shot.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  `https://via.placeholder.com/400x500/FFD1DC/800000?text=${cleanTitle(shot.title)}`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <p className="text-white text-sm font-medium bg-[#800000]/50 backdrop-blur-sm px-3 py-1 rounded-full">
                {cleanTitle(shot.title)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ====== MAIN SECTION ======
export function SampleShotsSection() {
  return (
    <section
      id="sample-shots"
      className="relative py-20 overflow-hidden"
      style={{
        // Use background3.png as full‑opacity background
        backgroundImage: "url('/background3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#FFF0F5", // fallback light pink
      }}
    >
      {/* Decorative blurs – soft pink & maroon – kept for ambiance */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#800000]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-pink-200/40 rounded-full blur-3xl" />
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
            Sample <span style={{ color: "#A52A2A" }}>Shots</span>
          </h2>
          <p
            className="mt-3 text-[#8B1A4A] max-w-xl mx-auto font-light text-lg"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Real images captured with our gear – watch the show.
          </p>
        </motion.div>

        {/* 3 rows – CSS animations */}
        <div className="hidden md:flex flex-col gap-6">
          <ScrollingRowCSS images={row1} direction="left" speed={20} />
          <ScrollingRowCSS images={row2} direction="right" speed={20} />
          <ScrollingRowCSS images={row3} direction="left" speed={20} />
        </div>

        {/* Mobile: masonry grid */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {allShots.map((shot, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-xl overflow-hidden shadow-md border border-pink-200/40 bg-white/30 ${
                idx % 3 === 0 ? "row-span-2" : "row-span-1"
              }`}
            >
              <img
                src={shot.img}
                alt={shot.title}
                className="w-full h-full object-cover aspect-square"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    `https://via.placeholder.com/300/FFD1DC/800000?text=${cleanTitle(shot.title)}`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/50 to-transparent flex items-end p-2">
                <p className="text-white text-xs font-medium bg-[#800000]/40 backdrop-blur-sm px-2 py-1 rounded-full">
                  {cleanTitle(shot.title)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA – maroon button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-[#800000] text-white px-8 py-3 rounded-full font-semibold shadow-md shadow-pink-200 hover:shadow-pink-300 hover:scale-105 transition-all duration-300"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#5C0000"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#800000"; }}
          >
            Book Your Session <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}