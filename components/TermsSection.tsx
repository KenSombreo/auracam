// components/TermsSection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function TermsSection() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #4A0E0E 0%, #6B1A1A 40%, #8B1A1A 100%)",
      }}
    >
      {/* Decorative blobs – soft pink glow on maroon */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-rose-300/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-200/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 200 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="max-w-2xl mx-auto text-center cursor-pointer group"
        >
          {/* ===== BIG ENVELOPE – clickable ===== */}
          <Link href="/termsandconditions" className="block">
            <div className="relative w-full max-w-2xl mx-auto aspect-[5/3] perspective-800">
              {/* Shadow under the envelope */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-pink-300/20 blur-xl rounded-full" />

              <motion.div
                className="relative w-full h-full"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Envelope body – maroon base with pink accents */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6B1A1A] to-[#8B1A1A] rounded-3xl shadow-2xl border-2 border-pink-200/30 overflow-hidden">
                  {/* Envelope flap – opens on hover */}
                  <motion.div
                    className="absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-[#8B1A1A] to-[#6B1A1A] origin-bottom"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 50% 80%, 0 0)",
                      transformOrigin: "bottom",
                    }}
                    whileHover={{
                      rotateX: -180,
                      transition: { duration: 0.6, ease: "easeInOut" },
                    }}
                  >
                    {/* Inner flap detail – lighter pink */}
                    <div className="absolute inset-0 bg-gradient-to-b from-pink-400/20 to-transparent" />
                  </motion.div>

                  {/* Envelope body lines (fold marks) – pink */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-full h-px bg-pink-300/30" />
                  </div>

                  {/* Stamp / seal – pink heart */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-pink-400/80 rounded-full flex items-center justify-center shadow-md border-2 border-pink-300/50">
                    <span className="text-white text-2xl font-bold">❤️</span>
                  </div>

                  {/* Decorative lines – pink */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2/3 h-px bg-pink-300/20" />
                  </div>

                  {/* Address lines (mock) – pink */}
                  <div className="absolute bottom-8 left-10 right-10 space-y-2">
                    <div className="h-3 w-2/3 bg-pink-300/20 rounded-full" />
                    <div className="h-3 w-1/2 bg-pink-300/20 rounded-full" />
                    <div className="h-3 w-3/4 bg-pink-300/20 rounded-full" />
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/10 transition-all duration-500 rounded-3xl" />
                </div>

                {/* Envelope inner shadow */}
                <div className="absolute inset-0 rounded-3xl shadow-inner pointer-events-none" />
              </motion.div>
            </div>
          </Link>

          {/* ===== TEXT BELOW ENVELOPE – white & pink (no button) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 space-y-3"
          >
            <p
              className="text-lg md:text-xl font-medium text-pink-200"
              style={{ fontFamily: "var(--font-great), cursive" }}
            >
              📬 To our valued renters,
            </p>
            <p
              className="text-base md:text-lg text-pink-100/80 max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Be sure to <span className="font-bold text-pink-300">click the envelope</span> to read our full
              <br />
              <span className="font-bold text-pink-300">Terms &amp; Conditions</span>.
            </p>
          </motion.div>

          {/* Decorative line – pink */}
          <div className="mt-8 flex justify-center gap-2">
            <span className="w-12 h-0.5 rounded-full bg-pink-300/50" />
            <span className="w-6 h-0.5 rounded-full bg-pink-400/60" />
            <span className="w-3 h-0.5 rounded-full bg-pink-500/70" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}