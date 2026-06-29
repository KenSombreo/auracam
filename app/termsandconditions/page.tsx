// app/termsandconditions/page.tsx
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <div
      className="min-h-screen py-20 px-4 flex items-center justify-center"
      style={{
        background: "linear-gradient(160deg, #4A0E0E 0%, #6B1A1A 40%, #8B1A1A 100%)",
      }}
    >
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-pink-300 hover:text-pink-200 transition-colors mb-6"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="relative">
          {/* Wax seal */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10 w-16 h-16 rounded-full bg-[#8B1A1A] border-4 border-pink-300 shadow-xl flex items-center justify-center">
            <span className="text-white text-2xl font-bold" style={{ fontFamily: "var(--font-great), cursive" }}>
              A
            </span>
          </div>

          {/* Letter paper */}
          <div
            className="relative rounded-3xl shadow-2xl p-8 md:p-12 border border-pink-200/30"
            style={{
              background: "linear-gradient(145deg, #FFF8F0, #FDF6EE)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-pink-300 blur-3xl" />
              <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-pink-400 blur-3xl" />
            </div>

            <div className="absolute top-6 right-6 w-12 h-12 bg-pink-200/30 rounded-full border-2 border-pink-300/50 flex items-center justify-center rotate-12 shadow-md">
              <span className="text-xs font-bold text-pink-600 uppercase tracking-wider" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Read
              </span>
            </div>

            <div className="relative z-10">
              <h1
                className="text-3xl md:text-4xl font-bold text-[#4A0E0E] mb-6 text-center"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                <span className="border-b-2 border-pink-300/50 pb-2 inline-block">
                  Terms &amp; Conditions
                </span>
              </h1>

              <div className="space-y-8 text-[#3D2A1C]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                <p className="text-center text-pink-600 italic text-lg" style={{ fontFamily: "var(--font-great), cursive" }}>
                  Dear Valued Renter,
                </p>
                <p className="text-center text-sm text-[#5A3A2A]">
                  Please read our guide for booking and rental conditions carefully before confirming your reservation.
                </p>

                {/* ===== BOOKING CONDITIONS (moved first) ===== */}
                <div>
                  <h2 className="text-xl font-semibold text-[#4A0E0E] border-b border-pink-200/50 pb-2 mb-4">
                    📝 Booking Conditions
                  </h2>
                  <div className="space-y-4 text-sm text-[#4A3A2A]">
                    <div>
                      <h3 className="font-semibold text-pink-700">Booking &amp; Eligibility</h3>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Only main, active accounts with profile photos will be entertained. Newly created or suspicious accounts will be declined.</li>
                        <li>Renters must be 18 years old and above.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-pink-700">Identification Requirements</h3>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Submit clear photos of two valid IDs (one must be government-issued). If not, 1 student ID and Parents ID will do.</li>
                        <li>Provide a selfie holding the same two IDs for identity verification.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-pink-700">Reservation Policy</h3>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>A 50% downpayment is required to confirm and secure a booking.</li>
                        <li>For next-month advance bookings only, a ₱100 reservation fee may be paid to temporarily hold the slot.</li>
                        <li>The ₱100 reservation fee is deductible from the total rental fee.</li>
                        <li>Failure to complete the required downpayment within the agreed time will result in automatic cancellation and slot release.</li>
                        <li>Bookings are first-come, first-served based on payment.</li>
                        <li>A signed rental agreement is required before unit release.</li>
                        <li><span className="font-bold text-pink-600">NO SECURITY DEPOSIT NEEDED.</span></li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-pink-700">Proof of Billing</h3>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Must provide a recent proof of billing.</li>
                        <li>Accepted documents: utility bill, internet bill, government-issued document, or order invoice from Lazada/Shopee.</li>
                        <li>Date must be recent. No recent proof = service/booking may be denied.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-pink-700">Rental Period &amp; Return</h3>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Rental starts on the morning of the booked date.</li>
                        <li>Free early handover is allowed the night before 7-8 PM and does not count toward the rental period.</li>
                        <li>Return on the agreed date and time usually 8-9 AM for 1-day rentals.</li>
                        <li>Late returns incur a <span className="font-semibold text-pink-600">₱150</span> per hour late fee regardless of early handover.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-pink-700">Pick-up, Delivery &amp; Return</h3>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Pick-up and return points are subject to owner availability.</li>
                        <li>In-person meet-up is highly recommended.</li>
                        <li>Delivery or return via courier such as Maxim is allowed and paid by the renter.</li>
                        <li>The renter is responsible for the safe and timely return of the unit.</li>
                      </ul>
                      <p className="mt-2 bg-pink-100/30 p-3 rounded-xl border border-pink-200 text-pink-700 font-semibold">
                        WE OFFER FREE DELIVERY FOR THOSE WHO RENTED 3+ DAYS IN THESE AREAS: TALISAY, CEBU CITY, MANDAUE &amp; BANAWA
                      </p>
                    </div>
                  </div>
                </div>

                {/* ===== GUIDE FOR BOOKING AGREEMENT (moved second) ===== */}
                <div>
                  <h2 className="text-xl font-semibold text-[#4A0E0E] border-b border-pink-200/50 pb-2 mb-4">
                    📋 Guide for Booking Agreement
                  </h2>
                  <div className="space-y-4 text-sm text-[#4A3A2A]">
                    <div>
                      <h3 className="font-semibold text-pink-700">Cancellation &amp; Extension Policy</h3>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>All bookings are final and non-refundable once confirmed. No-shows will forfeit all payments.</li>
                        <li>Extensions are allowed subject to availability. Please notify us at least 4 hours before return time. Approved extensions will have additional rental fees.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-pink-700">Do We Accept International Flights?</h3>
                      <p>Yes! We accept clients bring our gear international flights. No additional fees will be charged as long as we are informed of your location and purpose in advance.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-pink-700">Damages, Loss &amp; Liability (WITH FEES)</h3>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>The renter is fully responsible for the unit and accessories from release until verified return. Severe damage beyond repair or loss or theft of the unit will be charged 100% of the unit's current market value.</li>
                        <li>All damage fees must be settled immediately after assessment.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-pink-700">Scratches &amp; Dents (Camera Body/Dive Case)</h3>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Minor Scratches &amp; Dents – <span className="font-semibold text-pink-600">₱300</span> per scratch/dent</li>
                        <li>Major Scratches &amp; Dents – <span className="font-semibold text-pink-600">₱1,000</span> per scratch/dent</li>
                        <li>(Assessment based on size, depth, and visibility)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-pink-700">Broken/Damaged Tempered Glass</h3>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Canon Units (G7XII/III, R50) – <span className="font-semibold text-pink-600">₱999</span></li>
                        <li>Sony RX100III – <span className="font-semibold text-pink-600">₱500</span></li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-pink-700">Lens Damage, Screen/LCD Damage, and Water-Related Damage</h3>
                      <p>Canon G7XII/G7XIII/R50 / Sony RX100III – <span className="font-semibold text-pink-600">₱3,000 – ₱20,000</span> per unit</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-pink-700">Lost or Damaged Accessories</h3>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Battery – <span className="font-semibold text-pink-600">₱1,500 – ₱3,000</span> (check Canon/Sony for price)</li>
                        <li>Charger/Cable – <span className="font-semibold text-pink-600">₱800 – ₱1,500</span></li>
                        <li>Memory Card – <span className="font-semibold text-pink-600">₱1,000 – ₱2,000</span></li>
                        <li>Mounts/Cases/Covers – <span className="font-semibold text-pink-600">₱300 – ₱2,000</span> each</li>
                      </ul>
                    </div>

                    <div className="bg-pink-100/30 p-4 rounded-xl border border-pink-200">
                      <p className="font-semibold text-pink-700">REMINDER</p>
                      <p className="text-[#4A3A2A]">We're happy to share our gear with you – please treat it with care. Kindly return everything clean, complete, and on time.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Signature */}
              <div className="mt-10 pt-6 border-t border-pink-200/50 text-center">
                <p className="text-sm text-[#6A5A4A]" style={{ fontFamily: "var(--font-great), cursive" }}>
                  With care,
                </p>
                <p className="text-sm text-[#4A0E0E] font-semibold">Auracam Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}