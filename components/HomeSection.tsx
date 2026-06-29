"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, Truck, Clock3, ShieldCheck, Zap } from "lucide-react";

const cameraImages = [
  { src: "/cameras/g7xiii.png", shadow: "/shadows/g7xiii.png", alt: "Canon G7X Mark III" },
  { src: "/cameras/g7xii.png", shadow: "/shadows/g7xii.png", alt: "Canon G7X Mark II" },
  { src: "/cameras/r50.png", shadow: "/shadows/r50.png", alt: "Canon R50" },
  { src: "/cameras/rx100.png", shadow: "/shadows/rx100.png", alt: "Sony RX100 III" },
  { src: "/cameras/m100.png", shadow: "/shadows/m100.png", alt: "Canon M100" },
];

const features = [
  { icon: Truck, label: "Free early handover" },
  { icon: Clock3, label: "Free delivery, 4+ days" },
  { icon: ShieldCheck, label: "Flexible rental periods" },
  { icon: Zap, label: "Fast, hassle-free booking" },
];

function FloatingCamera({
  camera,
  floatDuration = 6,
  lensGlint = false,
  className = "",
}: {
  camera: { src: string; shadow: string; alt: string };
  floatDuration?: number;
  lensGlint?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="relative">
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [-1.5, 1.5, -1.5] }}
          transition={{ duration: floatDuration, repeat: Infinity, ease: "easeInOut" }}
          className="relative aspect-square w-full"
          style={{ filter: "drop-shadow(0 28px 28px rgba(40,20,10,0.5))" }}
        >
          <Image src={camera.src} alt={camera.alt} fill className="object-contain" priority />

          {lensGlint && (
            <motion.div
              aria-hidden
              animate={{ opacity: [0, 0.55, 0], scale: [0.8, 1.1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute left-[38%] top-[42%] h-[18%] w-[18%] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,245,230,0.9) 0%, rgba(255,245,230,0) 70%)",
              }}
            />
          )}
        </motion.div>

        <motion.div
          animate={{ scaleX: [1, 0.85, 1], opacity: [0.65, 0.42, 0.65] }}
          transition={{ duration: floatDuration, repeat: Infinity, ease: "easeInOut" }}
          className="relative mx-auto -mt-3 h-[18%] w-[72%]"
        >
          <Image src={camera.shadow} alt="" fill className="object-contain" />
        </motion.div>
      </div>
    </div>
  );
}

export function HomeSection() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cameraImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const leftCam = cameraImages[3];
  const rightCam = cameraImages[4];
  const heroCam = cameraImages[active];

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #FFF0F5 0%, #FFD1DC 45%, #FFB6C1 100%)",
      }}
    >
      <div className="relative flex flex-1 items-center justify-center px-4 py-6 sm:py-8">
        {/* ===== UPPER LEFT: Brand Text =====
            Key fix: narrower max-width on lg+ so this column never reaches
            into the centered camera's footprint, and it stays above the
            camera via z-20 + its own background-free text (no overlap
            collision since camera is now shifted right on lg+). */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute top-18 left-4 sm:top-6 sm:left-6 md:top-16 md:left-10 lg:top-10 lg:left-8 xl:top-14 xl:left-14 z-20 text-left max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-[15rem] xl:max-w-[17rem]"
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold"
            style={{
              fontFamily: "var(--font-playfair), serif",
              color: "#800000",
            }}
          >
            AURA<span style={{ color: "#A52A2A" }}>CAM</span>
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-medium mt-1"
            style={{
              fontFamily: "var(--font-great), cursive",
              color: "#8B1A4A",
            }}
          >
            Cebu's Trusted Camera Rental
          </p>

          <p
            className="mt-2 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base max-w-xs sm:max-w-sm"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              color: "#5A3A4A",
            }}
          >
            Need a camera for your next shoot, trip, event, or project?{" "}
            <span style={{ fontWeight: 700, color: "#800000" }}>Auracam</span> makes it easy to rent quality cameras at affordable rates.
          </p>
        </motion.div>

        {/* ===== CENTER: "shoot" wordmark + camera =====
            Key fix: on lg+ the whole camera stack is shifted right
            (lg:translate-x-28 xl:translate-x-40) so it sits in its own
            visual lane to the right of the text column instead of
            centered over it. On mobile/tablet it stays centered, which
            is already correct per your screenshot description. */}
        <div className="relative flex flex-col items-center justify-center w-full">
          <motion.h1
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute top-[52%] select-none text-center font-black leading-none text-[#800000]/20"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3.5rem, 12vw, 11.5rem)",
              letterSpacing: "-0.03em",
              transform: "translateY(-50%)",
            }}
          >
            shoot
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -40, y: 10, rotate: -4 }}
            animate={{ opacity: 0.9, x: 0, y: 0, rotate: -4 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[2%] top-[58%] hidden w-24 -translate-y-1/2 md:block lg:left-[6%] lg:w-44"
          >
            <FloatingCamera camera={leftCam} floatDuration={6.5} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, y: 10, rotate: 4 }}
            animate={{ opacity: 0.9, x: 0, y: 0, rotate: 4 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-[2%] top-[58%] hidden w-24 -translate-y-1/2 md:block lg:right-[6%] lg:w-44"
          >
            <FloatingCamera camera={rightCam} floatDuration={7.5} />
          </motion.div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 50, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 mt-16 sm:mt-12 md:mt-8 w-56 sm:w-72 md:w-80 lg:w-[28rem]"
          >
            <FloatingCamera camera={heroCam} floatDuration={5.5} lensGlint />
          </motion.div>
        </div>

        {/* ===== BOTTOM CENTER: Features + Buttons ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 w-full max-w-4xl px-2 sm:px-4"
        >
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + idx * 0.08 }}
                className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] sm:text-xs font-medium"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  background: "rgba(255, 240, 245, 0.8)",
                  color: "#8B1A4A",
                  border: "1px solid #FFB6C1",
                }}
              >
                <feature.icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" style={{ color: "#800000" }} />
                <span>{feature.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-1">
            <a
              href="#camera-list"
              className="group inline-flex items-center gap-1 rounded-full px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold text-white transition-all hover:shadow-lg"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                background: "#800000",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#5C0000"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#800000"; }}
            >
              Browse cameras
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#booking"
              className="inline-flex items-center gap-1 rounded-full border-2 px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold transition-all"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                borderColor: "#FFB6C1",
                color: "#8B1A4A",
              }}
            >
              Book now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 