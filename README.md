# PRAGEETH P. — CREATIVE PORTFOLIO

A bespoke, responsive personal portfolio website for **PRAGEETH P.**, Independent Graphic Designer & Visual Artist.

Designed and developed with a **Monochrome Editorial** direction blending Swiss brutalist typography, luxury fashion campaign art direction, and cinematic monochrome studio photography.

---

## 1. Overview & Visual Identity

- **Design Philosophy:** Monochrome Editorial & Brutalist Typography
- **Core Palette:** Strict high-contrast monochrome (Pure Black `#050505` / `#000000`, Off-White `#F7F7F7`, Muted Gray `#A8A8A8`, Hairline Borders `#222222`)
- **Typography:**
  - Display: `Anton` / `Bebas Neue` (Extremely condensed, oversized uppercase display)
  - Interface & Body: `Inter` / `Manrope` (Clean, modern Swiss sans-serif)
- **Portrait Styling:** Authentic studio photography of Prageeth in a formal black suit, white shirt, black tie, and pocket square with confident low-angle gaze and dramatic studio lighting.

---

## 2. Website Structure

1. **Page 01 — Home / Hero:**
   - Full viewport composition matching the approved reference design.
   - Oversized condensed typography `PRAGEETH P.` layered behind the portrait.
   - Centered foreground portrait of Prageeth with clean cutout and natural depth.
   - Supporting labels: `GRAPHIC DESIGNER & VISUAL ARTIST` and `CREATIVE PORTFOLIO`.
   - Bottom elements: Instagram link (left), `LET'S CREATE` arrow button (right).
   - Functional pill-shaped theme toggle (Dark / Light monochrome gallery modes).
2. **Page 02 — Selected Works:**
   - Filterable editorial portfolio showcase covering 6 core disciplines:
     1. Posters (`MONOCHROME FORM` — Swiss Brutalist Poster)
     2. Logo & Branding (`NOVÉ ARCHITECTS` — Architectural Identity)
     3. Social Media (`RAW URBAN | VOL. 01` — Editorial Grid Campaign)
     4. Motion Graphics (`KINETIC FLUIDITY` — 3D Chrome Liquid Typography)
     5. Typography (`ARCHETYPE SPECIMEN` — Brutalist Custom Typeface)
     6. Packaging Design (`AETERNA EAU DE PARFUM` — Luxury Tactile Packaging)
   - Interactive full-screen project presentation modal with keyboard navigation (`Esc`, `←`, `→`).
   - Dedicated project case study page (`pages/project.html?id=...`).
3. **Page 03 — About (Behind The Visuals):**
   - Designer portrait, biography, creative philosophy, core disciplines, and software toolkit.
4. **Page 04 — Services:**
   - Editorial list detailing 6 creative disciplines.
5. **Page 05 — Creative Process:**
   - Structured 4-phase workflow: `01 DISCOVER`, `02 CONCEPT`, `03 DESIGN`, `04 DELIVER`.
6. **Page 06 — Contact:**
   - Direct communication channels and interactive project inquiry form with feedback states.
7. **Page 07 — Footer:**
   - Editorial copyright, navigation links, and back-to-top trigger.

---

## 3. Technology Stack

- **HTML5:** Semantic architecture (`header`, `nav`, `main`, `section`, `footer`).
- **CSS3:** Modular design tokens, CSS Grid, Flexbox, `clamp()` fluid typography, and custom keyframes.
- **Vanilla JavaScript:** Zero bloated frameworks or dependencies. Clean modular ES6 classes for navigation, animations, and project interactions.
- **Responsive:** Fluid scaling tested across 1920px, 1440px, 1024px, 768px, 430px, 390px, and 360px viewports.
- **Accessibility:** Keyboard navigable, ARIA roles, visible focus outlines, and `prefers-reduced-motion` compliance.

---

## 4. Local Run Instructions

No build step or Node.js dependencies required. Run using any local HTTP static server:

### Option A: Python Built-in Server (Recommended)
```bash
# In the project directory:
python -m http.server 3000
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Option B: Node http-server or npx serve
```bash
npx -y serve .
```

### Option C: Direct File Opening
Double-click `index.html` to open directly in any modern browser.

---

## 5. File Structure

```text
prageeth-portfolio/
│
├── index.html                  # Main homepage with all 7 pages/sections
├── design.md                   # Approved visual design specification
├── SKILL.md                    # Implementation rules and quality specification
├── README.md                   # Project documentation & run instructions
│
├── .agent/
│   └── skills/
│       └── prageeth-portfolio/
│           └── SKILL.md
│
├── assets/
│   └── images/
│       ├── prageeth-portrait.webp              # Hero portrait cutout in suit
│       ├── about-portrait.webp                 # Editorial portrait in black turtleneck
│       ├── posters/
│       │   └── poster-monochrome-form.webp     # Swiss brutalist poster artwork
│       ├── branding/
│       │   └── branding-nove-architects.webp   # Architectural identity stationery
│       ├── social-media/
│       │   └── social-raw-urban.webp           # Editorial social grid campaign
│       ├── motion-graphics/
│       │   └── motion-kinetic-fluidity.webp    # 3D chrome liquid motion still
│       ├── typography/
│       │   └── typography-archetype.webp       # Brutalist font specimen
│       └── packaging/
│           └── packaging-aeterna.webp          # Luxury matte black fragrance packaging
│
├── css/
│   ├── style.css               # Design system tokens, typography, layout, modal
│   ├── responsive.css          # Device breakpoints (desktop to 360px mobile)
│   └── animations.css          # Cinematic reveals, keyframes, reduced-motion
│
├── js/
│   ├── main.js                 # Theme toggle, contact form, footer
│   ├── navigation.js           # Smooth scroll, active section tracker, mobile menu
│   ├── animations.js           # Hero entrance sequence, IntersectionObservers
│   └── projects.js             # Project data store, filter, full-screen modal
│
└── pages/
    └── project.html            # Standalone project case study page with deep-linking
```

---

## 6. Content Placeholders to Replace Before Final Production Launch

- Instagram: `https://www.instagram.com/21.seriesss?exln=NjB3azhsbWUydTZt` (`@21.seriesss`)
- Email: `prageeth0760@gmail.com`
- WhatsApp / Phone: `+91 9633866997` (`https://wa.me/919633866997`)
