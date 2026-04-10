import type { NextConfig } from "next";
import { redirectsList } from "./redirects";

const isDev = process.env.NODE_ENV !== "production";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';
      img-src 'self' https: data:;
      script-src 'self' 'unsafe-inline' ${
        isDev ? "'unsafe-eval'" : ""
      } https://maps.googleapis.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      connect-src 'self'
        https://blog.nexus-clinic.com
        https://api.leadconnectorhq.com
        https://maps.googleapis.com
        https://places.googleapis.com
        https://www.googleapis.com
        https://wa.me
        https://api.whatsapp.com;
      frame-src
        https://api.leadconnectorhq.com
        https://app.leadconnectorhq.com;
      font-src 'self' https://fonts.gstatic.com https: data:;
      frame-ancestors 'none';
      base-uri 'self';
      form-action 'self'
        https://api.whatsapp.com
        https://wa.me
        https://api.leadconnectorhq.com;
      object-src 'none';
    `.replace(/\n/g, ""),
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,

  // ✅ Important for your redirects
  trailingSlash: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.nexus-clinic.com",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

    async redirects() {
      if (!redirectsList || redirectsList.length === 0) return [];

      return [
        // ✅ Specific blog folder
        {
          source: "/en/blog/:slug*",
          destination: "/blogs/:slug*",
          permanent: true,
        },

        // ✅ Blog-like standalone slugs (ONLY these)
        {
          source: "/en/:slug((penis-discoloration-in-malaysia-all-you-need-to-know|purple-penis-definition-and-treatment-malaysia|where-to-buy-mounjaro-in-malaysia-safely-and-legally|duromine-for-weight-loss-in-malaysia-evidence-safety-real-patient-insights|everything-you-need-to-know-about-testosterone-replacement-therapy-in-malaysia|liver-disease-and-stem-cell-therapy-what-you-should-know).*)",
          destination: "/blogs/:slug",
          permanent: true,
        },

        // ✅ Your manual redirects
        ...redirectsList.map(([source, destination]) => ({
          source,
          destination,
          permanent: true,
        })),
      ];
    }

};

export default nextConfig;
