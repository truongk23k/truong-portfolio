import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://truong-portfolio.vercel.app"),
  title: "Truong LV — Playable Ads Developer",
  description:
    "Playable Ads Developer & Unity Developer based in Ha Noi, Vietnam. Building high-converting interactive ads for mobile games across AppLovin, Meta, TikTok, and more.",
  keywords: ["Playable Ads", "Unity Developer", "Mobile Games", "Luna Playable", "AppLovin", "Ad Tech"],
  authors: [{ name: "Truong LV" }],
  openGraph: {
    title: "Truong LV — Playable Ads Developer",
    description:
      "Building high-converting playable ads with Unity and HTML5 for mobile games. Based in Ha Noi, Vietnam.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Truong LV — Playable Ads Developer",
    description:
      "Building high-converting playable ads with Unity and HTML5 for mobile games.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Inline script runs synchronously — prevents dark/light flash on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme')||'dark';document.documentElement.classList.toggle('dark',t==='dark');}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#f0f4ff] dark:bg-[#080c1a] text-slate-900 dark:text-white transition-colors duration-300 antialiased">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
