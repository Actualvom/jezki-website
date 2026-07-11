# Jezki Website Redesign Specification For Claude Code

This is a website-only handoff. Claude Code should redesign and improve the public Jezki website, not build the iOS app, not create app code, not alter App Store release materials, and not invent production URLs or support contacts. The purpose of this document is to give enough project background for good website decisions while keeping the work sharply scoped to the static public site.

The target repository is the static website repository. The app itself lives elsewhere and stays out of scope. In this repo, the meaningful files are:

- `index.html` for the home and product story.
- `support.html` for support information and owner-review contact status.
- `privacy.html` for the plain-language privacy policy.
- `assets/styles.css` for the entire design system.
- `assets/jezki-icon.png` for the local icon/favicon.
- `netlify.toml` for static hosting and security headers.
- `README.md` and `HANDOVER.md` for current orientation.

Before making any changes, read `HANDOVER.md` completely. Treat it as the current local source of truth for the website. This spec expands the design and implementation direction for Claude Code, but it does not override the hard guardrails in `HANDOVER.md`.

## 1. The Short Mission

Make the Jezki public website feel significantly more polished, brandable, memorable, and ready for owner review, while preserving the privacy and tax-advice boundaries that make the product safe to describe publicly.

The site should feel like a carefully made product surface, not a generic SaaS landing page. The best version is warm, tactile, protective, editorial, and slightly charming. It should make a visitor understand, within seconds, that Jezki is a local-first iPhone app for gathering scattered private expense evidence, reviewing it, and exporting clean packs later. It should not look like tax software, enterprise reimbursement software, bookkeeping software, crypto-finance software, or a bland App Store placeholder page.

The website can be redesigned aggressively within the existing static HTML/CSS constraint. It should not become a framework project. It should not add JavaScript unless there is a very specific progressive-enhancement reason and the owner approves it. It should not use analytics, trackers, third-party scripts, remote images, icon CDNs, Google Fonts, or external font loading.

If in doubt, choose the simpler static implementation with stronger art direction and stronger layout craft.

## 2. What Jezki Is

Jezki is a native SwiftUI iPhone app for private expense evidence. It helps a person collect, organise, review, and export receipts, invoices, PDFs, screenshots, shared items, manual entries, and selected email evidence. The app is not a tax adviser. It is not a ledger. It is not an automatic filing service. It is the private layer before accounting, reimbursement, tax-time review, or an accountant handoff.

The core product loop is:

1. Add or discover proof.
2. Create a candidate.
3. Extract or suggest useful fields.
4. Let the user review.
5. Approve, edit, dismiss, merge, or defer.
6. Store reviewed records.
7. Export a tidy accountant-ready pack.

The north-star public message is:

Private expense evidence, ready for review.

The product promise is not "we find deductions" or "we claim tax back." The promise is that Jezki gathers proof, keeps it private, turns uncertainty into a review queue, and creates a cleaner handoff when the user is ready.

The public site needs to explain this in a way that feels instantly graspable. People should leave with a picture in their head: scattered receipts, PDFs, screenshots, and email fragments being gently gathered by a small protective hedgehog into a tidy pack.

## 3. What Jezki Is Not

The site must never imply that Jezki:

- Provides tax advice.
- Decides deductibility.
- Guarantees savings or deductions.
- Is approved by a tax authority.
- Replaces an accountant.
- Files records automatically or silently.
- Scans a whole inbox in production without verification and consent.
- Has production Gmail available today.
- Has a live support contact if the owner has not approved one.

Use safe language such as "suggests", "possible", "review", "evidence", "candidate", "organises", "export pack", "accountant-ready", "you decide", and "nothing is filed until you approve it."

Avoid language such as "claim this", "deductible", "guaranteed tax savings", "ATO approved", "IRS approved", "HMRC approved", "we found you money", "auto-file", "replace your accountant", or "scan your whole inbox."

The exact home page phrase `does not provide tax advice` must remain present. Do not paraphrase it away.

## 4. Scope For Claude Code

Claude Code should work only on the static public website. The allowed work is:

- Improve layout, hierarchy, typography, spacing, responsive behavior, color, illustration, and copy within the existing pages.
- Improve the hand-authored inline SVG brand illustrations if useful.
- Add or refine static sections if they genuinely improve comprehension and do not bloat the site.
- Improve support and privacy page readability.
- Improve CSS structure while keeping it plain CSS.
- Improve accessibility, keyboard focus, contrast, reduced-motion behavior, and mobile ergonomics.
- Improve local documentation about website status and verification.

Claude Code must not:

- Build the iOS app.
- Create Swift, Xcode, SwiftUI, backend, Gmail API, Supabase, StoreKit, or App Store code here.
- Add a framework, bundler, package manager, build step, NPM dependency, CSS library, web font, analytics tool, or third-party script.
- Deploy, change the production domain, or change Netlify project configuration beyond the existing static/security-header setup.
- Invent a support email, phone number, form endpoint, Google OAuth state, final URL, or production Gmail availability.
- Commit secrets, credentials, API keys, OAuth tokens, screenshots containing private data, or generated raw assets with questionable provenance.

This is a website redesign and polish assignment. Nothing more.

## 5. Current Website Baseline

The current repo already has a strong static foundation:

- Three pages: home, support, privacy.
- Warm hedgehog identity.
- Hand-authored inline SVG art.
- Local icon file.
- Plain CSS design system.
- No JavaScript.
- No external dependencies.
- Netlify static config with security headers.
- Mobile-first responsive layout.
- Skip link, semantic landmarks, focus states, and reduced-motion handling.
- A home FAQ.
- A subtle dark color scheme.

Claude Code should inspect the live files instead of assuming this document is perfectly current. The current site may have uncommitted local changes. Work with them, not against them. Do not flatten or erase prior polish unless replacing it with a clearly better implementation.

The important current home structure is:

- Sticky header with brand and nav.
- Hero with the phrase `Private expense evidence, ready for review.`
- Product loop section explaining gather, suggest, review, tuck away.
- "What Jezki gathers" source grid.
- Local-first protective/privacy band.
- Export pack section.
- Boundary section with `does not provide tax advice`.
- FAQ section.
- Support/privacy callout.
- Footer with owner-review pending note.

The support page covers:

- What Jezki handles.
- Deleting local data.
- Gmail and source controls.
- Exporting records.
- What Jezki does not do.
- Support contact destination pending.

The privacy page covers:

- Summary.
- Local-first storage.
- Data the user chooses to add.
- Review before records.
- No tracking or advertising.
- Gmail/source controls.
- App lock.
- Exports and sharing.
- Deletion controls.
- Future changes.

These are the right surfaces. Improve them rather than replacing the site with a generic marketing page.

## 6. Required Exact Strings

Keep these exact strings in the public files because another private preflight expects them:

In `index.html`:

- `Private expense evidence, ready for review.`
- `does not provide tax advice`
- `Local-First By Default`

In `support.html`:

- `support contact destination is still pending`
- `Current builds use Gmail test mode only`
- `never silently filed records`

In `privacy.html`:

- `Local-First Storage`
- `Review Before Records`
- `No Tracking Or Advertising`
- `Deletion Controls`
- `Future Changes`

Do not "improve" these strings away. They are load-bearing.

## 7. Required Netlify Settings

Keep `netlify.toml` as a static site config and preserve:

```toml
[build]
  publish = "."
```

Also preserve these headers:

```toml
X-Content-Type-Options = "nosniff"
Referrer-Policy = "strict-origin-when-cross-origin"
Permissions-Policy = "camera=(), microphone=(), geolocation=(), interest-cohort=()"
```

Do not add tracking headers, third-party rewrites, proxy behavior, or deploy-only behavior that cannot be tested locally.

## 8. Brand Strategy

Jezki comes from the idea of a small hedgehog: a creature that gathers scattered things onto its back and curls up to protect them. This is not decorative lore. It is the website's strongest brand idea.

The hedgehog metaphor maps directly to the product:

- Scattered slips become gathered evidence.
- Quills become receipts, invoices, PDFs, screenshots, and email fragments.
- Curling up becomes local-first privacy.
- A tidy pack becomes accountant-ready export.
- Slow careful movement becomes review-first trust.

The site should make this idea visually obvious without becoming childish. The hedgehog should feel like a mascot for adults: charming, protective, practical, slightly storybook, but still premium and trustworthy. Think editorial product illustration, not nursery art.

Use the mascot and product metaphor as the organizing principle of the design. A visitor should not see a random cute animal next to generic SaaS cards. They should see the product loop embodied by the mascot: gather, guard, review, export.

## 9. Visual System

Use the current token family unless there is a strong reason to tune it:

- Warm oat paper: `#f6efe2`.
- Espresso ink: `#241c16`.
- Honey amber accent: `#d18a3a`.
- Protective pine: `#234339`.
- Quill browns: `#6a5138` and `#3c2d1e`.
- Berry accent: `#a5324e`.
- Panel whites and warm paper variants for depth.

The site should feel like warm paper and ink, with amber highlights and pine privacy sections. Do not turn it into a one-note beige page. Use contrast between paper, pine, amber, quill browns, and occasional berry accents to keep it alive. The palette should feel earthy and protective, not bland.

Typography:

- Display headings should use the existing editorial serif stack: `Iowan Old Style`, `Palatino Linotype`, Palatino, `Book Antiqua`, Georgia, serif.
- Body and UI should use system sans.
- Do not add remote web fonts.
- Keep letter spacing at `0` unless there is a very specific accessibility-safe reason.
- Use large display type only where it belongs: hero and major section headings.
- Keep support/privacy pages readable and calm.

Shapes and surfaces:

- Cards should be purposeful, not everywhere.
- Use repeated cards for source items, FAQ items, support/privacy blocks, and product loop steps.
- Avoid card-inside-card nesting.
- Keep card radii moderate. The current `14px` radius is acceptable.
- Use borders and warm shadows sparingly. In dark mode, reduce or remove heavy shadows.

Motion:

- Motion must respect `prefers-reduced-motion`.
- CSS-only motion is acceptable for small hero details.
- Motion should explain gathering, settling, or packaging, not create spectacle.
- No autoplaying video, canvas dependency, or complex JavaScript animation.

Dark mode:

- Preserve or improve `prefers-color-scheme: dark`.
- Dark mode should feel like night paper, not generic black SaaS.
- Check contrast in dark mode. Amber should remain readable, not neon.

## 10. Hero Direction

The hero is the most important screen. It should communicate the product in one glance.

Required hero feeling:

- Warm, tactile, editorial.
- Clear product promise on the left.
- Brand/mascot/product-loop illustration on the right or integrated full-width on narrow screens.
- Immediate understanding that this is about scattered expense proof becoming reviewed records and exports.
- Strong first-viewport signal that the product is Jezki, not just a generic app idea.

Keep the core copy family:

- Eyebrow: local-first iPhone app for expense evidence.
- H1: gather the scattered / keep it private, or an equivalent that retains the gather/private duality.
- Deck: `Private expense evidence, ready for review.`
- Supporting copy: receipts, invoices, PDFs, screenshots, shared items, and reviewed export packs.

The hero art should show the hedgehog gathering receipts/PDF/screenshot/email-like slips and moving toward a tidy export pack. The current inline SVG can be improved by:

- Making the hedgehog silhouette more readable at mobile size.
- Ensuring the snout/face is not hidden by the export pack.
- Making receipt slips feel intentionally arranged, not random clutter.
- Using labels only where they remain legible.
- Increasing separation between background slips, quills, and export pack.
- Checking line widths and color contrast in dark mode.

If Claude Code rewrites the SVG, keep it inline and hand-authored. Do not import external illustration assets unless the owner explicitly approves. If bitmap image generation is used later, it must be local, committed intentionally, and must not introduce remote image dependencies.

The first viewport should hint at the next section on common desktop and mobile sizes. Avoid a hero so tall that it feels like a poster instead of a website.

## 11. Home Page Content Architecture

The home page should tell a clean story:

1. Jezki gathers scattered proof.
2. Jezki suggests useful fields but does not decide for the user.
3. The user reviews everything.
4. Jezki stores reviewed records locally by default.
5. The user exports a tidy pack when needed.
6. Jezki has clear boundaries: no tax advice, no guaranteed savings, no silent filing, Gmail test mode only.

Recommended home sections:

Hero:

- Product promise and mascot art.
- Primary action should likely point to product/story or support/privacy, not an App Store download unless owner approves a final URL.
- Secondary action can point to privacy.

Product loop:

- Four concise steps: Gather, Suggest Fields, You Review, Export/Tuck Away.
- Each step should be visually distinct and scannable.
- The loop must include "nothing is filed until you approve it" or equivalent safe copy.

Sources:

- Receipts and invoices.
- PDFs and files.
- Screenshots and photos.
- Shared items.
- Manual entries.
- Reviewed records.
- Gmail/email evidence only with test-mode language.

Local-first privacy:

- Pine band or similarly protective section.
- Explain that the core loop is designed to work locally.
- Mention account/backend/tracking absence only as implemented/current.
- Do not overstate encryption or app lock if the public app/site cannot support the claim yet.

Export:

- Make export feel like the payoff.
- CSV, PDF summary, manifest/evidence pack language is acceptable if the product plan supports it, but avoid claiming a feature is publicly available unless the site is intentionally owner-review material.
- Phrase as "reviewed records and original proof together" rather than tax outcomes.

Boundary:

- Keep the exact `does not provide tax advice`.
- Avoid forbidden regex terms if the repo has a banned-language checker. The current wording intentionally says "take the place of an accountant" and "file records on its own" instead of more literal forbidden phrases.

FAQ:

- Keep concise.
- Use it to answer first concerns: Is this just a scanner? What happens before something becomes a record? Does it need an account? Can it read Gmail?
- Keep Gmail as test mode only.

Support/privacy callout:

- Link to the support and privacy pages.
- Reinforce no surprises.

## 12. Support Page Requirements

The support page is not a marketing page. It should feel plain, useful, and honest. The most important requirement is to avoid inventing a live support channel before the owner has approved it.

Required support page ideas:

- Jezki handles receipts, invoices, PDFs, screenshots, shared items, manual entries, and selected email evidence in test mode.
- Local data can be deleted from the app when the relevant build supports it.
- Gmail is test mode only.
- Production Gmail remains unavailable until Google OAuth verification, security review, final privacy copy, and owner approval are complete.
- Gmail findings, if enabled in the future, become candidates for review and are `never silently filed records`.
- Exporting means handing over reviewed records and original evidence in a clean pack.
- Jezki does not provide tax advice and does not decide what can be deducted.
- The `support contact destination is still pending`.

Visual direction:

- Keep the same header/footer as home.
- Use a page hero with mascot mark.
- Use a table-of-contents or quick links for page scanning.
- Use calm document blocks.
- Make the pending support-contact notice visually clear but not alarming.

Do not add a fake mailto link, fake form, or "Contact us" CTA with no destination.

## 13. Privacy Page Requirements

The privacy page should be plain-language and readable. It should not sound like a lawyerly wall, but it should be serious enough for private financial evidence.

Required privacy page headings include:

- `Local-First Storage`
- `Review Before Records`
- `No Tracking Or Advertising`
- `Deletion Controls`
- `Future Changes`

Privacy page themes:

- Jezki stores selected evidence and reviewed records locally by default.
- The user chooses what to add.
- Possible records are reviewed before they become records.
- No tracking or advertising.
- Gmail is test mode only and production Gmail requires verification, review, copy, and approval.
- App lock can be described only if appropriate to current owner-review copy.
- Exports are user-initiated.
- Deletion controls must be clear.
- Future changes must be transparent and owner-approved.

Visual direction:

- Keep the page calm.
- Prioritize readable line length.
- Use anchor navigation if it helps.
- Use small inline icons only if they remain accessible and do not clutter the document.
- Avoid marketing hype on privacy.

## 14. Copywriting Rules

Voice:

- Warm.
- Precise.
- Human.
- Protective.
- Lightly playful when using the hedgehog metaphor.
- Never cute at the expense of trust.
- Never omniscient.

Good phrases:

- "Gather the scattered."
- "Keep it private."
- "Private expense evidence, ready for review."
- "One quiet burrow for scattered proof."
- "Jezki suggests. You decide."
- "Possible records wait for review."
- "Nothing is filed until you approve it."
- "Export a tidy pack."
- "Current builds use Gmail test mode only."
- "Local-first by default."

Avoid:

- "Never miss a deduction."
- "Claim more."
- "Guaranteed savings."
- "Tax authority approved."
- "Replace your accountant."
- "Automatically files."
- "Scans your whole inbox."
- "AI accountant."
- "Magic bookkeeping."

Use "accountant-ready" carefully. It is acceptable when it means "organized for accountant review." Do not let it imply professional validation.

Use "evidence" more than "expenses" when describing the product's deeper identity. Jezki is not merely a spend tracker; it is an evidence layer.

## 15. Accessibility Requirements

Accessibility is part of the redesign, not an afterthought.

Keep or improve:

- Semantic landmarks: header, nav, main, section, footer.
- Skip link.
- Meaningful page titles and meta descriptions.
- Keyboard focus states.
- High enough color contrast in light and dark modes.
- Responsive layout down to narrow mobile widths.
- No horizontal scroll on mobile.
- SVG figures with meaningful `aria-label` or hidden decorative elements.
- Link text that makes sense.
- Reduced motion support.
- No text embedded in images unless it is also available in HTML or is nonessential illustration labeling.

Test at:

- Mobile width around 360-390px.
- Tablet-ish width around 768px.
- Desktop width around 1280-1440px.
- Light mode.
- Dark mode.
- Reduced motion.

Buttons, nav links, and cards should not resize unpredictably on hover. Text should not overflow containers.

## 16. Static Implementation Rules

Use plain HTML and CSS. Do not add a build step. Do not add NPM packages. Do not add Tailwind, Bootstrap, React, Vue, Svelte, Astro, Next.js, Vite, or any other framework.

CSS can be reorganized if it genuinely improves maintainability, but do not split it into a complex build pipeline. The site should still open from a static server with:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

If port `8765` is busy, use another local port such as `8766`.

Acceptable assets:

- Local PNG favicon/app icon already in `assets/`.
- Inline SVG authored in HTML.
- CSS data URI paper grain if local and small.
- Additional local files only if clearly needed and committed intentionally.

Unacceptable assets/dependencies:

- Remote images.
- External fonts.
- Icon kits.
- Google Fonts.
- Analytics scripts.
- Tracking pixels.
- CDN-hosted CSS/JS.
- Script tags without a strong owner-approved reason.

## 17. Desired Page Look In Concrete Terms

The final website should feel like this:

The background is warm oat paper with a barely visible local paper grain. Text is espresso ink. The header is sticky, translucent enough to feel modern, and still legible. The wordmark has a small hedgehog/receipt mark, not a generic finance icon. The nav is simple: Product, FAQ, Privacy, Support on home; Home, FAQ, Privacy, Support on subpages.

The hero uses a large editorial serif headline with an italic amber phrase. The hedgehog illustration is large enough to be a true brand signal. Around it are scattered slips: receipts, PDFs, screenshots, and email-like cards. Some slips become quills, and the destination is a tidy export pack with a check mark or sealed-pack detail. The composition should tell a story from left or lower-left disorder to right or upper-right order.

Sections alternate between paper, slightly darker paper, and protective pine. The pine section should feel like the hedgehog curling around the evidence. It should not look like a generic dark banner. It should include a curled-ball or protective visual cue and concise assurances.

Cards should look like small paper objects: warm panels, subtle borders, amber tags, quill-brown icons, and enough spacing to breathe. They should not become glassmorphism, neon, or startup-gradient tiles.

Support and privacy pages should feel like well-designed product documents. They can be quieter than the home page, but they should still be recognizably Jezki. Use the mascot mark, warm paper, anchor navigation, and clear block headings.

The footer should reinforce the product identity and owner-review status. It should not hide the fact that final support contact and URLs are pending.

## 18. Specific Improvement Opportunities

Claude Code should inspect the site visually before choosing exact edits. Good likely improvements include:

- Refine the hero SVG so the mascot reads clearly at mobile and desktop sizes.
- Tighten hero spacing so the first viewport is memorable but not oversized.
- Add color-scheme-aware `<meta name="theme-color">` tags if not already present.
- Improve dark mode contrast and browser chrome color.
- Make support/privacy page tables of contents feel more polished.
- Improve small-screen nav wrapping and avoid crowded header states.
- Tune card spacing so repeated sections feel deliberate.
- Improve the FAQ visual rhythm.
- Add subtle section separators that feel like paper folds or receipt edges.
- Improve export-pack art so it feels like the payoff.
- Ensure all inline SVG colors still make sense in dark mode or are intentionally fixed.
- Make CTA labels honest while URLs/contact are pending.

Avoid adding whole new large surfaces unless they solve a real comprehension gap. The site should be rich, not bloated.

## 19. Testing And Verification

After changes, run static and browser checks.

Required string check:

```bash
rg -n "Private expense evidence, ready for review\.|does not provide tax advice|Local-First By Default|support contact destination is still pending|Current builds use Gmail test mode only|never silently filed records|Local-First Storage|Review Before Records|No Tracking Or Advertising|Deletion Controls|Future Changes" index.html support.html privacy.html
```

Forbidden-claim scan:

```bash
rg -n "ATO approved|IRS approved|HMRC approved|IRD approved|CRA approved|tax authority approved|guarantee tax savings|guarantee deductions|automatically files records|silently files records|replaces accountant|scan your whole inbox|production Gmail is available|Download on the App Store" index.html support.html privacy.html assets/styles.css netlify.toml
```

Dependency scan:

```bash
rg -n "<script|src=|href=\"https?://|url\(https?://|@import|fonts\.google|gtag|analytics|plausible|posthog" index.html support.html privacy.html assets/styles.css
```

This dependency scan may match text that says there is no analytics or tracking. That is fine if it is just page copy. It must not reveal real external dependencies.

Netlify/header check:

```bash
rg -n "publish = \"\.\"|X-Content-Type-Options = \"nosniff\"|Referrer-Policy = \"strict-origin-when-cross-origin\"|Permissions-Policy = \"camera=\(\), microphone=\(\), geolocation=\(\), interest-cohort=\(\)\"" netlify.toml
```

Whitespace check:

```bash
git diff --check
```

Browser checks:

- Serve locally with Python.
- Open home, support, and privacy.
- Check desktop and mobile widths.
- Check no console errors.
- Check no horizontal scroll.
- Check every nav and anchor link resolves.
- Check focus states by keyboard if possible.
- Check dark mode if browser tooling allows it.
- Check reduced-motion behavior if tooling allows it.

Do not claim the site is ready unless these checks have actually run or you clearly state what could not be run.

## 20. Final Report Expected From Claude Code

When finished, Claude Code should report:

- Files changed.
- What visual/design improvements were made.
- What guardrails were preserved.
- What checks were run and their results.
- Any remaining owner-gated items.
- Whether anything could not be verified.

Keep the report honest and specific. Do not say "production ready" if final contact, URL, deployment, or owner approval remains pending.

## 21. Owner-Gated Items

These remain pending until Jordy explicitly approves them:

- Final support contact destination.
- Final production URL/custom domain.
- Production Netlify deployment if not already approved.
- Public Gmail wording beyond test-mode language.
- App Store submission or public release actions.
- Any claim that depends on app features not verified in the current build.

The website can be polished for owner review without crossing these gates.

## 22. Paste-Ready Starting Prompt For Claude Code

Use this prompt at the start of a Claude Code session if helpful:

```text
You are working only on the Jezki public website redesign. Do not build the iOS app. Do not add app code, backend code, Gmail API code, StoreKit, Swift, Xcode files, frameworks, external dependencies, analytics, trackers, web fonts, remote images, or production contact/URL values.

First read HANDOVER.md completely, then read CLAUDE_CODE_WEBSITE_REDESIGN_SPEC.md completely. The site is plain static HTML/CSS: index.html, support.html, privacy.html, assets/styles.css, local assets, and netlify.toml. Improve the website visually and structurally while preserving the hard guardrails and exact required strings.

Jezki is a local-first iPhone app for private expense evidence: scattered receipts, invoices, PDFs, screenshots, shared items, manual entries, and Gmail test-mode evidence become reviewed records and tidy export packs. The brand idea is a little hedgehog that gathers scattered proof and curls up to protect it. Make the site feel bold, distinctive, warm, editorial, protective, and brandable, not generic SaaS.

Keep exact strings required by the handoff, including "does not provide tax advice", "Local-First By Default", "Current builds use Gmail test mode only", "support contact destination is still pending", and "never silently filed records". Never claim tax authority approval, guaranteed savings/deductions, accountant replacement, automatic/silent filing, production Gmail availability, or live support contact. Keep no trackers, no analytics, no third-party scripts, no web fonts/CDNs, and no remote images.

After changes, serve locally, verify home/support/privacy across desktop and mobile, confirm no console errors, no horizontal scroll, all nav/anchor links resolve, required strings remain, forbidden claims are absent, no new external dependencies exist, netlify.toml keeps the required headers, and git diff --check passes. Summarize changed files, verification, and remaining owner-gated items. Do not deploy, commit, push, or change final URLs/contact unless Jordy explicitly asks.
```

## 23. Definition Of A Good Website Pass

A good pass is not merely "the site still works." A good pass makes the Jezki identity clearer.

Success looks like:

- The hero is memorable and instantly understandable.
- The hedgehog metaphor is visible and useful.
- The site feels more crafted than a template.
- The copy is warmer without becoming legally risky.
- The support and privacy pages feel trustworthy.
- Mobile layout is clean and non-cramped.
- Dark mode feels intentional.
- No guardrails regress.
- No external dependencies appear.
- Owner-gated items remain explicitly pending.

If forced to choose between generic polish and brand clarity, choose brand clarity. The owner explicitly rejected a prior restrained version as having no brand. This site should not retreat into bland safety. It should be safe because it is precise, and bold because it has a real product metaphor.

## 24. Detailed Home Page Wireframe

This section describes the intended feel of the home page in enough detail that Claude Code can make visual decisions without asking for a Figma file.

Header:

- Height should be compact enough that it does not eat the mobile viewport.
- Brand mark and wordmark sit together as one clickable home link.
- The wordmark should feel editorial, not tech-logo generic.
- Navigation should wrap gracefully on small screens. If the current pill links become crowded, reduce padding before changing the information architecture.
- Header background can remain a translucent warm paper color with blur, but it must stay readable over the page.

Hero:

- Use a two-column layout on desktop and a single-column layout on mobile.
- The text column should lead with a small uppercase eyebrow, then a large serif H1, then the exact deck phrase, then a short practical lede.
- The art column should be visually equal in importance to the text. It is the brand proof.
- The primary CTA should not pretend the app is downloadable unless the owner has approved a public app URL. Prefer "See how it works", "Read the privacy model", or an anchor link to the product loop.
- If a secondary CTA exists, it can point to privacy or support.
- The etymology chip is useful if it explains the hedgehog without becoming a trivia distraction.

Loop section:

- Four steps should read as a mini process diagram.
- The step labels should be action-oriented: Gather, Suggest Fields, You Review, Export or Tuck Away.
- The copy should use candidate/review language, not tax result language.
- The visual rhythm should make the loop obvious even if the user only skims headings.

Sources section:

- This is where the visitor learns Jezki is broader than a scanner.
- Each source card should include a small local inline icon or existing SVG fragment, a heading, and one short sentence.
- Do not over-explain all source types. The page is not a manual.
- The Gmail note belongs as fine print or an explicit caution card, not as a hyped feature.

Privacy/protective section:

- This section should feel like the hedgehog curling up around the evidence.
- Pine is the right dominant color here.
- Use fewer, stronger assurances rather than many tiny claims.
- Good assurances: local-first core loop, review before records, no trackers, source controls.
- Do not claim end-to-end encryption, cloud deletion guarantees, or production OAuth status unless those are verified elsewhere.

Export section:

- Export should be the emotional payoff.
- Show the pack as tidy, sealed, and review-ready.
- Good copy emphasizes original proof plus reviewed records.
- Mention accountant handoff carefully: "for accountant review" or "accountant-ready pack" is acceptable; "your accountant will approve it" is not.

Boundary section:

- Keep it visually prominent. It should not feel like hidden legalese.
- This section can be beautiful. The safety boundary is part of the trust story.
- Keep wording precise and avoid banned literal phrases that the private checker may flag.

FAQ:

- The FAQ should answer anxiety, not pad SEO.
- Keep four to six questions maximum unless a real support need appears.
- Every answer should be short enough to scan on mobile.

Footer:

- Repeat the brand mark.
- Link the main pages.
- Keep owner-review pending note visible.
- Do not add social links or contact links unless approved.

## 25. Subpage Layout Details

Support and privacy should not feel like afterthoughts. They are important trust surfaces for an app that handles private financial evidence.

Subpage header:

- Keep exactly the same brand/header system as home.
- Current page should use `aria-current="page"`.
- Cross-page FAQ links can point back to `index.html#faq`.

Subpage hero:

- Use a compact page hero with a mascot or mark on the left and text on the right.
- The hero should explain the page's job in one paragraph.
- Do not use a giant marketing hero on support/privacy; those pages need clarity.

Notice block:

- Support should keep a visible notice that the support contact destination is pending.
- Privacy may use a summary block, but avoid making every paragraph a notice.
- Notice colors should be warm amber, not alarming red.

Table of contents:

- Useful on support and privacy.
- It should be compact and wrap well.
- Anchor links must resolve.
- On mobile, it can be a simple list of inline links.

Document blocks:

- Use clear H2s with optional small icons.
- Keep line length comfortable, around the current `--readw` to `880px` range.
- Avoid dense legal paragraphs.
- Lists are fine when they make data controls clearer.

Footer:

- Same footer system as home.
- The owner-review pending note remains present.

## 26. Inline SVG Art Direction

Jezki's current site relies on inline SVG. That is good because it keeps the site self-contained, inspectable, and dependency-free. Claude Code can improve SVGs, but should preserve that philosophy.

General SVG rules:

- Inline SVG should have either a useful `aria-label` through its containing figure or be hidden from assistive tech if decorative.
- Use `viewBox` and responsive CSS instead of fixed raster sizes.
- Avoid tiny text labels inside SVG unless they remain legible on mobile.
- Use the design tokens where practical, but remember SVG attributes cannot automatically read CSS variables in every context unless deliberately written that way.
- Keep paths understandable. Do not generate enormous inscrutable path blobs for tiny visual changes.

Hero SVG:

- The hedgehog should have a clear body, face, snout, eye, legs, and quill silhouette.
- The receipt-slip quills should read as gathered proof.
- Background slips should be visually quieter than the main character.
- Export pack should be nearby but not covering the face.
- Motion dots or trails should be subtle and reduced-motion-safe.

Protective SVG:

- A curled hedgehog, protected bundle, lock, or burrow shape works.
- It should support the local-first/privacy message.
- Avoid padlock cliches as the only privacy symbol; combine security with the hedgehog metaphor.

Export SVG:

- Show a clean pack, folder, sealed bundle, manifest, check, or stacked papers.
- It should feel like "ready to hand over", not "tax approved".
- Do not use government seals, bank logos, or merchant logos.

Icon style:

- Use simple line icons.
- Keep stroke widths consistent.
- Prefer warm quill/amber colors over generic blue.
- Do not import an icon library.

## 27. Responsive Behavior Requirements

Mobile is not a compressed desktop. The site should feel intentionally designed on a phone.

At narrow widths:

- Header wraps cleanly and does not overlap.
- Hero text appears before hero art unless the art is more legible first; current text-first is fine.
- H1 line breaks should remain graceful. Avoid viewport-based font scaling.
- CTAs wrap without becoming awkward full-width pills unless that improves tap ergonomics.
- Cards become single column.
- No horizontal scroll.
- SVGs should shrink within their containers without clipping important details.
- Support/privacy tables of contents wrap into readable groups.
- Footer links wrap cleanly.

At tablet widths:

- Two-column FAQ/source grids can appear when space permits.
- Hero art should not become too small or too far from the copy.
- Reading pages should keep comfortable line length.

At desktop widths:

- Hero can become two columns.
- Source grids can become three columns.
- Product loop can become four columns.
- Large empty gutters are acceptable if the content feels composed.
- Do not stretch text lines too wide.

Use stable dimensions for fixed-format elements. Hover states should not shift layout. If a card moves up on hover, the surrounding layout must remain stable.

## 28. SEO And Metadata Within The No-Dependency Constraint

This site does not need aggressive SEO machinery, but basic metadata should be clean.

Keep:

- Unique page titles.
- Useful meta descriptions.
- Local favicon/app icon.
- Language attribute on HTML.
- Theme color metadata if present or added.
- No remote Open Graph image unless a local image is created and referenced safely.

If adding Open Graph/Twitter metadata:

- Use only local assets or omit image fields.
- Do not point to a final domain unless owner-approved.
- Keep descriptions aligned with guardrails.

Good title patterns:

- `Jezki - Private expense evidence for iPhone`
- `Jezki Support`
- `Jezki Privacy Policy`

Good description language:

- "Jezki gathers scattered expense proof into reviewed records and clean export packs."
- "Local-first and review-first by default."
- "Current builds use Gmail test mode only."

Avoid SEO copy that implies live public availability, production Gmail, tax outcomes, or final support contact.

## 29. Documentation Changes

If Claude Code changes the website, update documentation only where useful:

- `README.md` should stay a concise repo guide.
- `HANDOVER.md` should stay the current handoff truth for next agents.
- This spec can remain as the detailed Claude-specific brief.

Do not turn README into a giant product brief. Keep long-form instruction in this file or another clearly named handoff file.

If the visual state changes meaningfully, update `HANDOVER.md` "Done" and "Good next steps" sections so the next agent does not repeat completed work. If no meaningful state changes occurred, leave handoff docs alone.

When documenting verification, be specific:

- Say which commands ran.
- Say which pages were opened.
- Say which viewport widths were checked.
- Say whether console errors appeared.
- Say whether any scan had expected false positives, such as the word "analytics" appearing in a "No analytics" sentence.

## 30. Redesign Judgment

Claude Code should be opinionated, but not reckless. The site needs stronger identity, not random decoration.

Good redesign judgment:

- Keep the hedgehog as the central metaphor.
- Use fewer, clearer sections.
- Make the product loop obvious.
- Make privacy visible.
- Make export feel valuable.
- Keep support/privacy honest.
- Preserve current safe copy.
- Verify after changing.

Bad redesign judgment:

- Replacing the mascot with generic abstract gradients.
- Hiding the boundary copy below the fold in tiny print.
- Adding a fake "Download" CTA.
- Making Gmail sound production-ready.
- Using financial-dashboard components that imply live ledgers.
- Adding JavaScript just to animate a small decorative detail.
- Adding external fonts because the current serif stack seems old-fashioned.
- Making the site beige, quiet, and forgettable.

The owner wants the website redesigned by Claude Code because Claude has a strong plan for the website. The app stays in Codex. That means the handoff should let Claude move quickly on brand, layout, art, and polish without having to rediscover the entire Jezki product from scratch. The right outcome is a public site that feels like it belongs to a real product: careful, private, memorable, and ready for final owner decisions.
