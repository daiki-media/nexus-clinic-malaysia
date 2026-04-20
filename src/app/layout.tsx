import "./globals.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "@id": "https://www.nexus-clinic.com/#medicalclinic",
              "name": "Nexus Clinic - Weight Loss & Aesthetic Clinic Kuala Lumpur",
              "url": "https://www.nexus-clinic.com/",
              "telephone": "+60-16-774-5699",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "LG 10, Lower Ground Floor, Wisma UOA 2",
                "addressLocality": "Kuala Lumpur",
                "postalCode": "50450",
                "addressRegion": "Federal Territory of Kuala Lumpur",
                "addressCountry": "MY"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": 4.7,
                "reviewCount": 483,
                "bestRating": 5,
                "worstRating": 1
              }
            })
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