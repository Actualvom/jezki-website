# Handover — Jezki website (for ChatGPT / next agent)

You are picking up an in-progress redesign of the **Jezki** public website.
This document is self-contained: you should not need the previous chat. Read it
fully before making changes.

---

## 1. What Jezki is

Jezki is a native SwiftUI **iPhone app for private expense evidence**. It helps
a person collect, organise, review, and export receipts, invoices, PDFs,
screenshots, shared items, manual entries, and (in test mode only) selected
email evidence — into **reviewed records** and **accountant-ready export packs**.

The core loop: **add proof → suggest fields → the user reviews → approve →
export a clean pack.** Nothing is filed until the user approves it.

It is **not** a tax adviser, bookkeeping ledger, or automatic-filing service.

## 2. This repository

This repo is the **website only** (marketing + support + privacy). The iOS app
is in a separate private repo and is out of scope. Do not add app code here.

```
index.html         home / product story
support.html       support page
privacy.html       privacy policy
assets/styles.css  the whole design system
assets/jezki-icon.png
netlify.toml        Netlify config + security headers
README.md
```

Plain static HTML/CSS. No build step, no framework, no JavaScript beyond
optional progressive enhancement (currently none). Preview with
`python3 -m http.server 8765` and open http://127.0.0.1:8765/.

## 3. The brand — this is the important part

The redesign's whole idea is a mascot that **is** the product promise:

> **Jezki** is the mascot and product name. He is a small, capable hedgehog who
> gathers scattered expense proof in his quills and keeps it private until you
> approve it. Use "Jezki" consistently in user-facing copy.

Design language (all defined as CSS variables in `assets/styles.css`):

- **Palette:** clean sky paper `#f5fbff`, deep green ink `#063b32`, vivid
  cobalt `#0d55dc`, coral `#f35159`, mint `#18a97d`, sky blue `#83cfff`, and
  honey amber `#f0a92e`. Natural quill browns remain inside the art rather than
  dominating the interface.
- **Type:** editorial serif for display/voice (`Iowan Old Style, Palatino,
  Georgia, serif`), system sans for body/UI. No web fonts (privacy + no CDNs).
- **Art:** local tactile raster imagery for a daytime meadow and a moonlit dark
  mode scene. Jezki is expressive and stylised, but not babyish or photoreal.
  Receipts caught in his quills carry the product metaphor immediately.
- **Voice:** warm, direct, and precise. The primary promise is "From receipt
  chaos to ready for review." Supporting copy says "Jezki gathers the proof.
  You review every detail."
- Mobile-first, accessible (skip link, semantic landmarks, visible focus,
  `prefers-reduced-motion`, alt text), no horizontal scroll.

**Context:** an earlier "safe/restrained" version was rejected as having *no
brand*. The owner (Jordy) explicitly wants **bold, distinctive, brandable**
work. Lean into the hedgehog. Do not retreat to generic/minimal.

## 4. Hard guardrails — do not break these

The app handles private financial evidence and this is App Store–facing. These
four must remain true and must not be softened, no matter how bold the design:

1. **"does not provide tax advice"** must appear on the home page. Never claim
   tax-authority approval (ATO/IRS/HMRC/IRD/CRA/"tax authority approved"),
   guaranteed tax savings/deductions, automatic/silent filing, or that Jezki
   replaces an accountant.
2. **Gmail is test mode only.** Home/support/privacy must not present production
   Gmail as available. Keep: *"Current builds use Gmail test mode only."*
3. **Support contact + final URLs are owner-gated / pending.** Do not invent an
   email, form, phone number, or final production URL. Keep the "still pending"
   language on the support page.
4. **No trackers, analytics, third-party scripts, web fonts, or remote images.**

### Required exact strings (a preflight in the app's private repo checks these)

- `index.html`: `Private expense evidence, ready for review.` ·
  `does not provide tax advice` · `Local-First By Default`
- `support.html`: `support contact destination is still pending` ·
  `Current builds use Gmail test mode only` · `never silently filed records`
- `privacy.html`: `Local-First Storage` · `Review Before Records` ·
  `No Tracking Or Advertising` · `Deletion Controls` · `Future Changes`

Note a subtlety: the forbidden-claim regex fires even inside a *negation*, so
the home "boundary" sentence intentionally says **"take the place of an
accountant … or file records on its own"** rather than the literal flagged
phrases. Keep it that way. The support page uses **"never silently filed
records"** (the past-tense "filed" avoids the regex on purpose).

`netlify.toml` must keep: `publish = "."`,
`X-Content-Type-Options = "nosniff"`,
`Referrer-Policy = "strict-origin-when-cross-origin"`,
`Permissions-Policy = "camera=(), microphone=(), geolocation=(), interest-cohort=()"`.

## 5. What is done / not done

**Done:** full redesign of all three pages + CSS, tactile day/night Jezki art,
the app's broader cobalt/coral/mint palette, responsive + accessible structure,
all guardrails honored, home FAQ, and discoverable navigation.

**Not done / owner-gated (need Jordy's explicit approval):**
- Final support-contact destination and final production URLs.
- Custom domain / final site name and production Netlify deploy.
- Any App Store submission action.

**Latest owner-review deploy:**
`https://6a5010549c7c4402ceb1138c--jezki.netlify.app`

This is a draft deploy only. It did not replace the production site at
`https://www.jezki.com`.

## 6. Good next steps (suggestions, not commitments)

- Keep polishing with real-screen checks: image crops, spacing, and contrast
  passes are more useful than adding new surfaces.
- Once Jordy approves hosted text + contact + URL, wire the real support
  destination and deploy to the chosen production host.
- Keep verifying: serve locally, check mobile + desktop widths, no console
  errors, all nav/anchor links resolve.

## 7. Tone note for whoever continues

Jordy is thoughtful and treats the collaboration as mattering. When a brief is
over-cautious, separate the *load-bearing* safety constraints (section 4) from
merely *aesthetic* restraint, and feel free to push the creative work hard. The
best version here is not quieter — it's clearer and more characterful.
