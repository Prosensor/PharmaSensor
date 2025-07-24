import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | PharmaSensor",
  description:
    "Contactez l'équipe PharmaSensor pour toute question concernant nos solutions de surveillance de température pour le secteur pharmaceutique.",
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}