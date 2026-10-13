# Source-led curation

This edition replaces the invented product collections and unrelated stock-image substitutions with 30 traceable records: 10 museum references and 20 external seller listings. It is a curated starting set, not an import of the entire research spreadsheet and not an inventory of Legacy Homeware products.

## Content model

`src/lib/curated-objects.json` is the record of truth. Each entry has a stable ID, exact object/listing title, source URL, source-check date, attributed creator, date, medium, category and original editorial selection note. The museum and listing record types are displayed separately.

- Museum images: local WebP derivatives, maximum 1800px longest edge; original 3400px JPEG remains linked on the object page. Images use `object-contain`, never a product-altering crop. Each image records its original URL, credit/accession, CC0 licence URL and object-specific API rights evidence.
- Seller listings: titles and descriptive facts were checked against the individual 1stDibs listing on 13 October 2026. Prices are from the dated research shortlist, NOT a live pricing feed. HTTP success does not prove stock availability or authenticity. Re-editions, stylistic attributions and uncertain makers remain qualified.
- No seller image is embedded, hotlinked or downloaded into the website. Source photography can be viewed by following the seller link. Add it only after obtaining an appropriate reuse licence or explicit permission.
- Museum images are not substituted for dealer listings, even when maker or design is similar. The museum object is explicitly labelled not for sale.
- No affiliate or commercial partnership is asserted.

## Image provenance

All 10 images come from the Cleveland Museum of Art. Their individual API records explicitly returned `share_license_status: CC0`. Original JPEG downloads were decoded and dimensions checked before resizing. The object accession in each image URL matches the corresponding API record.

Museum policy: https://www.clevelandart.org/open-access
Licence: https://creativecommons.org/publicdomain/zero/1.0/

API evidence is retained in every record as `image.evidenceUrl`. The source object IDs are 93149, 157229, 167864, 173164, 97308, 140384, 150847, 300665, 156161 and 168417. Museum attribution qualifiers are retained; editorial groupings are not asserted as museum classifications. Credit does not imply museum endorsement.

## Research input

Selection was inspired by the Type document **Luxury Home Pieces For Sale: Curated Shortlist by Era**, captured 13 October 2026, artifact `wart_01m4vb6s71e3c9513x8szk0xzw`. The larger spreadsheet's claimed counts, search-demand statistics and rankings were not independently verified and are not published on the site.

## Navigation and migration

The index supports search, era/style, object category and source filters, plus reset and empty states. Every record has its own `/objects/[id]` page and source link. Museum images display only beside the correct object record. There is no fallback to a collection/room photo.

Legacy collection URLs redirect in `next.config.ts`. Hearthstone, Ashworth, Meridian and Solstice map to their historical style names. Ironforge leads to the material-led Vernacular Ironwork study. Heritage and Provence lead to the directory instead of falsely treating Colonial and French Country as exact equivalents of one historical era.

The homepage, era directory, object records, about copy, navigation, footer, metadata and sitemap all describe an independent curation, not a manufacturer or shop. Old AI/stock images are retired from the source tree.

## Adding a record

1. Check the exact source page and preserve attribution qualifiers, actual date, medium and stable source URL.
2. Write a short original selection note; do not copy sales language or turn a seller claim into authentication.
3. Check object-level image rights. An accessible image URL or source credit is not permission. For uncertain rights, publish a source link without a photo.
4. Inspect the downloaded image and compare it with the source record. Never use a representative substitute.
5. Store licence, credit, original image URL, evidence URL, dimensions and check date. Generate a reasonably sized local derivative.
6. Clearly distinguish museum reference, period original, later revival and re-edition. Prices need a currency and capture date; leave availability to the seller unless separately verified.
7. Run the build and lint, check the detail page and filters at desktop/mobile sizes, and deliver changes through a reviewable PR. Do not merge automatically.
