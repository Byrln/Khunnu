import { TempoInit } from "@/components/tempo-init";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khunnu Hotel - Luxury Accommodation in Mongolia | Premium Hotel Experience",
  description: "Experience luxury at Khunnu Hotel, Mongolia's premier destination for exceptional hospitality. Featuring elegant rooms, world-class amenities, fine dining, and unparalleled service in the heart of Mongolia.",
  keywords: "Khunnu Hotel, Mongolia hotel, luxury accommodation, premium hotel, Mongolia travel, business hotel, vacation resort, fine dining, conference facilities, spa services",
  authors: [{ name: "Khunnu Hotel" }],
  creator: "Khunnu Hotel",
  publisher: "Khunnu Hotel",
  robots: "index, follow",
  icons: {
    icon: "/Logo.jpg",
    shortcut: "/Logo.jpg",
    apple: "/Logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://khunnuhotel.com",
    siteName: "Khunnu Hotel",
    title: "Khunnu Hotel - Luxury Accommodation in Mongolia",
    description: "Experience luxury at Khunnu Hotel, Mongolia's premier destination for exceptional hospitality. Book your stay today for an unforgettable experience.",
    images: [
      {
        url: "/Logo.jpg",
        width: 1200,
        height: 630,
        alt: "Khunnu Hotel - Luxury Accommodation in Mongolia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@KhunnuHotel",
    creator: "@KhunnuHotel",
    title: "Khunnu Hotel - Luxury Accommodation in Mongolia",
    description: "Experience luxury at Khunnu Hotel, Mongolia's premier destination for exceptional hospitality.",
    images: ["/Logo.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#dc2626",
  category: "hospitality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              "name": "Khunnu Hotel",
              "description": "Experience luxury at Khunnu Hotel, Mongolia's premier destination for exceptional hospitality. Featuring elegant rooms, world-class amenities, fine dining, and unparalleled service.",
              "url": "https://khunnuhotel.com",
              "logo": "https://khunnuhotel.com/Logo.jpg",
              "image": [
                "https://khunnuhotel.com/Logo.jpg",
                "https://khunnuhotel.com/Lobby/0-02-05-2142aa01fd7764a27fb7f38bf2cc0729ffa5d9884565e3e5925c3cc9ff4abbc7_e2061f433f918415.jpg"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Mongolia",
                "addressLocality": "Ulaanbaatar",
                "streetAddress": "Central District"
              },
              "telephone": "+976-11-123456",
              "email": "info@khunnuhotel.com",
              "starRating": {
                "@type": "Rating",
                "ratingValue": "5"
              },
              "priceRange": "$$$",
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Free WiFi",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Restaurant",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Fitness Center",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Business Center",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Room Service",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Concierge",
                  "value": true
                }
              ],
              "hasMap": "https://maps.google.com",
              "checkinTime": "15:00",
              "checkoutTime": "11:00",
              "numberOfRooms": "150",
              "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
              "currenciesAccepted": ["MNT", "USD", "EUR"],
              "availableLanguage": ["English", "Mongolian", "Chinese"],
              "smokingPolicy": "https://khunnuhotel.com/smoking-policy"
            })
          }}
        />
      </head>
      {/* <Script src="https://api.tempo.build/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" /> [deprecated] */}
      <body className={inter.className}>
        {children}
        <TempoInit />
      </body>
    </html>
  );
}
