import type { Metadata } from "next";
import { Antonio } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SkipToContent } from "@/components/layout/skip-to-content";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { siteConfig } from "@/config/site";
import { TranslationProvider } from "@/i18n/context";

import "./globals.css";

const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-antonio",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  manifest: "/images/site.webmanifest",
  icons: {
    icon: [
      { url: "/images/favicon.ico", sizes: "any" },
      { url: "/images/favicon.svg", type: "image/svg+xml" },
      { url: "/images/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/images/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/images/favicon.ico"],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={antonio.variable} lang="en">
      <body className="flex min-h-screen flex-col antialiased">
        <SmoothScrollProvider />
        <TranslationProvider>
          <SkipToContent />
          <Header />
          <main className="flex-1" id="main-content">
            {children}
          </main>
          <Footer />
        </TranslationProvider>
      </body>
    </html>
  );
}
