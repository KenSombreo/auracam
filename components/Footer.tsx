// components/Footer.tsx
'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-rose-deep to-[#7a2a40] py-10 px-10 text-center relative z-10">
      <div className="font-playfair text-4xl italic text-pink-light mb-3">
        AuraCam ✨
      </div>
      
      <div className="flex justify-center gap-3 text-2xl mb-3">
        <span>📸</span>
        <span>💬</span>
        <span>🎵</span>
      </div>
      
      <div className="flex justify-center gap-6 mb-3">
        <Link href="/" className="text-white/70 hover:text-white text-sm font-semibold no-underline transition">Home</Link>
        <Link href="/camera-list" className="text-white/70 hover:text-white text-sm font-semibold no-underline transition">Cameras</Link>
        <Link href="/sample-shots" className="text-white/70 hover:text-white text-sm font-semibold no-underline transition">Sample Shots</Link>
        <Link href="/booking-proof" className="text-white/70 hover:text-white text-sm font-semibold no-underline transition">Book Now</Link>
        <Link href="/dashboard" className="text-white/70 hover:text-white text-sm font-semibold no-underline transition">Dashboard</Link>
      </div>
      
      <div className="text-white/50 text-xs">
        📍 Cebu City · Talisay · Mandaue · Banawa &nbsp;|&nbsp; @auracam.rent.cebu &nbsp;|&nbsp; @auracamrent
      </div>
      
      <div className="text-white/50 text-xs mt-1">
        © 2026 AuraCam Rental Cebu. All rights reserved. 💕
      </div>

      <style jsx>{`
        footer {
          background: linear-gradient(135deg, var(--rose-deep), #7a2a40);
        }
      `}</style>
    </footer>
  )
}