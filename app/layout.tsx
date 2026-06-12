import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dpiroyal.in"),
  title: {
    default: "Dharmapuri Royal Furniture & Home Appliances | Best Furniture Store in Dharmapuri",
    template: "%s | Dharmapuri Royal Furniture",
  },
  description:
    "Dharmapuri's most trusted furniture & home appliances store. Premium bedroom sets, sofas, TVs, refrigerators & complete marriage seervarisai packages. Easy EMI. Home delivery.",
  keywords: [
    "furniture shop dharmapuri",
    "home appliances dharmapuri",
    "seervarisai package dharmapuri",
    "marriage seervarisai dharmapuri",
    "cot wardrobe dharmapuri",
    "washing machine dharmapuri",
    "smart tv dharmapuri",
    "refrigerator dharmapuri",
    "EMI furniture dharmapuri",
    "bedroom set dharmapuri",
  ],
  authors: [{ name: "Dharmapuri Royal Furniture & Home Appliances" }],
  creator: "Dharmapuri Royal",
  publisher: "Dharmapuri Royal Furniture & Home Appliances",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "ta_IN",
    alternateLocale: ["en_IN"],
    url: "https://www.dpiroyal.in",
    siteName: "Dharmapuri Royal Furniture & Home Appliances",
    title: "Best Furniture & Seervarisai Packages in Dharmapuri",
    description:
      "Premium furniture, home appliances & wedding seervarisai packages in Dharmapuri. Easy EMI, door delivery, installation support. Trusted by hundreds of families.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dharmapuri Royal Furniture & Home Appliances",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Furniture & Seervarisai Packages in Dharmapuri",
    description:
      "Premium furniture, home appliances & wedding seervarisai packages in Dharmapuri. Easy EMI, door delivery.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.dpiroyal.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ta">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
