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
    tagline: "Where honest craft lights the home",
    description:
      "Clean geometric lines, restrained nature motifs, and honest material presence in lighting and hardware inspired by the Arts & Crafts movement and Craftsman bungalow tradition.",
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
      "craftsman pendant light",
      "mission style lighting",
      "arts and crafts chandelier",
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
        image: "/images/piece-hearthstone-mission-oak.png",
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
        image: "/images/piece-hearthstone-ginkgo.png",
        eraSlug: "hearthstone",
      },
      {
        id: "hearthstone-mission-pendant",
        name: "Mission Oak Pendant Light",
        type: "Pendant Light",
        material: "Oil-rubbed bronze",
        year: "c. 1915",
        description:
          "A four-sided lantern pendant with art glass panels in amber and moss tones, suspended from a hand-forged chain. The clean rectilinear silhouette channels Frank Lloyd Wright's Prairie School — geometric, grounded, and warm enough to gather around.",
        image: "/images/piece-hearthstone-mission-pendant.png",
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
        image: "/images/piece-hearthstone-craftsman-rose.png",
        eraSlug: "hearthstone",
      },
    ],
  },
  {
    slug: "ashworth",
    name: "Ashworth",
    era: "Victorian",
    period: "c. 1837–1901",
    tagline: "Refined elegance in every detail, from sconce to doorknob",
    description:
      "Ornate scrollwork, acanthus details, floral rosettes, and beaded edges in lighting and hardware drawn from the golden age of decorative craftsmanship.",
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
      "victorian wall sconce",
      "crystal sconce antique",
      "victorian lighting fixtures",
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
        image: "/images/piece-ashworth-acanthus-scroll.png",
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
        image: "/images/piece-ashworth-eastlake.png",
        eraSlug: "ashworth",
      },
      {
        id: "ashworth-crystal-sconce",
        name: "Crystal Garland Wall Sconce",
        type: "Wall Sconce",
        material: "Polished brass",
        year: "c. 1870",
        description:
          "An ornate single-arm sconce dripping with hand-cut crystal pendants and crowned by an acanthus leaf backplate. The polished brass catches candlelight — or its electric successor — and scatters it through dozens of crystal facets, filling a Victorian parlor with the kind of shimmering warmth that defined an era of domestic opulence.",
        image: "/images/piece-ashworth-crystal-sconce.png",
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
        image: "/images/piece-ashworth-floral-garland.png",
        eraSlug: "ashworth",
      },
    ],
  },
  {
    slug: "meridian",
    name: "Meridian",
    era: "Art Deco",
    period: "c. 1920–1939",
    tagline: "Bold geometry, timeless glamour — from pendant to plate",
    description:
      "Sunburst patterns, stepped forms, and precise geometry in lighting and hardware inspired by the most glamorous era in design history.",
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
      "art deco pendant light",
      "deco chandelier",
      "geometric lighting fixture",
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
        image: "/images/piece-meridian-sunburst.png",
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
        image: "/images/piece-meridian-chevron.png",
        eraSlug: "meridian",
      },
      {
        id: "meridian-ziggurat-pendant",
        name: "Ziggurat Stepped Pendant Light",
        type: "Pendant Light",
        material: "Satin brass",
        year: "c. 1925",
        description:
          "Three concentric tiers of stepped brass descend from a geometric canopy, each tier catching light at a different angle. The frosted glass diffuser within casts a warm, even glow — the same stepped-pyramid geometry that crowned the Chrysler Building, scaled to crown your dining table.",
        image: "/images/piece-meridian-ziggurat-pendant.png",
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
        image: "/images/piece-meridian-empire-ray.png",
        eraSlug: "meridian",
      },
    ],
  },
  {
    slug: "heritage",
    name: "Heritage",
    era: "Traditional / Colonial",
    period: "c. 1700–1850",
    tagline: "The quiet confidence of tradition, from lantern to latch",
    description:
      "Simple, elegant forms in lighting and hardware with rope-twist borders and classic rosettes — the timeless foundation of American home design.",
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
      "colonial wall sconce",
      "brass lantern light",
      "traditional lighting fixtures",
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
        image: "/images/piece-heritage-federal-rope.png",
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
        image: "/images/piece-heritage-williamsburg.png",
        eraSlug: "heritage",
      },
      {
        id: "heritage-lantern-sconce",
        name: "Federal Lantern Wall Sconce",
        type: "Wall Sconce",
        material: "Antique brass",
        year: "c. 1790",
        description:
          "A half-lantern sconce with seeded glass panes set in a gently tapered brass frame, topped by a classical eagle finial. Drawn from the same Federal-period pattern books as our switch plates, this sconce lights a hallway or entry with the understated authority of early American craftsmanship — never showy, always certain of itself.",
        image: "/images/piece-heritage-lantern-sconce.png",
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
        image: "/images/piece-heritage-liberty.png",
        eraSlug: "heritage",
      },
    ],
  },
  {
    slug: "solstice",
    name: "Solstice",
    era: "Art Nouveau",
    period: "c. 1890–1910",
    tagline: "Nature's curves in light and metal",
    description:
      "Flowing organic lines, botanical motifs, and sinuous curves in lighting and hardware from the brief era when every fixture was considered fine art.",
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
      "art nouveau wall sconce",
      "tiffany style lighting",
      "organic bronze sconce",
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
        image: "/images/piece-solstice-iris-bloom.png",
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
        image: "/images/piece-solstice-whiplash.png",
        eraSlug: "solstice",
      },
      {
        id: "solstice-dragonfly-sconce",
        name: "Dragonfly Wing Wall Sconce",
        type: "Wall Sconce",
        material: "Patinated bronze",
        year: "c. 1905",
        description:
          "A single uplight arm emerges from a backplate sculpted as an unfurling fern frond, its shade formed by overlapping dragonfly wings in translucent art glass. The patinated bronze deepens over decades, and the warm light filtering through the iridescent wings transforms a hallway into something Tiffany himself would have approved of.",
        image: "/images/piece-solstice-dragonfly-sconce.png",
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
        image: "/images/piece-solstice-lily-pad.png",
        eraSlug: "solstice",
      },
    ],
  },
  {
    slug: "ironforge",
    name: "Ironforge",
    era: "Farmhouse / Rustic",
    period: "Heritage craft tradition",
    tagline: "Forged character in light and iron",
    description:
      "Heavy, honest lighting and hardware with hammered textures and visible forge character — the warmth of handcraft in solid metal.",
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
      "wrought iron chandelier",
      "farmhouse lighting",
      "rustic iron light fixture",
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
        image: "/images/piece-ironforge-forge-strike.png",
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
        image: "/images/piece-ironforge-anvil.png",
        eraSlug: "ironforge",
      },
      {
        id: "ironforge-ring-chandelier",
        name: "Forge Ring Chandelier",
        type: "Chandelier",
        material: "Matte black iron",
        year: "Heritage tradition",
        description:
          "A hand-forged iron ring suspended by four hammered chains, holding six candle-style lights with visible forge marks along every surface. The ring alone weighs twelve pounds — real iron shaped by fire and anvil, not a hollow stamping. Hanging over a farmhouse table, it anchors a room the way a hearth once did.",
        image: "/images/piece-ironforge-ring-chandelier.png",
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
        image: "/images/piece-ironforge-rivet-cap.png",
        eraSlug: "ironforge",
      },
    ],
  },
  {
    slug: "provence",
    name: "Provence",
    era: "French Country",
    period: "Provincial tradition",
    tagline: "Effortless provincial elegance, from chandelier to cabinet",
    description:
      "Softer curves, scrollwork, and shell motifs in lighting and hardware drawn from the enduring warmth of French provincial design.",
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
      "french crystal chandelier",
      "provincial lighting",
      "french country light fixtures",
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
        image: "/images/piece-provence-coquille.png",
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
        image: "/images/piece-provence-versailles.png",
        eraSlug: "provence",
      },
      {
        id: "provence-crystal-chandelier",
        name: "Château Crystal Chandelier",
        type: "Chandelier",
        material: "Aged silver",
        year: "Provincial tradition",
        description:
          "Five gracefully curved arms draped with strands of hand-cut crystal beads, rising from a turned centre column finished in aged silver. Less formal than a Parisian ballroom fixture, more refined than a farmhouse pendant — the exact balance that defines French provincial taste. Over a kitchen island or dining table, it turns every meal into something worth lingering over.",
        image: "/images/piece-provence-crystal-chandelier.png",
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
        image: "/images/piece-provence-fleur.png",
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
