---
name: prageeth-portfolio-builder
description: Build and finish Prageeth P.'s responsive monochrome graphic-design portfolio using the supplied design.md and portrait assets. Use when implementing, refining, testing, or completing this portfolio in Google Antigravity.
---

# Prageeth P. Portfolio — Implementation Skill

## Mission

Complete the production-ready personal portfolio website for **Prageeth P.**, an independent graphic designer and visual artist.

The approved visual target is the black-and-white hero reference already supplied in the project. The detailed design specification is in `design.md`. Treat that file as the primary design contract.

Build with **vanilla HTML, CSS, and JavaScript**. Do not introduce React, Vue, Astro, a backend, a database, or a build system unless the user explicitly changes the requirement.

## Required first actions

1. Inspect the entire project folder before editing.
2. Read `design.md` completely.
3. Identify all existing portrait and portfolio assets. Reuse the supplied portrait asset where available.
4. Inspect the image dimensions, transparency, crop, and quality before choosing how to position it.
5. Preserve existing working code and assets. Do not overwrite or delete user files without a clear reason.
6. If the portrait asset is missing, ask the user to provide it. Do not substitute a stock person or generate an unrelated face.

## Design contract

The first viewport must closely match the approved reference:

- Full-screen near-black background.
- Minimal top navigation: `PRAGEETH P.`, `Home`, `About`, `Work`, `Contact`.
- Small pill-shaped theme control only if it is functional; otherwise omit it.
- Huge, bold, condensed white `PRAGEETH P.` lettering across the hero.
- The portrait is centered, layered in front of the large name, and is the main focal point.
- Portrait styling: monochrome, dramatic studio lighting, low-angle/confident pose, black formal suit, white shirt, black tie.
- Supporting labels: `GRAPHIC DESIGNER & VISUAL ARTIST` at lower left and `CREATIVE PORTFOLIO` at lower right.
- Instagram and Behance links at the bottom-left.
- `LET'S CREATE` contact link at the bottom-right.
- Keep the interface sparse. No orange gradients, colourful cards, generic agency layouts, decorative clutter, or unnecessary sections in the hero.

Use the supplied image of Prageeth as the identity reference. Preserve his recognizable facial appearance. Do not change his identity, hairstyle, skin tone, or facial structure. If the supplied portrait is not already dressed in the desired suit, use the approved generated suit portrait if it exists in the project assets; otherwise ask before creating or substituting a new image.

## Implementation requirements

### Structure

Use semantic HTML:

- `header` for the navigation.
- `nav` for navigation links.
- `main` for page content.
- `section` for hero, work, about, and contact.
- `footer` for final links and copyright.

Suggested files:

```text
index.html
design.md
assets/
  prageeth-portrait.webp
  projects/
css/
  style.css
js/
  main.js
```

Adapt to the existing repository structure if one already exists. Do not duplicate files or create a second app inside the project.

### Hero composition

- Use CSS positioning and z-index to layer the name behind the portrait.
- The portrait must not obscure the face with text.
- Use `object-fit: contain` for a transparent portrait cutout.
- If the portrait has a solid black background, blend it into the hero and crop carefully.
- Set a sensible `max-width` on the portrait and use responsive `clamp()` values for typography.
- Keep the hero visually balanced at 1920px, 1440px, 1024px, 768px, 390px, and 360px viewport widths.
- Avoid horizontal overflow and accidental clipping of the name.

### Responsive behavior

Desktop:
- Wordmark left, navigation centered, functional toggle or no toggle on the right.
- Large single-line name where space permits.
- Portrait centered and prominent.
- Supporting labels aligned along the lower hero baseline.

Mobile:
- Wordmark and accessible menu button in the header.
- Navigation opens/closes with a real button and keyboard support.
- Recompose the name into one or two lines.
- Keep the portrait's face visible and avoid overlapping the face with text.
- Move supporting labels and social/contact links into a readable layout.
- Respect safe-area insets.
- No horizontal scrolling.

### Typography and colour

Use a restrained monochrome palette:

- Background: `#050505`
- Main text: `#F7F7F7`
- Secondary text: `#B8B8B8`
- Subtle separators: `rgba(255,255,255,.18)`

Use a condensed display font such as Bebas Neue or Anton for the large name, with a clean sans-serif such as Inter or Manrope for navigation and labels. Include sensible system fallbacks. Do not let font loading cause layout shifts.

### Interactions

Use lightweight vanilla JavaScript only.

- Smooth, subtle entrance animation for header, name, portrait, and labels.
- Small hover/focus response on navigation and CTA.
- Contact CTA must open the correct contact destination once supplied.
- Mobile menu must work with mouse, touch, and keyboard.
- If a theme toggle is shown, it must actually switch themes and expose its state accessibly.
- Respect `prefers-reduced-motion: reduce`.
- No long preloader, fake loading screen, custom cursor, or scroll-jacking.

### Portfolio content

Create a selected-work section after the hero. Use real work supplied by the user. Categories:

1. Posters
2. Logo & Branding
3. Social Media Designs
4. Motion Graphics
5. Typography
6. Packaging Design

Do not invent clients, testimonials, awards, years, project counts, or business relationships. If project assets or details are not supplied, create clearly labelled placeholders in code and tell the user what content is still required. Do not present placeholder content as real completed work.

### Contact and social links

Use placeholders until the real destinations are supplied:

- `[INSTAGRAM_URL]`
- `[BEHANCE_URL]`
- `[EMAIL_ADDRESS]`
- `[WHATSAPP_NUMBER]`

Do not invent URLs, email addresses, or phone numbers. Make placeholders easy to locate and replace.

## Quality requirements

- The result must be a functioning website, not just a static mockup.
- All navigation links must point to valid page sections or real pages.
- All buttons and controls must work.
- Use descriptive image alt text.
- Use visible keyboard focus styles.
- Use lazy loading for below-the-fold project images, but not for the hero portrait.
- Set image dimensions or aspect ratios to reduce layout shift.
- Compress large images to WebP or AVIF when possible, retaining the originals.
- Add a meaningful page title, meta description, favicon placeholder, and Open Graph metadata.
- Keep JavaScript minimal and avoid unnecessary dependencies.
- Do not add fake testimonials or fabricated statistics.

## Work process

Follow this sequence and complete each phase before moving on:

### Phase 1 — Audit
- Inspect files and assets.
- Read `design.md`.
- Identify the best portrait source.
- Report missing essential assets or contact details.

### Phase 2 — Hero
- Implement the header and hero composition first.
- Match the reference image closely.
- Test the portrait/name overlap and responsive behavior.
- Do not build lower sections until the hero is visually correct.

### Phase 3 — Remaining sections
- Add selected work using supplied project assets.
- Add concise About and Contact sections.
- Keep the same monochrome visual language.

### Phase 4 — Motion and accessibility
- Add restrained animations and hover states.
- Add reduced-motion support.
- Test keyboard navigation and mobile menu behavior.

### Phase 5 — Validation
- Run the project locally using the simplest available method.
- Check browser console errors.
- Test at 1920, 1440, 1024, 768, 390, and 360px widths.
- Check for overflow, broken images, missing links, and layout shifts.
- Fix all issues found.

### Phase 6 — Handover
- Summarize what was implemented.
- List files created or changed.
- List any remaining user-provided items, such as actual project images or social links.
- Give exact local run instructions.
- Do not claim deployment unless it was actually completed.

## Definition of done

The project is complete only when:

1. The hero closely matches the approved reference.
2. The supplied portrait is used and remains recognizable.
3. The oversized `PRAGEETH P.` text is behind the portrait.
4. Desktop and mobile layouts are both polished and usable.
5. The work, about, and contact sections are implemented without fabricated claims.
6. All visible controls work.
7. No horizontal overflow, broken images, or console errors remain.
8. The website can be run locally using the documented instructions.
9. Remaining placeholders and required user inputs are clearly reported.

**Priority rule:** When a design decision conflicts with this skill, follow `design.md` and the approved reference image. When implementation convenience conflicts with visual fidelity, preserve the approved visual design and find a better implementation.
