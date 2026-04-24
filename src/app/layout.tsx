import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexus-clinic.com"),
  title: {
    default: "Nexus Clinic - Weight Loss & Aesthetic Clinic Kuala Lumpur",
    template: "%s | Nexus Clinic",
  },
  description:
    "Nexus Clinic Kuala Lumpur offers advanced weight loss and aesthetic treatments including Ozempic, Mounjaro, Profhilo and more.",
  verification: {
    google: "m2Jx5XHGk5VfQM86pq0VleG_ctP1wwrtGNvsy2jT86o",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nexus Clinic Kuala Lumpur",
    description:
      "Professional weight loss and aesthetic clinic in Kuala Lumpur.",
    url: "https://www.nexus-clinic.com/",
    siteName: "Nexus Clinic",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Nexus Clinic",
      },
    ],
    locale: "en_MY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": "https://www.nexus-clinic.com/#medicalclinic",
    name: "Nexus Clinic - Weight Loss & Aesthetic Clinic Kuala Lumpur",
    url: "https://www.nexus-clinic.com/",
    telephone: "+60167745699",
    image: "https://www.nexus-clinic.com/logo.png",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "LG 10, Lower Ground Floor, Wisma UOA 2",
      addressLocality: "Kuala Lumpur",
      postalCode: "50450",
      addressRegion: "Federal Territory of Kuala Lumpur",
      addressCountry: "MY",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.7,
      reviewCount: 483,
    },
  };

  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <Script
          id="schema-medicalclinic"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>

      <body>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PRRSXZ2');`,
          }}
        />

        {/* GTM fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PRRSXZ2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
