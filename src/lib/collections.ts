import type { HardwareType } from "./constants";

export interface Piece {
  id: string;
  name: string;
  type: HardwareType;
  material: string;
  year: string;
  description: string;
  image: string | null; // will be populated with individual piece images
  eraSlug: string;
}

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
  image: string;
  pieces: Piece[];
}

export const COLLECTIONS: Collection[] = [
  {
    slug: "hearthstone",
    name: "Hearthstone",
    era: "Arts & Crafts",
    period: "c. 1900–1929",
    tagline: "Where honest craft meets home",
    description:
      "Clean geometric lines, restrained nature motifs, and honest material presence inspired by the Arts & Crafts movement and Craftsman bungalow tradition.",
    longDescription:
      "The Arts & Crafts movement was a rebellion against industrialisation — a belief that the things in your home should be made with care, by hand, from honest materials. The Hearthstone collection draws from this tradition: clean geometric lines, restrained nature motifs like oak leaves and ginkgo, and the kind of honest material presence that defined the Craftsman bungalow. Every piece feels intentional, substantial, and built to last generations. If you live in a Craftsman, bungalow, or Prairie-style home, Hearthstone was designed for you.",
    materials: ["Oil-rubbed bronze", "Antique brass", "Matte black"],
    motifs: [
      "Oak leaves & acorns",
      "Ginkgo leaves",
      "Geometric lines",
      "Mission-style rectilinear patterns",
    ],
    homeStyles: [
      "Craftsman bungalow",
      "Prairie style",
      "Mission Revival",
      "American Foursquare",
    ],
    searchTerms: [
      "craftsman hardware",
      "arts and crafts door hardware",
      "mission style switch plates",
      "bungalow hardware",
    ],
    image: "/images/collection-hearthstone.png",
    pieces: [
      {
        id: "hearthstone-mission-oak",
        name: "Mission Oak Switch Plate",
        type: "Switch Plate",
        material: "Oil-rubbed bronze",
        year: "c. 1910",
        description:
          "Geometric oak leaf border with clean rectilinear framing. The restrained nature motifs are characteristic of the Mission style — ornament that serves structure, never the reverse.",
        image: null,
        eraSlug: "hearthstone",
      },
      {
        id: "hearthstone-ginkgo",
        name: "Ginkgo Leaf Door Knob",
        type: "Door Knob",
        material: "Antique brass",
        year: "c. 1905",
        description:
          "A flowing ginkgo leaf pattern wraps the knob face, inspired by the Japanese design influence that pervaded the Arts & Crafts movement. Substantial weight, satin-smooth action.",
        image: null,
        eraSlug: "hearthstone",
      },
      {
        id: "hearthstone-prairie",
        name: "Prairie Line Hinge",
        type: "Hinge",
        material: "Matte black",
        year: "c. 1915",
        description:
          "Clean horizontal lines and geometric proportions inspired by Frank Lloyd Wright's Prairie School. Each hinge becomes an architectural detail rather than hidden hardware.",
        image: null,
        eraSlug: "hearthstone",
      },
      {
        id: "hearthstone-craftsman-rose",
        name: "Craftsman Rose Outlet Cover",
        type: "Outlet Cover",
        material: "Oil-rubbed bronze",
        year: "c. 1912",
        description:
          "A simple Tudor rose centered within a squared frame. The honest material weight and hand-finished patina speak to the Arts & Crafts ideal of beauty through craft integrity.",
        image: null,
        eraSlug: "hearthstone",
      },
    ],
  },
  {
    slug: "ashworth",
    name: "Ashworth",
    era: "Victorian",
    period: "c. 1837–1901",
    tagline: "Refined elegance in every detail",
    description:
      "Ornate scrollwork, acanthus details, floral rosettes, and beaded edges drawn from the golden age of decorative hardware.",
    longDescription:
      "The Victorian era was the golden age of decorative hardware. Mass production was new, but craft pride was still paramount — foundries competed to produce the most intricate, most beautiful hardware catalogues in history. The Ashworth collection channels that ambition: acanthus leaf scrollwork, egg-and-dart borders, floral garlands, and beaded edges, all rendered with the depth and detail that made Victorian hardware a point of pride for every homeowner. This is refined elegance, not excess — each piece designed to reward a closer look.",
    materials: ["Antique brass", "Polished brass", "Oil-rubbed bronze"],
    motifs: [
      "Acanthus leaves",
      "Egg-and-dart borders",
      "Floral garlands",
      "Beaded edges",
      "Rosette medallions",
    ],
    homeStyles: [
      "Victorian",
      "Queen Anne",
      "Second Empire",
      "Italianate",
      "Folk Victorian",
    ],
    searchTerms: [
      "victorian door hardware",
      "ornate switch plates",
      "antique style outlet covers",
      "victorian home hardware",
    ],
    image: "/images/collection-ashworth.png",
    pieces: [
      {
        id: "ashworth-acanthus-scroll",
        name: "Acanthus Scroll Switch Plate",
        type: "Switch Plate",
        material: "Polished brass",
        year: "c. 1875",
        description:
          "Flowing acanthus leaf scrollwork framing a beaded-edge toggle opening. Based on patterns from the Russell & Erwin catalogue, the gold standard of Victorian hardware.",
        image: null,
        eraSlug: "ashworth",
      },
      {
        id: "ashworth-eastlake",
        name: "Eastlake Rosette Door Knob",
        type: "Door Knob",
        material: "Antique brass",
        year: "c. 1880",
        description:
          "Detailed rosette face with beaded concentric rings, inspired by Charles Eastlake's influential design principles. The geometric precision within ornamental richness defines the late Victorian aesthetic.",
        image: null,
        eraSlug: "ashworth",
      },
      {
        id: "ashworth-egg-dart",
        name: "Egg & Dart Hinge",
        type: "Hinge",
        material: "Oil-rubbed bronze",
        year: "c. 1870",
        description:
          "Classical egg-and-dart border running the full length of exposed hinge leaves. A detail borrowed from Greek architecture that became the hallmark of high Victorian interiors.",
        image: null,
        eraSlug: "ashworth",
      },
      {
        id: "ashworth-floral-garland",
        name: "Floral Garland Outlet Cover",
        type: "Outlet Cover",
        material: "Polished brass",
        year: "c. 1885",
        description:
          "Draped floral garland motif with ribbon swags. The depth of casting creates genuine shadow play — hardware that changes character with the light throughout the day.",
        image: null,
        eraSlug: "ashworth",
      },
    ],
  },
  {
    slug: "meridian",
    name: "Meridian",
    era: "Art Deco",
    period: "c. 1920–1939",
    tagline: "Bold geometry, timeless glamour",
    description:
      "Sunburst patterns, stepped forms, and precise geometry inspired by the most glamorous era in design history.",
    longDescription:
      "Art Deco was confidence cast in metal. Born in the roaring twenties, it drew from Egyptian archaeology, Cubist painting, and the machine age to create a style that was simultaneously ancient and futuristic. The Meridian collection captures that energy: bold sunburst fans, stepped ziggurat forms, chevron lines, and the kind of precise, symmetrical geometry that defined the great hotels, ocean liners, and apartment buildings of the era. These pieces make a statement — glamorous without being ostentatious, geometric without being cold.",
    materials: ["Polished brass", "Brushed nickel", "Satin brass"],
    motifs: [
      "Sunburst fans",
      "Chevron lines",
      "Stepped forms",
      "Egyptian-inspired geometry",
      "Symmetrical rays",
    ],
    homeStyles: [
      "Art Deco apartment",
      "1920s–30s revival",
      "Streamline Moderne",
      "Miami Beach style",
    ],
    searchTerms: [
      "art deco hardware",
      "deco style switch plates",
      "1920s door hardware",
      "geometric hardware",
    ],
    image: "/images/collection-meridian.png",
    pieces: [
      {
        id: "meridian-sunburst",
        name: "Sunburst Fan Switch Plate",
        type: "Switch Plate",
        material: "Polished brass",
        year: "c. 1928",
        description:
          "Radiating sunburst rays fanning from the base — the signature motif of the Deco movement. Inspired by the entrance details of the Chrysler Building.",
        image: null,
        eraSlug: "meridian",
      },
      {
        id: "meridian-chevron",
        name: "Chevron Step Door Knob",
        type: "Door Knob",
        material: "Brushed nickel",
        year: "c. 1930",
        description:
          "Stepped geometric chevron pattern descending from the crown. The precision of each facet catches light differently, creating a jewel-like quality in brushed nickel.",
        image: null,
        eraSlug: "meridian",
      },
      {
        id: "meridian-ziggurat",
        name: "Ziggurat Cabinet Pull",
        type: "Cabinet Pull",
        material: "Satin brass",
        year: "c. 1925",
        description:
          "Stepped pyramid form inspired by ancient ziggurat architecture filtered through the Deco lens. A bridge between ancient craft and machine-age precision.",
        image: null,
        eraSlug: "meridian",
      },
      {
        id: "meridian-empire-ray",
        name: "Empire Ray Outlet Cover",
        type: "Outlet Cover",
        material: "Polished brass",
        year: "c. 1932",
        description:
          "Symmetrical ray pattern emanating from a central point. The mathematical precision of the spacing creates a hypnotic visual rhythm characteristic of late Deco.",
        image: null,
        eraSlug: "meridian",
      },
    ],
  },
  {
    slug: "heritage",
    name: "Heritage",
    era: "Traditional / Colonial",
    period: "c. 1700–1850",
    tagline: "The quiet confidence of tradition",
    description:
      "Simple, elegant forms with rope-twist borders and classic rosettes — the timeless foundation of American home design.",
    longDescription:
      "Before hardware became disposable, it was foundational. Colonial and Federal-era hardware was defined by its restraint: simple, confident forms in solid brass, with rope-twist borders, classic rosettes, and gentle fluting that spoke of quality without shouting for attention. The Heritage collection is our most versatile line — pieces that feel right in a historic Colonial, a traditional new build, or any home where understated quality is the goal. This is the hardware equivalent of a well-tailored suit: never trendy, always appropriate.",
    materials: ["Polished brass", "Satin nickel", "Antique brass"],
    motifs: [
      "Rope-twist borders",
      "Classic rosettes",
      "Gentle fluting",
      "Simple beading",
      "Federal-era symmetry",
    ],
    homeStyles: [
      "Colonial",
      "Federal",
      "Georgian",
      "Cape Cod",
      "Traditional new construction",
    ],
    searchTerms: [
      "colonial hardware",
      "traditional door hardware",
      "classic brass hardware",
      "federal style hardware",
    ],
    image: "/images/collection-heritage.png",
    pieces: [
      {
        id: "heritage-federal-rope",
        name: "Federal Rope Switch Plate",
        type: "Switch Plate",
        material: "Polished brass",
        year: "c. 1790",
        description:
          "Rope-twist border encircling a gently domed face. Drawn from Federal-period pattern books, this is the quintessential American decorative hardware form.",
        image: null,
        eraSlug: "heritage",
      },
      {
        id: "heritage-williamsburg",
        name: "Williamsburg Rosette Door Knob",
        type: "Door Knob",
        material: "Satin nickel",
        year: "c. 1780",
        description:
          "A classical rosette with twelve symmetrical petals, inspired by the restored hardware of Colonial Williamsburg. Understated refinement that transcends any single era.",
        image: null,
        eraSlug: "heritage",
      },
      {
        id: "heritage-georgian-flute",
        name: "Georgian Flute Hinge",
        type: "Hinge",
        material: "Antique brass",
        year: "c. 1760",
        description:
          "Gentle vertical fluting along the hinge leaves, a classical detail that adds depth without competing with surrounding woodwork. Hardware as quiet architecture.",
        image: null,
        eraSlug: "heritage",
      },
      {
        id: "heritage-liberty",
        name: "Liberty Bead Outlet Cover",
        type: "Outlet Cover",
        material: "Polished brass",
        year: "c. 1800",
        description:
          "Simple beaded edge on a slightly raised face. The restraint is the point — every millimeter of this piece speaks to the Colonial conviction that quality needs no embellishment.",
        image: null,
        eraSlug: "heritage",
      },
    ],
  },
  {
    slug: "solstice",
    name: "Solstice",
    era: "Art Nouveau",
    period: "c. 1890–1910",
    tagline: "Nature's curves in lasting metal",
    description:
      "Flowing organic lines, botanical motifs, and sinuous curves from the brief era when hardware was considered fine art.",
    longDescription:
      "For a brief, brilliant moment at the turn of the twentieth century, decorative hardware was elevated to fine art. Art Nouveau designers like Hector Guimard and Louis Comfort Tiffany saw no boundary between a sculpture and a door handle — both were opportunities to capture nature's flowing lines in lasting material. The Solstice collection channels that philosophy: iris and lily motifs, sinuous whiplash curves, and the organic flowing forms that made Art Nouveau the most distinctive decorative movement in history. These are pieces for people who believe hardware should be beautiful, not just functional.",
    materials: ["Patinated bronze", "Antique brass", "Copper with verdigris"],
    motifs: [
      "Iris & lily flowers",
      "Whiplash curves",
      "Dragonfly motifs",
      "Organic flowing lines",
      "Botanical tendrils",
    ],
    homeStyles: [
      "Art Nouveau",
      "Late Victorian",
      "Turn-of-century",
      "Edwardian",
    ],
    searchTerms: [
      "art nouveau hardware",
      "organic style hardware",
      "floral door hardware",
      "botanical switch plates",
    ],
    image: "/images/collection-solstice.png",
    pieces: [
      {
        id: "solstice-iris-bloom",
        name: "Iris Bloom Switch Plate",
        type: "Switch Plate",
        material: "Patinated bronze",
        year: "c. 1900",
        description:
          "A single iris flower unfurling across the plate face, its petals flowing into the border. The organic asymmetry is pure Art Nouveau — nature captured mid-movement in bronze.",
        image: null,
        eraSlug: "solstice",
      },
      {
        id: "solstice-whiplash",
        name: "Whiplash Curve Door Knob",
        type: "Door Knob",
        material: "Antique brass",
        year: "c. 1898",
        description:
          "Sinuous whiplash curves spiral from center to edge in the style of Victor Horta. No straight lines, no sharp corners — just the continuous flow of organic form.",
        image: null,
        eraSlug: "solstice",
      },
      {
        id: "solstice-dragonfly",
        name: "Dragonfly Hinge",
        type: "Hinge",
        material: "Copper with verdigris",
        year: "c. 1905",
        description:
          "A dragonfly wing motif spans the hinge leaves, with delicate vein patterns rendered in low relief. The natural verdigris patina deepens the organic character over decades.",
        image: null,
        eraSlug: "solstice",
      },
      {
        id: "solstice-lily-pad",
        name: "Lily Pad Outlet Cover",
        type: "Outlet Cover",
        material: "Patinated bronze",
        year: "c. 1902",
        description:
          "Overlapping lily pad forms create the frame, with subtle water ripple texture in the background. Inspired by Tiffany's botanical studies and the Japonisme movement.",
        image: null,
        eraSlug: "solstice",
      },
    ],
  },
  {
    slug: "ironforge",
    name: "Ironforge",
    era: "Farmhouse / Rustic",
    period: "Heritage craft tradition",
    tagline: "Forged character, built to endure",
    description:
      "Heavy, honest hardware with hammered textures and visible forge character — the warmth of handcraft in solid metal.",
    longDescription:
      "Before factories, there was the forge. Every piece of hardware in every home was made by a blacksmith who left their mark in the metal — hammer strikes, hand-filed edges, the organic irregularity that no machine can replicate. The Ironforge collection brings that character back: heavy, substantial pieces with hammered surfaces, visible forge marks, and the kind of honest material presence that makes a room feel grounded. Whether you're renovating a farmhouse, building a modern rustic home, or just want hardware with real weight and warmth, Ironforge delivers the handcraft character that mass production took away.",
    materials: ["Black iron", "Oil-rubbed bronze", "Dark bronze"],
    motifs: [
      "Hammered surfaces",
      "Forged edges",
      "Square proportions",
      "Strap hinge forms",
      "Rivet details",
    ],
    homeStyles: [
      "Farmhouse",
      "Modern rustic",
      "Mountain lodge",
      "Barn conversion",
      "Country estate",
    ],
    searchTerms: [
      "farmhouse hardware",
      "rustic door hardware",
      "iron switch plates",
      "hammered hardware",
    ],
    image: "/images/collection-ironforge.png",
    pieces: [
      {
        id: "ironforge-forge-strike",
        name: "Forge Strike Switch Plate",
        type: "Switch Plate",
        material: "Black iron",
        year: "Heritage tradition",
        description:
          "Visible hammer marks across the face tell the story of the forge. No two pieces are identical — each carries the organic irregularity of hand-forged metalwork.",
        image: null,
        eraSlug: "ironforge",
      },
      {
        id: "ironforge-anvil",
        name: "Anvil Door Knob",
        type: "Door Knob",
        material: "Dark bronze",
        year: "Heritage tradition",
        description:
          "Heavy, square-shouldered proportions with a hand-forged texture. The weight alone tells you this is real — solid metal shaped by fire and hammer, not a die-cast imitation.",
        image: null,
        eraSlug: "ironforge",
      },
      {
        id: "ironforge-strap",
        name: "Strap Iron Hinge",
        type: "Hinge",
        material: "Black iron",
        year: "Heritage tradition",
        description:
          "Traditional strap hinge form with tapered leaves and a hand-punched pin. The oldest hardware form still in production — a direct link to centuries of blacksmith tradition.",
        image: null,
        eraSlug: "ironforge",
      },
      {
        id: "ironforge-rivet-cap",
        name: "Rivet Cap Outlet Cover",
        type: "Outlet Cover",
        material: "Oil-rubbed bronze",
        year: "Heritage tradition",
        description:
          "Exposed dome-head rivets at each corner anchor a hammered face. Industrial heritage meets domestic warmth — the honest beauty of visible construction.",
        image: null,
        eraSlug: "ironforge",
      },
    ],
  },
  {
    slug: "provence",
    name: "Provence",
    era: "French Country",
    period: "Provincial tradition",
    tagline: "Effortless provincial elegance",
    description:
      "Softer curves, scrollwork, and shell motifs drawn from the enduring warmth of French provincial design.",
    longDescription:
      "French Country style has endured for centuries because it strikes the perfect balance: decorative enough to feel special, restrained enough to feel like home. The Provence collection draws from this provincial tradition — softer curves than Victorian, gentler scrollwork, shell and acanthus motifs, and the kind of understated warmth that makes every room feel welcoming. These pieces are particularly at home in kitchens and bathrooms, where their organic curves and warm finishes create the effortless elegance that French design is known for.",
    materials: ["Antique pewter", "Satin nickel", "Antique brass"],
    motifs: [
      "Shell motifs",
      "Flowing scrollwork",
      "Gentle curves",
      "Acanthus accents",
      "Ribbon details",
    ],
    homeStyles: [
      "French Country",
      "Provençal",
      "Mediterranean",
      "European traditional",
      "Cottage",
    ],
    searchTerms: [
      "french country hardware",
      "provincial style hardware",
      "french door hardware",
      "cottage style hardware",
    ],
    image: "/images/collection-provence.png",
    pieces: [
      {
        id: "provence-coquille",
        name: "Coquille Shell Switch Plate",
        type: "Switch Plate",
        material: "Antique pewter",
        year: "Provincial tradition",
        description:
          "A delicate scallop shell motif crowns the plate, with gentle scrollwork flowing down each side. The pewter finish softens the ornament — decorative without demanding attention.",
        image: null,
        eraSlug: "provence",
      },
      {
        id: "provence-versailles",
        name: "Versailles Scroll Door Knob",
        type: "Door Knob",
        material: "Satin nickel",
        year: "Provincial tradition",
        description:
          "Flowing C-scroll and S-scroll curves interlace across the knob face. Inspired by the ironwork of provincial French manors — less formal than Parisian Rococo, warmer and more inviting.",
        image: null,
        eraSlug: "provence",
      },
      {
        id: "provence-ribbon",
        name: "Ribbon Bow Hinge",
        type: "Hinge",
        material: "Antique brass",
        year: "Provincial tradition",
        description:
          "A small ribbon bow accent at the hinge knuckle transforms a functional element into a decorative detail. The warm brass patina develops character with each passing year.",
        image: null,
        eraSlug: "provence",
      },
      {
        id: "provence-fleur",
        name: "Fleur de Lis Outlet Cover",
        type: "Outlet Cover",
        material: "Antique pewter",
        year: "Provincial tradition",
        description:
          "A subtle fleur de lis centered below the outlet, with gently rounded edges and a soft matte finish. French provincial restraint — the ornament serves the room, not itself.",
        image: null,
        eraSlug: "provence",
      },
    ],
  },
];

export function getCollection(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}

export function getAllCollectionSlugs(): string[] {
  return COLLECTIONS.map((c) => c.slug);
}

export function getAllPieces(): Piece[] {
  return COLLECTIONS.flatMap((c) => c.pieces);
}

export function getPiecesByType(type: HardwareType): Piece[] {
  return getAllPieces().filter((p) => p.type === type);
}

export function getEraForPiece(piece: Piece): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === piece.eraSlug);
}
