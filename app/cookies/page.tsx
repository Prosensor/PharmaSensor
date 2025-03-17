import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Politique de Cookies | PharmaSensor",
  description: "Découvrez comment PharmaSensor utilise les cookies et autres technologies de suivi sur son site web.",
}

export default function CookiePolicyPage() {
  return (
    <div className="w-full py-16 md:py-24 lg:py-32 flex justify-center">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Politique de Cookies</h1>
            <p className="text-gray-500 dark:text-gray-400">Dernière mise à jour : 14 mars 2025</p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700">
              Cette politique de cookies explique ce que sont les cookies, comment PharmaSensor les utilise, et quelles
              sont vos options concernant leur utilisation.
            </p>

            <h2 className="text-2xl font-bold tracking-tight">1. Qu'est-ce qu'un cookie ?</h2>
            <p className="text-gray-700">
              Un cookie est un petit fichier texte qu'un site web sauvegarde sur votre ordinateur ou appareil mobile
              lorsque vous visitez ce site. Il permet au site web de mémoriser vos actions et préférences (comme la
              connexion, la langue, la taille de la police et d'autres préférences d'affichage) pendant un certain
              temps, pour que vous n'ayez pas à les réindiquer à chaque fois que vous revenez sur le site ou naviguez
              d'une page à une autre.
            </p>

            <h2 className="text-2xl font-bold tracking-tight">2. Comment utilisons-nous les cookies ?</h2>
            <p className="text-gray-700">Notre site web utilise des cookies pour diverses raisons, notamment pour :</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Assurer le bon fonctionnement du site</li>
              <li>Mémoriser vos préférences</li>
              <li>Améliorer la vitesse et la sécurité du site</li>
              <li>Analyser comment notre site est utilisé afin de l'améliorer</li>
              <li>Personnaliser votre expérience</li>
              <li>Vous proposer des publicités pertinentes (le cas échéant)</li>
            </ul>

            <h2 className="text-2xl font-bold tracking-tight">3. Types de cookies que nous utilisons</h2>
            <h3 className="text-xl font-semibold">3.1 Cookies strictement nécessaires</h3>
            <p className="text-gray-700">
              Ces cookies sont essentiels au fonctionnement de notre site web et ne peuvent pas être désactivés. Ils
              sont généralement établis en réponse à des actions que vous effectuez et qui constituent une demande de
              services, telles que la définition de vos préférences de confidentialité, la connexion ou le remplissage
              de formulaires. Vous pouvez configurer votre navigateur pour qu'il bloque ou vous avertisse de l'existence
              de ces cookies, mais certaines parties du site ne fonctionneront pas.
            </p>

            <h3 className="text-xl font-semibold">3.2 Cookies de performance</h3>
            <p className="text-gray-700">
              Ces cookies nous permettent de compter les visites et les sources de trafic afin de mesurer et d'améliorer
              les performances de notre site. Ils nous aident à savoir quelles pages sont les plus et les moins
              populaires et à voir comment les visiteurs se déplacent sur le site. Toutes les informations recueillies
              par ces cookies sont agrégées et donc anonymes.
            </p>

            <h3 className="text-xl font-semibold">3.3 Cookies fonctionnels</h3>
            <p className="text-gray-700">
              Ces cookies permettent au site de fournir une fonctionnalité et une personnalisation améliorées. Ils
              peuvent être définis par nous ou par des fournisseurs tiers dont nous avons ajouté les services à nos
              pages. Si vous n'autorisez pas ces cookies, certains ou tous ces services peuvent ne pas fonctionner
              correctement.
            </p>

            <h3 className="text-xl font-semibold">3.4 Cookies de ciblage</h3>
            <p className="text-gray-700">
              Ces cookies peuvent être définis via notre site par nos partenaires publicitaires. Ils peuvent être
              utilisés par ces entreprises pour établir un profil de vos intérêts et vous proposer des publicités
              pertinentes sur d'autres sites. Ils ne stockent pas directement des informations personnelles, mais sont
              basés sur l'identification unique de votre navigateur et de votre appareil Internet.
            </p>

            <h2 className="text-2xl font-bold tracking-tight">4. Cookies tiers</h2>
            <p className="text-gray-700">
              En plus de nos propres cookies, nous pouvons également utiliser divers cookies tiers pour signaler les
              statistiques d'utilisation du site, diffuser des publicités, etc. Ces cookies sont listés ci-dessous :
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                <strong>Google Analytics :</strong> Cookies d'analyse pour comprendre comment les visiteurs
                interagissent avec le site
              </li>
              <li>
                <strong>Google Tag Manager :</strong> Cookies pour gérer les balises JavaScript sur notre site
              </li>
              <li>
                <strong>LinkedIn :</strong> Cookies pour le suivi des conversions et le ciblage publicitaire
              </li>
              <li>
                <strong>Facebook :</strong> Cookies pour le suivi des conversions et le ciblage publicitaire
              </li>
            </ul>

            <h2 className="text-2xl font-bold tracking-tight">5. Comment gérer vos cookies</h2>
            <p className="text-gray-700">
              Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. Vous pouvez supprimer tous les
              cookies déjà présents sur votre ordinateur et vous pouvez configurer la plupart des navigateurs pour les
              empêcher d'en installer. Mais dans ce cas, vous devrez peut-être ajuster vous-même certaines préférences
              chaque fois que vous visiterez un site, et certains services et fonctionnalités pourraient ne pas
              fonctionner.
            </p>
            <p className="text-gray-700">
              Vous pouvez gérer vos préférences en matière de cookies de plusieurs façons :
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                <strong>Via notre outil de gestion des cookies :</strong> Nous proposons un outil de gestion des cookies
                qui vous permet de personnaliser vos préférences. Vous pouvez accéder à cet outil en cliquant sur le
                bouton "Gérer les cookies" en bas de notre site.
              </li>
              <li>
                <strong>Via les paramètres de votre navigateur :</strong> La plupart des navigateurs vous permettent de
                voir quels cookies vous avez et de les supprimer individuellement ou de bloquer les cookies d'un site
                particulier ou de tous les sites. Notez que si vous supprimez tous les cookies, toutes les préférences
                que vous avez définies seront perdues, y compris la possibilité de refuser les cookies, car cette
                fonction elle-même nécessite le placement d'un cookie.
              </li>
            </ul>
            <p className="text-gray-700">
              Pour plus d'informations sur la gestion des cookies dans les navigateurs les plus populaires, veuillez
              consulter les liens suivants :
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-bold tracking-tight">6. Modifications de notre politique de cookies</h2>
            <p className="text-gray-700">
              Nous pouvons mettre à jour cette politique de cookies de temps à autre pour refléter, par exemple, les
              changements apportés aux cookies que nous utilisons ou pour d'autres raisons opérationnelles, légales ou
              réglementaires. Veuillez donc consulter régulièrement cette politique pour rester informé de notre
              utilisation des cookies et des technologies connexes.
            </p>
            <p className="text-gray-700">
              La date en haut de cette politique indique quand elle a été mise à jour pour la dernière fois.
            </p>

            <h2 className="text-2xl font-bold tracking-tight">7. Nous contacter</h2>
            <p className="text-gray-700">
              Si vous avez des questions concernant notre utilisation des cookies ou d'autres technologies, veuillez
              nous contacter à :
            </p>
            <div className="pl-6 text-gray-700">
              <p>PharmaSensor</p>
              <p>123 Avenue de la Santé</p>
              <p>75001 Paris, France</p>
              <p>
                Email :{" "}
                <a href="mailto:privacy@pharmasensor.com" className="text-green-600 hover:underline">
                  privacy@pharmasensor.com
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

