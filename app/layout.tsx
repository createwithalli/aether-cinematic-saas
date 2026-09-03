import type { Metadata } from "next";
import { Instrument_Serif, Outfit } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import CanvasField from "@/components/CanvasField";

const display = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const sans = Outfit({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "AETHER — Cinematic SaaS OS",
  description: "Ultra-realistic SaaS template with 3D hover, Spline, Framer Motion, CRM, calendar, encrypted messenger, and Web3.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} font-sans letterbox antialiased`}>
        <div className="film-grain" />
        <CanvasField />
        <div className="relative z-10">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
