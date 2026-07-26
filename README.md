# Denise Taylor-Dunn – Psychic and Medium

Personal website for Denise Taylor-Dunn (denisetaylordunn.com). Static HTML/CSS/JS, no build step required.

## File structure

```
index.html            Homepage (single-scroll, anchored sections)
privacy-policy.html   Privacy Policy page
css/styles.css         All styles (CSS custom properties for colour/type/spacing)
js/main.js             Mobile nav, enquiry-type pre-selection, form validation, footer year
images/                 Placeholder image assets (see below)
```

Open `index.html` directly in a browser, or serve the folder with any static file server.

## Placeholders that must be resolved before publishing

- **Photography** — `images/hero-placeholder.svg`, `images/about-placeholder.svg`, and
  `images/og-image-placeholder.svg` are clearly labelled placeholders. Replace them with
  real, optimised photographs of Denise (recommended: WebP/JPEG, appropriately compressed)
  and update the `<img>` `src`/`width`/`height` attributes and `alt` text in `index.html`
  and the `og:image` tag in `index.html`'s `<head>`.
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
