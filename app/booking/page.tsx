// app/booking/page.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Camera, Calendar, MapPin, User, CheckCircle, Shield, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const cameraOptions = [
  "Canon G7X Mark III",
  "Canon G7X Mark II",
  "Canon R50",
  "Canon M100",
  "Sony RX100 Mark III",
];

const trustBadges = [
  { icon: Shield, text: "Secure Booking" },
  { icon: Star, text: "5-Star Service" },
  { icon: CheckCircle, text: "Verified Rentals" },
];

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    camera: cameraOptions[0],
    startDate: "",
    endDate: "",
  });

  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hi Auracam! I'd like to book a camera.

Name: ${formData.name}
Location: ${formData.location}
Camera: ${formData.camera}
Start Date: ${formData.startDate}
End Date: ${formData.endDate}`;

    const encodedMessage = encodeURIComponent(message);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const start = Date.now();
      window.location.href = `fb-messenger://send?text=${encodedMessage}`;
      setTimeout(() => {
        if (Date.now() - start < 3000) {
          window.location.href = `https://m.me/auracamrentcebu?text=${encodedMessage}`;
        }
      }, 2500);
    } else {
      window.location.href = `https://m.me/auracamrentcebu?text=${encodedMessage}`;
    }
  };

  return (
    <div
      className="min-h-screen py-8 sm:py-12 md:py-16 px-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #4A0E0E 0%, #6B1A1A 40%, #8B1A1A 100%)",
      }}
    >
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-rose-300/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-200/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-pink-300 hover:text-pink-200 transition-colors mb-6 text-sm"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
          {/* Left: Hero / Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 text-white space-y-4"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-pink-200/20 p-5 md:p-6">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-4 border border-pink-300/30">
                <Camera className="w-7 h-7 md:w-8 md:h-8 text-pink-300" />
              </div>
              <h1
                className="text-2xl md:text-3xl lg:text-4xl font-bold"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Book Your <span className="text-pink-300">Camera</span>
              </h1>
              <p className="text-pink-200/70 mt-2 text-sm leading-relaxed">
                Fill in the details and we’ll get back to you within <span className="text-pink-300 font-semibold">30 minutes</span>.
              </p>

              <div className="mt-5 space-y-2.5">
                <div className="flex items-center gap-3 text-sm text-pink-200/80">
                  <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-pink-300">1</span>
                  </div>
                  <span>Choose your gear from our curated collection</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-pink-200/80">
                  <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-pink-300">2</span>
                  </div>
                  <span>Pick your rental dates – flexible terms available</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-pink-200/80">
                  <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-pink-300">3</span>
                  </div>
                  <span>We confirm availability and deliver the gear</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-pink-200/20">
                <div className="flex flex-wrap gap-3">
                  {trustBadges.map((badge, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-pink-200/70">
                      <badge.icon className="w-4 h-4 text-pink-300" />
                      <span>{badge.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-pink-200/20 p-5 md:p-6 shadow-xl">
              <h2
                className="text-xl md:text-2xl font-bold text-white text-center mb-5"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Quick Booking Request
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-pink-200 mb-1"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pink-300/50" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      required
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/10 border-2 transition-all duration-300 text-white placeholder-pink-200/40 focus:outline-none text-sm ${
                        focused === "name"
                          ? "border-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.15)]"
                          : "border-pink-300/20 hover:border-pink-300/40"
                      }`}
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-pink-200 mb-1"
                  >
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pink-300/50" />
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      onFocus={() => setFocused("location")}
                      onBlur={() => setFocused(null)}
                      required
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/10 border-2 transition-all duration-300 text-white placeholder-pink-200/40 focus:outline-none text-sm ${
                        focused === "location"
                          ? "border-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.15)]"
                          : "border-pink-300/20 hover:border-pink-300/40"
                      }`}
                      placeholder="e.g. Cebu City, Mandaue"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="camera"
                    className="block text-sm font-medium text-pink-200 mb-1"
                  >
                    Camera Choice
                  </label>
                  <div className="relative">
                    <Camera className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pink-300/50" />
                    <select
                      id="camera"
                      name="camera"
                      value={formData.camera}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/10 border-2 border-pink-300/20 hover:border-pink-300/40 transition-all duration-300 text-white focus:outline-none focus:border-pink-400 appearance-none text-sm [&>option]:bg-[#4A0E0E]"
                    >
                      {cameraOptions.map((cam) => (
                        <option key={cam} value={cam} className="bg-[#4A0E0E]">
                          {cam}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="startDate"
                      className="block text-sm font-medium text-pink-200 mb-1"
                    >
                      Start Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pink-300/50 pointer-events-none" />
                      <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        onFocus={() => setFocused("start")}
                        onBlur={() => setFocused(null)}
                        required
                        className={`w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/10 border-2 transition-all duration-300 text-white focus:outline-none text-sm appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-moz-focus-inner]:border-0 ${
                          focused === "start"
                            ? "border-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.15)]"
                            : "border-pink-300/20 hover:border-pink-300/40"
                        }`}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="endDate"
                      className="block text-sm font-medium text-pink-200 mb-1"
                    >
                      End Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pink-300/50 pointer-events-none" />
                      <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        onFocus={() => setFocused("end")}
                        onBlur={() => setFocused(null)}
                        required
                        className={`w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/10 border-2 transition-all duration-300 text-white focus:outline-none text-sm appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-moz-focus-inner]:border-0 ${
                          focused === "end"
                            ? "border-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.15)]"
                            : "border-pink-300/20 hover:border-pink-300/40"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-[#800000] to-[#A52A2A] text-white px-4 py-3 rounded-xl font-semibold shadow-lg shadow-pink-200/20 hover:shadow-pink-300/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-sm"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Submit Request <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5C0000] to-[#800000] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-pink-300/50">
                  <Shield className="w-3 h-3" />
                  <span>Your data is secure. We’ll never share your information.</span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}