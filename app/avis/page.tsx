import Image from "next/image"
import { Quote } from "lucide-react"

export const metadata = {
  title: "Avis clients | PharmaSensor",
  description: "Découvrez les témoignages et avis de nos clients sur la solution PharmaSensor.",
}

const caseStudy = {
  title: "Pharmacie du Centre, Lille",
  description:
    "Grâce à PharmaSensor, nous avons pu anticiper une panne de réfrigérateur et éviter la perte de plus de 2 000€ de vaccins. L'installation a été rapide et l'équipe très à l'écoute.",
  stats: [
    { label: "Conformité", value: "100%" },
    { label: "Pertes évitées", value: "2 000€" },
    { label: "Temps d'audit", value: "-3h" },
  ],
  image: "/pharmacie.jpg",
  person: {
    name: "Julie Petit",
    role: "Pharmacienne Titulaire",
    avatar: "/docteur1.jpg",
  },
}

const testimonials = [
  {
    name: "Sophie Laurent",
    role: "Pharmacie du Marché, Paris",
    image: "/docteur1.jpg",
    text: "PharmaSensor nous a permis de passer nos audits avec une tranquillité d'esprit totale. Les rapports automatisés ont impressionné les inspecteurs et nous ont fait gagner un temps précieux.",
  },
  {
    name: "Jean Moreau",
    role: "Pharmacie Saint-Michel, Bordeaux",
    image: "/docteur1.jpg",
    text: "Les alertes en temps réel nous ont sauvés plusieurs fois lors de pannes de courant nocturnes. Nous avons pu intervenir rapidement et sauver des milliers d'euros de vaccins et médicaments sensibles.",
  },
  {
    name: "Claire Dubois",
    role: "Pharmacie des Alpes, Grenoble",
    image: "/docteur1.jpg",
    text: "L'installation a été d'une simplicité remarquable et le support client est exceptionnel. Toute notre équipe a pu prendre en main le système en moins d'une heure.",
  },
]

export default function AvisPage() {
  return (
    <section className="w-full bg-white py-16 md:py-24 flex justify-center">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 mb-2">Avis clients</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ce Que Nos Clients Disent</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground">
            Découvrez comment PharmaSensor a transformé la surveillance de température dans les pharmacies à travers la France
          </p>
        </div>

        {/* Étude de cas */}
        <div className="mb-16 rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-8 shadow-lg">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-green-600 px-3 py-1 text-sm text-white mb-2 w-fit">
                Étude de Cas
              </div>
              <h3 className="text-2xl font-bold">{caseStudy.title}</h3>
              <p className="text-muted-foreground">{caseStudy.description}</p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                {caseStudy.stats.map((stat, i) => (
                  <div key={i} className="rounded-lg bg-white p-4 text-center shadow">
                    <div className="text-2xl font-bold text-green-600">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center pt-4">
                <Image
                  src={caseStudy.person.avatar}
                  alt={caseStudy.person.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-3"
                />
                <div>
                  <div className="font-medium">{caseStudy.person.name}</div>
                  <div className="text-sm text-muted-foreground">{caseStudy.person.role}</div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative h-[350px] w-full overflow-hidden rounded-lg shadow-md">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-green-100">
                        <span className="text-xs font-medium text-green-800">FDA</span>
                      </div>
                      <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-green-100">
                        <span className="text-xs font-medium text-green-800">GMP</span>
                      </div>
                    </div>
                    <span className="text-sm font-medium">Conforme à toutes les normes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Témoignages */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div key={idx} className="flex flex-col rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 text-green-600">
                <Quote size={32} />
              </div>
              <p className="mb-4 flex-grow italic text-muted-foreground">"{t.text}"</p>
              <div className="mt-auto flex items-center pt-4 border-t">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-xl bg-green-600 p-8 text-center text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Prêt à Sécuriser Votre Inventaire Pharmaceutique?</h3>
          <p className="mx-auto mb-6 max-w-[600px]">
            Rejoignez plus de 500 pharmacies qui font confiance à PharmaSensor pour la surveillance de leurs équipements critiques.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="rounded-md bg-white px-6 py-3 font-medium text-green-600 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600">
              Demander une Démo
            </button>
            <button className="rounded-md border border-white bg-transparent px-6 py-3 font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600">
              Télécharger la Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
