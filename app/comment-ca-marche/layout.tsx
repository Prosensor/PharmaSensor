import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Comment ça marche ? | PharmaSensor",
  description: "Découvrez comment PharmaSensor fonctionne en 3 étapes simples pour sécuriser votre pharmacie avec une surveillance de température automatisée.",
}

export default function CommentCaMarcheLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 