import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Comment fonctionne PharmaSensor ? – Surveillance de température en pharmacie",
  description:
    "Comprenez étape par étape comment PharmaSensor enregistre et surveille les températures de vos armoires pharmaceutiques, avec alertes automatiques et rapports de conformité prêts pour les inspections.",
}

export default function CommentCaMarcheLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 