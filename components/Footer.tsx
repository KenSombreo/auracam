import Link from "next/link";
import { Camera, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-white border-t border-pink-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#800000] rounded-xl flex items-center justify-center">
                <Camera className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-[#800000]">
                AURA<span className="text-[#A52A2A]">CAM</span>
              </span>
            </Link>
            <p className="text-sm text-gray-600 max-w-xs">
              Premium camera rentals for creators, filmmakers, and photographers.
            </p>
            <div className="flex items-center gap-3 mt-4">
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
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-2.84 3.37-2.22V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.89a7.35 7.35 0 0 0 4.3 1.38V8.07a4.277 4.277 0 0 1-2.62-2.25z" />
                </svg>
              </a>
            </div>
            {/* DTI Registered Badge – maroon */}
            <div className="mt-4 inline-block bg-[#800000] text-white text-xs font-semibold px-3 py-1 rounded-full border border-[#A52A2A]">
              🇵🇭 DTI Registered
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#800000] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Camera List", "Sample Shots", "Booking Reviews"].map(
                (item) => {
                  const href = item === "Booking Reviews" 
                    ? "#booking-reviews" 
                    : `#${item.toLowerCase().replace(/\s+/g, "-")}`;
                  return (
                    <li key={item}>
                      <a
                        href={href}
                        className="text-gray-600 hover:text-[#800000] transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  );
                }
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#800000] mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#800000]" />
                <a href="tel:+639940745520" className="hover:text-[#800000] transition-colors">
                  0994 0745 520
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#800000]" />
                <a href="mailto:auracamrental@gmail.com" className="hover:text-[#800000] transition-colors">
                  auracamrental@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#800000]" />
                <span>Cebu City, Talisay City, Mandaue &amp; Banawa</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-[#800000] mb-4">Stay Updated</h4>
            <p className="text-sm text-gray-600 mb-3">
              Get the latest gear and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent text-sm"
              />
              <button
                type="submit"
                className="bg-[#800000] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#5C0000] transition-all shadow-md shadow-pink-200 hover:shadow-pink-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-pink-100 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} AURACAM. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-2 sm:mt-0">
            <a href="#" className="hover:text-[#800000] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#800000] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}