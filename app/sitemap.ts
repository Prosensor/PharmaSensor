import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.pharmasensor.fr"

  const now = new Date()

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/tarification`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/notre-produit`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/avis`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/comment-ca-marche`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/demande-devis`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/politique-de-confidentialite`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/conditions-utilisation`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ]
}

