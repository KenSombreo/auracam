// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script, Great_Vibes, Cormorant_Garamond, Tangerine } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-great" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant" });
const tangerine = Tangerine({ weight: "700", subsets: ["latin"], variable: "--font-tangerine" });

export const metadata: Metadata = {
  title: "AURACAM — Premium Camera Rentals",
  description: "Rent high-end cameras, lenses, and accessories.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${dancingScript.variable} ${greatVibes.variable} ${cormorant.variable} ${tangerine.variable}`}
    >
      <body className="antialiased font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}