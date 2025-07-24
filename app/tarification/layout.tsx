import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tarification | PharmaSensor",
  description: "Découvrez nos formules tarifaires flexibles pour la surveillance de température dans le secteur pharmaceutique.",
}

export default function TarificationLayout({ children }: { children: React.ReactNode }) {
  return children;
} 