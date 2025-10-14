import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/private/", "/api/"],
      },
    ],
    sitemap: "https://www.pharmasensor.fr/sitemap.xml",
    host: "https://www.pharmasensor.fr",
  }
}

