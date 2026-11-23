import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-display" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});
const jost = Jost({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "On the Verge Enrichment | Choose your style",
  description: "Three design directions and a brand guide for the On the Verge Enrichment website.",
  robots: { index: false, follow: false },
  icons: { icon: "/assets/otv-mark.png", apple: "/assets/otv-mark.png" },
  openGraph: {
    title: "On the Verge Enrichment | Choose your style",
    description: "Three design directions and a brand guide for your new website.",
    images: ["/assets/otv-logo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0B1F29",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
