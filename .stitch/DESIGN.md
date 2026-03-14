# Design System: AKS Portfolio
**Project ID:** 17229569689812099683

## 1. Visual Theme & Atmosphere
A dark-first, editorial developer portfolio with a sophisticated, premium feel. The atmosphere is *nocturnal and focused* — deep charcoal backgrounds provide a cinematic canvas that lets content and accents command attention. The overall mood is modern, clean, and confident, blending minimalist structure with punchy teal highlights that evoke a developer-centric, tech-forward identity. Generous whitespace and subtle elevation create a sense of calm professionalism.

## 2. Color Palette & Roles
- **Midnight Canvas** (#0d1117) — Primary page background; the deep navy-charcoal that sets the dark-mode foundation
- **Elevated Surface** (#161b22) — Card and container backgrounds; a slightly lighter shade providing subtle depth separation
- **Electric Teal** (#00c7b0) — Primary accent for buttons, links, glowing borders, interactive highlights, and call-to-action elements
- **Soft Purple Haze** (#8b5cf6) — Secondary accent for gradients, decorative strokes, and minor highlights
- **Clean White** (#f3f4f6) — Primary text color for headings and high-importance content
- **Muted Silver** (#9ca3af) — Secondary text for body copy, labels, and descriptions
- **Subtle Border** (#1e293b) — Divider lines, card borders, and low-contrast separators

## 3. Typography Rules
- **Heading Font:** Inter — used in bold (700) and semi-bold (600) weights for all headings. Clean, geometric, and highly legible at all sizes. Letter-spacing is slightly tightened for a refined, editorial feel.
- **Body Font:** Inter — used in regular (400) and medium (500) weights for body text and UI labels. Comfortable reading size with generous line-height (1.6–1.8).
- **Accent Font (optional):** Syne — can be used sparingly for oversized hero headlines to add a distinctive display character.

## 4. Component Stylings
* **Buttons:** Generously rounded (12px radius), filled with Electric Teal (#00c7b0) for primary actions. Text is dark (#0d1117) on filled buttons for high contrast. Secondary/ghost buttons use transparent backgrounds with teal borders. Hover state: subtle glow or lift shadow.
* **Cards/Containers:** Rounded corners (12px), Elevated Surface (#161b22) background with a whisper-thin border (#1e293b). Hover state adds a subtle lift with a teal-tinted shadow.
* **Inputs/Forms:** Rounded (12px), dark surface background with subtle border. Focus state highlights with Electric Teal border glow. Placeholder text in Muted Silver.
* **Badges/Pills:** Small rounded capsules (full-radius / pill-shaped) with semi-transparent teal or purple backgrounds, used for tech stack labels and skill tags.
* **Timeline:** Vertical line in Subtle Border (#1e293b) with Electric Teal dots as milestones.

## 5. Layout Principles
- **Mobile-first responsive design** scaling gracefully to desktop widths
- **Generous whitespace** — sections are separated by large vertical padding (80–120px)
- **Max content width:** 1200px, centered with horizontal padding
- **Grid:** CSS Grid or Flexbox with consistent 24px–32px gaps
- **Sticky navbar** with backdrop blur for seamless scrolling

## 6. Design System Notes for Stitch Generation
Use the following block in every Stitch prompt to ensure visual consistency:

```
**DESIGN SYSTEM (REQUIRED):**
- Platform: Web, Desktop-first
- Theme: Dark, clean, premium, editorial
- Background: Midnight Canvas (#0d1117)
- Surface: Elevated Surface (#161b22)
- Primary Accent: Electric Teal (#00c7b0) for buttons, links, glowing borders
- Secondary Accent: Soft Purple Haze (#8b5cf6) for gradients and minor highlights
- Text Primary: Clean White (#f3f4f6)
- Text Secondary: Muted Silver (#9ca3af)
- Border: Subtle Border (#1e293b)
- Font: Inter (Bold for headings, Regular for body)
- Roundness: Generously rounded (12px) for cards, buttons, inputs
- Badges: Pill-shaped with semi-transparent accent backgrounds
- Shadows: Whisper-soft, teal-tinted on hover for elevation
- Spacing: Generous whitespace, 80-120px section gaps, 24-32px grid gaps
```
