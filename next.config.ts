import type { NextConfig } from "next";

// The four design comps live as static pages in public/designs (generated from designs-src).
// These rewrites give them clean URLs to share: /regal, /joyful, /horizon, /brand.
const nextConfig: NextConfig = {
  async rewrites() {
    return ["regal", "joyful", "horizon", "brand"].map((slug) => ({
      source: `/${slug}`,
      destination: `/designs/${slug}.html`,
    }));
  },
  async headers() {
    return [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },
};

export default nextConfig;
