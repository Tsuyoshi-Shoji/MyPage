import type { MetadataRoute } from "next";
import { detailNavigation } from "@/data/portfolio";
import { siteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return ["/", ...detailNavigation.map((item) => item.href)].map((path) => ({
    url: new URL(path, siteUrl).href,
  }));
}