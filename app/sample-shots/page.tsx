// app/sample-shots/page.tsx
'use client'

import { useState } from 'react'

type FilterType = 'all' | 'g7x2' | 'g7x3' | 'r50' | 'm100' | 'rx'

const shots = [
  { id: 1, category: 'g7x2', height: 200, bg: 'linear-gradient(160deg,#f8c8d4,#e8a0b0)', icon: '🌸', cam: 'Canon G7X Mark II', desc: 'Portrait · f/1.8 · ISO 200' },
  { id: 2, category: 'rx', height: 300, bg: 'linear-gradient(160deg,#c8d8f0,#90b8d8)', icon: '🌊', cam: 'Sony RX100', desc: 'Seascape · Cebu Beach' },
  { id: 3, category: 'r50', height: 240, bg: 'linear-gradient(160deg,#e8c8f0,#c0a0d8)', icon: '🌺', cam: 'Canon EOS R50', desc: 'Macro · Flower Shot' },
  { id: 4, category: 'g7x3', height: 180, bg: 'linear-gradient(160deg,#d4b8c8,#b898a8)', icon: '🎀', cam: 'Canon G7X Mark III', desc: 'Aesthetic Flat lay' },
  { id: 5, category: 'm100', height: 220, bg: 'linear-gradient(160deg,#d0e8d0,#a8c8a8)', icon: '🌿', cam: 'Canon EOS M100', desc: 'Outdoor · Nature' },
  { id: 6, category: 'g7x2', height: 270, bg: 'linear-gradient(160deg,#f8e0c0,#e8c870)', icon: '🌅', cam: 'Canon G7X Mark II', desc: 'Sunset · Golden Hour' },
  { id: 7, category: 'rx', height: 190, bg: 'linear-gradient(160deg,#c8e8f8,#90c8e8)', icon: '✈️', cam: 'Sony RX100', desc: 'Travel Photography' },
  { id: 8, category: 'r50', height: 240, bg: 'linear-gradient(160deg,#f0c8b8,#d8a090)', icon: '👗', cam: 'Canon EOS R50', desc: 'Fashion · OOTD Shot' },
  { id: 9, category: 'g7x3', height: 280, bg: 'linear-gradient(160deg,#f8c8e0,#e890b8)', icon: '🎂', cam: 'Canon G7X Mark III', desc: 'Event · Birthday Coverage' },
  { id: 10, category: 'm100', height: 200, bg: 'linear-gradient(160deg,#f8e8a0,#e8c860)', icon: '🍜', cam: 'Canon EOS M100', desc: 'Food Photography' },
  { id: 11, category: 'g7x2', height: 210, bg: 'linear-gradient(160deg,#d0c8f0,#a898d8)', icon: '🌙', cam: 'Canon G7X Mark II', desc: 'Night Shot · City Lights' },
  { id: 12, category: 'rx', height: 250, bg: 'linear-gradient(160deg,#d8f0d0,#a8c890)', icon: '🌳', cam: 'Sony RX100', desc: 'Landscape · Bokeh' },
]

export default function SampleShotsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'g7x2', label: 'G7X Mark II' },
    { id: 'g7x3', label: 'G7X Mark III' },
    { id: 'r50', label: 'EOS R50' },
    { id: 'm100', label: 'EOS M100' },
    { id: 'rx', label: 'Sony RX100' },
  ]

  const filteredShots = activeFilter === 'all' 
    ? shots 
    : shots.filter(shot => shot.category === activeFilter)

  return (
    <div>
      <div className="shots-header">
        <div className="sec-label">Shot with AuraCam Cameras</div>
        <h1>Sample <em>Photo Shots</em></h1>
        <p>See what our cameras can capture ✨</p>
      </div>

      <div className="filter-row">
        {filters.map(filter => (
          <button
            key={filter.id}
            className={`ftab ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.id as FilterType)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="masonry">
        {filteredShots.map(shot => (
          <div key={shot.id} className="shot">
            <div 
              className="shot-bg" 
              style={{ 
                height: shot.height,
                background: shot.bg
              }}
            >
              <div className="ico">{shot.icon}</div>
            </div>
            <div className="shot-ov">
              <div className="shot-cam">{shot.cam}</div>
              <div className="shot-desc">{shot.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .shots-header {
          text-align: center;
          padding: 50px 60px 24px;
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
        .shots-header h1 {
          font-family: var(--font-playfair), serif;
          font-size: 3rem;
          margin-bottom: 8px;
        }
        .shots-header h1 em {
          font-style: italic;
          color: var(--rose);
        }
        .shots-header p {
          color: var(--muted);
          margin-top: 8px;
        }
        .filter-row {
          display: flex;
          justify-content: center;
          gap: 10px;
          padding: 0 60px 28px;
          flex-wrap: wrap;
        }
        .ftab {
          background: var(--white);
          border: 2px solid var(--pink-mid);
          color: var(--muted);
          padding: 8px 20px;
          border-radius: 20px;
          font-family: var(--font-nunito), sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .ftab.active, .ftab:hover {
          background: var(--rose);
          border-color: var(--rose);
          color: white;
        }
        .masonry {
          columns: 4;
          column-gap: 14px;
          padding: 0 60px 60px;
        }
        .shot {
          break-inside: avoid;
          margin-bottom: 14px;
          border-radius: 14px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
        }
        .shot-bg {
          width: 100%;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .shot-bg .ico {
          position: absolute;
          font-size: 2.8rem;
          opacity: 0.35;
        }
        .shot-ov {
          position: absolute;
          inset: 0;
          border-radius: 14px;
          opacity: 0;
          transition: opacity 0.3s;
          background: linear-gradient(0deg, rgba(168,65,92,.85), transparent);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 14px;
        }
        .shot:hover .shot-ov {
          opacity: 1;
        }
        .shot-cam {
          color: white;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 1px;
        }
        .shot-desc {
          color: rgba(255,255,255,.8);
          font-size: 0.72rem;
        }
        @media (max-width: 1024px) {
          .masonry {
            columns: 3;
          }
        }
        @media (max-width: 768px) {
          .masonry {
            columns: 2;
          }
          .shots-header h1 {
            font-size: 2.2rem;
          }
        }
        @media (max-width: 480px) {
          .masonry {
            columns: 1;
          }
        }
      `}</style>
    </div>
  )
}