import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Mentions Légales | PharmaSensor",
  description: "Consultez les mentions légales de PharmaSensor, informations sur l'éditeur et l'hébergeur du site.",
}

export default function LegalNoticePage() {
  return (
    <div className="w-full py-16 md:py-24 lg:py-32 flex justify-center">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mentions Légales</h1>
            <p className="text-gray-500 dark:text-gray-400">Dernière mise à jour : 14 mars 2025</p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700">
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie
              numérique, nous vous informons des mentions légales suivantes concernant le site www.pharmasensor.fr.
            </p>

            <h2 className="text-2xl font-bold tracking-tight">1. Éditeur du site</h2>
            <div className="pl-6 text-gray-700">
              <p>
                <strong>Raison sociale :</strong> Prosensor
              </p>
              <p>
                <strong>Marque commerciale :</strong> PharmaSensor
              </p>
              <p>
                <strong>Siège social :</strong> 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur, France
              </p>
              <p>
                <strong>SIRET :</strong> 451 740 187 00012
              </p>
              <p>
                <strong>RCS :</strong> Metz 451 740 187
              </p>
              <p>
                <strong>Contact :</strong>{" "}
                <a href="mailto:info@prosensor.com" className="text-green-600 hover:underline">
                  info@prosensor.com
                </a>
              </p>
            </div>

            <h2 className="text-2xl font-bold tracking-tight">2. Hébergeur du site</h2>
            <div className="pl-6 text-gray-700">
              <p>
                <strong>Raison sociale :</strong> LWS (Ligne Web Services)
              </p>
              <p>
                <strong>Adresse :</strong> 4 rue Galvani, 91300 Massy, France
              </p>
              <p>
                <strong>Site web :</strong>{" "}
                <a
                  href="https://www.lws.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  https://www.lws.fr
                </a>
              </p>
            </div>

            <h2 className="text-2xl font-bold tracking-tight">3. Propriété intellectuelle</h2>
            <p className="text-gray-700">
              L'ensemble du contenu du site www.pharmasensor.fr, incluant, de façon non limitative, les graphismes,
              images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la
              propriété exclusive de Prosensor à l'exception des marques, logos ou contenus appartenant à d'autres
              sociétés partenaires ou auteurs.
            </p>
            <p className="text-gray-700">
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle,
              de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Prosensor. Cette
              représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par
              les articles L.335-2 et suivants du Code de la propriété intellectuelle.
            </p>

            <h2 className="text-2xl font-bold tracking-tight">4. Données personnelles</h2>
            <p className="text-gray-700">
              Les informations concernant la collecte et le traitement des données personnelles sont détaillées dans
              notre
              <Link href="/politique-de-confidentialite" className="text-green-600 hover:underline">
                {" "}
                Politique de Confidentialité
              </Link>
              .
            </p>

            <h2 className="text-2xl font-bold tracking-tight">5. Cookies</h2>
            <p className="text-gray-700">
              Les informations concernant l'utilisation des cookies sont détaillées dans notre
              <Link href="/cookies" className="text-green-600 hover:underline">
                {" "}
                Politique de Cookies
              </Link>
              .
            </p>

            <h2 className="text-2xl font-bold tracking-tight">6. Liens hypertextes</h2>
            <p className="text-gray-700">
              Le site www.pharmasensor.fr peut contenir des liens hypertextes vers d'autres sites internet ou
              applications. Prosensor n'exerce aucun contrôle sur ces sites et applications et décline toute
              responsabilité quant à leur contenu ou à leur utilisation.
            </p>

            <h2 className="text-2xl font-bold tracking-tight">7. Droit applicable et juridiction compétente</h2>
            <p className="text-gray-700">
              Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français
              seront compétents.
            </p>

            <h2 className="text-2xl font-bold tracking-tight">8. Médiation de la consommation</h2>
            <p className="text-gray-700">
              Conformément aux dispositions du Code de la consommation concernant le règlement amiable des litiges,
              Prosensor adhère au Service du Médiateur du e-commerce de la FEVAD (Fédération du e-commerce et de la
              vente à distance).
            </p>
            <p className="text-gray-700">
              Après démarche préalable écrite des consommateurs vis-à-vis de Prosensor, le Service du Médiateur peut
              être saisi pour tout litige de consommation dont le règlement n'aurait pas abouti. Pour connaître les
              modalités de saisine du Médiateur, rendez-vous sur :{" "}
              <a
                href="https://www.mediateurfevad.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                https://www.mediateurfevad.fr
              </a>
            </p>

            <h2 className="text-2xl font-bold tracking-tight">9. Accessibilité</h2>
            <p className="text-gray-700">
              Prosensor s'efforce de rendre son site internet accessible conformément à l'article 47 de la loi n°
              2005-102 du 11 février 2005 pour l'égalité des droits et des chances, la participation et la citoyenneté
              des personnes handicapées.
            </p>
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

