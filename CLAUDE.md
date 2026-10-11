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

## Line breaks

Text is ragged-right, never justified: no lone last word, no stubby last line,
and no sentence that starts or ends within two words of a line edge.

**Proper nouns never break across lines.** Place names, routes and the phone
number (Solano County, Highway 12, Air Base Parkway, (707) 356-ROAD) are wrapped
in `<span class="pn">` on every built page by `scripts/typeset.mjs`, which runs
as an `astro:build:done` hook. The names and patterns live in
`scripts/proper-nouns.mjs`, so add new multi-word names there when copy
mentions them. This outranks line fill and balance: if a bound name will not
fit, reword around it, never unbind it.

The same script then joins the three words either side of each sentence break,
plus the last two words of a block, with no-break spaces. `text-wrap: pretty`
on body text and `balance` on headings are the CSS backstop.

Typesetting runs on the build only, so `npm run dev` shows unbound text. Check
wraps against `npm run preview` at 1440, 1140 and 375px, and fix what remains by
rewording rather than with more CSS.
