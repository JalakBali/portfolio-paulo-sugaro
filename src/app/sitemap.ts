import type { MetadataRoute } from "next";

// Branch portfolio-freelance: sengaja dikosongkan — situs ini noindex
// (lihat robots.ts & metadata.robots di layout.tsx), jadi tidak perlu
// menyarankan URL apapun untuk di-crawl/index.
export default function sitemap(): MetadataRoute.Sitemap {
  return [];
}
