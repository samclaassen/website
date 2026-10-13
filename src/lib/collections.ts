export interface Collection {
  slug: string;
  era: string;
  period: string;
  description: string;
}

export const COLLECTIONS: Collection[] = [
  { slug: "arts-and-crafts", era: "Arts & Crafts", period: "c. 1860–1930", description: "Craft, material and construction brought into focus. Explore metalwork, glass and lighting associated with the movement and its later interpretations." },
  { slug: "art-nouveau", era: "Art Nouveau", period: "c. 1890–1914", description: "Plants, insects and flowing lines translated into glass, bronze and the objects of everyday life. Related Jugendstil and Vienna Secession designs sit alongside the more organic work." },
  { slug: "art-deco", era: "Art Deco", period: "c. 1920–1940", description: "Sculpted glass, considered geometry and decorative surfaces. A study of interwar lighting and objects, with dates and attributions kept distinct from style." },
  { slug: "victorian", era: "Victorian", period: "1837–1901", description: "An era of overlapping revivals, new manufacturing methods and richly furnished interiors. Look closely at the small architectural details as well as the statement pieces." },
  { slug: "gothic-revival", era: "Gothic Revival", period: "18th–early 20th century", description: "Pointed forms, tracery and medieval references reinterpreted for later interiors. These objects can overlap with Victorian and Arts & Crafts design." },
  { slug: "georgian", era: "Georgian", period: "1714–1830", description: "British domestic objects from the Georgian period: portable candlelight, silver and carefully proportioned forms. The period encompasses more than one decorative style." },
  { slug: "neoclassical", era: "Neoclassical", period: "c. 1760 onward", description: "Columns, symmetry and references to classical antiquity. Later revivals are identified by their actual dates, rather than presented as eighteenth-century originals." },
  { slug: "mid-century-modern", era: "Mid-Century Modern", period: "c. 1930–1970", description: "Expressive lighting, new production techniques and a quieter kind of ornament. Explore named designers and manufacturers through documented objects and dealer listings." },
  { slug: "hollywood-regency", era: "Hollywood Regency", period: "20th-century style", description: "A decorating lens rather than a precise historical period: theatrical lighting, reflective materials and layered ornament. Groupings here are editorial, not authentication." },
  { slug: "vernacular", era: "Vernacular Ironwork", period: "Traditional craft", description: "A material-led study rather than a historical era. Wrought-iron brackets and domestic fittings show how construction itself can become ornament; unrecorded makers remain unrecorded." },
  { slug: "murano", era: "Murano & Venetian Glass", period: "A glassmaking tradition", description: "A place and a tradition, not a single era. Hand-worked glass connects antique Venetian objects with twentieth-century lamps, sconces and vases." },
];

export const getCollection = (slug: string) => COLLECTIONS.find((collection) => collection.slug === slug);
export const getAllCollectionSlugs = () => COLLECTIONS.map((collection) => collection.slug);
