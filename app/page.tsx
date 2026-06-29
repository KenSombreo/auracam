// app/page.tsx
"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HomeSection } from "@/components/HomeSection";
import { CameraListSection } from "@/components/CameraListSection";
import { SampleShotsSection } from "@/components/SampleShotsSection";
import { BookingReviewsSection } from "@/components/BookingProofSection";
import { BookingSection } from "@/components/BookingSection";
import { TermsSection } from "@/components/TermsSection";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <HomeSection />
      <CameraListSection />
      <SampleShotsSection />
      <TermsSection />  
      <BookingReviewsSection />
      <BookingSection />
      <Footer />
    </main>
  );
}