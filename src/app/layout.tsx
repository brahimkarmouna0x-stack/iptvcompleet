import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layouts/NavBar";
import Footer from "@/components/layouts/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import HashScrollManager from "@/components/shared/HashScrollManager";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";
import { getPhoneNumber } from "@/lib/settings";
import Analytics from "@/components/analytics/Analytics";
import WebVitals from "@/components/analytics/WebVitals";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iptvcompleet.store"),
  applicationName: "IPTV Compleet",
  title: {
    default:
      "IPTV Compleet Nederland: 31.000+ Zenders in 4K | Direct Actief",
    template: "%s | IPTV Compleet",
  },
  description:
    "IPTV Compleet: het complete IPTV-abonnement in Nederland met 31.000+ TV-zenders, films en series in 4K, zonder onderbrekingen. Direct actief, alles inbegrepen.",
  keywords: [
    "iptv compleet",
    "iptv abonnement",
    "iptv abonnement nederland",
    "compleet iptv pakket",
    "iptv nederland",
    "beste iptv",
    "premium iptv nederland",
    "iptv 4k",
    "goedkoop iptv",
    "iptv kopen",
    "iptv 4k kopen",
    "iptv smarters pro",
    "iptv nederlands",
    "iptv zenders",
  ],
  authors: [{ name: "IPTV Compleet" }],
  // hreflang is emitted per-page via metadata.alternates; here we declare the
  // site's primary content language for crawlers.
  alternates: {
    languages: {
      "nl-NL": "https://iptvcompleet.store",
      "x-default": "https://iptvcompleet.store",
    },
  },
  manifest: "/site.webmanifest",
  // `?v=8` busts aggressive browser favicon caching after the 2026-07-29 brand-mark refresh.
  icons: {
    icon: [
      { url: "/favicon.ico?v=8", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-16x16.png?v=8", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png?v=8", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48x48.png?v=8", type: "image/png", sizes: "48x48" },
      { url: "/favicon-96x96.png?v=8", type: "image/png", sizes: "96x96" },
      { url: "/favicon-192x192.png?v=8", type: "image/png", sizes: "192x192" },
      { url: "/favicon-256x256.png?v=8", type: "image/png", sizes: "256x256" },
    ],
    shortcut: ["/favicon.ico?v=8"],
    apple: [
      { url: "/apple-touch-icon.png?v=8", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon-152x152.png?v=8", sizes: "152x152", type: "image/png" },
      { url: "/apple-touch-icon-167x167.png?v=8", sizes: "167x167", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png?v=8",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://iptvcompleet.store",
    siteName: "IPTV Compleet",
    title:
      "IPTV Compleet Nederland: 31.000+ Zenders in 4K",
    description:
      "Stabiele 4K streaming, meer dan 31.000 zenders en geen onderbrekingen.",
    images: [
      {
        url: "https://iptvcompleet.store/brand-logo",
        width: 1200,
        height: 630,
        alt: "IPTV Compleet – het complete IPTV-abonnement in Nederland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "IPTV Compleet Nederland: 31.000+ Zenders in 4K",
    description:
      "Stabiele 4K streaming, meer dan 31.000 zenders en geen onderbrekingen.",
    images: ["https://iptvcompleet.store/brand-logo"],
  },
  robots: {
    index: true,
    follow: true,
  },
  // Google Search Console verification for the iptvcompleet.store property.
  verification: {
    google: "CcYHdFOR1w7M-9CBkURHO78kaovG0KJu23S2zQl7_Tg",
  },
};

// Theme color + color scheme belong in the viewport export in Next.js 16.
export const viewport: Viewport = {
  themeColor: "#060B16",
  colorScheme: "dark",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const phoneNumber = await getPhoneNumber();
  return (
    <html
      lang="nl"
      className={`h-full antialiased ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://image.tmdb.org" />
        <link rel="dns-prefetch" href="https://image.tmdb.org" />
        <link rel="preconnect" href="https://api.themoviedb.org" />
        <link rel="dns-prefetch" href="https://api.themoviedb.org" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema(phoneNumber)),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema()),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* Analytics (env-gated, afterInteractive) + Core Web Vitals reporting */}
        <Analytics />
        <WebVitals />

        {/* Skip-to-content link for keyboard users — first focusable element */}
        <a
          href="#main-content"
          id="skip-to-content"
          className="fixed -top-40 left-4 z-[9999] rounded-xl bg-rouge-500 px-6 py-3 font-black text-blanc-50 shadow-lg transition-all focus:top-4 focus:outline-2 focus:outline-france-400"
        >
          Ga naar inhoud
        </a>

        <NavBar />
        <HashScrollManager />

        <div id="main-content" className="flex-1 flex flex-col">
          {children}
        </div>

        <WhatsAppButton />

        <Footer />
      </body>
    </html>
  );
}
