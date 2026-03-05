// app/dashboard/page.tsx
'use client'

import Link from 'next/link'
import { useToast } from '@/components/Toast'

const recentBookings = [
  { name: 'Maria Santos', contact: '09171234567', camera: 'Canon EOS R50', dates: 'Mar 5 – Mar 7', location: 'Cebu City', status: 'active' },
  { name: 'Jessa Reyes', contact: '09981234567', camera: 'Canon G7X Mark III', dates: 'Mar 4 – Mar 6', location: 'Talisay City', status: 'active' },
  { name: 'Lara Mendoza', contact: '09561234567', camera: 'Sony RX100', dates: 'Mar 3 – Mar 5', location: 'Mandaue', status: 'pending' },
  { name: 'Carla Dizon', contact: '09271234567', camera: 'Canon G7X Mark II', dates: 'Feb 28 – Mar 2', location: 'Banawa', status: 'completed' },
  { name: 'Bea Torres', contact: '09781234567', camera: 'Canon EOS M100', dates: 'Feb 25 – Feb 27', location: 'Cebu City', status: 'completed' },
]

const calendarDays = [
  ...Array(31).fill(null).map((_, i) => ({ day: i + 1, booked: [5,6,7,10,11,12,23,24].includes(i + 1) })),
  ...Array(4).fill(null).map(() => ({ day: null }))
]

export default function DashboardPage() {
  const { showToast } = useToast()
  const today = 5 // March 5 as today

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'active':
        return <span className="sbadge s-active">Active</span>
      case 'completed':
        return <span className="sbadge s-done">Completed</span>
      case 'pending':
        return <span className="sbadge s-pend">Pending</span>
      default:
        return null
    }
  }

  return (
    <div className="dash">
      <div className="dash-hd">
        <div>
          <h1>Dashboard 📊</h1>
          <p>AuraCam Rental Overview · March 2026</p>
        </div>
        <Link href="/booking-proof" className="btn-primary">
          + New Booking
        </Link>
      </div>

      <div className="stats">
        <div className="scard">
          <div className="sico">📷</div>
          <div className="snum">5</div>
          <div className="slbl">Camera Units</div>
        </div>
        <div className="scard">
          <div className="sico">📅</div>
          <div className="snum">12</div>
          <div className="slbl">Total Bookings</div>
        </div>
        <div className="scard">
          <div className="sico">✅</div>
          <div className="snum">9</div>
          <div className="slbl">Completed</div>
        </div>
        <div className="scard">
          <div className="sico">⏳</div>
          <div className="snum">3</div>
          <div className="slbl">Active Rentals</div>
        </div>
      </div>

      <div className="dsec-title">Recent Bookings</div>
      
      <table className="rt">
        <thead>
          <tr>
            <th>Renter</th>
            <th>Camera</th>
            <th>Dates</th>
            <th>Location</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {recentBookings.map((booking, index) => (
            <tr key={index}>
              <td>
                <strong>{booking.name}</strong>
                <br />
                <span style={{ color: 'var(--muted)', fontSize: '0.78rem' }}>{booking.contact}</span>
              </td>
              <td>{booking.camera}</td>
              <td>{booking.dates}</td>
              <td>{booking.location}</td>
              <td>{getStatusBadge(booking.status)}</td>
              <td>
                <button 
                  className="btn-book"
                  onClick={() => showToast(`📋 Viewing ${booking.name} booking`)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="dsec-title">March 2026 · Booking Calendar</div>
      
      <div className="calendar-container">
        <div className="cal-grid">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="cal-dh">{day}</div>
          ))}
          
          {calendarDays.map((item, index) => (
            item.day ? (
              <div 
                key={index} 
                className={`cal-d ${item.booked ? 'booked' : ''} ${item.day === today ? 'today' : ''}`}
              >
                {item.day}
              </div>
            ) : (
              <div key={index} className="cal-d emp"></div>
            )
          ))}
        </div>
        
        <div className="legend">
          <div className="legend-item">
            <div className="color-box booked"></div>
            <span>Booked</span>
          </div>
          <div className="legend-item">
            <div className="color-box today"></div>
            <span>Today</span>
          </div>
          <div className="legend-item">
            <div className="color-box available"></div>
            <span>Available</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dash {
          padding: 50px 60px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .dash-hd {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 34px;
        }
        .dash-hd h1 {
          font-family: var(--font-playfair), serif;
          font-size: 2.5rem;
        }
        .dash-hd p {
          color: var(--muted);
          font-size: 0.9rem;
          margin-top: 4px;
        }
        .btn-primary {
          background: linear-gradient(135deg, var(--rose), var(--rose-deep));
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 28px;
          font-family: var(--font-nunito), sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          box-shadow: 0 6px 20px var(--shadow);
          transition: all 0.2s;
          text-decoration: none;
          display: inline-block;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
        }
        .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-bottom: 38px;
        }
        .scard {
          background: var(--card);
          border: 2px solid var(--pink-mid);
          border-radius: 20px;
          padding: 22px;
          text-align: center;
          transition: all 0.2s;
        }
        .scard:hover {
          border-color: var(--rose);
          transform: translateY(-4px);
          box-shadow: 0 10px 28px var(--shadow);
        }
        .sico {
          font-size: 2rem;
          margin-bottom: 8px;
        }
        .snum {
          font-family: var(--font-playfair), serif;
          font-size: 2rem;
          color: var(--rose-deep);
          font-weight: 700;
        }
        .slbl {
          font-size: 0.78rem;
          color: var(--muted);
          font-weight: 600;
          margin-top: 3px;
        }
        .dsec-title {
          font-family: var(--font-playfair), serif;
          font-size: 1.4rem;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .dsec-title::after {
          content: '';
          flex: 1;
          height: 1.5px;
          background: var(--pink-mid);
        }
        .rt {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 40px;
        }
        .rt th {
          text-align: left;
          padding: 11px 14px;
          font-size: 0.73rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--rose);
          font-weight: 700;
          border-bottom: 2px solid var(--pink-mid);
        }
        .rt td {
          padding: 13px 14px;
          font-size: 0.88rem;
          border-bottom: 1px solid var(--pink-light);
          vertical-align: middle;
        }
        .rt tr:hover td {
          background: var(--pink-light);
        }
        .sbadge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.72rem;
          font-weight: 700;
        }
        .s-active {
          background: #d4f4e0;
          color: #2a7a4a;
        }
        .s-done {
          background: var(--pink-mid);
          color: var(--rose-deep);
        }
        .s-pend {
          background: #fff3cd;
          color: #856404;
        }
        .btn-book {
          background: linear-gradient(135deg, var(--rose), var(--rose-deep));
          color: white;
          border: none;
          padding: 7px 14px;
          border-radius: 18px;
          font-family: var(--font-nunito), sans-serif;
          font-weight: 700;
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-book:hover {
          transform: scale(1.05);
        }
        .calendar-container {
          background: var(--card);
          border: 2px solid var(--pink-mid);
          border-radius: 20px;
          padding: 26px;
          margin-bottom: 40px;
        }
        .cal-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 5px;
        }
        .cal-dh {
          text-align: center;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--rose);
          padding: 6px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .cal-d {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          font-size: 0.82rem;
          cursor: pointer;
          transition: all 0.15s;
          background: var(--white);
          border: 1.5px solid var(--pink-light);
        }
        .cal-d:hover {
          background: var(--pink-mid);
        }
        .cal-d.booked {
          background: var(--rose);
          color: white;
          font-weight: 700;
          border-color: var(--rose);
        }
        .cal-d.today {
          border: 2px solid var(--rose);
          font-weight: 700;
          color: var(--rose);
        }
        .cal-d.emp {
          background: transparent;
          border-color: transparent;
          pointer-events: none;
        }
        .legend {
          display: flex;
          gap: 20px;
          margin-top: 14px;
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.78rem;
          color: var(--muted);
        }
        .color-box {
          width: 13px;
          height: 13px;
          border-radius: 4px;
        }
        .color-box.booked {
          background: var(--rose);
        }
        .color-box.today {
          background: white;
          border: 2px solid var(--rose);
        }
        .color-box.available {
          background: white;
          border: 1.5px solid var(--pink-mid);
        }
        @media (max-width: 1024px) {
          .dash {
            padding: 40px 30px;
          }
          .stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .dash-hd {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .rt {
            display: block;
            overflow-x: auto;
          }
          .cal-grid {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  )
}