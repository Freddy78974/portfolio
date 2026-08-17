# Portfolio — Jean-Frédéric Nangy

Portfolio personnel : [freddy78974.github.io/portfolio](https://freddy78974.github.io/portfolio/)

Site statique Next.js présentant mon profil **Software & AI Solution Design** — conception et architecture logicielle, ingénierie assistée par IA (Claude Code), design de produits numériques — mes compétences, mes projets techniques (SynapNCore, GestFinFam, EditLetter) et un formulaire de contact.

## Stack technique

| Domaine | Choix |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (Pages Router, export statique) |
| UI | React 18 |
| Icônes | [react-icons](https://react-icons.github.io/react-icons/) (Simple Icons, Remix Icons, VS Code Icons, Heroicons) |
| Styles | CSS Modules (pas de framework CSS) |
| Tests unitaires / intégration | Jest + React Testing Library |
| Tests end-to-end | Cypress |
| CI/CD | GitHub Actions → GitHub Pages |

Le site est entièrement statique (`output: 'export'` dans `next.config.js`) : aucun serveur Node n'est nécessaire en production, tout est pré-généré en HTML/CSS/JS et servi par GitHub Pages.

## Démarrage

**Prérequis** : Node.js ≥ 20.9.0 (imposé par Next.js 16 et Cypress 15 — voir le champ `engines` de `package.json`).

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts disponibles

| Script | Description |
|---|---|
| `npm run dev` | Serveur de développement Next.js |
| `npm run build` | Build + export statique (génère le dossier `out/`) |
| `npm start` | Lance `next start` (non utilisé en production, le site est exporté statiquement) |
| `npm test` | Tests unitaires et d'intégration (Jest) |
| `npm run test:watch` | Jest en mode watch |
| `npm run test:coverage` | Jest avec rapport de couverture |
| `npm run test:e2e` | Ouvre Cypress en mode interactif |
| `npm run deploy` | Déploiement manuel sur GitHub Pages via `gh-pages` (le déploiement normal passe par la CI, voir plus bas) |

## Structure du projet

```
components/            Composants React (un par section de page)
  Header.js               Hero : titre, panneau terminal animé, CTA
  Profile.js               À propos + compétences (fusionnés), fiche technique par domaine
  Projects.js               Grille de projets — masquée tant que src/data/projects.js est vide
  ContactForm.js            Formulaire de contact (mailto:) + téléchargement du CV
  NavBar.js                 Navigation (liens générés dynamiquement selon le contenu)
  Footer.js                 Liens sociaux, retour en haut de page
  ScrollObserver.js          Apparition des sections au scroll (IntersectionObserver)

src/
  pages/
    _app.js                  Layout global, fond animé
    _document.js              <html>/<head> statique
    index.js                   Page unique, assemble les composants + meta SEO/Open Graph
  hooks/
    useTypingEffect.js         Effet de frappe (utilisé dans le panneau terminal du hero)
  data/
    projects.js                 Source de vérité des projets affichés (voir ci-dessous)
  styles/
    globals.css                  Palette, tokens CSS (--bg, --accent, --font-mono…), fond animé
    *.module.css                 Un module CSS par composant

public/assets/            Images, documents (dont le CV), assets statiques servis tels quels

cv-source/               Source éditable du CV (hors public/, non publiée)
  CV.html                    Gabarit HTML/CSS du CV — voir "Mettre à jour le CV"
  CV-2025-original-backup.pdf Sauvegarde de l'ancien CV avant refonte

__tests__/               Tests Jest (unit + integration)
cypress/e2e/              Tests end-to-end Cypress
.github/workflows/         CI/CD (build, tests, déploiement)
```

## Ajouter un projet

La section "Projets" est déjà construite mais reste masquée (et le lien de menu correspondant absent) tant qu'aucun projet n'est déclaré. Pour en ajouter un, éditer `src/data/projects.js` :

```js
const projects = [
  {
    name: 'Nom du projet',
    description: 'Description courte.',
    image: 'assets/images/projects/mon-projet.png', // optionnel
    tags: ['Next.js', 'Node.js'],
    repoUrl: 'https://github.com/...',              // optionnel
    demoUrl: 'https://...'                           // optionnel
  }
];
```

La section `#projects` et le lien "Projets" du menu apparaissent automatiquement dès que le tableau contient au moins un élément — aucune autre modification n'est nécessaire.

## Mettre à jour le CV

Le CV servi par le site (`public/assets/documents/CV.pdf`, référencé dans `Header.js` et `ContactForm.js`) est généré à partir d'une source HTML éditable :

1. Modifier `cv-source/CV.html` (contenu + mise en page, CSS d'impression inclus dans le fichier — format A4).
2. Régénérer le PDF avec Chrome en mode headless :

   ```bash
   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
     --headless --disable-gpu --no-sandbox \
     --print-to-pdf="public/assets/documents/CV.pdf" \
     --print-to-pdf-no-header --no-pdf-header-footer \
     "file://$(pwd)/cv-source/CV.html"
   ```

3. Vérifier le rendu (nombre de pages, absence de débordement, texte bien sélectionnable) avant de committer.

## Tests

```bash
npm test          # Jest (unitaires + intégration)
npm run test:e2e  # Cypress, nécessite le site lancé (npm run dev ou build + serve)
```

La CI (voir plus bas) exécute les deux à chaque push sur `main`.

## Déploiement

Le déploiement est automatique via `.github/workflows/deploy.yml` à chaque push sur `main` :

1. Installation des dépendances (`npm ci`)
2. Tests unitaires (`npm test`)
3. Build + export statique (`npm run build`)
4. Tests Cypress sur le site exporté
5. Déploiement du dossier `out/` sur GitHub Pages

Le site est servi sous `https://freddy78974.github.io/portfolio/` — `basePath`/`assetPrefix` sont donc fixés à `/portfolio` en production dans `next.config.js` (vide en développement local).

Un déploiement manuel reste possible via `npm run deploy` (package `gh-pages`), mais le flux normal passe par la CI ci-dessus.
