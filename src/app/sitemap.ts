import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getProjects, getServices } from "@/lib/cms";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, projects] = await Promise.all([getServices(), getProjects()]);
  const base = site.url.replace(/\/$/, "");
  const staticRoutes = ["", "/about", "/services", "/work", "/contact"].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  return [
    ...staticRoutes,
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...projects.map((p) => ({
      url: `${base}/work/${p.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
