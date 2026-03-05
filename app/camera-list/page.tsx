// app/camera-list/page.tsx
'use client'

import Link from 'next/link'

const cameras = [
  {
    brand: 'Canon',
    name: 'G7X Mark II',
    badge: '✦ Popular',
    specs: [
      '20.1MP 1" CMOS Sensor',
      '1080p 60fps Video',
      'Flip touchscreen LCD',
      'Built-in ND filter',
      'Great for vlogging & travel'
    ],
    bgGradient: 'linear-gradient(160deg,#fce8f0,#f5c0d4)',
    emoji: '📷'
  },
  {
    brand: 'Canon',
    name: 'G7X Mark III',
    badge: '✦ New',
    specs: [
      '20.1MP 1" Stacked CMOS',
      '4K Video · Live Streaming',
      'Vertical video support',
      'Improved AF & subject tracking',
      'Perfect for content creators'
    ],
    bgGradient: 'linear-gradient(160deg,#fcd8ec,#f0a8cc)',
    emoji: '📸'
  },
  {
    brand: 'Canon',
    name: 'EOS R50',
    badge: '✦ Best Value',
    specs: [
      '24.2MP APS-C Mirrorless',
      '4K 30fps · FHD 120fps',
      'Dual Pixel AF II',
      'Compact & lightweight body',
      'Interchangeable RF-S lenses'
    ],
    bgGradient: 'linear-gradient(160deg,#f0d8f5,#d8a8e8)',
    emoji: '🎥'
  },
  {
    brand: 'Canon',
    name: 'EOS M100',
    badge: '✦ Beginner Friendly',
    specs: [
      '24.2MP APS-C Sensor',
      '1080p Full HD Video',
      'Selfie-friendly flip screen',
      'Bluetooth & Wi-Fi built-in',
      'Compact mirrorless design'
    ],
    bgGradient: 'linear-gradient(160deg,#fce8d4,#f0c098)',
    emoji: '📷'
  },
  {
    brand: 'Sony',
    name: 'RX100',
    badge: '✦ Sony',
    specs: [
      '20.1MP 1" Exmor R CMOS',
      'Carl Zeiss 28-100mm lens',
      '4K HDR Video',
      'Excellent low-light shots',
      'Pocket-sized powerhouse'
    ],
    bgGradient: 'linear-gradient(160deg,#d8e8f8,#a0c8e8)',
    emoji: '🔭'
  }
]

export default function CameraListPage() {
  return (
    <div>
      <div className="page-hero">
        <div className="sec-label">Available Units · Rates Per Day</div>
        <h1>Our <em>Camera</em> Collection</h1>
        <p>All units are well-maintained and sanitized before every rental 💕</p>
      </div>

      <div className="cam-grid">
        {cameras.map((camera, index) => (
          <div key={index} className="cam-card">
            <div className="cam-card-img" style={{ background: camera.bgGradient }}>
              {camera.emoji}
              <div className="cc-badge">{camera.badge}</div>
            </div>
            
            <div className="cam-card-body">
              <div className="cam-brand">{camera.brand}</div>
              <div className="cam-name">{camera.name}</div>
              
              <ul className="cam-specs">
                {camera.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
              
              <div className="cam-footer">
                <div className="cam-price">
                  DM for Rate <small>/ day</small>
                </div>
                <Link href="/booking-proof" className="btn-book">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .page-hero {
          background: linear-gradient(160deg, var(--pink-light), var(--pink-bg));
          padding: 50px 60px 30px;
          text-align: center;
          border-bottom: 2px solid var(--pink-mid);
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
        .page-hero h1 {
          font-family: var(--font-playfair), serif;
          font-size: 3rem;
          margin-bottom: 8px;
        }
        .page-hero h1 em {
          font-style: italic;
          color: var(--rose);
        }
        .page-hero p {
          color: var(--muted);
        }
        .cam-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
          padding: 50px 60px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .cam-card {
          background: var(--card);
          border: 2px solid var(--pink-mid);
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.3s;
          cursor: pointer;
        }
        .cam-card:hover {
          border-color: var(--rose);
          transform: translateY(-8px);
          box-shadow: 0 20px 50px var(--shadow);
        }
        .cam-card-img {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5.5rem;
          position: relative;
        }
        .cc-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: var(--rose);
          color: white;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 12px;
          letter-spacing: 1px;
        }
        .cam-card-body {
          padding: 22px;
        }
        .cam-brand {
          font-size: 0.72rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--rose);
          font-weight: 700;
          margin-bottom: 6px;
        }
        .cam-name {
          font-family: var(--font-playfair), serif;
          font-size: 1.3rem;
          margin-bottom: 12px;
        }
        .cam-specs {
          list-style: none;
          margin-bottom: 16px;
        }
        .cam-specs li {
          font-size: 0.82rem;
          color: var(--muted);
          padding: 3px 0;
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .cam-specs li::before {
          content: '✦';
          color: var(--pink-dark);
          font-size: 0.6rem;
          flex-shrink: 0;
        }
        .cam-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1.5px solid var(--pink-mid);
        }
        .cam-price {
          font-family: var(--font-playfair), serif;
          font-size: 1.1rem;
          color: var(--rose-deep);
          font-weight: 700;
        }
        .cam-price small {
          font-size: 0.72rem;
          font-family: var(--font-nunito), sans-serif;
          color: var(--muted);
          font-weight: 400;
        }
        .btn-book {
          background: linear-gradient(135deg, var(--rose), var(--rose-deep));
          color: white;
          border: none;
          padding: 9px 18px;
          border-radius: 18px;
          font-family: var(--font-nunito), sans-serif;
          font-weight: 700;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }
        .btn-book:hover {
          transform: scale(1.05);
        }
        @media (max-width: 1024px) {
          .cam-grid {
            grid-template-columns: repeat(2, 1fr);
            padding: 40px 30px;
          }
        }
        @media (max-width: 768px) {
          .cam-grid {
            grid-template-columns: 1fr;
          }
          .page-hero h1 {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </div>
  )
}