"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, Camera, Clock3, ShieldCheck, Truck, Zap, Heart } from "lucide-react";

const cameraImages = [
  { src: "/cameras/g7xiii.png", alt: "Canon G7X Mark III" },
  { src: "/cameras/g7xii.png", alt: "Canon G7X Mark II" },
  { src: "/cameras/r50.png", alt: "Canon R50" },
  { src: "/cameras/rx100.png", alt: "Sony RX100 III" },
  { src: "/cameras/m100.png", alt: "Canon M100" },
];

const features = [
  { icon: Clock3, title: "Free early handover", desc: "Handover as early as 7\u20138 PM the day before your rental." },
  { icon: Truck, title: "Free delivery", desc: "For rentals 4+ days within Cebu City, Talisay, Mandaue, and Banawa." },
  { icon: ShieldCheck, title: "Flexible rental", desc: "Choose the rental period that suits your schedule." },
  { icon: Zap, title: "Fast & secure booking", desc: "Easy reservation process with no security deposit." },
];

// Swap the hero camera every few seconds. AnimatePresence handles the
// crossfade / scale-out-scale-in transition between the two images, and a
// quick white "shutter" flash sells the idea that a photo is being taken
// right as the camera switches.
function AnimatedHeroCamera() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cameraImages.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const camera = cameraImages[index];

  return (
    <div className="relative mx-auto aspect-square w-[85%] sm:w-[75%] lg:w-[80%]">
      <AnimatePresence mode="wait">
        <motion.div
          key={camera.src}
          initial={{ opacity: 0, scale: 0.82, rotate: -6, filter: "blur(6px)" }}
          animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.1, rotate: 6, filter: "blur(6px)" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-full w-full"
            style={{ filter: "drop-shadow(0 30px 30px rgba(60,20,25,0.35))" }}
          >
            <Image src={camera.src} alt={camera.alt} fill className="object-contain" priority />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* dot indicators so it visually reads as "switching cameras" */}
      <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
        {cameraImages.map((cam, i) => (
          <span
            key={cam.src}
            className="h-1.5 rounded-full transition-all duration-500"
            style={{
              width: i === index ? "1.25rem" : "0.375rem",
              background: i === index ? "#C97B90" : "#F1C6D2",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function HomeSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/background.png')",
      }}
    >
      {/* soft decorative sparkles */}
      <span className="pointer-events-none absolute left-[6%] top-[22%] text-2xl text-[#F4B8C6]">✦</span>
      <span className="pointer-events-none absolute left-[30%] top-[14%] text-lg text-[#F4B8C6]">✦</span>
      <span className="pointer-events-none absolute left-[16%] top-[46%] text-xl text-[#F4B8C6]">♡</span>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-10 lg:grid-cols-2 lg:gap-6 lg:px-10 lg:pt-16">
        {/* ===== LEFT: Text ===== */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-left"
        >
          <div className="mb-4 flex items-center gap-2">
            <span
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#C97B90", fontFamily: "var(--font-inter), sans-serif" }}
            >
              Cebu's Trusted Camera Rental
            </span>
            <span className="text-[#C97B90]">✦</span>
          </div>

          <h1
            className="text-6xl font-bold leading-[0.95] sm:text-7xl lg:text-6xl xl:text-7xl"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#2E1512" }}
          >
            Capture
            <br />
            <span
              className="inline-block"
              style={{ fontFamily: "var(--font-great), cursive", color: "#D98CA0", fontWeight: 500 }}
            >
              Beautiful
            </span>
            <br />
            Moments{" "}
            <Heart className="inline h-8 w-8 -translate-y-2 text-[#D98CA0]" fill="none" />
          </h1>

          <p
            className="mt-6 max-w-md text-base leading-relaxed"
            style={{ fontFamily: "var(--font-inter), sans-serif", color: "#6B4A4F" }}
          >
            High-quality cameras at affordable rates. Perfect for shoots, travels, events, and more.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#camera-list"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg"
              style={{ background: "#C97B90", fontFamily: "var(--font-inter), sans-serif" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#B15E75")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#C97B90")}
            >
              Browse Cameras
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#sample-shots"
              className="inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-semibold transition-colors"
              style={{ borderColor: "#F1C6D2", color: "#8B1A4A", fontFamily: "var(--font-inter), sans-serif" }}
            >
              See Sample Shots
              <Camera className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* ===== RIGHT: Camera stage ===== */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative z-10 flex items-center justify-center"
        >
          {/* arch backdrop */}
          <div
            className="absolute h-[85%] w-[85%] rounded-t-full"
            style={{ background: "linear-gradient(180deg, #FFD9E0 0%, #FFC3CE 100%)", opacity: 0.6 }}
          />
          {/* pedestal */}
          <div
            className="absolute bottom-[6%] h-[18%] w-[70%] rounded-[50%]"
            style={{ background: "linear-gradient(180deg, #F6A9BB 0%, #F0879F 100%)", filter: "blur(2px)", opacity: 0.7 }}
          />

          <AnimatedHeroCamera />

          {/* free early handover badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bottom-[6%] right-[2%] flex h-28 w-28 flex-col items-center justify-center rounded-full text-center shadow-md sm:h-32 sm:w-32"
            style={{ background: "#FCE4EA", border: "2px solid #F4B8C6" }}
          >
            <Heart className="mb-1 h-3.5 w-3.5" style={{ color: "#C97B90" }} fill="#C97B90" />
            <span
              className="text-[10px] font-bold leading-tight sm:text-xs"
              style={{ color: "#8B1A4A", fontFamily: "var(--font-inter), sans-serif" }}
            >
              FREE EARLY
              <br />
              HANDOVER
              <br />
              7&ndash;8 PM
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* ===== Feature strip ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mx-auto mb-14 max-w-6xl px-6"
      >
        <div
          className="grid grid-cols-1 gap-6 rounded-3xl px-8 py-8 sm:grid-cols-2 lg:grid-cols-4"
          style={{ background: "rgba(255,255,255,0.75)", boxShadow: "0 20px 50px -20px rgba(180,90,110,0.25)" }}
        >
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-3">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                style={{ background: "#FCE4EA" }}
              >
                <feature.icon className="h-5 w-5" style={{ color: "#C97B90" }} />
              </div>
              <div>
                <p
                  className="text-sm font-bold uppercase tracking-wide"
                  style={{ color: "#8B1A4A", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {feature.title}
                </p>
                <p
                  className="mt-1 text-sm leading-snug"
                  style={{ color: "#6B4A4F", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}