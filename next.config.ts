import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development warnings
  reactStrictMode: true,

  // Generate trailing slashes for cleaner URLs (optional)
  // trailingSlash: true,

  // Image optimization — add your domain(s) when ready
  images: {
    formats: ["image/avif", "image/webp"],
    // remotePatterns: [
    //   { protocol: "https", hostname: "your-cdn.com" },
    // ],
  },

  // The site moved from an architectural-details archive to a curated guide to
  // heirloom pieces. Old sections send visitors to the closest new page.
  async redirects() {
    const toHome = ["/styles/:path*", "/elements/:path*", "/details/:path*", "/colorado/:path*", "/custom", "/request", "/search"];
    return [
      // The Colorado cabinet cost guide now lives on the Woodridge Cabinets site (separate business).
      { source: "/colorado/custom-cabinet-cost", destination: "https://woodridgecabinets.com/guides/custom-cabinet-cost/", permanent: true },
      { source: "/colorado/custom-cabinet-cost/", destination: "https://woodridgecabinets.com/guides/custom-cabinet-cost/", permanent: true },
      ...toHome.map((source) => ({ source, destination: "/", permanent: false })),
      { source: "/collections/:path*", destination: "/pieces", permanent: false },
      { source: "/styles", destination: "/", permanent: false },
      { source: "/elements", destination: "/", permanent: false },
      { source: "/colorado", destination: "/", permanent: false },
      { source: "/search-index.json", destination: "/llms.txt", permanent: false },
    ];
  },

  // Security headers for better SEO and security scores
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
