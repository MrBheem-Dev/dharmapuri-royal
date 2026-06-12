import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Packages from "./components/Packages";
import Products from "./components/Products";
import Promise from "./components/Promise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.dpiroyal.in/#business",
      name: "Dharmapuri Royal Furniture & Home Appliances",
      description:
        "Dharmapuri's most trusted furniture & home appliances store. Premium bedroom sets, sofas, TVs, refrigerators & complete marriage seervarisai packages with easy EMI and home delivery.",
      url: "https://www.dpiroyal.in",
      telephone: "+91XXXXXXXXXX",
      email: "info@dpiroyal.in",
      openingHours: "Mo-Su 00:00-23:59",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Card, EMI",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dharmapuri",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "12.1211",
        longitude: "78.1582",
      },
      image: "https://www.dpiroyal.in/og-image.jpg",
      sameAs: ["https://wa.me/91XXXXXXXXXX"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Furniture & Home Appliances",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Marriage Seervarisai Packages",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Silver Seervarisai Package" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gold Seervarisai Package" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Royal Seervarisai Package" } },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Furniture",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Cot & Mattress" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Wardrobe" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Sofa Set" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Dining Table" } },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Home Appliances",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Smart TV" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Refrigerator" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Washing Machine" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Air Conditioner" } },
            ],
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.dpiroyal.in/#website",
      url: "https://www.dpiroyal.in",
      name: "Dharmapuri Royal Furniture & Home Appliances",
      publisher: { "@id": "https://www.dpiroyal.in/#business" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Packages />
        <Products />
        <Promise />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
