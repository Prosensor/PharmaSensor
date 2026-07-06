# PharmaSensor — Site vitrine officiel

Site web commercial de **PharmaSensor**, la marque de surveillance de température pour pharmacies, éditée par l’entreprise **Prosensor**.

| | |
|---|---|
| **URL en production** | https://www.pharmasensor.fr |
| **Dépôt Git** | https://github.com/Prosensor/PharmaSensor |
| **Branche principale** | `main` |
| **Espace client (dashboard sondes)** | https://iot.prosensor.fr/ |
| **Email de contact affiché** | info@prosensor.com |
| **Hébergement site** | Vercel (déploiement automatique depuis GitHub) |
| **Hébergement mail SMTP** | LWS (`mail81.lwspanel.com`) |

---

## Sommaire

1. [Pour le dirigeant / responsable non technique](#1-pour-le-dirigeant--responsable-non-technique)
2. [Pour le développeur](#2-pour-le-développeur)
3. [Installation locale](#3-installation-locale)
4. [Variables d'environnement](#4-variables-denvironnement)
5. [Déploiement en production](#5-déploiement-en-production)
6. [Pages du site](#6-pages-du-site)
7. [Formulaires et envoi d'emails](#7-formulaires-et-envoi-demails)
8. [SEO et référencement](#8-seo-et-référencement)
9. [Structure du projet](#9-structure-du-projet)
10. [Tâches courantes](#10-tâches-courantes)
11. [Points d'attention / dette technique](#11-points-dattention--dette-technique)
12. [Contacts et accès utiles](#12-contacts-et-accès-utiles)

---

## 1. Pour le dirigeant / responsable non technique

### À quoi sert ce site ?

Ce site est la **vitrine commerciale** de PharmaSensor. Il permet aux pharmacies de :

- découvrir le produit (capteurs + interface web),
- consulter les tarifs (location et achat),
- demander un devis ou prendre contact,
- accéder aux informations légales et à la FAQ.

**Ce site ne gère pas les capteurs ni les données de température.**  
La surveillance en temps réel se fait sur l’**Espace Client** : https://iot.prosensor.fr/

### Ce que le site fait concrètement

| Fonction | Détail |
|----------|--------|
| Présentation produit | Pages marketing, photos, démo de l’interface |
| Tarification | Tableaux des offres location et achat |
| Formulaires | Devis, contact, demandes depuis la page tarifs / produit |
| Réception des leads | Les formulaires envoient un **email à `info@prosensor.com`** |
| Référencement Google | Sitemap, métadonnées, données structurées (SEO) |
| Pages légales | Mentions légales, confidentialité, cookies, CGU |

### Qui reçoit les demandes clients ?

Tous les formulaires actifs envoient les messages à **`info@prosensor.com`**.

L’envoi passe par le serveur mail LWS avec le compte **`contact@greensensor.fr`** (mot de passe stocké de façon sécurisée sur Vercel, voir section variables d’environnement).

### Comment mettre à jour le site sans être développeur ?

1. Contacter un développeur ou une agence.
2. Leur donner l’accès au dépôt GitHub : https://github.com/Prosensor/PharmaSensor
3. Toute modification poussée sur la branche `main` est **déployée automatiquement** sur https://www.pharmasensor.fr (si Vercel est bien connecté au repo).

**Modifications fréquentes possibles sans toucher au code complexe :**
- Textes des pages → fichiers dans `app/` et `components/`
- Images → dossier `public/`
- Tarifs → `app/tarification/page.tsx`
- Coordonnées (téléphone, adresse) → `components/site-footer.tsx`, pages contact et légales

### Référencement (SEO)

Le site est configuré pour Google :

- **Sitemap** : https://www.pharmasensor.fr/sitemap.xml
- **Search Console** : propriété `pharmasensor.fr` (à maintenir côté compte Google de l’entreprise)
- Score SEO Lighthouse : **100/100** (audit technique OK)

Pour améliorer la visibilité sur la requête « pharmasensor », l’essentiel se joue **hors du site** : fiche Google Business, avis clients, liens depuis prosensor.fr, campagne Google Ads marque.

---

## 2. Pour le développeur

### Stack technique

| Technologie | Version / détail |
|-------------|------------------|
| **Framework** | [Next.js](https://nextjs.org) 15+ (App Router) |
| **Langage** | TypeScript |
| **UI** | React 19, Tailwind CSS, composants Radix UI / shadcn |
| **Formulaires** | react-hook-form + zod |
| **Emails actifs** | Nodemailer (SMTP LWS) |
| **Emails legacy** | Resend (`lib/email.ts`, route `/api/demo` — peu ou pas utilisée en prod) |
| **Icônes** | lucide-react |
| **Animations** | framer-motion |

### Architecture Next.js

Le projet utilise l’**App Router** (`app/`).

```
app/
├── layout.tsx          # Layout global (header, footer, SEO global, JSON-LD)
├── page.tsx            # Page d'accueil
├── [route]/page.tsx    # Une page par URL
├── [route]/layout.tsx  # Metadata SEO par page (quand "use client" sur page.tsx)
├── api/                # Routes API (formulaires)
├── robots.ts           # robots.txt généré
└── sitemap.ts          # sitemap.xml généré
```

**Règle importante :** dans Next.js, on ne peut pas exporter `metadata` depuis un composant `"use client"`.  
Les métadonnées SEO des pages client sont donc dans des `layout.tsx` dédiés (`contact`, `tarification`, `notre-produit`, `comment-ca-marche`).

### Composants réutilisables

```
components/
├── site-header.tsx          # Navigation principale + lien Espace Client
├── site-footer.tsx          # Pied de page, coordonnées, liens légaux
├── hero-section.tsx         # Hero page d'accueil
├── product-hero-section.tsx # Hero page produit
├── pricing-hero-section.tsx # Hero page tarifs
├── contact-hero-section.tsx # Hero page contact
├── how-it-works-section.tsx # Stepper 3 étapes (accueil)
├── features-section.tsx     # Section fonctionnalités + logos clients
├── demo-section.tsx         # Formulaire contact bas de page d'accueil
├── dashboard-slider.tsx     # Carrousel captures dashboard
├── product-image-modal.tsx  # Modal zoom images (tarifs)
└── ui/                      # Composants UI de base (button, input, form…)
```

### Alias d'import

`@/` pointe vers la racine du projet (configuré dans `tsconfig.json`).

Exemple : `import Header from "@/components/site-header"`

---

## 3. Installation locale

### Prérequis

- **Node.js** 20+ recommandé
- **npm** (ou bun — un `bun.lockb` est présent mais `package-lock.json` est la référence principale)

### Étapes

```bash
# 1. Cloner le dépôt
git clone https://github.com/Prosensor/PharmaSensor.git
cd PharmaSensor

# 2. Installer les dépendances
npm install

# 3. Créer le fichier d'environnement local
cp .env.example .env.local   # voir section suivante si le fichier n'existe pas encore

# 4. Lancer le serveur de développement
npm run dev
```

Ouvrir http://localhost:3000

### Scripts disponibles

| Commande | Action |
|----------|--------|
| `npm run dev` | Serveur de dev (hot reload) |
| `npm run build` | Build de production |
| `npm run start` | Lance le build en local |
| `npm run lint` | Vérification ESLint |

---

## 4. Variables d'environnement

Créer un fichier **`.env.local`** à la racine (ne jamais le committer).

```env
# Obligatoire pour les formulaires (contact, devis, tarifs, produit)
MAIL_PASSWORD=mot_de_passe_smtp_contact@greensensor.fr

# Optionnel — utilisé uniquement par /api/demo (Resend, legacy)
RESEND_API_KEY=
CONTACT_EMAIL=info@prosensor.com
```

### Où configurer en production ?

Sur **Vercel** → Projet PharmaSensor → **Settings → Environment Variables**

| Variable | Obligatoire | Description |
|----------|-------------|-------------|
| `MAIL_PASSWORD` | **Oui** | Mot de passe SMTP du compte `contact@greensensor.fr` chez LWS |
| `RESEND_API_KEY` | Non | Clé API Resend (route demo legacy) |
| `CONTACT_EMAIL` | Non | Email de destination Resend (défaut dans le code) |

### Configuration SMTP (référence)

Utilisée dans `app/api/contact/route.ts` et `app/api/send-quote-mail/route.ts` :

| Paramètre | Valeur |
|-----------|--------|
| Host | `mail81.lwspanel.com` |
| Port | `465` (SSL) |
| Utilisateur | `contact@greensensor.fr` |
| Expéditeur affiché | `"Site PharmaSensor" <contact@greensensor.fr>` |
| Destinataire | `info@prosensor.com` |

---

## 5. Déploiement en production

### Flux actuel (recommandé)

```
Développeur → push sur main (GitHub) → Vercel build & deploy → www.pharmasensor.fr
```

1. Merger ou pousser sur `main`
2. Vercel détecte le push et lance `npm run build`
3. Le site est mis à jour en quelques minutes

### Vérifications après un déploiement

- [ ] https://www.pharmasensor.fr charge correctement
- [ ] Tester un formulaire (contact ou devis) → email reçu sur `info@prosensor.com`
- [ ] Vérifier qu’aucune variable d’environnement n’a été oubliée sur Vercel

### Domaine

Le domaine `pharmasensor.fr` / `www.pharmasensor.fr` est géré côté **Vercel** (DNS) et/ou **LWS** selon la configuration actuelle de l’entreprise.

---

## 6. Pages du site

| URL | Fichier | Description |
|-----|---------|-------------|
| `/` | `app/page.tsx` | Accueil : hero, comment ça marche, fonctionnalités, formulaire contact |
| `/notre-produit` | `app/notre-produit/page.tsx` | Présentation produit, galerie photos, JSON-LD Product |
| `/tarification` | `app/tarification/page.tsx` | Tarifs location + achat, tableaux, formulaire CTA |
| `/demande-devis` | `app/demande-devis/page.tsx` | Formulaire devis dédié (validation zod) |
| `/contact` | `app/contact/page.tsx` | Page contact + formulaire |
| `/comment-ca-marche` | `app/comment-ca-marche/page.tsx` | Stepper interactif 3 étapes |
| `/faq` | `app/faq/page.tsx` | FAQ + JSON-LD FAQPage |
| `/avis` | `app/avis/page.tsx` | Témoignages clients |
| `/mentions-legales` | `app/mentions-legales/page.tsx` | Mentions légales Prosensor / PharmaSensor |
| `/politique-de-confidentialite` | `app/politique-de-confidentialite/page.tsx` | RGPD |
| `/cookies` | `app/cookies/page.tsx` | Politique cookies |
| `/conditions-utilisation` | `app/conditions-utilisation/page.tsx` | CGU |

### Images statiques

Toutes les images accessibles par URL (`/logo.jpg`, photos produits, etc.) sont dans le dossier **`public/`**.

Pour remplacer une image : mettre le nouveau fichier dans `public/` avec le **même nom** ou mettre à jour le chemin dans le composant concerné.

---

## 7. Formulaires et envoi d'emails

### Vue d'ensemble

```
[Formulaire front]  →  POST /api/...  →  Nodemailer (SMTP LWS)  →  info@prosensor.com
```

### Détail par formulaire

| Page / composant | Endpoint API | Champs principaux |
|------------------|--------------|-------------------|
| `/demande-devis` | `POST /api/send-quote-mail` | nom, pharmacie, email, téléphone, équipements, message, consent RGPD |
| `/contact` | `POST /api/contact` | nom, prénom, email, téléphone, entreprise, sujet, message |
| `/tarification` (CTA bas de page) | `POST /api/contact` | nom, email, téléphone, formule, nombre de sondes |
| `/notre-produit` (CTA bas de page) | `POST /api/contact` | nom, email, téléphone, message |
| `components/demo-section.tsx` (accueil) | `POST /api/contact` | nom, pharmacie, email, téléphone, équipements, message |

### Logique email `/api/contact`

La route adapte le **template HTML** selon le contenu :

- Si le message commence par `"Sujet : "` → template **bleu** (formulaire contact général)
- Sinon → template **vert** (demandes commerciales : tarifs, produit, etc.)

Le champ `formule` (Achat / Clés en main) est inclus dans l’email pour le formulaire tarification.

### Route legacy `/api/demo`

Utilise **Resend** (`lib/email.ts`). Probablement un reliquat de développement. Les formulaires actifs du site passent par Nodemailer.

### Déboguer un formulaire qui ne part pas

1. Vérifier `MAIL_PASSWORD` sur Vercel
2. Consulter les logs Vercel (Functions → `/api/contact` ou `/api/send-quote-mail`)
3. Tester en local avec `.env.local` correctement rempli
4. Vérifier que le compte SMTP LWS n’est pas bloqué / mot de passe expiré

---

## 8. SEO et référencement

### Fichiers clés

| Fichier | Rôle |
|---------|------|
| `app/layout.tsx` | Metadata globale, Open Graph, Twitter, JSON-LD Organization + WebSite |
| `app/robots.ts` | Génère `/robots.txt` |
| `app/sitemap.ts` | Génère `/sitemap.xml` |
| `app/notre-produit/page.tsx` | JSON-LD Product (prix, avis, livraison, retours) |
| `app/faq/page.tsx` | JSON-LD FAQPage |
| `app/*/layout.tsx` | Titres et descriptions par page |

### URLs SEO importantes

- Sitemap : https://www.pharmasensor.fr/sitemap.xml
- Robots : https://www.pharmasensor.fr/robots.txt

### Search Console

Après modification des titres/descriptions, demander une **réindexation** dans Google Search Console pour les URLs :

- `/`
- `/notre-produit`
- `/tarification`
- `/comment-ca-marche`
- `/avis`

### Informations légales affichées (cohérence)

| Champ | Valeur |
|-------|--------|
| Raison sociale | Prosensor |
| Marque commerciale | PharmaSensor |
| Siège | 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur |
| SIRET | 451 740 187 00012 |
| RCS | Metz 451 740 187 |
| Email | info@prosensor.com |
| Téléphone | +33 3 87 53 53 53 |

---

## 9. Structure du projet

```
pharma-sensor/
├── app/                    # Pages, layouts, API routes, SEO (robots, sitemap)
├── components/             # Composants React réutilisables
├── lib/                    # Utilitaires (email legacy Resend, utils)
├── public/                 # Assets statiques (images, favicons, logos)
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── README.md               # Ce fichier
```

---

## 10. Tâches courantes

### Modifier les tarifs

Éditer `app/tarification/page.tsx` — tableaux desktop, cartes mobile, section « Prix à l'achat ».

### Modifier le texte du hero d'accueil

Éditer `components/hero-section.tsx`

### Ajouter / retirer un lien dans le menu

Éditer `components/site-header.tsx` et `components/site-footer.tsx`

### Changer l'email destinataire des formulaires

Modifier `to: "info@prosensor.com"` dans :
- `app/api/contact/route.ts`
- `app/api/send-quote-mail/route.ts`

### Ajouter une nouvelle page

1. Créer `app/ma-page/page.tsx`
2. Si la page est `"use client"`, créer `app/ma-page/layout.tsx` avec `export const metadata`
3. Ajouter l’URL dans `app/sitemap.ts`
4. Ajouter le lien dans header/footer si nécessaire

### Mettre à jour Next.js (sécurité)

```bash
npm install next@latest
npm run build   # vérifier qu'il n'y a pas d'erreur
git push origin main
```

> Dernière mise à jour de sécurité connue : Next.js **15.1.11** (correctif CVE-2025-66478).

---

## 11. Points d'attention / dette technique

Éléments à connaître pour la maintenance :

| Sujet | Détail |
|-------|--------|
| **Double système email** | Nodemailer (actif) + Resend (legacy dans `lib/email.ts` et `/api/demo`) |
| **Mot de passe SMTP en dur côté host** | Host/port/user sont dans le code ; seul le mot de passe est en variable d'env |
| **Placeholder Search Console** | `app/layout.tsx` contient `google-site-verification-code` — remplacer par le vrai code si besoin |
| **Alternates langues** | `/fr` et `/en` déclarés dans metadata mais pages inexistantes — à nettoyer ou implémenter |
| **Route `/recherche`** | Référencée dans JSON-LD WebSite mais page non implémentée |
| **Lien cassé potentiel** | `app/comment-ca-marche/page.tsx` CTA bas de page pointait vers `/fonctionnalites` (ancienne URL) — la route actuelle est `/notre-produit` |
| **Page avis** | Les témoignages sont définis en dur dans `app/avis/page.tsx` (pas de CMS) |
| **Performances Lighthouse** | Score Performance ~70–80 (extensions navigateur peuvent fausser le test ; tester en navigation privée) |
| **Pas de `.env.example`** | À créer pour faciliter l'onboarding (voir section 4) |

---

## 12. Contacts et accès utiles

| Ressource | Lien / info |
|-----------|-------------|
| Site production | https://www.pharmasensor.fr |
| GitHub | https://github.com/Prosensor/PharmaSensor |
| Dashboard IoT clients | https://iot.prosensor.fr/ |
| Google Search Console | Compte Google de l'entreprise (propriété pharmasensor.fr) |
| Hébergeur mail | LWS — panel client pour `contact@greensensor.fr` |
| Email entreprise | info@prosensor.com |

### Accès à transmettre au prochain responsable

- [ ] Compte GitHub organisation **Prosensor**
- [ ] Projet **Vercel** lié au repo + variables d'environnement
- [ ] Compte **Google Search Console** (pharmasensor.fr)
- [ ] Accès **LWS** (mail SMTP + DNS si applicable)
- [ ] Mot de passe SMTP `contact@greensensor.fr` (dans Vercel + LWS)
- [ ] Compte **Google Ads** (si campagnes marque PharmaSensor)

---

## Historique du projet

Site développé pour Prosensor / PharmaSensor.  
Stack initiale : Next.js + Tailwind. Évolutions principales : pages marketing complètes, formulaires fonctionnels via SMTP LWS, SEO (sitemap, JSON-LD, metadata), intégration Espace Client, tableaux tarifaires interactifs.

---

*Dernière mise à jour de cette documentation : mars 2026.*
