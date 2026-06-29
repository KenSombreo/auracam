// components/BookingSection.tsx
"use client";

import { motion } from "framer-motion";
import { Search, Calendar, Camera, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Search,
    title: "Choose Camera",
    desc: "Pick the gear that fits your project.",
  },
  {
    icon: Calendar,
    title: "Pick Dates",
    desc: "Select your rental period.",
  },
  {
    icon: Camera,
    title: "We Confirm",
    desc: "We’ll check availability and get back to you.",
  },
];

export function BookingSection() {
  return (
    <section
      id="booking"
      className="relative py-20 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #4A0E0E 0%, #6B1A1A 40%, #8B1A1A 100%)",
      }}
    >
      {/* Decorative blurs – soft pink glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-rose-300/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-200/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            How to <span className="text-pink-300">Book</span>
          </h2>
          <p
            className="mt-3 text-pink-200/80 max-w-xl mx-auto text-lg"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Get started in three simple steps.
          </p>
        </motion.div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-pink-300/30">
                <step.icon className="w-10 h-10 text-pink-300" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-pink-200/70 text-sm mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Button linking to booking page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-[#800000] text-white px-10 py-4 rounded-full font-semibold shadow-lg shadow-pink-200/30 hover:shadow-pink-300/50 transition-all hover:scale-105"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#5C0000"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#800000"; }}
          >
            Start Booking <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}