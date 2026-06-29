// components/HonestReviewSection.tsx
"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Alex K.",
    role: "Filmmaker",
    text: "The Sony A7 IV was flawless. Delivery was on time and the team was super helpful!",
    rating: 5,
  },
  {
    name: "Morgan L.",
    role: "Wedding Photographer",
    text: "Rented the Canon R6 for a weekend shoot. It arrived in pristine condition. Highly recommend!",
    rating: 5,
  },
  {
    name: "Taylor S.",
    role: "Content Creator",
    text: "AURACAM made renting so easy. The gear was top-notch and the support was amazing.",
    rating: 5,
  },
];

export function HonestReviewSection() {
  return (
    <section id="honest-review" className="py-20 bg-pink-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Honest <span className="text-pink-500">Reviews</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Real feedback from creators who rented with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100"
            >
              <div className="flex items-center gap-1 text-pink-400 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-sm italic">"{review.text}"</p>
              <div className="mt-4">
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-xs text-gray-400">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}