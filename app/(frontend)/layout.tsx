import type { Metadata } from "next";
import { Instrument_Serif, Geist } from "next/font/google";
import "../globals.css";
import { GradientBackdrop } from "@/components/ui/GradientBackdrop";

const instrument = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AVM-UI — Asociația pentru Viitorul Mobilității Urbane și Interurbane",
  description:
    "Promovăm mobilitate curată, accesibilă și sustenabilă în orașele României. Proiecte, comunitate, advocacy pentru viitorul deplasării.",
  keywords: [
    "mobilitate urbană",
    "transport sustenabil",
    "piste ciclabile",
    "transport electric",
    "România",
    "oraș 15 minute",
  ],
  openGraph: {
    title: "AVM-UI — Viitorul mobilității începe în orașele noastre",
    description:
      "Asociație românească dedicată mobilității curate: piste ciclabile, transport electric, orașe de 15 minute, educație rutieră.",
    locale: "ro_RO",
    type: "website",
  },
};

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${instrument.variable} ${geist.variable}`}>
      <body className="relative min-h-screen antialiased">
        <GradientBackdrop />
        {children}
      </body>
    </html>
  );
}
