# Arjun Varshney — Portfolio

A product manager's portfolio built as a product itself. Not a template — every feature exists because it demonstrates a PM skill.

**Live:** [arjunvportfolio.vercel.app](https://arjunvportfolio.vercel.app)

---

## What Makes This Different

Most PM portfolios are static resumes with a nice font. This one is a **living product** with its own UX decisions, interaction design, and information architecture — because the best way to prove you can build products is to build one.

### The Product Thinking Behind It

| Decision | Reasoning |
|----------|-----------|
| Typography-first hero (no gradients/particles) | First impression should communicate clarity, not visual noise |
| Bento grid homepage | Card sizes encode information hierarchy — visitors scan before they read |
| Horizontal case studies with sticky nav | Case studies are the core content — they deserve a dedicated reading experience |
| Boot screen on first visit | Sets the tone immediately. Skippable and session-stored so it never annoys |
| Editorial nav labels (Shipped/Story/Resume) | Verbs create curiosity. "Shipped" > "Work". "Story" > "About" |
| Monochrome color system | Color should come from content (project images, data), not chrome |
| AI-annotated resume | Resume bullet points are outcomes. The annotations show the thinking behind them |
| Decision log with pros/cons | PMs make trade-offs. Showing the options considered > just showing the choice |
| Triple-click retro terminal | Easter egg that doubles as a functional portfolio navigator |

---

## Architecture

```
/                     Landing page (hero + bento grid)
/work                 Projects, impact metrics, teardowns, skills
/about                Bio, adventures (draggable photos), content I consume, colophon
/resume               AI-annotated resume with Product Spec toggle
/mind                 Principles, frameworks, decisions, changed mind
/lab                  Experiments with status filters
/projects/[slug]      Scrollytelling case studies (10 projects)
```

### Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 16 (App Router) | SSG for performance, API routes, file-based routing |
| Language | TypeScript (strict) | Type-safe data layer — catches broken links at build time |
| Styling | Tailwind CSS v4 | Design tokens via CSS custom properties, zero runtime |
| Animation | Framer Motion | Declarative scroll animations, spring physics, layout transitions |
| Fonts | Bebas Neue + Inter + JetBrains Mono + Instrument Serif | Display / body / code / editorial — four fonts, four purposes |
| Deployment | Vercel | Zero-config, automatic preview URLs, edge functions |
| CI/CD | GitHub Actions | Lint + typecheck + build on every push |
| Toast | Sonner | 3KB, beautiful defaults |
| Confetti | canvas-confetti | 17KB, reduced-motion aware |

### Content Layer

All content lives in `src/lib/data.ts` — a single TypeScript file that serves as the "database." No CMS, no API calls, no build-time data fetching. Type-safe, instant, and trivially editable.

```
data.ts
├── siteConfig          Site metadata, socials, status
├── projects[]          10 projects with tags, thumbnails, competition badges
├── caseStudies[]       Scrollytelling content (Problem → Research → Decisions → Impact)
├── workExperience[]    Resume entries with [i] annotation commentary
├── skills              PM skills, tools, languages with proficiency levels
├── decisions[]         Trade-off log with options, pros/cons, outcomes
├── frameworks[]        PM frameworks (RICE, JTBD, MoSCoW, North Star)
├── teardowns[]         Product analyses (Splitwise SWOT)
├── principles[]        Operating principles
├── changedMindItems[]  Belief updates with reasoning
├── showerThoughts[]    Quick-hit opinions
├── impactMetrics[]     Quantified outcomes with animated counters
├── contentIConsume[]   YouTube channels
├── funFacts[]          Quick facts
├── achievements[]      Hackathon wins, scholarships
├── colophon            How this portfolio was built
└── resumeAsSpec        Career as a Product Spec (user stories)
```

---

## Features

### Core
- **10 scrollytelling case studies** — Problem → Research → Decisions → Solution → Impact → Reflections with sticky sidebar navigation
- **Impact metrics dashboard** — animated counters (48 instances, 95% latency reduction, 40+ interviews) filterable by category
- **AI-annotated resume** — click `[i]` icons for personal commentary behind each bullet point
- **Product Spec toggle** — switch resume between Classic and Product Spec view (with user stories)
- **Decision log** — expandable cards showing options, pros/cons, chosen approach, and lessons learned
- **Framework library** — RICE, JTBD, MoSCoW, North Star, User Story Mapping with steps and project links
- **Product teardowns** — structured SWOT analysis of real products

### Interactive
- **Boot screen** — terminal-style loading sequence on first visit (sessionStorage, skippable)
- **Command palette** — Cmd+K to navigate, toggle theme, copy email, open socials
- **Retro terminal** — triple-click anywhere to open a functional CLI with portfolio data
- **Draggable adventures** — polaroid photos with bounce physics constrained to canvas
- **Custom cursor** — ring follower with spring physics, scales on interactive elements
- **Text scramble** — hero name randomizes then resolves on load
- **Magnetic link** — CTA drifts toward cursor on hover
- **Thought cycling** — click to cycle through shower thoughts and belief changes
- **Copy email toast** — click to copy with Sonner notification

### Polish
- **Grain texture** — subtle SVG noise overlay for depth
- **Blur-to-sharp titles** — section headings animate from blurred to focused on scroll
- **Gradient text** — hero name with animated gradient shift
- **Scroll progress** — 2px bar at top of viewport
- **Animated link underlines** — expand left-to-right on hover
- **Console easter egg** — styled message in DevTools for curious inspectors

### Infrastructure
- **GitHub Actions CI** — lint + typecheck + build on every push/PR
- **SEO** — auto-generated robots.txt, sitemap.xml, Open Graph metadata
- **Security headers** — X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- **Accessibility** — WCAG AA contrast, focus-visible outlines, ARIA labels, keyboard navigation, prefers-reduced-motion
- **Performance** — static site generation, zero external API calls, no Three.js, ~200KB JS bundle

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    Landing page (Hero + BentoGrid)
│   ├── layout.tsx                  Root layout (fonts, providers, global components)
│   ├── work/page.tsx               Projects, metrics, teardowns, skills
│   ├── mind/page.tsx               Principles, frameworks, decisions
│   ├── lab/page.tsx                Experiments
│   ├── about/page.tsx              Bio, adventures, content, colophon
│   ├── resume/page.tsx             Annotated resume
│   └── projects/[slug]/page.tsx    Dynamic case study pages
├── components/
│   ├── Hero.tsx                    Text scramble hero
│   ├── BentoGrid.tsx               Homepage card grid
│   ├── Navigation.tsx              Always-visible nav with editorial labels
│   ├── CaseStudyView.tsx           Scrollytelling case study renderer
│   ├── CommandPalette.tsx          Cmd+K palette
│   ├── BootScreen.tsx              Terminal boot sequence
│   ├── KonamiWrapper.tsx           Retro terminal (triple-click)
│   ├── CustomCursor.tsx            Ring cursor follower
│   ├── bento/                      Homepage bento card components
│   └── case-study/                 Case study sub-components
├── hooks/
│   ├── useCountUp.ts               Animated number counter
│   ├── useCurrentTime.ts           IST time display
│   ├── useKonamiCode.ts            Triple-click detection
│   └── usePresentationMode.ts      Keyboard slideshow navigation
└── lib/
    └── data.ts                     All portfolio content
```

---

## Running Locally

```bash
git clone https://github.com/arrjunn/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Design Decisions

**Why no CMS?** All content in `data.ts` means type-safe content, zero API latency, and instant iteration. The trade-off (harder for non-devs to edit) is acceptable because I'm the only editor.

**Why no Three.js?** Started with a 3D terrain mesh hero. Removed it — added 200KB+ to the bundle for a visual that said "developer portfolio" not "PM portfolio." Typography carries more weight than decoration.

**Why monochrome?** Color should come from content (project screenshots, data visualizations), not from the UI chrome. A monochrome system forces every visual element to earn its place through hierarchy, not hue.

**Why horizontal case studies with sticky nav?** Case studies are the most important content on the site. A dedicated reading experience with progress tracking signals "this is worth your time" — the same way a well-formatted PRD signals "this person thinks clearly."

**Why a boot screen?** Sets the tone before a single pixel of content loads. Communicates: this person builds products with personality and attention to detail. Skippable because respecting user time is a PM principle.

---

## License

This is a personal portfolio. Feel free to reference the architecture and patterns, but please don't copy the content or claim it as your own.

Built by [Arjun Varshney](https://www.linkedin.com/in/arjun-varshney-/).
