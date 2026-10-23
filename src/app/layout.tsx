import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Altagracia Technologies | Everything ICT — One Place You Can Trust",
  description:
    "Computers, phones, repairs, web design and development, software development, UI/UX design, digital marketing and ICT training. Practical technology solutions for businesses and individuals.",
  keywords: [
    "ICT solutions",
    "computer sales",
    "phone accessories",
    "laptop repair",
    "web design and development",
    "software development",
    "UI/UX design",
    "digital marketing",
    "ICT training",
    "Altagracia Technologies",
  ],
  authors: [{ name: "Altagracia Technologies" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Altagracia Technologies | Everything ICT — One Place You Can Trust",
    description:
      "Computers, phones, repairs, web design and development, software development, UI/UX design, digital marketing and ICT training — practical technology solutions for businesses and individuals.",
    siteName: "Altagracia Technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
