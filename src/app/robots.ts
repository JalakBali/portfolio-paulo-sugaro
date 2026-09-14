import type { MetadataRoute } from "next";

// Branch portfolio-freelance: link ini dikirim manual lewat proposal/chat
// (mis. Projects.co.id), bukan untuk di-index mesin pencari. Lihat juga
// metadata.robots di src/app/layout.tsx (noindex per-halaman).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
