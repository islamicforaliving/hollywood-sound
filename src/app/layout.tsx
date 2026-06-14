import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hollywood Sound | Car Audio, Tinting & Customization in Ann Arbor, MI",
  description:
    "Ann Arbor's trusted car audio shop since 2005. Premium speakers, subwoofers, window tinting, LED lighting, remote starters & custom installs. Call (734) 975-1111 for a free quote!",
  keywords: [
    "car audio Ann Arbor",
    "car stereo installation",
    "window tinting Ann Arbor",
    "LED lighting car",
    "remote starter installation",
    "subwoofer install",
    "car customization Michigan",
    "Hollywood Sound",
  ],
  authors: [{ name: "Hollywood Sound" }],
  creator: "Hollywood Sound",
  metadataBase: new URL("https://hollywoodsound.com"),
  openGraph: {
    title: "Hollywood Sound | Car Audio & Customization in Ann Arbor, MI",
    description:
      "Premium car audio, window tinting, LED lighting, remote starters & custom installs. 20+ years experience. Free consultations!",
    url: "https://hollywoodsound.com",
    siteName: "Hollywood Sound",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Hollywood Sound - Ann Arbor's Trusted Car Audio Shop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hollywood Sound | Car Audio & Customization in Ann Arbor, MI",
    description:
      "Premium car audio, window tinting, LED lighting, remote starters & custom installs. 20+ years experience. Free consultations!",
    images: ["/logo.png"],
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
  alternates: {
    canonical: "https://hollywoodsound.com",
  },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Hollywood Sound",
  image: "https://hollywoodsound.com/logo.png",
  "@id": "https://hollywoodsound.com",
  url: "https://hollywoodsound.com",
  telephone: "+1-734-975-1111",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3897 Platt Rd",
    addressLocality: "Ann Arbor",
    addressRegion: "MI",
    postalCode: "48108",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.2208,
    longitude: -83.771,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Monday",
      opens: "10:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.2",
    reviewCount: "122",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
