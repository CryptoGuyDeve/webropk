import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
import IntercomWidget from "./IntercomWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "WebRoPK | Digital Growth & Development Agency",
    template: "%s | WebRoPK",
  },
  description: "WebRoPK is your partner in digital dominance. We specialize in high-performance Shopify stores, data-driven marketing campaigns, and premium branding solutions.",
  keywords: ["Shopify Development", "Digital Marketing Agency", "SEO Experts", "Social Media Management", "Web Design", "E-commerce Growth", "Pakistan", "USA"],
  authors: [{ name: "WebRoPK Team" }],
  openGraph: {
    title: "WebRoPK | Digital Growth Partner",
    description: "Scale your business with expert development and marketing strategies.",
    type: "website",
    locale: "en_US",
    siteName: "WebRoPK",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebRoPK | Digital Growth Partner",
    description: "Scale your business with expert development and marketing strategies.",
  },
  icons: {
    icon: "/favicon.ico", // Ensure you have a favicon
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50`}
      >
        <SessionProvider session={session}>
          {children}
          <IntercomWidget />
          <Toaster richColors position="top-right" />
        </SessionProvider>
      </body>
    </html>
  );
}
