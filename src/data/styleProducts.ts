/**
 * Homepage "Explore by style" cards: one real woodwork piece per style, drawn from the
 * categories we make (doors, cabinetry, paneling, mantels, range hoods, built-ins).
 * Photos belong to the linked seller; each card credits and links the listing.
 * One-off antique listings can sell or move — recheck links periodically.
 */
export type StyleProduct = {
  /** Element slug from taxonomy.json — what we make */
  element: string;
  /** Short category label shown on the card */
  category: string;
  image: string;
  width: number;
  height: number;
  product: string;
  seller: string;
  url: string;
};

export const STYLE_PRODUCTS: Record<string, StyleProduct> = {
  "arts-and-crafts": {
    element: "interior-doors",
    category: "Interior door",
    image: "/images/styles/arts-and-crafts-woodwork.jpg",
    width: 516,
    height: 1042,
    product: "Craftsman three-panel fir door",
    seller: "Home Depot",
    url: "https://www.homedepot.com/p/Builders-Choice-32-in-x-80-in-3-Panel-Craftsman-Solid-Core-Unfinished-Fir-Wood-Interior-Door-Slab-IF76028C/314833280",
  },
  victorian: {
    element: "interior-doors",
    category: "Interior door",
    image: "/images/styles/victorian-woodwork.jpg",
    width: 481,
    height: 1200,
    product: "Victorian stained-glass door",
    seller: "1stDibs",
    url: "https://www.1stdibs.com/furniture/building-garden/doors-gates/victorian-internal-door-stained-glass/id-f_36785211/",
  },
  "denver-square": {
    element: "fireplace-mantels",
    category: "Fireplace mantel",
    image: "/images/styles/denver-square-woodwork.jpg",
    width: 1117,
    height: 1200,
    product: "Mission oak mantel with twist columns, c. 1900",
    seller: "1stDibs",
    url: "https://www.1stdibs.com/furniture/building-garden/fireplaces-mantels/antique-american-craftsman-mission-oak-barley-twist-column-fireplace-mantel-1900/id-f_42401142/",
  },
  "tudor-revival": {
    element: "wall-paneling-wainscoting",
    category: "Wall paneling",
    image: "/images/styles/tudor-revival-woodwork.jpg",
    width: 643,
    height: 1200,
    product: "Carved oak linenfold panel",
    seller: "1stDibs",
    url: "https://www.1stdibs.com/furniture/building-garden/panelling/carved-oak-gothic-linenfold-panel-flanders-ca-16th-century/id-f_51935002/",
  },
  "colonial-georgian": {
    element: "built-ins-bookcases",
    category: "Built-in cabinet",
    image: "/images/styles/colonial-georgian-woodwork.jpg",
    width: 599,
    height: 1200,
    product: "Georgian shell-niche built-in cabinet",
    seller: "1stDibs",
    url: "https://www.1stdibs.com/furniture/storage-case-pieces/corner-cupboards/mid-18th-century-carved-pine-dome-top-fitted-cabinet/id-f_47479972/",
  },
  shaker: {
    element: "cabinet-doors-fronts",
    category: "Cabinet door",
    image: "/images/styles/shaker-woodwork.jpg",
    width: 534,
    height: 1000,
    product: "Afton Shaker cabinet door",
    seller: "WalzCraft",
    url: "https://walzcraft.com/product/afton-s640/",
  },
  "art-deco": {
    element: "fireplace-mantels",
    category: "Fireplace mantel",
    image: "/images/styles/art-deco-woodwork.jpg",
    width: 1200,
    height: 1101,
    product: "Stepped mahogany Art Deco mantel",
    seller: "1stDibs",
    url: "https://www.1stdibs.com/furniture/building-garden/fireplaces-mantels/art-deco-style-mahogany-fireplace/id-f_27299612/",
  },
  "art-nouveau": {
    element: "interior-doors",
    category: "Interior doors",
    image: "/images/styles/art-nouveau-woodwork.jpg",
    width: 1063,
    height: 1200,
    product: "Oak and stained-glass door partition",
    seller: "1stDibs",
    url: "https://www.1stdibs.com/furniture/building-garden/doors-gates/art-nouveau-door-oak-partition-facade-stained-glass-italy/id-f_46008802/",
  },
  "alpine-tyrolean": {
    element: "cabinet-doors-fronts",
    category: "Painted cabinetry",
    image: "/images/styles/alpine-tyrolean-woodwork.jpg",
    width: 953,
    height: 1200,
    product: "Painted Alpine cupboard, dated 1766",
    seller: "1stDibs",
    url: "https://www.1stdibs.com/furniture/storage-case-pieces/cabinets/antique-painted-cupboard-flowers-dated-1766/id-f_45339472/",
  },
  "english-country": {
    element: "range-hoods",
    category: "Range hood",
    image: "/images/styles/english-country-woodwork.jpg",
    width: 1144,
    height: 1200,
    product: "Painted wood range hood",
    seller: "ZLINE",
    url: "https://www.wayfair.com/appliances/pdp/zline-ducted-wooden-wall-mount-range-hood-w001411569.html",
  },
  "mid-century-modern": {
    element: "wall-paneling-wainscoting",
    category: "Wall paneling",
    image: "/images/styles/mid-century-modern-woodwork.jpg",
    width: 905,
    height: 746,
    product: "Walnut slat wall panels",
    seller: "Home Depot",
    url: "https://www.homedepot.com/p/American-Pro-Decor-Acoustic-Brown-Walnut-Interlocking-Decorative-MDF-Wall-Paneling-2-Piece-16-54-Sq-Ft-Pack-1-in-x-2-1-8-ft-x-8-ft-5APD12015/327613470",
  },
  "mountain-modern": {
    element: "interior-doors",
    category: "Plank door",
    image: "/images/styles/mountain-modern-woodwork.jpg",
    width: 954,
    height: 1053,
    product: "Knotty alder V-groove barn door",
    seller: "Home Depot",
    url: "https://www.homedepot.com/p/Pacific-Entries-42-in-x-84-in-Rustic-Unfinished-2-Panel-V-Groove-Knotty-Alder-Wood-Sliding-Barn-Door-with-Satin-Nickel-Hardware-UA3242-42-15/300117984",
  },
};
