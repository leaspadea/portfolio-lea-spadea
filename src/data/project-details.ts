export interface ProjectDetailsContent {
  context: string;
  objectives: string[];
  stack: string[];
  skills: string[];
  results: string[];
  improvements: string[];
}

export const projectDetails = {
  letabli: {
    context:
      "Commande réelle pour ma tatoueuse : création d’un site vitrine pour son salon. J’ai réalisé l’identité graphique et le développement du site.",
    objectives: [
      "Traduire l’univers du salon en une identité visuelle et une interface cohérentes.",
      "Présenter le salon et son travail dans un site adapté au mobile et au desktop.",
    ],
    stack: ["Astro", "React", "CSS"],
    skills: [
      "Concevoir une direction artistique et la traduire en composants et en styles.",
      "Organiser les contenus et adapter la mise en page aux différentes tailles d’écran.",
      "Échanger avec une cliente et faire évoluer le site à partir de ses retours.",
    ],
    results: [
      "Une identité graphique et une version du site développée, encore en cours de finalisation.",
      "Le site n’est pas encore publié : j’attends les retours de ma cliente et des contenus complémentaires.",
    ],
    improvements: [
      "Intégrer les contenus attendus et les derniers ajustements validés avec la cliente.",
      "Finaliser les vérifications de responsive, d’accessibilité et de performance avant la mise en ligne.",
    ],
  },
  argentBank: {
    context:
      "Projet de formation : développer le front-end d’une application bancaire à partir de maquettes et d’un back-end fournis, puis concevoir le contrat d’une API de transactions.",
    objectives: [
      "Permettre la connexion, la déconnexion et la modification du profil utilisateur.",
      "Centraliser l’état de la session et documenter les futures routes de transactions.",
    ],
    stack: ["React", "Redux Toolkit", "React Router", "Vite", "Fetch API", "Swagger"],
    skills: [
      "Organiser l’état global et les opérations asynchrones avec Redux Toolkit.",
      "Consommer une API REST et gérer les routes protégées et la persistance de session.",
      "Traduire un besoin fonctionnel en contrat d’API documenté.",
    ],
    results: [
      "Connexion, déconnexion, profil et édition du nom fonctionnels ; session conservée après rechargement.",
      "API des transactions documentée avec Swagger, sans implémentation de ces routes. L’application se teste en local avec le back-end fourni.",
    ],
    improvements: [
      "Mieux restituer les erreurs réseau et garder le formulaire d’édition ouvert si l’enregistrement échoue.",
      "Ajouter des tests ciblés sur la connexion, l’expiration de session et la mise à jour du profil.",
    ],
  },
  ninaCarducci: {
    context:
      "Projet de formation sur le site existant d’une photographe à Bordeaux : améliorer ses performances, son référencement et son accessibilité sans changer son identité visuelle.",
    objectives: [
      "Réduire le poids des images et accélérer le chargement du site.",
      "Améliorer le balisage, le référencement local et l’utilisation au clavier, en préservant la galerie et le carrousel.",
    ],
    stack: ["HTML", "CSS", "Bootstrap", "jQuery", "maugallery", "Schema.org"],
    skills: [
      "Auditer un site avec Lighthouse et WAVE, puis prioriser les corrections.",
      "Optimiser les images, les métadonnées, la structure HTML et les données structurées.",
      "Vérifier les fonctionnalités et expliquer les actions dans un rapport d’optimisation.",
    ],
    results: [
      "Lors de l’audit desktop du projet : performance de 74 à 98, accessibilité de 70 à 100 et SEO de 73 à 100 dans Lighthouse.",
      "Poids des images réduit de 29,4 Mo à 0,7 Mo, avec conservation de l’apparence et des fonctionnalités du site.",
    ],
    improvements: [
      "Poursuivre le suivi sur mobile et contrôler les performances après chaque ajout de contenu.",
      "Maintenir l’optimisation des nouvelles images et les vérifications d’accessibilité dans la durée.",
    ],
  },
} satisfies Record<string, ProjectDetailsContent>;
