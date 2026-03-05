// /home/pc/auracam/components/Navbar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname === path // Exact match instead of startsWith
  }

  const navItems = [
    { path: '/home', label: 'Home', icon: '🏠' },
    { path: '/camera-list', label: 'Camera List', icon: '📸' }, // Make sure this is correct
    { path: '/sample-shots', label: 'Sample Shots', icon: '✨' },
    { path: '/booking-proof', label: 'Booking Proof', icon: '💕' },
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
  ]

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo */}
          <Link href="/" className="logo-wrapper">
            <div className="logo-icon">📷</div>
            <div className="logo-text">
              <span className="logo-aura">Aura</span>
              <span className="logo-cam">Cam</span>
            </div>
          </Link>

          {/* Navigation Tabs */}
          <div className="nav-tabs">
            {navItems.map((item) => {
              const active = isActive(item.path)
              const isHovered = hoveredTab === item.path
              
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`tab ${active ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredTab(item.path)}
                  onMouseLeave={() => setHoveredTab(null)}
                >
                  <span className="tab-icon">{item.icon}</span>
                  <span className="tab-label">{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <Link href="/booking-proof" className="cta-button">
            <span className="cta-text">Book Now</span>
            <span className="cta-icon">✨</span>
          </Link>
        </div>
      </nav>

      {/* Spacer */}
      <div className="nav-spacer"></div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 248, 251, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(245, 198, 216, 0.3);
          transition: all 0.3s;
          padding: 0.75rem 0;
        }

        .navbar.scrolled {
          background: rgba(255, 248, 251, 0.95);
          border-bottom-color: var(--pink-mid);
          box-shadow: 0 4px 30px var(--shadow);
          padding: 0.5rem 0;
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }

        .logo-icon {
          font-size: 2rem;
          line-height: 1;
        }

        .logo-text {
          font-family: var(--font-playfair), serif;
          font-size: 1.8rem;
          display: flex;
        }

        .logo-aura {
          color: var(--rose);
          font-style: italic;
          font-weight: 700;
        }

        .logo-cam {
          color: var(--rose-deep);
          font-weight: 700;
        }

        .nav-tabs {
          display: flex;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.5);
          padding: 0.4rem;
          border-radius: 100px;
        }

        .tab {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.7rem 1.4rem;
          border-radius: 100px;
          text-decoration: none;
          color: var(--muted);
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s;
        }

        .tab:hover {
          background: var(--pink-light);
        }

        .tab.active {
          background: linear-gradient(135deg, var(--rose), var(--rose-deep));
          color: white;
          box-shadow: 0 4px 15px var(--shadow);
        }

        .tab-icon {
          font-size: 1.1rem;
        }

        .cta-button {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.8rem 2rem;
          background: linear-gradient(135deg, var(--rose), var(--rose-deep));
          border-radius: 100px;
          text-decoration: none;
          color: white;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s;
          box-shadow: 0 4px 20px var(--shadow);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px var(--shadow);
        }

        .nav-spacer {
          height: 80px;
        }

        @media (max-width: 768px) {
          .nav-container {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
          }

          .nav-tabs {
            order: 3;
            width: 100%;
            justify-content: center;
            overflow-x: auto;
          }

          .tab-label {
            display: none;
          }

          .tab-icon {
            font-size: 1.3rem;
          }

          .nav-spacer {
            height: 120px;
          }
        }
      `}</style>
    </>
  )
}