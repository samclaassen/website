export interface Collection {
  slug: string;
  name: string;
  era: string;
  period: string;
  tagline: string;
  description: string;
  longDescription: string;
  materials: string[];
  motifs: string[];
  homeStyles: string[];
  searchTerms: string[];
  image: string | null;
}

export const COLLECTIONS: Collection[] = [
  {
    slug: "hearthstone",
    name: "Hearthstone",
    era: "Arts & Crafts",
    period: "c. 1900–1929",
    tagline: "Where honest craft meets home",
    description: "Clean geometric lines, restrained nature motifs, and honest material presence inspired by the Arts & Crafts movement and Craftsman bungalow tradition.",
    longDescription: "The Arts & Crafts movement was a rebellion against industrialisation — a belief that the things in your home should be made with care, by hand, from honest materials. The Hearthstone collection draws from this tradition: clean geometric lines, restrained nature motifs like oak leaves and ginkgo, and the kind of honest material presence that defined the Craftsman bungalow. Every piece feels intentional, substantial, and built to last generations. If you live in a Craftsman, bungalow, or Prairie-style home, Hearthstone was designed for you.",
    materials: ["Oil-rubbed bronze", "Antique brass", "Matte black"],
    motifs: ["Oak leaves & acorns", "Ginkgo leaves", "Geometric lines", "Mission-style rectilinear patterns"],
    homeStyles: ["Craftsman bungalow", "Prairie style", "Mission Revival", "American Foursquare"],
    searchTerms: ["craftsman hardware", "arts and crafts door hardware", "mission style switch plates", "bungalow hardware"],
    image: "/images/collection-hearthstone.png",
  },
  {
    slug: "ashworth",
    name: "Ashworth",
    era: "Victorian",
    period: "c. 1837–1901",
    tagline: "Refined elegance in every detail",
    description: "Ornate scrollwork, acanthus details, floral rosettes, and beaded edges drawn from the golden age of decorative hardware.",
    longDescription: "The Victorian era was the golden age of decorative hardware. Mass production was new, but craft pride was still paramount — foundries competed to produce the most intricate, most beautiful hardware catalogues in history. The Ashworth collection channels that ambition: acanthus leaf scrollwork, egg-and-dart borders, floral garlands, and beaded edges, all rendered with the depth and detail that made Victorian hardware a point of pride for every homeowner. This is refined elegance, not excess — each piece designed to reward a closer look.",
    materials: ["Antique brass", "Polished brass", "Oil-rubbed bronze"],
    motifs: ["Acanthus leaves", "Egg-and-dart borders", "Floral garlands", "Beaded edges", "Rosette medallions"],
    homeStyles: ["Victorian", "Queen Anne", "Second Empire", "Italianate", "Folk Victorian"],
    searchTerms: ["victorian door hardware", "ornate switch plates", "antique style outlet covers", "victorian home hardware"],
    image: "/images/collection-ashworth.png",
  },
  {
    slug: "meridian",
    name: "Meridian",
    era: "Art Deco",
    period: "c. 1920–1939",
    tagline: "Bold geometry, timeless glamour",
    description: "Sunburst patterns, stepped forms, and precise geometry inspired by the most glamorous era in design history.",
    longDescription: "Art Deco was confidence cast in metal. Born in the roaring twenties, it drew from Egyptian archaeology, Cubist painting, and the machine age to create a style that was simultaneously ancient and futuristic. The Meridian collection captures that energy: bold sunburst fans, stepped ziggurat forms, chevron lines, and the kind of precise, symmetrical geometry that defined the great hotels, ocean liners, and apartment buildings of the era. These pieces make a statement — glamorous without being ostentatious, geometric without being cold.",
    materials: ["Polished brass", "Brushed nickel", "Satin brass"],
    motifs: ["Sunburst fans", "Chevron lines", "Stepped forms", "Egyptian-inspired geometry", "Symmetrical rays"],
    homeStyles: ["Art Deco apartment", "1920s–30s revival", "Streamline Moderne", "Miami Beach style"],
    searchTerms: ["art deco hardware", "deco style switch plates", "1920s door hardware", "geometric hardware"],
    image: "/images/collection-meridian.png",
  },
  {
    slug: "heritage",
    name: "Heritage",
    era: "Traditional / Colonial",
    period: "c. 1700–1850",
    tagline: "The quiet confidence of tradition",
    description: "Simple, elegant forms with rope-twist borders and classic rosettes — the timeless foundation of American home design.",
    longDescription: "Before hardware became disposable, it was foundational. Colonial and Federal-era hardware was defined by its restraint: simple, confident forms in solid brass, with rope-twist borders, classic rosettes, and gentle fluting that spoke of quality without shouting for attention. The Heritage collection is our most versatile line — pieces that feel right in a historic Colonial, a traditional new build, or any home where understated quality is the goal. This is the hardware equivalent of a well-tailored suit: never trendy, always appropriate.",
    materials: ["Polished brass", "Satin nickel", "Antique brass"],
    motifs: ["Rope-twist borders", "Classic rosettes", "Gentle fluting", "Simple beading", "Federal-era symmetry"],
    homeStyles: ["Colonial", "Federal", "Georgian", "Cape Cod", "Traditional new construction"],
    searchTerms: ["colonial hardware", "traditional door hardware", "classic brass hardware", "federal style hardware"],
    image: "/images/collection-heritage.png",
  },
  {
    slug: "solstice",
    name: "Solstice",
    era: "Art Nouveau",
    period: "c. 1890–1910",
    tagline: "Nature's curves in lasting metal",
    description: "Flowing organic lines, botanical motifs, and sinuous curves from the brief era when hardware was considered fine art.",
    longDescription: "For a brief, brilliant moment at the turn of the twentieth century, decorative hardware was elevated to fine art. Art Nouveau designers like Hector Guimard and Louis Comfort Tiffany saw no boundary between a sculpture and a door handle — both were opportunities to capture nature's flowing lines in lasting material. The Solstice collection channels that philosophy: iris and lily motifs, sinuous whiplash curves, and the organic flowing forms that made Art Nouveau the most distinctive decorative movement in history. These are pieces for people who believe hardware should be beautiful, not just functional.",
    materials: ["Patinated bronze", "Antique brass", "Copper with verdigris"],
    motifs: ["Iris & lily flowers", "Whiplash curves", "Dragonfly motifs", "Organic flowing lines", "Botanical tendrils"],
    homeStyles: ["Art Nouveau", "Late Victorian", "Turn-of-century", "Edwardian"],
    searchTerms: ["art nouveau hardware", "organic style hardware", "floral door hardware", "botanical switch plates"],
    image: "/images/collection-solstice.png",
  },
  {
    slug: "ironforge",
    name: "Ironforge",
    era: "Farmhouse / Rustic",
    period: "Heritage craft tradition",
    tagline: "Forged character, built to endure",
    description: "Heavy, honest hardware with hammered textures and visible forge character — the warmth of handcraft in solid metal.",
    longDescription: "Before factories, there was the forge. Every piece of hardware in every home was made by a blacksmith who left their mark in the metal — hammer strikes, hand-filed edges, the organic irregularity that no machine can replicate. The Ironforge collection brings that character back: heavy, substantial pieces with hammered surfaces, visible forge marks, and the kind of honest material presence that makes a room feel grounded. Whether you're renovating a farmhouse, building a modern rustic home, or just want hardware with real weight and warmth, Ironforge delivers the handcraft character that mass production took away.",
    materials: ["Black iron", "Oil-rubbed bronze", "Dark bronze"],
    motifs: ["Hammered surfaces", "Forged edges", "Square proportions", "Strap hinge forms", "Rivet details"],
    homeStyles: ["Farmhouse", "Modern rustic", "Mountain lodge", "Barn conversion", "Country estate"],
    searchTerms: ["farmhouse hardware", "rustic door hardware", "iron switch plates", "hammered hardware"],
    image: "/images/collection-ironforge.png",
  },
  {
    slug: "provence",
    name: "Provence",
    era: "French Country",
    period: "Provincial tradition",
    tagline: "Effortless provincial elegance",
    description: "Softer curves, scrollwork, and shell motifs drawn from the enduring warmth of French provincial design.",
    longDescription: "French Country style has endured for centuries because it strikes the perfect balance: decorative enough to feel special, restrained enough to feel like home. The Provence collection draws from this provincial tradition — softer curves than Victorian, gentler scrollwork, shell and acanthus motifs, and the kind of understated warmth that makes every room feel welcoming. These pieces are particularly at home in kitchens and bathrooms, where their organic curves and warm finishes create the effortless elegance that French design is known for.",
    materials: ["Antique pewter", "Satin nickel", "Antique brass"],
    motifs: ["Shell motifs", "Flowing scrollwork", "Gentle curves", "Acanthus accents", "Ribbon details"],
    homeStyles: ["French Country", "Provençal", "Mediterranean", "European traditional", "Cottage"],
    searchTerms: ["french country hardware", "provincial style hardware", "french door hardware", "cottage style hardware"],
    image: "/images/collection-provence.png",
  },
];

export function getCollection(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}

export function getAllCollectionSlugs(): string[] {
  return COLLECTIONS.map((c) => c.slug);
}
