# PRAGEETH P. --- Portfolio Website Design Specification

**Document:** `design.md`\
**Project:** Personal graphic design portfolio\
**Design reference:** The supplied black-and-white PRAGEETH P. hero
reference\
**Implementation:** Vanilla HTML, CSS, and JavaScript\
**Design direction:** Monochrome editorial / brutalist typography /
cinematic portrait

------------------------------------------------------------------------

## 1. Project objective

Create a responsive, single-page portfolio website for **Prageeth P.**,
an independent graphic designer and visual artist.

The website must closely follow the supplied reference image:

-   Full-screen, pure-black hero composition.
-   Minimal top navigation.
-   Huge, condensed, uppercase white name typography behind the
    portrait.
-   A centered, low-angle portrait of Prageeth wearing a black formal
    suit, white shirt, and black tie.
-   Monochrome, high-contrast photographic treatment.
-   Small supporting labels beneath the large name.
-   Instagram and Behance links at the bottom-left.
-   A "LET'S CREATE" contact link at the bottom-right.

The portrait and typography are the main visual elements. Do not add
unnecessary cards, gradients, decorative illustrations, bright accent
colours, or generic agency-style sections to the hero.

## 2. Design principles

1.  **Reference fidelity:** Preserve the layout, hierarchy, spacing, and
    visual mood of the supplied reference.
2.  **Portrait first:** The person must remain the focal point. Do not
    cover the face with text.
3.  **Typography first:** The oversized name should span most of the
    viewport width.
4.  **Minimal interface:** Use only essential navigation and supporting
    labels.
5.  **High contrast:** Use near-pure black and clean white.
6.  **Responsive composition:** Recompose the hero for phones rather
    than simply shrinking the desktop layout.
7.  **Performance:** Use a properly cropped, compressed portrait image
    and lightweight vanilla JavaScript.

## 3. Visual system

### Colour palette

  Token       Value                     Usage
  ----------- ------------------------- ---------------------------
  `--black`   `#050505`                 Page and hero background
  `--white`   `#F7F7F7`                 Main typography and icons
  `--muted`   `#B8B8B8`                 Secondary labels
  `--line`    `rgba(255,255,255,.18)`   Subtle separators
  `--focus`   `#FFFFFF`                 Keyboard focus outline

Do not introduce an accent colour in the hero.

### Typography

Use locally hosted fonts if available. Suggested web fonts:

-   Display: **Bebas Neue** or **Anton** for the oversized name.
-   Navigation and labels: **Inter** or **Manrope**.
-   Use a heavy weight for the display name and medium weight for
    navigation.

Typography characteristics:

-   Display name: uppercase, very bold, condensed, tight line-height,
    slightly negative letter spacing.
-   Navigation: 15--17px on desktop, medium weight.
-   Supporting labels: 12--14px, uppercase, modest letter spacing.
-   Social labels and CTA: 14--16px, medium weight.

Use a sensible system-font fallback if external fonts are unavailable.

## 4. Page structure

The first screen is the main experience. The page may continue below the
hero with a selected-work section, but the hero must remain visually
faithful to the reference.

``` text
<body>
  <header class="site-header">
    <a class="wordmark">PRAGEETH P.</a>
    <nav class="main-nav">
      <a>Home</a>
      <a>About</a>
      <a>Work</a>
      <a>Contact</a>
    </nav>
    <button class="theme-toggle">...</button>
  </header>

  <main>
    <section class="hero" id="home">
      <h1 class="hero-name">PRAGEETH P.</h1>
      <img class="hero-portrait" src="assets/prageeth-portrait.webp" />
      <p class="hero-role">GRAPHIC DESIGNER &amp; VISUAL ARTIST</p>
      <p class="hero-caption">CREATIVE PORTFOLIO</p>
      <div class="hero-socials">...</div>
      <a class="hero-contact">LET'S CREATE</a>
    </section>

    <section class="work" id="work">
      <!-- Real portfolio projects -->
    </section>
  </main>
</body>
```

## 5. Desktop hero layout

Target reference viewport: approximately 1400 × 1050px. The design must
also work at 1920 × 1080 and common laptop sizes.

### Header

-   Position at the top of the hero, with approximately 4% horizontal
    page padding.
-   Wordmark aligned left: `PRAGEETH P.`
-   Navigation centered horizontally: Home, About, Work, Contact.
-   A small pill-shaped toggle at the far right, matching the reference.
-   Keep the header visually quiet; do not place it inside a large
    opaque bar.
-   Header height: approximately 90--110px on large desktop screens.

### Oversized name

-   Text: `PRAGEETH P.`
-   Position across the central area of the hero.
-   Use a very large condensed font, approximately
    `clamp(6rem, 21vw, 19rem)`.
-   Keep it on one line on wide screens.
-   Center it horizontally and vertically behind the portrait.
-   Use a high stacking order for the text only where it does not
    obscure the face; the portrait must sit above the name.
-   Avoid clipping important letters at the viewport edges.

### Portrait

-   Use the supplied/generated portrait asset showing Prageeth in a
    formal black suit, white shirt, and black tie.
-   The portrait should be a transparent-background cutout if possible.
    If the source image has a black background, it should blend
    seamlessly into the hero.
-   Place it horizontally centered, slightly below the vertical
    midpoint.
-   Show the head, shoulders, and upper torso; allow the lower torso to
    extend toward the bottom edge.
-   Use `object-fit: contain` for a transparent cutout. Use
    `object-fit: cover` only if the image itself has a suitable black
    background and crop.
-   Keep the face unobstructed.
-   Add no artificial face reshaping or identity changes.
-   Desktop portrait width: approximately 58--72vw, with a maximum width
    around 1050px.
-   Use a subtle monochrome/contrast treatment only if needed; do not
    over-sharpen.

### Supporting labels

-   Bottom-left under the name: `GRAPHIC DESIGNER & VISUAL ARTIST`
-   Bottom-right under the name: `CREATIVE PORTFOLIO`
-   Align both labels along the same baseline.
-   Use uppercase white text with modest letter spacing.

### Bottom controls

-   Bottom-left: Instagram icon/link and Behance icon/link.
-   Bottom-right: right arrow followed by `LET’S CREATE`.
-   Use real profile URLs once supplied. Until then, use clearly marked
    placeholders in the source code.
-   Ensure icons have accessible labels.

## 6. Mobile layout

Do not attempt to fit the full desktop composition into a narrow screen.

At widths below 768px:

-   Header: wordmark on the left and a menu button on the right.
-   Hide the full desktop navigation and show an accessible menu.
-   Display the name across one or two lines depending on available
    width.
-   Keep the portrait centered and large, with the face visible.
-   Move the supporting labels below the name or into a compact
    two-column row.
-   Place social links and the contact CTA in a clear bottom row.
-   Avoid horizontal scrolling.
-   Use a minimum hero height of `min-height: 100svh`.
-   Respect mobile safe-area insets.

Suggested mobile display size: `clamp(4rem, 17vw, 8rem)`.

## 7. Below-the-fold content

The reference image focuses on the hero. Keep the first viewport clean.
Add the following sections only after the hero:

### Selected work

A dark or off-white section containing real projects. Use a restrained
editorial grid with large images and small metadata.

Categories:

1.  Posters
2.  Logo & Branding
3.  Social Media Designs
4.  Motion Graphics
5.  Typography
6.  Packaging Design

Each project card should include:

-   Project image or motion preview.
-   Project title.
-   Category.
-   Year, if known.
-   A link to a project detail view or external case study.

Do not fabricate clients, testimonials, project counts, or awards.

### About

A short biography, a portrait or detail image, design interests, and
tools/skills only when confirmed by Prageeth.

### Contact

Provide email, Instagram, Behance, and WhatsApp links when the real
details are available. Use a clear `LET'S CREATE SOMETHING` call to
action.

## 8. Interaction and animation

Keep motion restrained and purposeful.

-   On initial load, fade in the header.
-   Reveal the oversized name with a short opacity/vertical movement
    animation.
-   Reveal the portrait with a subtle upward movement and opacity
    transition.
-   Supporting labels fade in slightly after the portrait.
-   Navigation links receive a simple opacity or underline hover state.
-   The contact link shifts its arrow slightly on hover.
-   Respect `prefers-reduced-motion: reduce`.
-   Do not use a long preloader.
-   Do not add a custom cursor unless it has a clear usability benefit.

The theme toggle shown in the reference must either work as a real theme
control or be omitted. Do not display a non-functional control.

## 9. Accessibility

-   Use semantic `header`, `nav`, `main`, `section`, and `footer`
    elements.
-   Provide meaningful `alt` text for the portrait and project images.
-   Ensure every interactive element is keyboard accessible.
-   Add visible focus states.
-   Maintain sufficient text contrast.
-   Give icon-only links accessible names.
-   Use a real button for the mobile menu and theme toggle.
-   Respect reduced-motion preferences.

## 10. Performance and SEO

-   Export the portrait as WebP or AVIF.
-   Prefer a transparent WebP/PNG portrait cutout for the cleanest
    layering.
-   Provide explicit image width and height to prevent layout shift.
-   Lazy-load below-the-fold project images.
-   Do not lazy-load the main hero portrait.
-   Keep JavaScript minimal.
-   Add page title: `Prageeth P. — Graphic Designer & Visual Artist`.
-   Add a concise meta description.
-   Add Open Graph title, description, and preview image.
-   Add a favicon using Prageeth's initials or approved mark.

## 11. Suggested file structure

``` text
prageeth-portfolio/
├── index.html
├── design.md
├── assets/
│   ├── prageeth-portrait.webp
│   ├── project-poster.webp
│   ├── project-branding.webp
│   ├── project-social.webp
│   ├── project-motion.webp
│   ├── project-typography.webp
│   └── project-packaging.webp
├── css/
│   └── style.css
└── js/
    └── main.js
```

For a simple static portfolio, no framework or backend is required.

## 12. Implementation checklist

### Before coding

-   [ ] Use the approved reference image as the visual target.
-   [ ] Prepare a high-resolution portrait of Prageeth in the required
    suit and pose.
-   [ ] Prefer a transparent cutout with clean hair and shoulder edges.
-   [ ] Confirm Instagram and Behance URLs.
-   [ ] Collect real portfolio images.

### Build

-   [ ] Create the black page background.
-   [ ] Implement the minimal header.
-   [ ] Add the oversized condensed name.
-   [ ] Layer the portrait in front of the name.
-   [ ] Add the role and portfolio labels.
-   [ ] Add social links and contact CTA.
-   [ ] Build the responsive mobile composition.
-   [ ] Add restrained entrance and hover animations.
-   [ ] Build the selected-work section.

### Validate

-   [ ] Compare desktop output against the supplied reference.
-   [ ] Test at 1440px, 1024px, 768px, 390px, and 360px widths.
-   [ ] Confirm the face is never covered by text.
-   [ ] Confirm there is no horizontal overflow.
-   [ ] Test keyboard navigation and reduced motion.
-   [ ] Check image loading and page performance.
-   [ ] Verify all links and buttons work.

## 13. Acceptance criteria

The implementation is complete when:

1.  The first screen clearly resembles the supplied black-and-white
    reference.
2.  The correct person is represented by the supplied portrait asset.
3.  The suit, tie, low-angle composition, and confident expression are
    preserved in the portrait.
4.  The large `PRAGEETH P.` typography sits behind the portrait.
5.  The page contains only the minimal navigation and supporting labels
    in the hero.
6.  Desktop and mobile layouts both work without clipping or horizontal
    scrolling.
7.  All visible controls perform real actions.
8.  Project content uses Prageeth's actual work and verified details.

------------------------------------------------------------------------

## 14. Content placeholders to replace

Before launch, replace these placeholders with confirmed information:

-   `[INSTAGRAM_URL]`
-   `[BEHANCE_URL]`
-   `[EMAIL_ADDRESS]`
-   `[WHATSAPP_NUMBER]`
-   `[ABOUT_BIO]`
-   `[PROJECT_IMAGES]`

**Final direction:** Reproduce the supplied reference closely. Keep the
hero monochrome, typography oversized, portrait centered and layered in
front, and the interface minimal. The designer's face and name should
carry the composition.
