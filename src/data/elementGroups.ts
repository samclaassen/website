/**
 * Primary architectural-element categories. Each groups one or more element
 * slugs from taxonomy.json and is represented by an object-focused archive photo.
 */
export interface ElementGroup {
  slug: string;
  name: string;
  description: string;
  elements: string[];
  /** Archive entry whose photograph shows the object itself */
  cover: string;
  /** Optional explicit landing page */
  href?: string;
}

export const ELEMENT_GROUPS: ElementGroup[] = [
  {
    slug: "doors",
    name: "Doors",
    description: "Paneled, plank, glazed and carved doors, and the casings around them.",
    elements: ["interior-doors", "exterior-doors"],
    href: "/elements/interior-doors",
    cover: "hector-guimard-double-door-from-the-coutolleau-shop-angers",
  },
  {
    slug: "cabinetry",
    name: "Cabinetry",
    description: "Cupboards, dressers, built-ins, kitchen cases and the doors that front them.",
    elements: ["cabinet-doors-fronts", "kitchen-cabinets", "built-ins-bookcases", "mudroom-entry", "bathroom-vanities", "radiator-covers"],
    cover: "painted-corner-cupboard-from-lancaster-county-pennsylvania",
  },
  {
    slug: "wall-paneling",
    name: "Wall Paneling",
    description: "Wainscoting, linenfold, raised and flat panels, beadboard and full wood-lined rooms.",
    elements: ["wall-paneling-wainscoting"],
    cover: "linenfold-panel-st-andrew-s-church",
  },
  {
    slug: "fireplaces",
    name: "Fireplaces",
    description: "Mantels, surrounds, overmantels and chimneypieces.",
    elements: ["fireplace-mantels"],
    cover: "dining-room-chimneypiece-hatfield-house",
  },
  {
    slug: "stairs-and-trim",
    name: "Stairs & Trim",
    description: "Staircases, newels and balusters, casings, cornices and moldings.",
    elements: ["trim-moulding"],
    cover: "spiral-stair-in-the-trustees-office-shaker-village-of-pleasant-hill",
  },
  {
    slug: "ornament",
    name: "Architectural Ornament",
    description: "Brackets, corbels, carving and applied ornament.",
    elements: ["corbels-brackets-ornament"],
    cover: "painted-beam-bracket-musee-de-l-ecole-de-nancy",
  },
  {
    slug: "kitchen-details",
    name: "Kitchen Details",
    description: "Hoods, chimneypieces and the working fittings of historic kitchens.",
    elements: ["range-hoods"],
    cover: "copper-range-hood-in-the-glessner-house-kitchen-chicago",
  },
  {
    slug: "hardware",
    name: "Hardware",
    description: "Knobs, escutcheons, hinges and brackets that complete the woodwork.",
    elements: ["metal-hardware"],
    cover: "ornamented-interior-doorknob-molly-brown-house-denver",
  },
];

export function groupForElement(element: string) {
  return ELEMENT_GROUPS.find((g) => g.elements.includes(element));
}

/** Where a group card should link: the single element page, or the directory anchor. */
export function groupHref(group: ElementGroup) {
  if (group.href) return group.href;
  return group.elements.length === 1 ? `/elements/${group.elements[0]}` : `/elements#${group.slug}`;
}
