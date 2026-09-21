# Solano Towing site

Static Astro site. Content lives in `src/content/blog/` (posts), `src/data/`
(services, areas, trust), and `src/pages/`. Diagrams are hand-authored SVGs in
`public/img/`.

## Writing rules

- **No em dashes, anywhere.** Not in posts, page copy, titles, descriptions,
  alt text, SVG labels, or code comments. Use a comma, colon, period, or
  parentheses instead. En dashes in number ranges ("20–30 minutes") are fine.
- Don't type `--` in Markdown either: the build converts two hyphens into an
  em dash.
- This is enforced: `npm run build` runs `scripts/check-em-dashes.mjs`
  afterward and fails if any em dash is found in `src/`, `public/`, or the
  built `dist/`. Run it on its own with `npm run check:dashes`.

## Blog posts

- One target search phrase per post, grounded in local roads and places.
- Title at most 45 characters (the layout appends " | Solano Towing").
- Description at most 155 characters.
- Every post gets an SVG diagram in `public/img/`, embedded with descriptive
  alt text, in the same style as the existing diagrams.
