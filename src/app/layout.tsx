import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
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

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Altagracia Technologies | Everything ICT — One Place You Can Trust",
  description:
    "Computers & office equipment, phones & accessories, repairs, digital marketing and ICT training in Surulere, Lagos. Registered business, genuine products, same-day response. Call, WhatsApp or visit us today.",
  keywords: [
    "ICT company Lagos",
    "computer sales Lagos",
    "phone accessories Surulere",
    "laptop repair Lagos",
    "digital marketing Nigeria",
    "ICT training Lagos",
    "Altagracia Technologies",
  ],
  authors: [{ name: "Altagracia Technologies" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Altagracia Technologies | Everything ICT — One Place You Can Trust",
    description:
      "Computers, phones, repairs, digital marketing and training — all your ICT needs handled in one trusted place in Lagos, Nigeria.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
