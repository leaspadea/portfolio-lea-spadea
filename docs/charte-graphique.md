# Charte graphique — « Le cabinet de Léa »

Identité visuelle validée pour le portfolio. Mélange **cabinet de curiosités** (vert forêt, laiton, objets de collection) et **maison de grand-mère** (papier jauni, médaillon, tiroirs, carte postale).

Maquette de référence (planche + page d'accueil) : https://claude.ai/artifact/H4skDzcmXa569ZM8QUNWwT

---

## 1. Décisions validées

- Palette actuelle **conservée** + 2 ajouts : `papier d'herbier` et `laiton patiné`.
- Typographies : **Fraunces** (titres) remplace Cormorant Garamond, **Karla** (texte) remplace Inter, **Courier Prime** (étiquettes, numéros) est ajoutée.
- Alternance de sections : fond sombre (forêt) / fond clair (papier) pour la section À propos.
- Titres de sections : « La collection » (projets), « À propos », « Correspondance » (contact).
- Hero : portrait de Léa dans un médaillon ovale (photo fournie par Léa, à placer dans `public/images/`).

## 2. Tokens à mettre dans `src/styles/tokens.css`

```css
/* Fonds */
--color-bg-deep: #0B1A14;      /* Forêt profonde — fond principal */
--color-bg-forest: #14251E;    /* Forêt — cartes, tiroirs */
--color-bg-surface: #1C3129;   /* Mousse — surfaces, survol */
--color-bg-paper: #EDE4CF;     /* NOUVEAU Papier d'herbier — sections claires */
--color-bg-paper-light: #F6F0E1; /* Fiche de catalogue (sur papier) */

/* Texte */
--color-text-primary: #E9E2D0;   /* Parchemin — texte sur sombre */
--color-text-secondary: #B8AE9C;
--color-text-ink: #14251E;       /* Texte sur papier */

/* Accents */
--color-accent-brass: #B89460;        /* Laiton — sur fond sombre uniquement */
--color-accent-brass-dark: #7A5A2E;   /* NOUVEAU Laiton patiné — liens/labels sur papier */
--color-accent-bordeaux: #6B2D3E;     /* Velours bordeaux — bouton principal */
--color-accent-bordeaux-hover: #7A3648;

/* Bordures */
--color-border-subtle: #2A4038;

/* Typo */
--font-display: 'Fraunces', Georgia, serif;
--font-body: 'Karla', system-ui, sans-serif;
--font-label: 'Courier Prime', 'Courier New', monospace;
```

### Contrastes vérifiés (WCAG AA)

| Texte / fond | Ratio |
|---|---|
| Parchemin `#E9E2D0` sur `#0B1A14` | 13,9:1 |
| Laiton `#B89460` sur `#0B1A14` | 6,3:1 |
| Secondaire `#B8AE9C` sur `#14251E` | 7,3:1 |
| Encre `#14251E` sur papier `#EDE4CF` | 12,7:1 |
| Laiton patiné `#7A5A2E` sur papier | 5:1 |
| Parchemin sur bordeaux `#6B2D3E` | 7,8:1 |

**Règle** : le laiton `#B89460` est interdit pour du texte sur papier (≈ 2:1). Sur papier, utiliser le laiton patiné.

## 3. Polices (Google Fonts)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Karla:wght@400;500;700&display=swap">
```

| Usage | Police | Détails |
|---|---|---|
| Nom (hero) | Fraunces italique 400 | `clamp(3.25rem, 8vw, 6.5rem)`, line-height 0.95 |
| Titres h2 | Fraunces 500, un mot en italique | `clamp(2.25rem, 4vw, 3rem)` — ex. « La *collection* » |
| Titres de cartes h3 | Fraunces 500 | 1.75rem |
| Texte courant | Karla 400 | 1rem, line-height 1.6–1.7 |
| Étiquettes, sur-titres, nav, numéros | Courier Prime 400 | 0.8–0.875rem, `text-transform: uppercase`, `letter-spacing: 0.14–0.18em` |
| Boutons, liens de cartes | Fraunces (liens en italique) | 1.05–1.1rem |

Piste perf à évaluer : auto-héberger les polices (ex. paquets Fontsource) pour éviter les requêtes vers Google.

## 4. Motifs récurrents

- **Rayures de papier peint** (hero, contact) :
  `background-image: repeating-linear-gradient(90deg, rgba(233,226,208,0.028) 0 2px, transparent 2px 30px);`
- **Filet ornemental** (séparateur) : deux traits laiton (1px, opacité 0.6) de part et d'autre d'un petit SVG décoratif (`aria-hidden="true"`) :
  ```html
  <svg width="64" height="16" viewBox="0 0 64 16" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><circle cx="6" cy="8" r="2"/><path d="M20 8 L32 2 L44 8 L32 14 Z"/><circle cx="58" cy="8" r="2"/></svg>
  ```
- **Double cadre laiton** : `border: 1px solid` + `outline: 1px solid` + `outline-offset: -8px` (ou -10px).
- **Plaque laiton** (labels) : bordure 1px laiton, fond `#0B1A14`, texte Courier majuscules, deux points laiton de 5px (« vis ») de chaque côté.
- **Étiquette** (tags techno) : fond papier, texte encre, Courier 0.8rem, petit trou rond à gauche, forme pointue :
  `clip-path: polygon(8px 0, 100% 0, 100% 100%, 8px 100%, 0 50%); padding: 3px 10px 3px 15px;`
- **Coins droits** : pas de `border-radius` sur cartes/boutons (look objet ancien). Seuls les médaillons et boutons de tiroir sont ronds/ovales.
- **Sépia léger** sur les images de projets (et la photo si souhaité) : `filter: sepia(0.18);`

## 5. Spécifications par section

### Header
- Monogramme « LS » dans un petit ovale (52×64px, `border-radius: 50%`, double cadre laiton, Fraunces italique, couleur laiton).
- Liens nav en Courier Prime majuscules, couleur parchemin, zone cliquable ≥ 44px. Libellés : La collection / À propos / Correspondance.
- Le burger mobile existant est conservé.

### Hero (fond sombre + rayures)
- Deux colonnes en `flex-wrap` : texte (`flex: 1 1 480px`) + médaillon. Sur mobile le médaillon passe sous le texte.
- Sur-titre Courier laiton : « Développeuse web · Cabinet de curiosités numériques ».
- h1 « Léa Spadea » en Fraunces italique.
- Sous-titre (couleur secondaire, max 34rem) : « De la maquette au code, je crée des interfaces web accessibles et performantes, avec le soin d'un objet fait main. »
- Boutons : principal bordeaux + bordure laiton « Voir la collection » (→ `#collection`), secondaire contour laiton « M'écrire une lettre » (→ `#contact`). Hauteur min 48px, padding 0 26px.
- **Médaillon portrait** : `<figure>` ; ovale 260×330px, `border: 2px solid` laiton, padding 10px, ovale intérieur bordure 1px laiton, photo en `object-fit: cover` + `border-radius: 50%`. `alt` descriptif (c'est porteur de sens : c'est Léa). Image WebP ~520×660px, `width`/`height` renseignés, **pas** de `loading="lazy"` (au-dessus de la ligne de flottaison).
- `<figcaption>` en plaque laiton : « Spécimen · 2026 ».

### La collection (projets, fond sombre)
- Filet ornemental, puis en-tête centré : sur-titre « Inventaire », h2 « La *collection* », phrase : « Une sélection de pièces réalisées pendant ma formation, chacune avec son numéro d'inventaire. »
- Grille : `repeat(auto-fit, minmax(300px, 1fr))`, gap 28px.
- **Carte spécimen** (`<article>`) : fond `#14251E`, bordure subtle, padding 14px ; image dans un cadre laiton 1px + padding 6px, `aspect-ratio: 600/340`, sépia ; numéro Courier laiton « N° 01 — SPÉCIMEN » ; h3 Fraunces ; description secondaire ; étiquettes ; liens Fraunces italique « Voir le site → » / « Voir le code → » séparés par un filet pointillé (`border-top: 1px dashed #2A4038`) et poussés en bas de carte (`margin-top: auto`).

### À propos (fond papier)
- Section fond `#EDE4CF`, texte encre, `border-top` et `border-bottom: 6px double #7A5A2E`.
- Deux colonnes `flex-wrap` :
  1. **Fiche de catalogue** : fond `#F6F0E1`, bordure `#C9BB9B`, ombre portée nette `6px 6px 0 #D8CBAD`, lignes d'écriture via `repeating-linear-gradient(0deg, transparent 0 31px, rgba(122,90,46,0.18) 31px 32px)` alignées sur `line-height: 2rem`. En-tête : h2 « À *propos* » + « FICHE N° 12 » en Courier laiton patiné, souligné par `2px solid` bordeaux. Bio actuelle inchangée.
  2. **Meuble à tiroirs** : label Courier « Le meuble à tiroirs » ; meuble fond `#14251E`, bordure laiton patiné, grille `auto-fit minmax(220px, 1fr)` de 4 tiroirs. Tiroir : fond `#1C3129`, cadre intérieur via `box-shadow: inset 0 0 0 5px #14251E, inset 0 0 0 6px #2A4038` ; plaque laiton avec le h3 (Front-end / Frameworks / Outils / Qualité) ; compétences en texte centré séparées par « · » ; bouton de tiroir décoratif (rond laiton 18px, `box-shadow: inset 0 0 0 3px #8C6E43`).

### Correspondance (contact, fond sombre + rayures)
- En-tête centré : sur-titre « Correspondance », h2 « Écrivez-moi *une lettre* ».
- **Carte postale** : fond papier, double cadre laiton (outline-offset -10px), padding 40px, deux colonnes `flex-wrap` séparées par un trait vertical.
  - Gauche : phrase Fraunces italique « Un projet, une question, une simple curiosité ? Ma boîte aux lettres est ouverte. » + liens GitHub / LinkedIn en Courier laiton patiné.
  - Droite : timbre décoratif « LS » (`aria-hidden`), puis formulaire Netlify existant. Labels Courier majuscules laiton patiné (Expéditeur / Adresse e-mail / Votre lettre), inputs transparents avec seulement une bordure basse (style ligne d'écriture), textarea bordée. Focus visible : `outline: 2px solid #6B2D3E; outline-offset: 2px`. Bouton bordeaux « Poster la lettre ».

### Footer
- Filet SVG laiton centré + « © 2026 Léa Spadea · Fait main » en Courier majuscules secondaire.

## 6. Points de vigilance

- **Accessibilité** : ornements SVG et timbre en `aria-hidden="true"` ; un seul h1 ; hiérarchie h2 → h3 respectée (h3 dans les tiroirs) ; cibles ≥ 44px ; `prefers-reduced-motion` toujours respecté.
- **Compatibilité** : `clip-path`, `outline-offset` négatif, `aspect-ratio`, `filter: sepia()` → OK Chrome et Firefox. Vérifier dans Firefox que `outline` suit bien les bords (il suit le `border-radius` depuis Firefox 88).
- **Mise à jour du `CLAUDE.md` du projet** : remplacer Cormorant/Inter par Fraunces/Karla/Courier Prime, ajouter papier d'herbier + laiton patiné et la règle « laiton patiné sur papier ».
- **W3C** : `<figure>`/`<figcaption>` pour le médaillon ; pas de `<div>` dans un `<p>`.
