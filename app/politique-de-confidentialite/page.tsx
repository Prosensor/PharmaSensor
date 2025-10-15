import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Politique de Confidentialité | PharmaSensor",
  description: "Découvrez comment PharmaSensor protège vos données personnelles et respecte votre vie privée.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full py-16 md:py-24 lg:py-32 flex justify-center">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Politique de Confidentialité
            </h1>
            <p className="text-gray-500 dark:text-gray-400">Dernière mise à jour : 14 mars 2025</p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700">
              Chez Prosensor (marque commerciale PharmaSensor), nous accordons une importance capitale à la protection de vos données personnelles.
              Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons
              vos informations lorsque vous utilisez notre site web et nos services.
            </p>

            <h2 className="text-2xl font-bold tracking-tight">1. Informations que nous collectons</h2>
            <div className="space-y-2 pl-4">
              <h3 className="text-xl font-semibold">1.1 Informations que vous nous fournissez</h3>
              <p className="text-gray-700">
                Nous collectons les informations que vous nous fournissez directement, notamment :
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Informations d'identification (nom, prénom, fonction)</li>
                <li>Coordonnées professionnelles (adresse email, numéro de téléphone, nom de la pharmacie)</li>
                <li>Informations sur votre équipement pharmaceutique</li>
                <li>Contenu des messages que vous nous envoyez via nos formulaires</li>
              </ul>

              <h3 className="text-xl font-semibold">1.2 Informations collectées automatiquement</h3>
              <p className="text-gray-700">
                Lorsque vous visitez notre site web, nous collectons automatiquement certaines informations, notamment :
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Données de navigation (pages visitées, durée de la visite)</li>
                <li>Informations sur votre appareil (type d'appareil, système d'exploitation, navigateur)</li>
                <li>Adresse IP et données de localisation approximative</li>
                <li>
                  Cookies et technologies similaires (voir notre{" "}
                  <Link href="/cookies" className="text-green-600 hover:underline">
                    Politique de Cookies
                  </Link>
                  )
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold tracking-tight">2. Utilisation de vos informations</h2>
            <p className="text-gray-700">Nous utilisons vos informations personnelles pour les finalités suivantes :</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Fournir, maintenir et améliorer nos services</li>
              <li>Traiter vos demandes et vous contacter concernant nos produits et services</li>
              <li>Personnaliser votre expérience utilisateur</li>
              <li>Vous envoyer des informations techniques, des mises à jour et des alertes de sécurité</li>
              <li>Vous envoyer des communications marketing (avec votre consentement)</li>
              <li>Détecter et prévenir les fraudes et abus</li>
              <li>Respecter nos obligations légales</li>
            </ul>

            <h2 className="text-2xl font-bold tracking-tight">3. Partage de vos informations</h2>
            <p className="text-gray-700">
              Nous ne vendons pas vos données personnelles. Nous pouvons partager vos informations dans les
              circonstances suivantes :
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Avec nos prestataires de services qui nous aident à fournir nos services</li>
              <li>Pour respecter la loi, protéger nos droits ou assurer la sécurité</li>
              <li>Dans le cadre d'une fusion, acquisition ou vente d'actifs</li>
              <li>Avec votre consentement ou selon vos instructions</li>
            </ul>

            <h2 className="text-2xl font-bold tracking-tight">4. Protection de vos informations</h2>
            <p className="text-gray-700">
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger
              vos données personnelles contre la perte, l'accès non autorisé, la divulgation, l'altération ou la
              destruction. Ces mesures incluent le chiffrement des données, les contrôles d'accès, et des audits de
              sécurité réguliers.
            </p>

            <h2 className="text-2xl font-bold tracking-tight">5. Conservation des données</h2>
            <p className="text-gray-700">
              Nous conservons vos données personnelles aussi longtemps que nécessaire pour fournir nos services,
              respecter nos obligations légales, résoudre les litiges et faire appliquer nos accords. La durée de
              conservation spécifique dépend du type de données et de leur finalité.
            </p>

            <h2 className="text-2xl font-bold tracking-tight">6. Vos droits</h2>
            <p className="text-gray-700">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants
              :
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l'effacement (droit à l'oubli)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d'opposition au traitement</li>
              <li>Droit de retirer votre consentement à tout moment</li>
            </ul>
            <p className="text-gray-700">
              Pour exercer ces droits, veuillez nous contacter à l'adresse email suivante :
              <a href="mailto:info@prosensor.com" className="text-green-600 hover:underline">
                {" "}
                info@prosensor.com
              </a>
            </p>

            <h2 className="text-2xl font-bold tracking-tight">7. Transferts internationaux de données</h2>
            <p className="text-gray-700">
              Vos données personnelles peuvent être transférées et traitées dans des pays autres que celui où vous
              résidez. Ces pays peuvent avoir des lois différentes en matière de protection des données. Lorsque nous
              transférons vos données en dehors de l'Espace Économique Européen, nous mettons en place des garanties
              appropriées conformément au RGPD.
            </p>

            <h2 className="text-2xl font-bold tracking-tight">8. Modifications de cette politique</h2>
            <p className="text-gray-700">
              Nous pouvons modifier cette politique de confidentialité de temps à autre. La version la plus récente sera
              toujours disponible sur notre site web, avec la date de la dernière mise à jour. Nous vous encourageons à
              consulter régulièrement cette politique pour rester informé de nos pratiques en matière de protection des
              données.
            </p>

            <h2 className="text-2xl font-bold tracking-tight">9. Nous contacter</h2>
            <p className="text-gray-700">
              Si vous avez des questions concernant cette politique de confidentialité ou nos pratiques en matière de
              protection des données, veuillez nous contacter à :
            </p>
            <div className="pl-6 text-gray-700">
              <p>Prosensor</p>
              <p>5 rue Maud Fontenoy</p>
              <p>57140 Norroy-le-Veneur, France</p>
              <p>
                Email :{" "}
                <a href="mailto:info@prosensor.com" className="text-green-600 hover:underline">
                  info@prosensor.com
                </a>
              </p>
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

