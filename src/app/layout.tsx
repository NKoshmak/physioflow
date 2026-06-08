import type { Metadata } from "next";
import { Raleway, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/motion/ScrollSmooth";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "PhysioFlow",
  description:
    "Fascia stretch therapy and integrative movement website built with Next.js and Sanity CMS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${sourceSans3.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <SmoothScroll />
      </body>
    </html>
  );
}
