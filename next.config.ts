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

  // Permanent redirects for URLs replaced by the design-library structure.
  async redirects() {
    return [
      { source: "/details/:slug", destination: "/library/:slug", permanent: true },
      { source: "/search", destination: "/library", permanent: true },
      { source: "/styles/alpine-tyrolean", destination: "/styles/alpine-chalet", permanent: true },
      { source: "/styles/alpine-tyrolean/:element", destination: "/styles/alpine-chalet/:element", permanent: true },
      { source: "/colorado/custom-cabinet-cost", destination: "/journal/custom-cabinet-cost-colorado", permanent: true },
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
