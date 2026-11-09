# Jawad Ahmed | Portfolio

Personal portfolio website for **Jawad Ahmed**, an aspiring AI engineer and BS Computer Science student at Sukkur IBA University. It presents my skills, projects, experience and contact details in a single-page, frontend-only React application.

- **Live site:** https://portfolio-react-7f48.vercel.app/
- **Repository:** https://github.com/jawad-ahmed-developer/portfolio

## Features

- Single-page layout with six sections: Hero, About, Skills, Projects, Experience and Education, Contact
- Sticky navigation with smooth scrolling, an active-section indicator and a responsive mobile menu
- Content stored separately from presentation: projects, skills and experience are edited in data files, not in components
- Reusable project cards that hide optional parts (repository link, details link, image) when they are not set
- Mobile-first responsive layout built with CSS Grid and Flexbox
- Accessibility work: semantic HTML, a skip link, keyboard-operable navigation, visible focus states and support for `prefers-reduced-motion`
- No backend and no contact form: the Contact section links to email and social profiles directly, because a form without a server could not deliver messages

## Technology stack

| Area | Choice |
|---|---|
| UI library | React |
| Language | JavaScript (ES6+) |
| Build tool | Vite |
| Styling | CSS Modules for components, global CSS custom properties for design tokens |
| Icons | react-icons |
| Linting | ESLint |
| Version control | Git and GitHub |
| Hosting | Vercel |

## Architecture

The page is a single React tree. `App` composes a header, one component per section, and a footer. All content lives in `src/data/`, and presentation components receive it as props, so adding a project or a skill does not require touching component code.

```text
index.html
  └─ src/main.jsx          loads global styles, mounts <App />
       └─ src/App.jsx      Header → <main> sections → Footer
            ├─ components/layout   Header, Footer
            ├─ sections            Hero, About, Skills, Projects, Experience, Contact
            ├─ components/ui       Section, SectionHeading, Button, Tag, SocialLinks
            ├─ data                content modules (no JSX)
            └─ hooks               useActiveSection (scroll tracking for the nav)
```

Key decisions:

- **Sections and shared components are separate.** `components/ui` holds generic building blocks that know nothing about the portfolio's content. `sections` holds one folder per page section. Components used by only one section, such as `ProjectCard`, stay inside that section's folder.
- **One source of section ids.** `data/navigation.js` defines the ids and labels that the header, the footer and the scroll-tracking hook all read.
- **No router and no global state.** The site is one page, so anchor links and CSS smooth scrolling are enough. The only shared state, the active section, is handled by a custom hook inside the header.
- **Scoped styles.** Each component has a `*.module.css` file, and the design tokens (colors, type scale, spacing, radii) are defined once in `src/styles/tokens.css`.

## Directory structure

```text
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── images/              # profile photo and project images, when added
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header/
│   │   │   └── Footer/
│   │   └── ui/
│   │       ├── Button/
│   │       ├── Section/
│   │       ├── SectionHeading/
│   │       ├── SocialLinks/
│   │       └── Tag/
│   ├── data/
│   │   ├── about.js
│   │   ├── experience.js
│   │   ├── navigation.js
│   │   ├── profile.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── hooks/
│   │   └── useActiveSection.js
│   ├── sections/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Experience/
│   │   ├── Hero/
│   │   ├── Projects/
│   │   └── Skills/
│   ├── styles/
│   │   ├── base.css
│   │   └── tokens.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## Updating the content

| To change | Edit |
|---|---|
| Name, title, intro, email, GitHub, LinkedIn | `src/data/profile.js` |
| About text and interests | `src/data/about.js` |
| Skills | `src/data/skills.js` |
| Projects | `src/data/projects.js` |
| Experience and education | `src/data/experience.js` |
| Navigation items | `src/data/navigation.js` |

Contact details and links that are set to `null` are not displayed, so the site never shows an empty or fabricated link.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (current LTS version recommended) and npm
- Git

### Installation

```bash
git clone https://github.com/jawad-ahmed-developer/portfolio.git
cd portfolio
npm install
```

### Local development

```bash
npm run dev
```

Open the local address printed in the terminal (usually `http://localhost:5173`).

### Other scripts

| Command | Purpose |
|---|---|
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Serve the production build locally (usually `http://localhost:4173`) |

## Production build

```bash
npm run build
npm run preview
```

`npm run build` writes the optimized site to `dist/`. `npm run preview` serves that output locally so you can check it before deploying.

## Deployment

The site is hosted on [Vercel](https://vercel.com/) and connected to this GitHub repository. Pushing to the `main` branch triggers a new production deployment automatically. Pushes to other branches produce preview deployments.

Vercel build settings: framework preset **Vite**, build command `npm run build`, output directory `dist`.

## Author

**Jawad Ahmed**: [GitHub](https://github.com/jawad-ahmed-developer)
