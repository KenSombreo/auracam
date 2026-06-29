"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Camera List", href: "#camera-list" },
  { name: "Sample Shots", href: "#sample-shots" },
  { name: "Booking Reviews", href: "#booking-reviews" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((link) => link.href.substring(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // TikTok SVG icon (same as footer)
  const TikTokIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-2.84 3.37-2.22V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.89a7.35 7.35 0 0 0 4.3 1.38V8.07a4.277 4.277 0 0 1-2.62-2.25z" />
    </svg>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-pink-100"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Text */}
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="relative h-8 w-8 flex-shrink-0 bg-transparent">
            <Image
              src="/logo.png"
              alt="AuraCam Rental Cebu"
              fill
              className="object-contain bg-transparent"
              style={{ background: "transparent" }}
              priority
            />
          </div>
          <span
            className={`text-xl font-bold transition-colors duration-300 ${
              scrolled ? "text-gray-800" : "text-[#800000]"
            }`}
          >
            AURA<span className="text-[#800000]">CAM</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.substring(1);
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? scrolled
                        ? "text-[#800000] bg-pink-50"
                        : "text-[#800000] bg-white/20"
                      : scrolled
                      ? "text-gray-600 hover:text-[#800000] hover:bg-pink-50/50"
                      : "text-[#800000] hover:text-[#5C0000] hover:bg-white/10"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                        scrolled ? "bg-[#800000]" : "bg-[#800000]"
                      }`}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Right: Social Icons + Book Now */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.facebook.com/auracamrentcebu"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${
              scrolled ? "text-gray-500 hover:text-[#800000]" : "text-[#800000] hover:text-[#5C0000]"
            }`}
          >
            <FaFacebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/auracam_rent_cebu"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${
              scrolled ? "text-gray-500 hover:text-[#800000]" : "text-[#800000] hover:text-[#5C0000]"
            }`}
          >
            <FaInstagram className="w-5 h-5" />
          </a>
          {/* ✅ TikTok added */}
          <a
            href="https://www.tiktok.com/@auracamrental"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${
              scrolled ? "text-gray-500 hover:text-[#800000]" : "text-[#800000] hover:text-[#5C0000]"
            }`}
          >
            <TikTokIcon className="w-5 h-5" />
          </a>
          <a
            href="#booking"
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 ${
              scrolled
                ? "bg-[#800000] text-white shadow-md shadow-pink-200 hover:shadow-pink-300"
                : "bg-[#800000] text-white shadow-md shadow-white/30 hover:shadow-white/50"
            }`}
            style={{ background: "#800000" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#5C0000"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#800000"; }}
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-full transition-colors ${
            scrolled ? "hover:bg-pink-50" : "hover:bg-white/10"
          }`}
        >
          {isOpen ? (
            <X className={`w-6 h-6 ${scrolled ? "text-gray-800" : "text-[#800000]"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? "text-gray-800" : "text-[#800000]"}`} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-pink-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-pink-50/50 hover:text-[#800000]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#booking"
                className="mt-2 bg-[#800000] text-white px-4 py-3 rounded-xl text-center font-semibold hover:bg-[#5C0000] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </a>
              {/* Mobile social icons – matching footer */}
              <div className="flex items-center justify-center gap-4 mt-3 pt-3 border-t border-pink-100">
                <a
                  href="https://www.facebook.com/auracamrentcebu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#800000] transition-colors"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/auracam_rent_cebu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#800000] transition-colors"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@auracamrental"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#800000] transition-colors"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}