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

  // The site moved from an architectural-details archive and period lighting/hardware
  // collections to a curated guide to heirloom pieces. Every old section answers with a
  // permanent (308) redirect to the closest new page, so search and AI engines replace the
  // old pages instead of keeping them, and stop describing the site by them. The list comes
  // from the URLs crawlers actually requested (PromptWatch crawler logs, Oct 2026). Order
  // matters: the first matching rule wins, so specific rules come before catch-alls.
  async redirects() {
    const cabinetCostGuide = "https://woodridgecabinets.com/guides/custom-cabinet-cost/";
    const toHome = [
      "/styles",
      "/styles/:path*",
      "/elements",
      "/elements/:path*",
      "/details",
      "/details/:path*",
      "/library",
      "/library/:path*",
      "/colorado",
      "/colorado/:path*",
      "/custom",
      "/request",
      "/search",
      // Sourced-object pages from the Oct 13, 2026 version (live for a few hours, then reverted).
      "/objects",
      "/objects/:path*",
      // Old articles only; future articles under /journal/ keep working.
      "/journal/alpine-chalet-interiors",
      "/journal/traditional-interior-door-styles",
      "/journal/wainscoting-vs-wall-paneling",
    ];
    return [
      // The Colorado cabinet cost guide now lives on the Woodridge Cabinets site (separate business).
      { source: "/colorado/custom-cabinet-cost", destination: cabinetCostGuide, permanent: true },
      { source: "/colorado/custom-cabinet-cost/", destination: cabinetCostGuide, permanent: true },
      { source: "/journal/custom-cabinet-cost-colorado", destination: cabinetCostGuide, permanent: true },
      { source: "/collections", destination: "/pieces", permanent: true },
      { source: "/collections/:path*", destination: "/pieces", permanent: true },
      { source: "/search-index.json", destination: "/llms.txt", permanent: true },
      // The Journal has no articles yet. Its "coming soon" page was noindexed but linked from
      // every footer, which Search Console reported as "Excluded by 'noindex' tag". Until the
      // first article is published, /journal sends visitors home. The redirect is temporary
      // (307) so browsers don't cache it: delete this rule and add app/journal/page.tsx (and a
      // footer link and sitemap entry) when the Journal launches.
      { source: "/journal", destination: "/", permanent: false },
      ...toHome.map((source) => ({ source, destination: "/", permanent: true })),
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
