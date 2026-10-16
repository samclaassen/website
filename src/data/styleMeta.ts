/**
 * Library-level metadata for each architectural style: a one-line description,
 * the archive photograph used to represent it, and documented relationships
 * to neighbouring styles. Hub copy (intro, how to recognize) lives in hubs.ts.
 */
export interface StyleMeta {
  /** One short descriptive line for cards and directories */
  tagline: string;
  /** Geographic or historical context, shown under the style name */
  context: string;
  /** Archive entry whose photograph represents the style */
  cover: string;
  /** Related styles with a short note on the relationship */
  related: { slug: string; note: string }[];
  /** Flagship styles get the largest treatment in directories */
  flagship?: boolean;
}

export const STYLE_META: Record<string, StyleMeta> = {
  "alpine-chalet": {
    tagline: "Wood-lined Stuben, carved and painted pine, and benches built into the walls.",
    context: "Tyrol, Switzerland and Bavaria · vernacular, 1300s onward",
    cover: "16th-century-stube-from-the-courthouse-in-niederdorf-tiroler-volkskunstmuseum",
    flagship: true,
    related: [
      { slug: "mountain-modern", note: "American mountain houses borrow the Alpine taste for exposed timber and wood-lined rooms." },
      { slug: "tudor-revival", note: "Both traditions produced small, fully paneled rooms in the 1500s, in oak in England and pine in the Alps." },
      { slug: "english-country", note: "Another farmhouse tradition organized around the hearth, built-in seating and open shelving." },
    ],
  },
  "arts-and-crafts": {
    tagline: "Honest materials, visible joinery and woodwork built into the room.",
    context: "Britain and the United States · c. 1880–1930",
    cover: "drawing-room-at-red-house-bexleyheath",
    flagship: true,
    related: [
      { slug: "denver-square", note: "Many Denver Squares were finished with Craftsman doors, built-ins and oak trim." },
      { slug: "shaker", note: "Both favor plain panels, honest construction and very little applied ornament." },
      { slug: "mountain-modern", note: "Rustic lodges and mountain houses grew from the same respect for natural materials." },
    ],
  },
  "english-country": {
    tagline: "Painted joinery, dressers and plate racks, plain paneling and beamed ceilings.",
    context: "England and Wales · vernacular, 1600s onward",
    cover: "end-dresser-in-the-kitchen-lanhydrock-house-cornwall",
    flagship: true,
    related: [
      { slug: "tudor-revival", note: "Older English houses supply the oak paneling and heavy plank doors of the country style." },
      { slug: "arts-and-crafts", note: "English Arts & Crafts architects looked to cottage and farmhouse building for their models." },
      { slug: "alpine-chalet", note: "Another hearth-centered farmhouse tradition with built-in seating and open shelving." },
    ],
  },
  victorian: {
    tagline: "Carved mantels, layered trim and dark, decorative hardwoods.",
    context: "Britain and the United States · c. 1837–1901",
    cover: "victorian-parlor-of-the-molly-brown-house-denver",
    related: [
      { slug: "art-nouveau", note: "Art Nouveau grew out of late-Victorian design reform and its taste for natural ornament." },
      { slug: "tudor-revival", note: "Revival styles were a Victorian habit, and Tudor was one of the most popular." },
      { slug: "denver-square", note: "In Denver, the plainer Square replaced the Victorian house around the turn of the century." },
    ],
  },
  "denver-square": {
    tagline: "Denver's foursquare: oak built-ins, colonnades and sturdy stock millwork.",
    context: "Denver, Colorado · c. 1890–1920",
    cover: "living-room-with-built-in-bookcases-and-window-seat-curtis-woodwork",
    related: [
      { slug: "arts-and-crafts", note: "Craftsman doors, built-ins and trim were common finishes in Denver Squares." },
      { slug: "colonial-georgian", note: "Colonial Revival mantels and columns also appear in many Squares." },
      { slug: "victorian", note: "The Square replaced the Victorian house in Denver's newer neighborhoods." },
    ],
  },
  "tudor-revival": {
    tagline: "Dark oak paneling, linenfold, strapwork and heavy plank doors.",
    context: "England · original c. 1485–1603; revival c. 1890–1940",
    cover: "king-james-room-paneling-hatfield-house",
    related: [
      { slug: "english-country", note: "Country houses kept Tudor oak paneling and plank doors in use for centuries." },
      { slug: "colonial-georgian", note: "Georgian rooms replaced small oak panels with larger, painted, classically proportioned ones." },
      { slug: "alpine-chalet", note: "Alpine Stuben of the same century were also fully paneled, in pine and stone pine." },
    ],
  },
  "colonial-georgian": {
    tagline: "Symmetry, classical proportions and refined raised-panel woodwork.",
    context: "Britain and colonial America · original c. 1714–1830; revival c. 1876–1955",
    cover: "thorne-miniature-room-virginia-drawing-room-1755",
    related: [
      { slug: "tudor-revival", note: "Georgian paneling succeeded the small oak panels of Tudor and Jacobean rooms." },
      { slug: "shaker", note: "Shaker joiners worked from the same country traditions but removed the classical ornament." },
      { slug: "denver-square", note: "Colonial Revival details were standard stock millwork in early 1900s houses." },
    ],
  },
  shaker: {
    tagline: "Plain panels, peg rails and built-in storage made with exacting care.",
    context: "Shaker communities, United States · c. 1780–1900",
    cover: "meeting-house-interior-canterbury-shaker-village",
    related: [
      { slug: "colonial-georgian", note: "Shaker joinery shares the country woodworking of the period without its ornament." },
      { slug: "arts-and-crafts", note: "Both favor plain surfaces, visible construction and practical built-ins." },
      { slug: "mid-century-modern", note: "Both prize plain surfaces, good proportion and storage built into the wall." },
    ],
  },
  "art-deco": {
    tagline: "Stepped geometry, fluting and figured veneers.",
    context: "Europe and the United States · c. 1920–1940",
    cover: "lobby-of-the-chrysler-building-new-york",
    related: [
      { slug: "art-nouveau", note: "Art Deco replaced Art Nouveau's flowing curves with geometry and machine-age polish." },
      { slug: "mid-century-modern", note: "Streamlined Deco woodwork led directly to the flush surfaces of mid-century design." },
      { slug: "colonial-georgian", note: "Many Deco interiors simplify classical elements such as fluting and pilasters." },
    ],
  },
  "art-nouveau": {
    tagline: "Whiplash curves, botanical carving and woodwork that flows into the structure.",
    context: "Europe · c. 1890–1910",
    cover: "carved-interior-woodwork-musee-de-l-ecole-de-nancy",
    related: [
      { slug: "art-deco", note: "Art Deco followed Art Nouveau and traded its curves for geometry." },
      { slug: "victorian", note: "Art Nouveau emerged from the late-Victorian reaction against revival styles." },
      { slug: "arts-and-crafts", note: "Both movements shared a commitment to craftsmanship and natural ornament." },
    ],
  },
  "mid-century-modern": {
    tagline: "Flush slab doors, walnut and teak, and storage built into the walls.",
    context: "United States and Scandinavia · c. 1945–1970",
    cover: "interior-of-the-eames-house-pacific-palisades",
    related: [
      { slug: "art-deco", note: "Mid-century woodwork continued Deco's flush, veneered surfaces without the ornament." },
      { slug: "shaker", note: "Both prize plain surfaces, good proportion and storage built into the wall." },
      { slug: "mountain-modern", note: "Modern mountain houses combine mid-century openness with heavy timber." },
    ],
  },
  "mountain-modern": {
    tagline: "Heavy timber, log and stone, from park lodges to modern mountain houses.",
    context: "American West · rustic c. 1880–1940; modern 2000s onward",
    cover: "lobby-of-many-glacier-hotel-glacier-national-park",
    related: [
      { slug: "alpine-chalet", note: "Alpine building supplied many of the mountain house's timber and paneling ideas." },
      { slug: "arts-and-crafts", note: "Park lodges and rustic houses share Arts & Crafts ideals of natural materials." },
      { slug: "mid-century-modern", note: "Contemporary mountain houses pair heavy timber with mid-century openness." },
    ],
  },
};
