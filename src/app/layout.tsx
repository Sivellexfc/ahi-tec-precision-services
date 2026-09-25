import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://ahi-tec.de";

export const viewport: Viewport = {
  themeColor: "#10162f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AHI-TEC – Industriedienstleistungen aus Meinerzhagen",
    template: "%s | AHI-TEC",
  },
  description:
    "AHI-TEC in Meinerzhagen: Montage-, Prüf-, Sortier-, Entgrat- und konventionelle Bearbeitung von Metall-, Kunststoff- und Elektroteilen sowie präzise CNC-Bearbeitung.",
  keywords: [
    "AHI-TEC",
    "Industriedienstleistungen Meinerzhagen",
    "Montage Meinerzhagen",
    "Prüfung Baugruppen",
    "Sortierung Ausschuss",
    "Entgraten Metall Kunststoff",
    "CNC-Bearbeitung Meinerzhagen",
    "Märkischer Kreis",
    "Südwestfalen Fertigung",
    "Zulieferer Industrie",
    "Qualitätskontrolle 100%",
  ],
  authors: [{ name: "AHI-TEC" }],
  creator: "AHI-TEC",
  publisher: "AHI-TEC",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "AHI-TEC",
    title: "AHI-TEC – Industriedienstleistungen aus Meinerzhagen",
    description:
      "Montage, Prüfung, Sortierung, Entgraten und CNC-Bearbeitung von Metall-, Kunststoff- und Elektroteilen in Meinerzhagen.",
    images: [
      {
        url: "/images/hero-parts.jpg",
        width: 1200,
        height: 630,
        alt: "AHI-TEC Industriedienstleistungen – Präzise bearbeitete Metall- und Kunststoffteile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AHI-TEC – Industriedienstleistungen aus Meinerzhagen",
    description:
      "Montage, Prüfung, Sortierung, Entgraten und CNC-Bearbeitung von Metall-, Kunststoff- und Elektroteilen.",
    images: ["/images/hero-parts.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AHI-TEC",
  description:
    "Industriedienstleistungen aus Meinerzhagen – Montage, Prüfung, Sortierung, Entgraten und CNC-Bearbeitung von Metall-, Kunststoff- und Elektroteilen.",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  image: `${siteUrl}/images/hero-parts.jpg`,
  email: "info@ahi-tec.de",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Meinerzhagen",
    postalCode: "58540",
    addressRegion: "Nordrhein-Westfalen",
    addressCountry: "DE",
  },
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Märkischer Kreis",
    },
    {
      "@type": "AdministrativeArea",
      name: "Südwestfalen",
    },
    {
      "@type": "AdministrativeArea",
      name: "Ruhrgebiet",
    },
    {
      "@type": "Country",
      name: "Deutschland",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Industriedienstleistungen",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Montage",
          description: "Fachgerechte Montage von Baugruppen und Einzelteilen.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Prüfung",
          description: "Sicht- und Maßprüfung nach Ihren Vorgaben inklusive Qualitätskontrolle.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sortierung",
          description: "Zuverlässige Ausschuss- und Qualitätssortierung Ihrer Teile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Entgraten",
          description: "Sauberes Entgraten von Metall- und Kunststoffteilen.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Konventionelle Bearbeitung",
          description: "Konventionelle Bearbeitung von Metall-, Kunststoff- und Elektroteilen.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CNC-Bearbeitung",
          description: "Präzise CNC-Bearbeitung für Dreh- und Frästeile.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased text-foreground selection:bg-signal selection:text-white">
        {children}
      </body>
    </html>
  );
}
