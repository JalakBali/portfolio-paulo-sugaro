import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/data/projects";

const BASE_URL = "https://paulosugaro.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries = getAllProjectSlugs().map((slug) => ({
    url: `${BASE_URL}/projects/${slug}`,
  }));

  return [{ url: BASE_URL }, ...projectEntries];
}
