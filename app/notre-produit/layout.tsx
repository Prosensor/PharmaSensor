import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notre produit – PharmaSensor, enregistreur de température pour pharmacies",
  description:
    "Découvrez en détail PharmaSensor, la solution Prosensor d’enregistrement et de surveillance de température pour pharmacies et armoires pharmaceutiques : capteurs connectés, alertes en temps réel et rapports conformes aux exigences réglementaires.",
}

export default function NotreProduitLayout({ children }: { children: React.ReactNode }) {
  return children;
} 