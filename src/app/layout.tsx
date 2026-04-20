import "./globals.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": "https://www.nexus-clinic.com/#medicalclinic",
    "name": "Nexus Clinic - Weight Loss & Aesthetic Clinic Kuala Lumpur",
    "url": "https://www.nexus-clinic.com/",
    "telephone": "+60167745699",
    "image": "https://www.nexus-clinic.com/logo.png",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "LG 10, Lower Ground Floor, Wisma UOA 2",
      "addressLocality": "Kuala Lumpur",
      "postalCode": "50450",
      "addressRegion": "Federal Territory of Kuala Lumpur",
      "addressCountry": "MY"
    },
    "sameAs": [
      "https://www.facebook.com/",
      "https://www.instagram.com/"
    ],
    "openingHours": [
      "Mon-Fri 10:00-19:00",
      "Sat 10:00-17:00"
    ]
  };

  return (
    <html lang="en">
      <body>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PRRSXZ2');`,
          }}
        />
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
