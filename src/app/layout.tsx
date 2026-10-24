import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Altagracia Technologies — Corporate ICT Solutions & Technology Supply",
  description:
    "Altagracia Technologies helps businesses and organizations meet their technology needs through ICT solutions, equipment supply, digital services and professional training.",
  keywords: [
    "Altagracia Technologies",
    "ICT solutions",
    "technology supply",
    "equipment procurement",
    "software development",
    "digital marketing",
    "ICT training",
    "technical support",
  ],
  openGraph: {
    title: "Altagracia Technologies — Corporate ICT Solutions & Technology Supply",
    description:
      "ICT solutions, equipment supply, digital services and professional training for businesses and organizations.",
    type: "website",
    siteName: "Altagracia Technologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased bg-background text-foreground font-sans">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
