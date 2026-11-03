# 🗝️ Le cabinet de Léa — Portfolio d'intégratrice web

> Portfolio de **Léa Spadea**, réalisé avec **Astro** dans le cadre de la formation Intégrateur Web d'OpenClassrooms. Une présentation de mon parcours, de mes compétences et de mes projets dans un univers de **cabinet de curiosités**, entre bois vert profond, laiton et papier ancien.

## 🚀 Démo / lancement

🌐 **[Voir le portfolio en ligne](https://leaspadea.netlify.app/)** — hébergé sur **Netlify**.

Pour lancer le projet en local, suivez la section [Installation](#-installation).

## 🎯 Contexte du projet

Ce portfolio constitue le **projet 12** de ma formation Intégrateur Web chez OpenClassrooms. Il rassemble une sélection de mes réalisations et présente ma reconversion après plusieurs années dans la vente.

**Mission :** concevoir et développer un site personnel responsive, présenter les projets et les compétences acquises, et proposer un moyen de me contacter. L'identité visuelle reprend les codes d'un cabinet de curiosités : projets numérotés comme des spécimens, fiche de catalogue, meuble à tiroirs et carte postale.

## 🛠️ Technologies utilisées

- **Astro 7** — composants et génération des pages statiques
- **HTML / CSS** — structure sémantique, Flexbox, Grid et approche mobile-first
- **Custom properties CSS** — couleurs, typographies, espacements et texture de bois partagés
- **JavaScript / TypeScript** — interactions et script d'animation du hero
- **GSAP 3** — orchestration des animations avec une timeline
- **SVG** — ornements et éléments décoratifs du cabinet
- **Google Fonts** — Fraunces, Karla et Courier Prime
- **npm** — gestion des dépendances et scripts du projet
- **Netlify Forms** — collecte des messages du formulaire de contact
- **Git / GitHub** — gestion des versions

L'intégration React est présente dans la configuration et les dépendances, mais les sections actuelles du portfolio sont des composants Astro.

## ✨ Fonctionnalités du site

- ✅ **Hero animé** : ouverture d'une armoire à deux portes, lumière et poussière, balancement du médaillon, frappe machine et apparition du contenu
- ✅ **Animation jouée une fois par session**, avec possibilité de la passer par clic ou avec la touche Échap
- ✅ **Réduction des animations** : respect de la préférence système, avec accès direct au contenu
- ✅ **Collection de projets** : L'Établi mis en avant, suivi d'Argent Bank et de Nina Carducci, avec technologies et liens associés
- ✅ **Section À propos** : fiche de catalogue et compétences réparties dans quatre tiroirs décoratifs
- ✅ **Carte postale de correspondance** : champs obligatoires, labels associés et champ caché anti-spam
- ✅ **Navigation responsive** : menu mobile et liens vers les sections
- ✅ **Navigation clavier** : lien « Aller au contenu », focus visible et retours visuels sur les liens et les cartes

## 🔧 Travail réalisé

- 🎨 **Identité graphique personnalisée** : palette forêt, laiton et papier, typographies complémentaires et motifs décoratifs
- 🧩 **Découpage en composants** : séparation du hero, de l'armoire, du médaillon et des sections de la page
- 🎬 **Animation du hero** : coordination des portes, des effets lumineux, du portrait et du texte avec GSAP
- ♿ **Accessibilité** : HTML sémantique, décors masqués aux lecteurs d'écran, gestion du focus et respect de `prefers-reduced-motion`
- 📱 **Responsive** : adaptations mobile, tablette et desktop, et vérification de la lisibilité avec un zoom à 200 %
- 🖼️ **Images** : captures de projets au format WebP, dimensions déclarées et chargement différé hors du premier écran

## ✅ Vérifications effectuées

| Vérification | Résultat |
| --- | --- |
| Build de production | Génération réussie avec `npm run build` |
| Validation HTML W3C | Aucune erreur après correction du rôle redondant dans le menu |
| Validation CSS W3C | Aucune erreur signalée |
| WAVE | Aucune erreur ni erreur de contraste détectée ; alertes examinées manuellement |
| axe DevTools | Aucun problème automatique détecté |
| Navigation clavier | Lien d'évitement, menu mobile et formulaire vérifiés |
| Lecture avec NVDA | Hero, titres, biographie, compétences, formulaire et menu mobile vérifiés |
| Zoom à 200 % | Contenu et fonctionnalités utilisables |
| Réduction des animations | Contenu visible sans animation d'introduction ni fondu au défilement |
| Navigateurs | Vérifications manuelles dans Chrome et Firefox |
| Formulaire en production | Envoi de test et présence du message dans Netlify vérifiés |

Ces vérifications combinent des outils automatiques et des tests manuels ; elles ne constituent pas une certification de conformité à l'ensemble des WCAG.

Les notifications par e-mail sont configurées dans Netlify et la réception d'un e-mail de test a été vérifiée.

## 📐 Structure du projet

```text
portfolio-lea-spadea/
├── public/
│   ├── images/              # Portrait, captures et ornements
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── hero/
│   │   │   ├── Cabinet.astro
│   │   │   └── Medallion.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── ProjectCard.astro
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro     # Structure HTML, métadonnées et styles globaux
│   ├── pages/
│   │   └── index.astro      # Assemblage de la page et données des projets
│   ├── scripts/
│   │   └── hero-intro.ts    # Timeline GSAP et gestion de l'introduction
│   └── styles/
│       ├── tokens.css
│       ├── reset.css
│       └── global.css
├── astro.config.mjs
├── netlify.toml             # Build, dossier publié et en-têtes HTTP
├── package.json
├── package-lock.json
├── LICENSE
└── README.md
```

Le dossier `dist/` est généré lors du build et n'est pas versionné. Les modifications se font dans les fichiers sources.

## 🎓 Compétences travaillées

- Concevoir une **identité visuelle** et la traduire en HTML/CSS
- Construire un site avec **Astro** et organiser des composants réutilisables
- Réaliser des mises en page **responsive**, des motifs CSS et des ornements SVG
- Piloter une **timeline GSAP**, ses étapes et ses courbes d'accélération
- Gérer le **DOM**, les événements, `sessionStorage` et les préférences de mouvement
- Vérifier l'**accessibilité** avec le clavier, NVDA et des outils d'analyse
- Préparer un **build statique** et sa configuration de déploiement

## 📦 Prérequis

- **Node.js 22.12.0 ou supérieur** — environnement local utilisé : Node.js 24
- **npm** — fourni avec Node.js
- **Git**

## 🚀 Installation

Dans un terminal PowerShell :

```powershell
git clone https://github.com/leaspadea/portfolio-lea-spadea.git
cd portfolio-lea-spadea
npm ci
```

Puis lancer le site en développement :

```powershell
npm run dev
```

Le site est accessible sur [http://localhost:4321](http://localhost:4321) par défaut. Si ce port est occupé, utiliser l'adresse indiquée dans le terminal.

## 🧭 Utilisation

- Parcourir la collection et ouvrir les liens vers les projets ou leurs dépôts.
- Consulter la fiche À propos et les listes de compétences.
- Utiliser le formulaire de correspondance du site publié pour me contacter.
- Passer l'introduction par clic ou avec **Échap**. Elle n'est pas rejouée lors des rechargements dans la même session de navigation.

Le serveur local permet de vérifier l'affichage et les champs du formulaire ; la collecte des messages est assurée par Netlify Forms sur le site publié.

## 🧰 Scripts disponibles

| Commande | Description |
| --- | --- |
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Génère le site de production dans `dist/` |
| `npm run preview` | Lance un aperçu local du dernier build |
| `npm run astro -- --help` | Affiche l'aide de la CLI Astro |

Pour vérifier la version de production :

```powershell
npm run build
npm run preview
```

## 👤 Auteur

**Léa Spadea** — Étudiante Intégratrice Web @ OpenClassrooms

🔗 [LinkedIn](https://www.linkedin.com/in/lea-spadea/) · 💻 [GitHub](https://github.com/leaspadea)

## 📄 Licence

Le code de ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE).

---

*Projet réalisé dans le cadre de la formation Intégrateur Web chez OpenClassrooms.*
