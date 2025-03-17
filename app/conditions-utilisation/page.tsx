import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Conditions d'Utilisation | PharmaSensor",
  description: "Consultez les conditions d'utilisation des services et du site web de PharmaSensor.",
}

export default function TermsOfServicePage() {
  return (
    <div className="w-full py-16 md:py-24 lg:py-32 flex justify-center">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Conditions d'Utilisation</h1>
            <p className="text-gray-500 dark:text-gray-400">Dernière mise à jour : 14 mars 2025</p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700">
              Bienvenue sur le site web de PharmaSensor. Les présentes conditions d'utilisation régissent votre accès et
              votre utilisation de notre site web, de nos produits et de nos services. Veuillez les lire attentivement
              avant d'utiliser nos services.
            </p>

            <p className="text-gray-700">
              En accédant à notre site web ou en utilisant nos services, vous acceptez d'être lié par ces conditions. Si
              vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site ou nos services.
            </p>

            <h2 className="text-2xl font-bold tracking-tight">1. Définitions</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                <strong>"PharmaSensor"</strong>, <strong>"nous"</strong>, <strong>"notre"</strong> ou{" "}
                <strong>"nos"</strong> désigne la société PharmaSensor, SAS au capital de 50 000 €, immatriculée au RCS
                de Paris sous le numéro 123 456 789.
              </li>
              <li>
                <strong>"Services"</strong> désigne l'ensemble des produits, logiciels, services et site web fournis par
                PharmaSensor.
              </li>
              <li>
                <strong>"Utilisateur"</strong>, <strong>"vous"</strong>, <strong>"votre"</strong> ou{" "}
                <strong>"vos"</strong> désigne toute personne qui accède à notre site web ou utilise nos services.
              </li>
              <li>
                <strong>"Contenu"</strong> désigne les textes, images, photos, vidéos, sons et autres matériels présents
                sur notre site web.
              </li>
            </ul>

            <h2 className="text-2xl font-bold tracking-tight">2. Utilisation de nos services</h2>
            <h3 className="text-xl font-semibold">2.1 Conditions d'accès</h3>
            <p className="text-gray-700">
              Pour accéder à certains de nos services, vous devez être âgé d'au moins 18 ans et avoir la capacité
              juridique de conclure un contrat. Vous êtes responsable de maintenir la confidentialité de vos
              identifiants de connexion et de toutes les activités qui se produisent sous votre compte.
            </p>

            <h3 className="text-xl font-semibold">2.2 Utilisation autorisée</h3>
            <p className="text-gray-700">
              Vous vous engagez à utiliser nos services conformément aux présentes conditions, aux lois applicables et
              aux règles de conduite généralement acceptées sur Internet. Vous ne devez pas utiliser nos services d'une
              manière qui pourrait endommager, désactiver, surcharger ou compromettre nos systèmes.
            </p>

            <h3 className="text-xl font-semibold">2.3 Restrictions d'utilisation</h3>
            <p className="text-gray-700">Vous ne devez pas :</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Utiliser nos services à des fins illégales ou non autorisées</li>
              <li>Tenter de contourner les mesures de sécurité de notre site web</li>
              <li>Interférer avec le bon fonctionnement de nos services</li>
              <li>Collecter ou stocker des données personnelles d'autres utilisateurs sans leur consentement</li>
              <li>
                Reproduire, dupliquer, copier, vendre, revendre ou exploiter une partie quelconque de nos services
              </li>
            </ul>

            <h2 className="text-2xl font-bold tracking-tight">3. Propriété intellectuelle</h2>
            <h3 className="text-xl font-semibold">3.1 Nos droits</h3>
            <p className="text-gray-700">
              Le contenu de notre site web, y compris les textes, graphiques, logos, icônes, images, clips audio,
              téléchargements numériques et compilations de données, est la propriété de PharmaSensor ou de ses
              fournisseurs de contenu et est protégé par les lois françaises et internationales sur le droit d'auteur,
              les marques et autres lois sur la propriété intellectuelle.
            </p>

            <h3 className="text-xl font-semibold">3.2 Licence limitée</h3>
            <p className="text-gray-700">
              Nous vous accordons une licence limitée, non exclusive, non transférable et révocable pour accéder à notre
              site web et utiliser nos services conformément aux présentes conditions. Cette licence ne vous autorise
              pas à :
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Modifier ou copier nos contenus</li>
              <li>Utiliser nos contenus à des fins commerciales</li>
              <li>Retirer les mentions de droit d'auteur ou autres mentions de propriété de nos contenus</li>
              <li>Transférer les contenus à une autre personne ou "refléter" les contenus sur un autre serveur</li>
            </ul>

            <h2 className="text-2xl font-bold tracking-tight">4. Responsabilité</h2>
            <h3 className="text-xl font-semibold">4.1 Limitation de responsabilité</h3>
            <p className="text-gray-700">
              Dans toute la mesure permise par la loi applicable, PharmaSensor ne pourra être tenue responsable des
              dommages indirects, accessoires, spéciaux, consécutifs ou punitifs, ou de toute perte de profits ou de
              revenus, que ces dommages soient prévisibles ou non, et même si PharmaSensor a été informée de la
              possibilité de tels dommages.
            </p>

            <h3 className="text-xl font-semibold">4.2 Exactitude des informations</h3>
            <p className="text-gray-700">
              Nous nous efforçons de fournir des informations précises et à jour sur notre site web, mais nous ne
              garantissons pas l'exactitude, l'exhaustivité ou la pertinence de ces informations. Tout recours aux
              informations fournies sur notre site web se fait à vos propres risques.
            </p>

            <h2 className="text-2xl font-bold tracking-tight">5. Modifications des conditions</h2>
            <p className="text-gray-700">
              Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. Les modifications
              prendront effet dès leur publication sur notre site web. Votre utilisation continue de nos services après
              la publication des modifications constitue votre acceptation de ces modifications.
            </p>

            <h2 className="text-2xl font-bold tracking-tight">6. Résiliation</h2>
            <p className="text-gray-700">
              Nous nous réservons le droit de résilier ou de suspendre votre accès à tout ou partie de nos services,
              sans préavis, pour toute raison, y compris, sans limitation, si nous estimons que vous avez violé ces
              conditions.
            </p>

            <h2 className="text-2xl font-bold tracking-tight">7. Droit applicable et juridiction compétente</h2>
            <p className="text-gray-700">
              Les présentes conditions sont régies par le droit français. Tout litige relatif à l'interprétation ou à
              l'exécution de ces conditions sera soumis à la compétence exclusive des tribunaux de Paris, France.
            </p>

            <h2 className="text-2xl font-bold tracking-tight">8. Dispositions diverses</h2>
            <p className="text-gray-700">
              Si une disposition des présentes conditions est jugée illégale, nulle ou inapplicable, cette disposition
              sera néanmoins applicable dans toute la mesure permise par la loi, et la partie non applicable sera
              considérée comme dissociée de ces conditions, sans que cela n'affecte la validité et l'applicabilité des
              autres dispositions.
            </p>

            <h2 className="text-2xl font-bold tracking-tight">9. Contact</h2>
            <p className="text-gray-700">
              Si vous avez des questions concernant ces conditions d'utilisation, veuillez nous contacter à :
            </p>
            <div className="pl-6 text-gray-700">
              <p>PharmaSensor</p>
              <p>123 Avenue de la Santé</p>
              <p>75001 Paris, France</p>
              <p>
                Email :{" "}
                <a href="mailto:legal@pharmasensor.com" className="text-green-600 hover:underline">
                  legal@pharmasensor.com
                </a>
              </p>
              <p>Téléphone : +33 1 23 45 67 89</p>
            </div>
          </div>

          <div className="border-t pt-8">
            <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

