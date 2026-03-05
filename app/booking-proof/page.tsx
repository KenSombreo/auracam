// app/booking-proof/page.tsx
'use client'

import { useState, useRef } from 'react'
import { useToast } from '@/components/Toast'

export default function BookingProofPage() {
  const { showToast } = useToast()
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    camera: '',
    location: '',
    startDate: '',
    endDate: '',
    notes: ''
  })
  const [fileName, setFileName] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(`✅ ${e.target.files[0].name}`)
    }
  }

  const handleSubmit = () => {
    if (!formData.fullName || !formData.camera || !formData.startDate) {
      showToast('⚠️ Please fill in all required fields!')
      return
    }
    
    setIsSubmitted(true)
    showToast('🎉 Booking submitted! We\'ll confirm via DM soon 💕')
  }

  return (
    <div className="booking-wrap">
      <div className="sec-label" style={{ display: 'block', textAlign: 'center', marginBottom: '8px' }}>
        Rental Booking
      </div>
      
      <h1>Submit Booking <em>Proof</em></h1>
      
      <p className="booking-sub">
        Fill in your details and upload your payment proof to confirm your reservation 💕
      </p>

      <div className="bform" style={{ opacity: isSubmitted ? 0.4 : 1, pointerEvents: isSubmitted ? 'none' : 'auto' }}>
        <div className="frow">
          <div className="fg">
            <label htmlFor="fullName">Full Name</label>
            <input 
              type="text" 
              id="fullName" 
              placeholder="Your full name" 
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="fg">
            <label htmlFor="contactNumber">Contact Number</label>
            <input 
              type="tel" 
              id="contactNumber" 
              placeholder="09XX XXX XXXX"
              value={formData.contactNumber}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="frow">
          <div className="fg">
            <label htmlFor="camera">Camera Unit</label>
            <select id="camera" value={formData.camera} onChange={handleInputChange}>
              <option value="">Select a camera...</option>
              <option value="Canon G7X Mark II">Canon G7X Mark II</option>
              <option value="Canon G7X Mark III">Canon G7X Mark III</option>
              <option value="Canon EOS R50">Canon EOS R50</option>
              <option value="Canon EOS M100">Canon EOS M100</option>
              <option value="Sony RX100">Sony RX100</option>
            </select>
          </div>
          <div className="fg">
            <label htmlFor="location">Pickup / Delivery Location</label>
            <select id="location" value={formData.location} onChange={handleInputChange}>
              <option value="">Select location...</option>
              <option value="Cebu City">Cebu City</option>
              <option value="Talisay City">Talisay City</option>
              <option value="Mandaue">Mandaue</option>
              <option value="Banawa">Banawa</option>
            </select>
          </div>
        </div>

        <div className="frow">
          <div className="fg">
            <label htmlFor="startDate">Rental Date (Start)</label>
            <input 
              type="date" 
              id="startDate" 
              value={formData.startDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="fg">
            <label htmlFor="endDate">Return Date</label>
            <input 
              type="date" 
              id="endDate" 
              value={formData.endDate}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="frow">
          <div className="fg full">
            <label htmlFor="notes">Additional Notes</label>
            <textarea 
              id="notes" 
              placeholder="Accessories needed, delivery notes, special requests..."
              value={formData.notes}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="frow">
          <div className="fg full">
            <label>Payment Proof (GCash / Bank Transfer Screenshot)</label>
            <div className="upload" onClick={() => fileInputRef.current?.click()}>
              <div className="uico">📎</div>
              <div className="utxt">Click to upload your payment screenshot</div>
              <div className="usub">PNG, JPG up to 10MB</div>
              <input 
                type="file" 
                ref={fileInputRef}
                accept="image/*" 
                style={{ display: 'none' }} 
                onChange={handleFileChange}
              />
              {fileName && <div className="fname">{fileName}</div>}
            </div>
          </div>
        </div>

        <button className="btn-submit" onClick={handleSubmit}>
          Submit Booking Proof ✨
        </button>
      </div>

      {isSubmitted && (
        <div className="success">
          <div className="chk">🎉</div>
          <h3>Booking Submitted!</h3>
          <p>
            Thank you! We'll review your proof and confirm via DM within 1–2 hours.<br />
            Follow us <strong>@auracam.rent.cebu</strong> 💕
          </p>
        </div>
      )}

      <style jsx>{`
        .booking-wrap {
          padding: 50px 60px;
          max-width: 880px;
          margin: 0 auto;
        }
        .sec-label {
          font-size: 0.72rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--rose);
          font-weight: 700;
        }
        .booking-wrap h1 {
          font-family: var(--font-playfair), serif;
          font-size: 2.8rem;
          text-align: center;
          margin-bottom: 8px;
        }
        .booking-wrap h1 em {
          font-style: italic;
          color: var(--rose);
        }
        .booking-sub {
          text-align: center;
          color: var(--muted);
          margin-bottom: 36px;
          font-size: 0.95rem;
        }
        .bform {
          background: var(--card);
          border: 2px solid var(--pink-mid);
          border-radius: 28px;
          padding: 40px;
          box-shadow: 0 8px 40px var(--shadow);
          transition: opacity 0.3s;
        }
        .frow {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          margin-bottom: 18px;
        }
        .fg {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .fg.full {
          grid-column: 1 / -1;
        }
        .fg label {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--rose-deep);
        }
        .fg input, .fg select, .fg textarea {
          background: var(--white);
          border: 2px solid var(--pink-mid);
          border-radius: 12px;
          padding: 12px 15px;
          font-family: var(--font-nunito), sans-serif;
          font-size: 0.9rem;
          color: var(--text);
          outline: none;
          transition: border-color 0.2s;
        }
        .fg input:focus, .fg select:focus, .fg textarea:focus {
          border-color: var(--rose);
        }
        .fg textarea {
          resize: vertical;
          min-height: 88px;
        }
        .upload {
          border: 2px dashed var(--pink-dark);
          border-radius: 14px;
          padding: 28px;
          text-align: center;
          background: var(--pink-light);
          cursor: pointer;
          transition: all 0.2s;
        }
        .upload:hover {
          border-color: var(--rose);
          background: var(--pink-mid);
        }
        .uico {
          font-size: 2.2rem;
          margin-bottom: 8px;
        }
        .utxt {
          font-size: 0.88rem;
          color: var(--muted);
          font-weight: 600;
        }
        .usub {
          font-size: 0.75rem;
          color: var(--pink-dark);
          margin-top: 3px;
        }
        .fname {
          margin-top: 8px;
          font-size: 0.82rem;
          color: var(--rose);
          font-weight: 700;
        }
        .btn-submit {
          width: 100%;
          background: linear-gradient(135deg, var(--rose), var(--rose-deep));
          color: white;
          border: none;
          padding: 16px;
          border-radius: 20px;
          font-family: var(--font-nunito), sans-serif;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          box-shadow: 0 6px 20px var(--shadow);
          transition: all 0.2s;
          margin-top: 10px;
        }
        .btn-submit:hover {
          transform: translateY(-2px);
        }
        .success {
          display: block;
          text-align: center;
          padding: 40px;
          background: var(--pink-light);
          border: 2px solid var(--pink-mid);
          border-radius: 20px;
          margin-top: 22px;
        }
        .chk {
          font-size: 3.5rem;
          margin-bottom: 12px;
        }
        .success h3 {
          font-family: var(--font-playfair), serif;
          font-size: 1.6rem;
          color: var(--rose-deep);
          margin-bottom: 8px;
        }
        .success p {
          color: var(--muted);
          font-size: 0.92rem;
        }
        @media (max-width: 768px) {
          .booking-wrap {
            padding: 30px 20px;
          }
          .frow {
            grid-template-columns: 1fr;
          }
          .booking-wrap h1 {
            font-size: 2rem;
          }
          .bform {
            padding: 25px;
          }
        }
      `}</style>
    </div>
  )
}