# Denise Taylor-Dunn – Psychic and Medium

Personal website for Denise Taylor-Dunn (denisetaylordunn.com). Static HTML/CSS/JS, no build step required.

## File structure

```
index.html            Homepage (single-scroll, anchored sections)
privacy-policy.html   Privacy Policy page
css/styles.css         All styles (CSS custom properties for colour/type/spacing)
js/main.js             Mobile nav, enquiry-type pre-selection, form validation, footer year
images/                 Photography used on the site, plus placeholder assets (see below)
images/originals/       Full-resolution source photos as supplied, kept for future use
```

Open `index.html` directly in a browser, or serve the folder with any static file server.

## Photography

- `images/hero-denise.jpg` and `images/about-denise.jpg` are the real photographs now used
  in the Hero and About sections (optimised JPEGs, compressed from the originals supplied).
  The Open Graph share image also currently points at `hero-denise.jpg`; for the best social
  share preview, consider swapping in a dedicated landscape (1200x630) crop before publication.
- Two additional supplied photographs are not currently used anywhere on the site. Full-resolution
  originals of all four supplied photos are kept in `images/originals/` in case any are wanted
  for a future section or an alternate crop.
- `images/hero-placeholder.svg`, `images/about-placeholder.svg`, and `images/og-image-placeholder.svg`
  are no longer referenced by the page but are left in place in case they're useful as a fallback.

## Placeholders that must be resolved before publishing

- **Favicon** — `images/favicon-placeholder.svg` is a neutral placeholder square, referenced
  from both HTML pages. Replace with a final favicon (SVG and/or ICO/PNG fallbacks).
- **Contact form backend** — the enquiry form in `index.html` (`#enquiry-form`) has no
  server or email-delivery integration. `js/main.js` currently only validates fields
  client-side and shows a placeholder confirmation message. Before launch, connect the
  form to a real submission handler (server endpoint or third-party form/email service)
  and update the Privacy Policy sections flagged below accordingly.
- **Privacy Policy** — several sections in `privacy-policy.html` are marked with a
  "Placeholder note" (retention period, any third-party form/hosting/analytics service,
  and the specific data protection law/complaints body that applies). These should be
  confirmed and the placeholder notes removed/updated before publication.
- **Domain/canonical URLs** — canonical and Open Graph URLs assume `https://denisetaylordunn.com/`;
  update if the final domain or path structure differs.

No testimonials, qualifications, prices, availability, social links, phone numbers, or
other unsupplied details have been invented anywhere on the site.
