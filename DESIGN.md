---
name: Tulipán café
description: Dark, warm specialty-coffee storefront: espresso canvas, caramel accents, serif headlines with a handwritten touch.
colors:
  espresso: "#1a1412"
  roast: "#3a2418"
  bronze: "#6b3f25"
  caramel: "#c98b4b"
  cream: "#f3e6d3"
  ivory: "#f8f1e7"
  paper: "#faf5ec"
  ink: "#2b1b13"
  olive: "#6b7f3a"
  olive-soft: "#a9c06a"
  tulip: "#b93a2e"
  tulip-soft: "#ee8b7d"
  tulip-deep: "#3b1218"
typography:
  display:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "clamp(44px, 7vw, 84px)"
    fontWeight: 400
    lineHeight: 1
  headline:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "clamp(28px, 3.5vw, 40px)"
    fontWeight: 400
  title:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "22px"
    fontWeight: 400
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
  script:
    fontFamily: "Reenie Beanie, cursive"
    fontSize: "28px"
    fontWeight: 600
rounded:
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  gutter: "clamp(20px, 5vw, 64px)"
  sm: "12px"
  md: "20px"
  lg: "60px"
components:
  button-primary:
    backgroundColor: "{colors.caramel}"
    textColor: "{colors.espresso}"
    rounded: "{rounded.md}"
    padding: "16px 28px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.espresso}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ivory}"
    rounded: "{rounded.md}"
    padding: "16px 28px"
    height: "52px"
  pill:
    textColor: "{colors.ivory}"
    rounded: "{rounded.full}"
    padding: "10px 18px"
    height: "44px"
  pill-selected:
    backgroundColor: "{colors.caramel}"
    textColor: "{colors.espresso}"
  product-card:
    backgroundColor: "{colors.roast}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.lg}"
    padding: "20px"
  input:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
    height: "52px"
---

# Design System: Tulipán café

## Overview

**Creative North Star: "The Night Roastery"**

A dark room lit by the glow of the roaster. Everything sits on a deep espresso canvas; caramel is the single warm light that tells you where to act. Headlines are set in a high-contrast display serif, with a handwritten script accent (Reenie Beanie) kept to the logo like a signature on a bag. The mood is intimate, hand-made and unhurried, not clinical or startup-slick.

Density is relaxed: generous section padding, short lines, one idea per band. Surfaces are tonal (espresso → roast → bronze) rather than bordered or glassy. Product packaging is currently a striped placeholder, so the system leans on type and color, not imagery, for character.

**Key Characteristics:**
- Dark-first: espresso page, roast cards, bronze for bands and borders.
- One accent (caramel) for actions, prices and selected states.
- Serif display + friendly sans body + occasional script flourish.
- Soft 8–12px corners, solid fills, gentle hover lift.

## Colors

A coffee-derived, warm-brown palette: near-black roast tones, one caramel accent, cream/ivory text, and a single olive for positive feedback.

### Primary
- **Caramel** (`colors.caramel`, #c98b4b): primary buttons, prices, links, selected pills, cart count badge, progress bar, script accent.

### Secondary
- **Tulip Red** (`colors.tulip`, #b93a2e): the brand's second voice. Announcement bar and product tag chips (ivory text). **Tulip Deep** (#3b1218) is the Story band surface; **Tulip Soft** (#ee8b7d) marks invalid input.
- **Olive Leaf** (`colors.olive`, #6b7f3a) and **Olive Soft** (#a9c06a): success and savings (toast, subscription discount, free-shipping reached).

### Neutral
- **Espresso** (`colors.espresso`, #1a1412): page background, header, drawer, input fields, text on caramel.
- **Roast** (`colors.roast`, #3a2418): cards, mobile menu, header border, cart items, progress track.
- **Bronze** (`colors.bronze`, #6b3f25): newsletter band, outlined controls, dividers.
- **Cream** (`colors.cream`, #f3e6d3): secondary text, hover fill on primary, outline-button border, tag chips.
- **Ivory** (`colors.ivory`, #f8f1e7): default body text.
- **Paper** (#faf5ec) and **Ink** (#2b1b13): currently unused; the page no longer has a beige band.

### Named Rules
**The No Beige Band Rule.** Large surfaces are espresso, roast, tulip-deep or caramel, never cream or paper.

### Named Rules
**The One Flame Rule.** Caramel is the only action color; tulip red is for emphasis and tags, never buttons. If two things on a screen glow caramel, one of them is wrong; it marks the action, the price, or the selection.

**The Tinted Dark Rule.** No pure black or pure white. Darks are brown-tinted (espresso, roast); lights are warm (ivory, cream).

## Typography

**Display Font:** Young Serif (serif fallback)
**Body Font:** Hanken Grotesk (sans-serif fallback), weights 400/500/700
**Script Font:** Reenie Beanie (cursive fallback)

**Character:** The serif brings craft and warmth to headlines and product names; Hanken Grotesk keeps shopping tasks clear; Reenie Beanie adds a human, handwritten whisper.

### Hierarchy
- **Display** (400, clamp 44–84px, line-height 1): hero headline.
- **Headline** (400, clamp 28–40px): section titles such as the newsletter offer.
- **Title** (400, 22–28px): product names, cart title, logo (26px).
- **Body** (400, 16–18px, ~1.55): descriptions; keep to ~480px (about 60–70ch).
- **Label** (500–700, 13–15px): nav, pills, buttons, meta lines.
- **Script** (600, 22–28px, caramel): the "café" logo suffix.

### Named Rules
**The Logo Script Rule.** Reenie Beanie is reserved for the logo suffix. No eyebrows above headings, never body copy or buttons.

## Layout

Single-column bands stacked full-width, with a fluid horizontal gutter (`clamp(20px, 5vw, 64px)`, class `px-gutter`). Content blocks cap at readable widths (hero copy 620px, paragraphs 480px). Sections use generous vertical padding (60–64px). Product grids sit inside the gutter. The header is sticky; the nav collapses to a hamburger below 820px, and the cart is a right-side drawer up to 420px wide. Touch targets are at least 44px; main buttons 52px.

## Elevation & Depth

Mostly flat and tonal: depth comes from stepping between espresso, roast and bronze, plus 1px borders in roast/bronze. Shadow is used only on product cards.

### Shadow Vocabulary
- **Card rest** (`box-shadow: 0 8px 24px rgba(0,0,0,.3)`): product cards; they also lift by 4px on hover.
- **Drawer scrim** (`rgba(0,0,0,.55)` overlay): cart drawer backdrop.

### Named Rules
**The Tonal Step Rule.** Separate surfaces by shifting one step in the brown ramp before reaching for a shadow or border.

### Motion
Quiet and decelerating: one ease-out-expo curve (`cubic-bezier(0.16, 1, 0.3, 1)`). The hero text rises once on load (700ms, 90ms stagger). Feedback is 150–350ms: add-to-cart bumps the cart badge, slides the toast in and highlights the new cart row; the drawer slides in from the right over a fading scrim; buttons and pills press to 0.96–0.97; the "Ver" chip fills on card hover. Reduced motion keeps fades and drops movement.

## Shapes

Softly rounded rectangles: 8px for buttons and inputs, 12px for product cards, 10px for cart rows, full pills for filter chips, tags and count badges. Borders are 1px, brown or cream. The product image area is square (1:1) with a diagonal-stripe placeholder pattern.

## Components

### Buttons
- **Shape:** 8px corners, 52px min height, 28px horizontal padding, bold label.
- **Primary:** caramel fill, espresso text; hover swaps to cream fill.
- **Outline:** 1px cream border, ivory text, transparent; hover adds a 10% cream wash.
- **Add-to-cart (compact):** same primary style at 44px height.

### Chips / Pills
- **Style:** full-round, 1px bronze border, 44px min height, 14px medium label.
- **State:** `aria-pressed="true"` fills with caramel and espresso text. Used for roast and grano/molido filters.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** roast over the espresso page.
- **Shadow Strategy:** card-rest shadow, lift `-translate-y-1` on hover.
- **Padding:** 20px; image area flush to the edges, with a cream tag chip (ink text) at its top-left.
- **Behavior:** the whole card is clickable via a stretched title link; the Add button sits above it.

### Inputs / Fields
- **Style:** espresso fill, 1px bronze border, 8px radius, 52px height, ivory text.
- **Focus:** border turns caramel, default outline removed (a visible border change replaces it).

### Navigation
- **Style:** sticky espresso header with roast bottom border; logo in serif with script suffix in caramel; links at 15px ivory, hover caramel. Cart button is a bronze-outlined 44px control with a caramel count badge. Below 820px, the hamburger opens a roast panel with bronze dividers.

### Cart Drawer
Right-anchored espresso panel with a bronze left border, a caramel free-shipping progress bar on a roast track, roast item rows, and an olive toast for confirmation.

## Do's and Don'ts

### Do:
- **Do** keep the page espresso and raise surfaces to roast, then bronze.
- **Do** reserve caramel for actions, prices and selection.
- **Do** use Young Serif for headings and product names, Hanken Grotesk for everything functional.
- **Do** keep touch targets at 44px or more (buttons 52px).
- **Do** use `px-gutter` for horizontal page padding.

### Don't:
- **Don't** use pure black or pure white; stay with the brown-tinted ramp.
- **Don't** add a second accent color alongside caramel (olive is for success only).
- **Don't** use Reenie Beanie beyond the logo suffix, and never put an eyebrow above a heading.
- **Don't** stack heavy shadows or glass effects; the system is tonal.
- **Don't** present the placeholder packaging or demo content as final product imagery.
