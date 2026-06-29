// app/cameras/[slug]/page.tsx
import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, CheckCircle, Star } from "lucide-react";
import { cameras } from "@/data/cameras";

export default async function CameraDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const camera = cameras.find((c) => c.slug === slug);
  if (!camera) notFound();

  const publicDir = path.join(process.cwd(), "public", slug);
  let shots: string[] = [];
  try {
    const files = fs.readdirSync(publicDir);
    shots = files.filter((file) => /\.(png|jpg|jpeg|webp)$/i.test(file));
  } catch {
    shots = [];
  }

  return (
    <div
      className="min-h-screen py-8 sm:py-12 px-4 sm:px-6"
      style={{
        background: "linear-gradient(160deg, #4A0E0E 0%, #6B1A1A 40%, #8B1A1A 100%)",
      }}
    >
      <div className="container mx-auto max-w-6xl">
        <Link
          href="/#camera-list"
          className="inline-flex items-center gap-2 text-pink-300 hover:text-pink-200 transition-colors mb-6 sm:mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Camera List
        </Link>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-pink-200/20 p-5 sm:p-6 md:p-8 shadow-xl overflow-hidden">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Image – full width on mobile */}
            <div className="w-full aspect-square bg-pink-100/20 rounded-2xl flex items-center justify-center p-6 sm:p-8">
              <img
                src={camera.img}
                alt={camera.name}
                className="w-full h-full object-contain max-w-full max-h-full"
              />
            </div>

            {/* Details – below image on mobile */}
            <div className="flex flex-col w-full">
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                {camera.name}
              </h1>
              <p className="text-pink-200/80 mt-1 text-sm sm:text-base">
                {camera.desc}
              </p>
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center gap-1 bg-pink-500/20 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 fill-pink-400 text-pink-400" />
                  <span className="text-white text-sm">{camera.rating}</span>
                </div>
              </div>
              <div className="mt-4 space-y-1.5">
                <p className="text-white text-sm sm:text-base">
                  <span className="font-semibold text-pink-300">Daily:</span>{" "}
                  {camera.price}
                </p>
                <p className="text-white text-sm sm:text-base">
                  <span className="font-semibold text-pink-300">4+ Days:</span>{" "}
                  {camera.priceLong}
                </p>
              </div>
              <div className="mt-6 space-y-3">
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  What's Included:
                </h3>
                <ul className="space-y-2 text-sm text-pink-200/80">
                  {camera.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href="/#booking"
                  className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-[#800000] text-white px-6 py-3 rounded-full font-semibold shadow-md shadow-pink-200/30 hover:shadow-pink-300/50 transition-all hover:scale-105 text-sm sm:text-base"
                >
                  Book Now <Calendar className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Sample Shots */}
          {shots.length > 0 && (
            <div className="mt-10 md:mt-12">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Sample Shots
              </h2>
              <div className="columns-1 sm:columns-2 md:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
                {shots.map((file, idx) => (
                  <div
                    key={idx}
                    className="break-inside-avoid rounded-2xl overflow-hidden shadow-md"
                  >
                    <img
                      src={`/${slug}/${file}`}
                      alt={`Sample ${idx + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}