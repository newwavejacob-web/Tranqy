import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://tranqy.com/sitemap.xml",
    host: "https://tranqy.com",
  };
}
