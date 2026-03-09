import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tarifs PharmaSensor – Enregistreur de température pour pharmacies",
  description:
    "Consultez les tarifs PharmaSensor pour l’enregistrement et la surveillance de température en pharmacie : formules de location clés en main et prix à l’achat de nos capteurs pour armoires réfrigérées.",
}

export default function TarificationLayout({ children }: { children: React.ReactNode }) {
  return children;
} 