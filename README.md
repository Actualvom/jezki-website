# Jezki — public website

The static marketing, support, and privacy site for **Jezki**, a private
expense-evidence app for iPhone.

> **Jezki** is a small, capable hedgehog with the air of a slightly overworked
> studio assistant. Receipts caught in his quills turn a familiar mess into the
> product story: gather the proof, review every detail, export only what you
> approve.

This repository contains **only the website**. The native SwiftUI iOS app lives
in a separate private repository and is not included here.

## Pages

- `index.html` — home. The product story: gather → review → export, plus the
  local-first privacy model, the "what Jezki does not do" boundary, and a short
  FAQ for first questions.
- `support.html` — plain support page (data controls, exports, Gmail test-mode,
  owner-review support-contact status).
- `privacy.html` — plain-language privacy policy.
- `assets/styles.css` — the full responsive design system shared with the app's
  cobalt, coral, mint, sky, and deep-green palette.
- `assets/jezki-hero-day.png` / `assets/jezki-hero-night.png` — adaptive raster
  brand artwork.
- `assets/jezki-icon.png` — app icon / favicon.

## Design

- Tactile raster artwork for the mascot and story scenes, with a dedicated
  moonlit asset selected by `prefers-color-scheme`.
- **No external dependencies**: no web fonts / font CDNs, no analytics, no
  tracking pixels, no third-party scripts. A privacy-facing site that phones
  nobody home. (System fonts + a local paper-grain data-URI only.)
- Mobile-first, responsive, accessible (semantic landmarks, skip link, visible
  focus states, `prefers-reduced-motion` respected, alt text).
- CSS-only theming, including a full `prefers-color-scheme: dark` palette and
  the matching night illustration. No motion is required to understand or use
  the site.

## Local preview

No build step — it's plain HTML/CSS. Serve the folder statically:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
# then open http://127.0.0.1:8765/
```

## Deployment

Configured for Netlify static hosting (`netlify.toml`, `publish = "."`) with
security headers (`X-Content-Type-Options`, `Referrer-Policy`,
`Permissions-Policy` disabling camera/mic/geolocation/FLoC).

## Guardrails (please keep)

This is an App Store–facing site for an app that handles private financial
evidence. Four claims must stay true and must not be softened:

1. Jezki **does not provide tax advice** or decide deductibility, and claims no
   tax-authority approval.
2. Gmail is **test mode only** in current builds; production Gmail is not
   available and must not be advertised as such.
3. The **support contact destination and final production URLs are still
   pending owner approval** — do not invent an email, form, or final URL.
4. **No trackers / analytics / third-party scripts.**

## Status

Owner-review material. Final hosted text, support-contact destination, site
name / custom domain, and production deployment remain pending owner approval.
