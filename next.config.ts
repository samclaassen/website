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

  async redirects() {
    return [
      { source: "/collections/hearthstone", destination: "/collections/arts-and-crafts", permanent: true },
      { source: "/collections/ashworth", destination: "/collections/victorian", permanent: true },
      { source: "/collections/meridian", destination: "/collections/art-deco", permanent: true },
      { source: "/collections/solstice", destination: "/collections/art-nouveau", permanent: true },
      { source: "/collections/heritage", destination: "/collections", permanent: true },
      { source: "/collections/ironforge", destination: "/collections/vernacular", permanent: true },
      { source: "/collections/provence", destination: "/collections", permanent: true },
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
