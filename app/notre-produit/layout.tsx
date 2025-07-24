import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notre produit | PharmaSensor",
  description: "Découvrez PharmaSensor Pro, la solution complète de surveillance de température pour le secteur pharmaceutique.",
}

export default function NotreProduitLayout({ children }: { children: React.ReactNode }) {
  return children;
} 