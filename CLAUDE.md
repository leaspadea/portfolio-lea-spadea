## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

# CLAUDE.md — Portfolio Léa Spadea

## Contexte
Portfolio développeuse web, projet 12 OpenClassrooms (soutenance orale 30 min).
L'étudiante doit comprendre et pouvoir défendre chaque ligne de code.
Accompagne-la étape par étape, explique les choix techniques, ne code pas sans expliquer.

## Stack
- **Framework** : Astro 5 (static-first, zero JS par défaut)
- **Islands** : React 19 (galerie lightbox uniquement)
- **CSS** : Custom properties, mobile-first, pas de framework CSS
- **Déploiement** : Netlify (formulaire `data-netlify="true"`)
- **Pas de** : Tailwind, SASS, jQuery, Bootstrap

## Design system — « Cabinet de curiosités »

### Palette
- Fond principal : `#0B1A14` (deep forest)
- Fond cards : `#14251E` (forest)
- Surface hover : `#1C3129`
- Texte parchemin : `#E9E2D0` / secondaire : `#B8AE9C` / muted : `#7A7264`
- Accent laiton : `#B89460` (liens, décorations, bordures bouton)
- CTA bordeaux : `#6B2D3E` / hover : `#7A3648` + bordure laiton 1px
- Bordure subtle : `#2A4038`
- Jamais de blanc pur (#FFF). Toujours parchemin.
- CTA bordeaux uniquement sur bg-deep (hero, contact). Cards = liens laiton.

### Typo (Google Fonts)
- Display : Cormorant Garamond 400/600/700 — titres
- Body : Inter 400/500/600 — texte courant

### Règles
- Mobile-first (base → 768px tablette → 1024px desktop)
- WCAG AA : toutes les paires ≥ 4.5:1 texte, ≥ 3:1 composants UI
- prefers-reduced-motion respecté sur toutes les animations
- Scroll reveal via IntersectionObserver vanilla JS
- Sémantique HTML, skip link, aria-labels

## Commandes
```bash
npm run dev      # localhost:4321
npm run build    # dist/
npm run preview
```

## Conventions
- Composants Astro en PascalCase
- CSS scoped dans chaque composant (<style>)
- Tokens CSS dans tokens.css, jamais de valeurs en dur
- Français pour le contenu, anglais pour le code
- Commits réguliers et descriptifs à chaque étape