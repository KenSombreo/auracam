// components/Footer.tsx
'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const socialLinks = [
    { icon: '📸', name: 'Instagram', href: '#' },
    { icon: '💬', name: 'Facebook', href: '#' },
    { icon: '🎵', name: 'TikTok', href: '#' },
    { icon: '📱', name: 'Viber', href: '#' },
  ]

  const quickLinks = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/camera-list', label: 'Cameras', icon: '📸' },
    { href: '/sample-shots', label: 'Gallery', icon: '✨' },
    { href: '/booking-proof', label: 'Book Now', icon: '💕' },
    { href: '/dashboard', label: 'Dashboard', icon: '📊' },
  ]

  const contactInfo = [
    { icon: '📍', text: 'Cebu City · Talisay · Mandaue · Banawa' },
    { icon: '📱', text: '@auracam.rent.cebu' },
    { icon: '📧', text: 'hello@auracam.com' },
    { icon: '⏰', text: 'Mon-Sun: 8AM - 8PM' },
  ]

  return (
    <footer className="footer">
      {/* Wave decoration */}
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      <div className="footer-content">
        {/* Main footer sections */}
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section brand-section">
            <div className="logo-wrapper">
              <div className="logo-icon">📷</div>
              <div className="logo-text">
                <span className="logo-aura">Aura</span>
                <span className="logo-cam">Cam</span>
              </div>
            </div>
            
            <p className="brand-description">
              Professional cameras delivered to your door in Cebu. 
              Perfect for content creators, events, travels, and everyday magic ✨
            </p>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="title-decoration"></span>
              Quick Links
            </h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`footer-link ${hoveredLink === link.href ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className="link-icon">{link.icon}</span>
                    <span className="link-text">{link.label}</span>
                    <span className="link-hover-effect"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="title-decoration"></span>
              Contact Us
            </h3>
            <ul className="contact-list">
              {contactInfo.map((item, index) => (
                <li key={index} className="contact-item">
                  <span className="contact-icon">{item.icon}</span>
                  <span className="contact-text">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link href="/booking-proof" className="footer-cta">
              <span>Book Your Camera</span>
              <span className="cta-arrow">→</span>
            </Link>
          </div>

          {/* Newsletter/Badge Section */}
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="title-decoration"></span>
              Follow Us
            </h3>
            
            <div className="instagram-preview">
              <div className="insta-grid">
                {['📸', '✨', '💕', '🎥', '🌅', '🌸'].map((emoji, i) => (
                  <div key={i} className="insta-item">
                    {emoji}
                  </div>
                ))}
              </div>
              <p className="insta-handle">@auracam.rent.cebu</p>
            </div>

            <div className="badge-container">
              <div className="badge">
                <span className="badge-icon">⭐</span>
                <span className="badge-text">Top Rated</span>
              </div>
              <div className="badge">
                <span className="badge-icon">✅</span>
                <span className="badge-text">Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="bottom-content">
            <div className="copyright">
              © {currentYear} AuraCam Rental Cebu. 
              <span className="heart"> 💕</span> 
              All rights reserved.
            </div>
            
            <div className="bottom-links">
              <Link href="/privacy" className="bottom-link">Privacy Policy</Link>
              <span className="separator">•</span>
              <Link href="/terms" className="bottom-link">Terms of Service</Link>
              <span className="separator">•</span>
              <Link href="/faq" className="bottom-link">FAQ</Link>
            </div>

            <div className="credit">
              Made with <span className="heart-pulse">💖</span> in Cebu
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          position: relative;
          background: linear-gradient(135deg, #A8415C 0%, #7a2a40 50%, #5a1e30 100%);
          color: white;
          margin-top: 60px;
          overflow: hidden;
        }

        /* Wave decoration */
        .footer-wave {
          position: absolute;
          top: -1px;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          transform: rotate(180deg);
        }

        .footer-wave svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 60px;
        }

        .footer-wave path {
          fill: var(--pink-bg);
          opacity: 0.1;
        }

        .footer-content {
          position: relative;
          padding: 80px 60px 0;
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 1.5fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* Brand Section */
        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-icon {
          font-size: 2.5rem;
          animation: gentleFloat 3s ease-in-out infinite;
          filter: drop-shadow(0 4px 12px rgba(0,0,0,0.2));
        }

        .logo-text {
          font-family: var(--font-playfair), serif;
          font-size: 2rem;
          letter-spacing: -0.02em;
        }

        .logo-aura {
          color: #FFE5F0;
          font-style: italic;
          font-weight: 700;
          text-shadow: 0 2px 10px rgba(255,255,255,0.3);
        }

        .logo-cam {
          color: white;
          font-weight: 700;
          margin-left: 0.1rem;
        }

        .brand-description {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
          max-width: 300px;
        }

        /* Social Links */
        .social-links {
          display: flex;
          gap: 12px;
          margin-top: 10px;
        }

        .social-link {
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(5px);
        }

        .social-link:hover {
          background: white;
          transform: translateY(-5px) scale(1.1);
          border-color: transparent;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .social-icon {
          font-size: 1.3rem;
          transition: transform 0.3s ease;
        }

        .social-link:hover .social-icon {
          transform: scale(1.1);
        }

        /* Footer Titles */
        .footer-title {
          font-family: var(--font-playfair), serif;
          font-size: 1.3rem;
          color: white;
          margin: 0 0 10px 0;
          display: flex;
          align-items: center;
          gap: 10px;
          position: relative;
        }

        .title-decoration {
          width: 30px;
          height: 2px;
          background: linear-gradient(90deg, #FFB6C1, #FF69B4);
          border-radius: 2px;
        }

        /* Footer Links */
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          transition: all 0.3s ease;
          position: relative;
          padding: 5px 0;
        }

        .link-icon {
          font-size: 1.1rem;
          transition: transform 0.3s ease;
        }

        .link-text {
          position: relative;
          z-index: 1;
        }

        .link-hover-effect {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #FFB6C1, #FF69B4);
          transition: width 0.3s ease;
        }

        .footer-link:hover {
          color: white;
          transform: translateX(5px);
        }

        .footer-link:hover .link-icon {
          transform: scale(1.1);
        }

        .footer-link:hover .link-hover-effect {
          width: 100%;
        }

        /* Contact List */
        .contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
        }

        .contact-icon {
          font-size: 1.2rem;
          min-width: 24px;
        }

        .contact-text {
          line-height: 1.4;
        }

        /* Footer CTA */
        .footer-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.1);
          padding: 12px 24px;
          border-radius: 50px;
          text-decoration: none;
          color: white;
          font-weight: 600;
          font-size: 0.95rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(5px);
          transition: all 0.3s ease;
          margin-top: 15px;
        }

        .footer-cta:hover {
          background: white;
          color: #A8415C;
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }

        .cta-arrow {
          transition: transform 0.3s ease;
        }

        .footer-cta:hover .cta-arrow {
          transform: translateX(5px);
        }

        /* Instagram Preview */
        .instagram-preview {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .insta-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-bottom: 10px;
        }

        .insta-item {
          aspect-ratio: 1;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .insta-item:hover {
          transform: scale(1.05);
          background: rgba(255, 255, 255, 0.2);
        }

        .insta-handle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.85rem;
          font-weight: 600;
          text-align: center;
          margin: 0;
        }

        /* Badges */
        .badge-container {
          display: flex;
          gap: 10px;
          margin-top: 15px;
        }

        .badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.1);
          padding: 8px 12px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 0.85rem;
          transition: all 0.3s ease;
        }

        .badge:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .badge-icon {
          font-size: 1rem;
        }

        .badge-text {
          color: white;
        }

        /* Bottom Bar */
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 25px 0;
        }

        .bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .copyright {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .heart {
          animation: heartbeat 1.5s ease-in-out infinite;
          display: inline-block;
        }

        .bottom-links {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .bottom-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .bottom-link:hover {
          color: white;
          text-decoration: underline;
        }

        .separator {
          color: rgba(255, 255, 255, 0.3);
        }

        .credit {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .heart-pulse {
          animation: heartbeat 1s ease-in-out infinite;
          display: inline-block;
        }

        /* Animations */
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 30px;
          }

          .footer-content {
            padding: 60px 40px 0;
          }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-content {
            padding: 50px 30px 0;
          }

          .bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .bottom-links {
            justify-content: center;
          }

          .brand-section {
            text-align: center;
          }

          .logo-wrapper {
            justify-content: center;
          }

          .brand-description {
            margin: 0 auto;
          }

          .social-links {
            justify-content: center;
          }

          .footer-title {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer-content {
            padding: 40px 20px 0;
          }

          .bottom-links {
            flex-wrap: wrap;
            justify-content: center;
          }

          .separator {
            display: none;
          }

          .bottom-link {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}