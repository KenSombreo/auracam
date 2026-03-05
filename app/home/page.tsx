// app/page.tsx (Homepage)
'use client'

import Link from 'next/link'
import { useToast } from '@/components/Toast'

export default function HomePage() {
  const { showToast } = useToast()

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero">
        <div>
          <div className="hero-tag">
            ✦ Camera Rental · Cebu ✦
          </div>
          
          <h1 className="hero-title">
            Capture <em>Beautiful</em><br />
            Moments with<br />
            AuraCam
          </h1>
          
          <p className="hero-sub">
            Professional cameras delivered to your door. Perfect for content creators, 
            events, travels, and everyday magic ✨
          </p>
          
          <div className="hero-badges">
            <div className="badge">📦 Free Delivery</div>
            <div className="badge">📅 Flexible Dates</div>
            <div className="badge">🕐 Free Early Handover</div>
          </div>
          
          <div className="hero-cta">
            <Link href="/camera-list" className="btn-primary">
              Browse Cameras 📷
            </Link>
            <Link href="/booking-proof" className="btn-secondary">
              Submit Booking
            </Link>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-circle">
            <div className="hero-camera-img">📷</div>
          </div>
          <div className="floating-tag" style={{ top: '18px', right: '0', animationDelay: '.5s' }}>
            Sony RX100 🌟
          </div>
          <div className="floating-tag" style={{ bottom: '45px', left: '-10px', animationDelay: '1s' }}>
            Canon EOS R50 ✨
          </div>
          <div className="floating-tag" style={{ top: '150px', left: '-20px', animationDelay: '1.5s' }}>
            G7X Mark III 💕
          </div>
          <div className="sp" style={{ top: '10px', left: '25px' }}>✦</div>
          <div className="sp" style={{ bottom: '90px', right: '10px', animationDelay: '.8s' }}>✦</div>
          <div className="sp" style={{ top: '65px', right: '32px', animationDelay: '1.5s' }}>✦</div>
        </div>
      </div>

      {/* Info Strip */}
      <div className="info-strip">
        <div className="info-item">📩 Booking via DM</div>
        <div className="info-item">🚚 Free Delivery with Location</div>
        <div className="info-item">🕐 Free Early Handover</div>
        <div className="info-item">📍 Cebu · Talisay · Mandaue · Banawa</div>
        <div className="info-item">📸 @auracam.rent.cebu</div>
      </div>

      {/* Cameras Section */}
      <div className="section">
        <div className="sec-head">
          <div className="sec-label">Available Units · Rates Per Day</div>
          <div className="sec-title">Our <em>Cameras</em></div>
          <p className="sec-desc">All units in excellent condition 💕</p>
        </div>
        
        <div className="mini-grid">
          {[
            { emoji: '📷', name: 'Canon G7X Mark II' },
            { emoji: '📸', name: 'Canon G7X Mark III' },
            { emoji: '🎥', name: 'Canon EOS R50' },
            { emoji: '📷', name: 'Canon EOS M100' },
            { emoji: '🔭', name: 'Sony RX100' },
          ].map((cam, i) => (
            <Link href="/camera-list" key={i} className="mini-card">
              <span className="emo">{cam.emoji}</span>
              <div className="mini-cam-name">{cam.name}</div>
              <div className="mini-cam-sub">DM for Rate</div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hero {
          padding: 70px 60px 50px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--pink-mid);
          color: var(--rose-deep);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 20px;
          margin-bottom: 20px;
        }
        .hero-title {
          font-family: var(--font-playfair), serif;
          font-size: 3.8rem;
          line-height: 1.1;
          margin-bottom: 18px;
        }
        .hero-title em {
          font-style: italic;
          color: var(--rose);
        }
        .hero-sub {
          color: var(--muted);
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 28px;
          max-width: 420px;
        }
        .hero-badges {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }
        .badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: var(--white);
          border: 1.5px solid var(--pink-mid);
          border-radius: 20px;
          padding: 7px 14px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--rose-deep);
        }
        .hero-cta {
          display: flex;
          gap: 14px;
          align-items: center;
        }
        .btn-primary {
          background: linear-gradient(135deg, var(--rose), var(--rose-deep));
          color: white;
          border: none;
          padding: 14px 32px;
          border-radius: 28px;
          font-family: var(--font-nunito), sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          box-shadow: 0 6px 20px var(--shadow);
          transition: all 0.2s;
          text-decoration: none;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
        }
        .btn-secondary {
          background: var(--white);
          color: var(--rose);
          border: 2px solid var(--pink-dark);
          padding: 13px 28px;
          border-radius: 28px;
          font-family: var(--font-nunito), sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }
        .btn-secondary:hover {
          background: var(--pink-light);
        }
        .hero-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          height: 420px;
        }
        .hero-circle {
          width: 340px;
          height: 340px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--pink-light), var(--pink-mid));
          display: flex;
          align-items: center;
          justify-content: center;
          animation: float 4s ease-in-out infinite;
          box-shadow: 0 20px 60px rgba(201,96,122,.2);
        }
        .hero-camera-img {
          font-size: 9rem;
          filter: drop-shadow(0 10px 30px rgba(100,20,40,.2));
        }
        .floating-tag {
          position: absolute;
          background: white;
          border-radius: 14px;
          padding: 9px 15px;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--rose-deep);
          box-shadow: 0 4px 20px rgba(0,0,0,.1);
          border: 1.5px solid var(--pink-mid);
          animation: float 4s ease-in-out infinite;
        }
        .sp {
          position: absolute;
          font-size: 1.1rem;
          animation: twinkle 2s ease-in-out infinite;
          pointer-events: none;
        }
        .info-strip {
          background: linear-gradient(135deg, var(--rose), var(--rose-deep));
          padding: 20px 60px;
          display: flex;
          justify-content: center;
          gap: 48px;
          flex-wrap: wrap;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 9px;
          color: white;
          font-size: 0.88rem;
          font-weight: 600;
        }
        .section {
          padding: 60px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .sec-head {
          text-align: center;
          margin-bottom: 40px;
        }
        .sec-label {
          display: inline-block;
          font-size: 0.72rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--rose);
          font-weight: 700;
          margin-bottom: 10px;
        }
        .sec-title {
          font-family: var(--font-playfair), serif;
          font-size: 2.2rem;
        }
        .sec-title em {
          font-style: italic;
          color: var(--rose);
        }
        .sec-desc {
          color: var(--muted);
          margin-top: 8px;
          font-size: 0.9rem;
        }
        .mini-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }
        .mini-card {
          background: var(--card);
          border: 2px solid var(--pink-mid);
          border-radius: 20px;
          padding: 22px 14px;
          text-align: center;
          cursor: pointer;
          transition: all 0.25s;
          text-decoration: none;
          color: inherit;
        }
        .mini-card:hover {
          border-color: var(--rose);
          transform: translateY(-6px);
          box-shadow: 0 12px 32px var(--shadow);
        }
        .emo {
          font-size: 2.8rem;
          margin-bottom: 10px;
          display: block;
        }
        .mini-cam-name {
          font-family: var(--font-playfair), serif;
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .mini-cam-sub {
          font-size: 0.78rem;
          color: var(--rose);
          font-weight: 700;
        }
        @media (max-width: 1024px) {
          .hero {
            grid-template-columns: 1fr;
            padding: 40px 30px;
          }
          .hero-visual {
            height: 300px;
          }
          .hero-circle {
            width: 280px;
            height: 280px;
          }
          .hero-camera-img {
            font-size: 7rem;
          }
          .mini-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .info-strip {
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }
          .mini-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  )
}