# {Biz Name} Astro + Decap CMS site template

A `{variable}` template built from CodeStitch's Intermediate Astro Decap CMS starter kit (CC0). Design, components and Decap blog are unchanged. Only the content moved into one data file.

## Where the variables live

- `src/data/template.ts` holds every `{Token}`. `TOKENS` has the business facts (name, phone, city, address, services). `COPY` has page copy (hero, services, about, FAQ, reviews, CTA, page titles and meta descriptions).
- `src/data/client.ts` reads from `TOKENS`, so the header, footer, contact page and JSON-LD update from the same file.
- `astro.config.mjs` (`site`) and `public/admin/config.yml` (`repo`, `identity_url`, `site_url`) hold a few more `{tokens}` for the live URL and Decap CMS.
- `src/content/blog/*.md` are two placeholder posts. Decap CMS edits these.

## Use it for a new site

1. Copy the repo.
2. Replace each `{Token}` in `src/data/template.ts` with the real value. Search for `{` to find any left.
3. Set `site` in `astro.config.mjs` (it must stay a valid URL, so it holds https://example.com until you replace it) and the three values in `public/admin/config.yml`.
4. Swap images in `src/assets/images/` and the logo in `src/icons/`.
5. `npm install && npm run build`.

Left unfilled, the preview shows the raw `{Token}` text.
