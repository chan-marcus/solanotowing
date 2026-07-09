# Solano Towing (rank & rent template)

Static Astro site. 19 pages: home, 10 service pages, 3 area pages, about, contact, blog (2 posts).
Zero client-side JavaScript. Sitemap + LocalBusiness/FAQ schema included.

## Run locally
```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy (Cloudflare Pages)
1. Push this repo to GitHub.
2. Cloudflare dashboard -> Workers & Pages -> Create -> Pages -> connect repo.
3. Framework preset: Astro. Build command `npm run build`, output `dist`.
4. Add custom domain solanotowing.com (registrar + DNS already in Cloudflare).

## Before launch (in order)
- [ ] Buy solanotowing.com (check archive.org + backlink history first)
- [ ] Provision Twilio number, set forwarding + whisper, then replace `phone` and
      `phoneDisplay` in `src/config/site.ts` (currently a 555 placeholder)
- [ ] Update the FAQ answer copy anywhere the placeholder number appears (search "555")
- [ ] Add 3-5 real corridor photos (Cordelia Junction, I-80 signage) to /public and hero
- [ ] Grab @solanotowing Instagram, link it in the footer
- [ ] Search Console: verify domain, submit sitemap-index.xml
- [ ] Citations: Yelp, Bing Places, Apple Maps, YellowPages (consistent NAP)

## Cloning to a new market
Edit three files, redeploy:
1. `src/config/site.ts` - brand, phone, city, zips, corridors
2. `src/data/services.ts` - rewrite intros/FAQs with local roads & landmarks (do NOT
   ship the Fairfield copy to another city; unique local copy is the entire moat)
3. `src/data/cities.ts` - area pages for the new market

## Adding blog posts
Drop a markdown file in `src/content/blog/` with title/description/date frontmatter.
Target one keyword per post ("winch out <road name>", "tow cost <county>").
