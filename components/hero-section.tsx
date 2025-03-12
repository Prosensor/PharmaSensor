import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="w-full py-28 md:py-24 lg:py-32 flex justify-center">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 mb-2">
              Surveillance Précise de la Température pour Officines
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl flex items-center">
              <span className="inline-flex items-center justify-center mr-2 bg-green-600 text-white rounded-full p-1 h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-12 lg:w-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"
                >
                  <path d="M9 3v6H3v6h6v6h6v-6h6V9h-6V3H9z" />
                </svg>
              </span>
              PharmaSensor
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed">
              Surveillance avancée de la température pour les officines de pharmacie. Protégez votre inventaire grâce à
              des alertes en temps réel et des rapports de conformité adaptés aux exigences des pharmacies.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#request-demo"
                className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Demander une Démo
              </Link>
              <Link
                href="#learn-more"
                className="inline-flex h-10 items-center justify-center rounded-md border border-green-200 bg-white px-8 text-sm font-medium text-green-700 shadow-sm transition-colors hover:bg-green-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                En Savoir Plus
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-green-100">
                  <span className="text-xs font-medium text-green-800">FDA</span>
                </div>
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-green-100">
                  <span className="text-xs font-medium text-green-800">GMP</span>
                </div>
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-green-100">
                  <span className="text-xs font-medium text-green-800">USP</span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">Conforme à toutes les normes exigées pour les officines</div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
              <Image
                src="/sonde123.webp"
                alt="Dispositif de surveillance de température PharmaSensor pour officines de pharmacie"
                fill
                className="object-contain"
                priority
              />
              <div className="absolute -right-4 top-4 rounded-lg bg-green-600 px-4 py-2 text-white shadow-lg">
                <div className="text-sm font-medium">Température Actuelle</div>
                <div className="text-2xl font-bold">2.8°C</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}