import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page non trouvée | PharmaSensor",
  description: "La page que vous recherchez n'existe pas ou a été déplacée.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">404</h1>
        <h2 className="mt-4 text-2xl font-semibold">Page non trouvée</h2>
        <p className="mx-auto mt-4 max-w-[600px] text-lg text-muted-foreground">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  )
}

