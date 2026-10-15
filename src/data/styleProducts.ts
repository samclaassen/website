/**
 * Homepage "Explore by style" cards: one real, currently listed product per style,
 * chosen to show the kind of piece people most often buy for that style.
 * Images are product photos from the linked seller; the card credits and links to the listing.
 * Listings (especially one-off antiques) can sell or move — recheck links periodically.
 */
export type StyleProduct = {
  image: string;
  width: number;
  height: number;
  product: string;
  seller: string;
  url: string;
};

export const STYLE_PRODUCTS: Record<string, StyleProduct> = {
  "arts-and-crafts": {
    image: "/images/styles/arts-and-crafts.jpg",
    width: 1010,
    height: 1004,
    product: "Gus Bow Arm Morris Chair",
    seller: "Stickley",
    url: "https://www.stickley.com/products/gus-bow-arm-morris-chair",
  },
  victorian: {
    image: "/images/styles/victorian.jpg",
    width: 862,
    height: 1200,
    product: "Carved oak mantel with overmantel, 1893",
    seller: "1stDibs",
    url: "https://www.1stdibs.com/furniture/building-garden/fireplaces-mantels/monumental-1893-renaissance-revival-carved-oak-fireplace-mantel-overmantel/id-f_50382262/",
  },
  "denver-square": {
    image: "/images/styles/denver-square.jpg",
    width: 1200,
    height: 1083,
    product: "Stickley Brothers Mission oak sideboard",
    seller: "1stDibs",
    url: "https://www.1stdibs.com/furniture/storage-case-pieces/sideboards/stickley-brothers-sideboard-server-copper-hardware-mission-oak-art-crafts/id-f_50531792/",
  },
  "tudor-revival": {
    image: "/images/styles/tudor-revival.jpg",
    width: 1029,
    height: 1200,
    product: "Carved oak court cupboard",
    seller: "1stDibs",
    url: "https://www.1stdibs.com/furniture/storage-case-pieces/cupboards/carved-oak-court-cupboard/id-f_43908072/",
  },
  "colonial-georgian": {
    image: "/images/styles/colonial-georgian.jpg",
    width: 892,
    height: 1200,
    product: "19th-century Windsor armchair",
    seller: "1stDibs",
    url: "https://www.1stdibs.com/furniture/seating/windsor-chairs/19th-century-low-back-windsor-chair/id-f_37555952/",
  },
  shaker: {
    image: "/images/styles/shaker.jpg",
    width: 1200,
    height: 1070,
    product: "Mount Lebanon Shaker ladder-back chairs, c. 1935",
    seller: "1stDibs",
    url: "https://www.1stdibs.com/furniture/seating/dining-room-chairs/historic-set-of-6-shaker-dining-chairs-mount-lebanon-c-1935/id-f_36281822/",
  },
  "art-deco": {
    image: "/images/styles/art-deco.jpg",
    width: 743,
    height: 1200,
    product: "Waterfall-front walnut china cabinet",
    seller: "1stDibs",
    url: "https://www.1stdibs.com/furniture/storage-case-pieces/cabinets/art-deco-waterfall-front-walnut-china-cabinet/id-f_47317822/",
  },
  "art-nouveau": {
    image: "/images/styles/art-nouveau.jpg",
    width: 1137,
    height: 1200,
    product: "Tiffany-style Dragonfly table lamp",
    seller: "Meyda Lighting",
    url: "https://www.wayfair.com/lighting/pdp/meyda-lighting-17-high-tiffany-dragonfly-table-lamp-w004078382.html",
  },
  "alpine-tyrolean": {
    image: "/images/styles/alpine-tyrolean.jpg",
    width: 734,
    height: 1200,
    product: "Carved Black Forest cuckoo clock",
    seller: "1stDibs",
    url: "https://www.1stdibs.com/furniture/decorative-objects/clocks/wall-clocks/antique-black-forest-carved-cuckoo-clock-stag-head-on-top/id-f_36840502/",
  },
  "english-country": {
    image: "/images/styles/english-country.jpg",
    width: 771,
    height: 1200,
    product: "Georgian oak Welsh dresser, c. 1780",
    seller: "1stDibs",
    url: "https://www.1stdibs.com/furniture/storage-case-pieces/cabinets/antique-18th-century-georgian-oak-inlaid-welsh-dresser-plate-rack-sideboard-1780/id-f_49864662/",
  },
  "mid-century-modern": {
    image: "/images/styles/mid-century-modern.jpg",
    width: 1200,
    height: 709,
    product: "Eames Lounge Chair and Ottoman",
    seller: "Herman Miller",
    url: "https://store.hermanmiller.com/living-room-furniture-lounge-chairs-ottomans/eames-lounge-chair-and-ottoman/5667.html",
  },
  "mountain-modern": {
    image: "/images/styles/mountain-modern.jpg",
    width: 1200,
    height: 692,
    product: "Live-edge black walnut dining table",
    seller: "1stDibs",
    url: "https://www.1stdibs.com/furniture/tables/dining-room-tables/very-large-custom-made-10-seat-live-edge-dining-table-american-black-walnut/id-f_41544522/",
  },
};
