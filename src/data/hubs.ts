/** Editorial copy for style and element hub pages. */

export interface StyleHub {
  intro: string[];
  identify: string[];
  colorado?: string;
}

export const STYLE_HUBS: Record<string, StyleHub> = {
  "arts-and-crafts": {
    intro: [
      "The Arts & Crafts movement began in Britain in the 1860s as a reaction against cheap, machine-made decoration, and reached America as the Craftsman style of Gustav Stickley, Greene & Greene and thousands of bungalows. Its interiors put the woodwork on display: quarter-sawn oak, visible joinery, built-in seating and storage, and fireplaces designed together with the bookcases beside them.",
      "For a custom project, Arts & Crafts rewards restraint. Square proportions, flat or simply framed panels and a warm stained finish do most of the work, with ornament limited to a through-tenon, a corbel or a band of leaded glass.",
    ],
    identify: [
      "Quarter-sawn oak or chestnut with a warm brown, fumed-looking finish",
      "Built-ins designed with the room: inglenooks, window seats, bookcases and sideboards",
      "Visible joinery such as through-tenons, keys and square pegs",
      "Square balusters, flat casings and wide plate rails",
      "Hammered copper, leaded glass and handmade tile as accents",
    ],
    colorado: "Craftsman bungalows are common across Denver's older neighborhoods and Front Range towns, and the style's rustic side suits mountain houses.",
  },
  victorian: {
    intro: [
      "Victorian interiors, roughly 1837 to 1901, are layered and ornamental. Over the period, revival styles followed one another, from Gothic and Renaissance Revival to the incised geometry of Eastlake and the eclectic Queen Anne. Dark stained hardwoods, carved mantels with overmantels, heavy door casings and decorative hardware give these rooms their weight.",
      "Many Victorian details translate well to modern production because they are built from repeated profiles and flat-carved ornament. A mantel, a built-in buffet or a set of carved cabinet fronts can bring the period into a house without recreating a whole room.",
    ],
    identify: [
      "Dark walnut, cherry, mahogany or ebonized finishes",
      "Mantels with overmantels, mirrors and carved brackets",
      "Incised Eastlake lines, spindlework and turned details",
      "Tall paneled doors with wide, layered casings and corner blocks",
      "Ornate cast hardware on doors and cabinets",
    ],
    colorado: "Denver's Capitol Hill and Curtis Park, and mining towns such as Georgetown and Leadville, preserve many Victorian houses, including the Molly Brown House Museum.",
  },
  "denver-square": {
    intro: [
      "The Denver Square is the city's version of the American Foursquare: a boxy two-story brick house with a hipped roof, a front porch and a simple, practical plan. Thousands were built across Denver between about 1890 and 1920. Inside, they were finished with the stock millwork of the day, in oak or painted pine, with built-in buffets, china closets, colonnades, simple mantels and paneled doors.",
      "Because so much of that millwork came from national catalogs, period catalogs like Curtis Woodwork are the best guide to what belongs in these houses. Restoring or extending a Denver Square works best when every room shares the same casing, door and built-in profiles.",
    ],
    identify: [
      "Two-story brick house with a hipped roof and a full-width front porch",
      "Oak or painted pine trim with plain casings and modest baseboards",
      "Five-panel or two-panel interior doors and glazed French doors",
      "Built-in buffets, corner china closets and window seats",
      "Colonial Revival mantels with slim columns or pilasters",
    ],
    colorado: "Denver Squares are found throughout the city's early-20th-century neighborhoods. Original built-ins are often missing, which makes them one of the most common custom restoration projects.",
  },
  "tudor-revival": {
    intro: [
      "Tudor and Jacobean interiors, from about 1485 to the mid-1600s, were wrapped in oak paneling made of many small panels, with carved friezes, linenfold carving, strapwork and tall chimneypieces. Revived in Britain and America between about 1890 and 1940, the style became a favorite for suburban houses with half-timbered gables and arched doors.",
      "In a modern project, oak paneling is the heart of the style. A dado-height wainscot of small panels, a carved frieze, or a two-stage chimneypiece in a living room brings the character without a full paneled room.",
    ],
    identify: [
      "Dark oak paneling of small square or rectangular panels",
      "Linenfold carving, strapwork and carved friezes",
      "Tall chimneypieces with columns and an overmantel",
      "Arched (four-centered) doorways and heavy plank or paneled doors",
      "Turned balusters and newels with finials on stairs",
    ],
    colorado: "Tudor Revival houses are common in Denver neighborhoods developed in the 1920s and 1930s.",
  },
  "colonial-georgian": {
    intro: [
      "Georgian design, from the early 1700s to around 1830, brought classical order to British and American houses: symmetry, raised-panel walls, pedimented doorways and carved chimneypieces. The lighter Federal style followed after the Revolution, with slim pilasters, reeding and delicate applied ornament. Both were revived from the 1876 Centennial onward as the Colonial Revival, the most common style of American houses for half a century.",
      "Georgian and Federal details are among the easiest to produce today because they are built from classical mouldings and repeated panels. A paneled fireplace wall, a Federal mantel or a built-in corner cupboard suits many houses that are not historic at all.",
    ],
    identify: [
      "Symmetrical rooms with a strong focal fireplace wall",
      "Raised-panel walls and bolection-moulded fireplace surrounds",
      "Pediments, pilasters, dentils and egg-and-dart mouldings",
      "Federal-era reeding, urns, swags and sunbursts",
      "Painted woodwork in strong or soft colors",
    ],
  },
  shaker: {
    intro: [
      "The Shakers, a religious community that flourished in the United States from the late 1700s through the 1800s, built furniture and interiors with nothing extra. Their rooms are lined with built-in drawers and cupboards, peg rails run around the walls, and every proportion is carefully judged. The flat recessed-panel cabinet door that now fills American kitchens comes from this tradition.",
      "Shaker design is ideal for modern custom work: simple joinery, clean frames and generous built-in storage. Its strength is proportion, so drawer heights, rail widths and door sizes matter more than ornament.",
    ],
    identify: [
      "Flat recessed-panel doors in square frames",
      "Walls of built-in drawers and cupboards",
      "Continuous peg rails at head height",
      "Small turned wooden knobs",
      "Cherry, maple or pine, often painted in muted blues, greens and reds",
    ],
  },
  "art-deco": {
    intro: [
      "Art Deco, from about 1920 to 1940, combined geometry with luxury: stepped forms borrowed from skyscrapers, sunbursts and chevrons, fluting, exotic veneers, marquetry and lacquer. It appeared in ocean liners, cinemas, office lobbies and the federal buildings of the 1930s, and in a smoother form as Streamline Moderne.",
      "For custom work, Deco is about surface and silhouette. Veneered or inlaid doors, fluted panels, stepped casings and geometric grilles carry the style, and they are especially effective in bars, powder rooms and entries.",
    ],
    identify: [
      "Stepped (ziggurat) profiles and setbacks",
      "Sunbursts, chevrons, fans and stylized plants",
      "Fluting and reeding on doors and panels",
      "Highly figured veneers, marquetry and contrasting inlay",
      "Geometric metal grilles and screens",
    ],
    colorado: "Denver's Paramount Theatre, which opened in 1930, is a well-known Colorado example of the style.",
  },
  "art-nouveau": {
    intro: [
      "Art Nouveau, from about 1890 to 1910, rejected historical revivals in favor of organic line: the whiplash curve, plant and flower forms, and woodwork that seems to grow. Its centers were Brussels, Paris and Nancy, with architects and makers such as Victor Horta, Hector Guimard, Émile Gallé and Louis Majorelle.",
      "Art Nouveau is demanding to make well, because curves must flow through rails, panels and glazing bars as one line. Today's CNC carving makes that more achievable, from a carved door panel to a curved glazed partition.",
    ],
    identify: [
      "Whiplash curves and flowing, asymmetrical lines",
      "Carved plants and flowers such as irises, lilies and cow parsley",
      "Marquetry pictures in contrasting woods",
      "Glazing bars and frames that curve into the structure",
      "Metalwork shaped like stems and tendrils",
    ],
  },
  "alpine-tyrolean": {
    intro: [
      "Alpine interiors center on the Stube: a low, wood-lined room heated by a tiled stove, with benches built along the walls and a corner table. From medieval farmhouses to Renaissance castles in Tyrol and Switzerland, the Stube was paneled in pine, larch, stone pine or walnut, sometimes plain and sometimes carved, inlaid or painted.",
      "Its appeal is warmth. Board paneling, a built-in corner bench, chip carving and painted cupboard doors translate directly to mountain homes and to dining nooks anywhere.",
    ],
    identify: [
      "Wood-lined rooms with board or arched paneling",
      "Built-in corner benches (Eckbank) around a table",
      "Coffered or boarded ceilings",
      "Chip carving, heart cut-outs and painted folk motifs",
      "Pine, larch, stone pine and walnut",
    ],
    colorado: "Vail Village was built in the 1960s with Alpine-inspired architecture, and the Stube tradition suits ski houses across the Colorado mountains.",
  },
  "english-country": {
    intro: [
      "English country interiors grew out of farmhouses and cottages: a wide hearth, beamed ceilings, painted or oak cupboards, and above all the dresser, a base of drawers and cupboards with open plate shelves above. Larger houses scaled the same ideas up in their kitchens and service rooms.",
      "For a modern kitchen, the style offers a welcome alternative to rows of upper cabinets: a built-in dresser, open pantry shelving and a range set into a hearth-like alcove.",
    ],
    identify: [
      "Dressers with plate racks and drawer bases",
      "Open shelving and plate rails",
      "Range alcoves with a heavy beam or mantel shelf",
      "Painted pine or dark oak cupboards",
      "Simple paneled doors and plank details",
    ],
  },
  "mid-century-modern": {
    intro: [
      "Mid-century modern design, from about 1945 to 1970, brought warm wood, clean lines and built-in furniture together in open, light-filled houses. Frank Lloyd Wright's Usonian houses, the Eames House and countless suburban homes used horizontal board paneling, built-in desks and seating, and slab-front storage walls.",
      "Mid-century built-ins are some of the most practical to make today: slab fronts, continuous grain, finger pulls and floating cabinets in walnut, teak or white oak.",
    ],
    identify: [
      "Slab doors and drawers with continuous wood grain",
      "Horizontal board-and-batten or board-and-reveal paneling",
      "Built-in desks, seating and long low credenzas",
      "Finger pulls and integral carved pulls",
      "Walnut, teak, mahogany and birch plywood",
    ],
    colorado: "Denver has notable mid-century neighborhoods, including Cliff May-designed houses in Krisana Park and Harvey Park.",
  },
  "mountain-modern": {
    intro: [
      "Mountain style begins with the rustic lodges of the national parks and the Adirondack great camps: log and stone, heavy timber brackets, plank doors with iron hardware and big fireplaces. Today's mountain modern keeps that warmth but simplifies it, with white oak, clean timber framing and durable built-ins for gear.",
      "For Colorado homes, the style is practical as well as beautiful: mudrooms and boot rooms, timber-clad beams and casings, and kitchens with statement hoods.",
    ],
    identify: [
      "Heavy timber posts, beams and brackets",
      "Stone fireplaces with thick wood mantel shelves",
      "Plank doors with strap hinges and iron detail",
      "Board, log-profile or V-groove wall paneling",
      "White oak, Douglas fir, knotty pine and reclaimed wood",
    ],
    colorado: "Grand Lake Lodge and the lodges of Rocky Mountain National Park are local examples of the rustic tradition.",
  },
};

export const ELEMENT_HUBS: Record<string, string[]> = {
  "kitchen-cabinets": [
    "Kitchen cabinetry sets the character of a house more than any other woodwork. Historic kitchens rarely had continuous upper and lower cabinets; they used dressers, hutches, built-in cases and work counters, which is why period kitchens feel more like furnished rooms.",
    "Our kitchen cabinets are built to measure and installed in Colorado, with style details drawn from the examples below.",
  ],
  "cabinet-doors-fronts": [
    "Cabinet doors and drawer fronts carry most of a style's identity, from the Shaker flat panel to Victorian carved panels and mid-century slab fronts. New fronts can also transform existing cabinets.",
    "We make custom doors and fronts to fit new or existing boxes and ship them finished.",
  ],
  "built-ins-bookcases": [
    "Built-ins are the most characteristic feature of older houses: bookcases beside a fireplace, window seats, inglenooks, built-in sideboards and china closets. They make storage part of the architecture.",
    "We design and install built-ins in Colorado, matched to the style of the house.",
  ],
  "mudroom-entry": [
    "Entries and mudrooms need hardworking storage: benches, hooks, peg rails, lockers and cupboards. Historic houses offer good models, from Shaker peg rails to hall benches and linen closets.",
    "We build mudroom and entry storage to measure and install it in Colorado.",
  ],
  "wall-paneling-wainscoting": [
    "Wall paneling ranges from simple board-and-batten to full-height Georgian rooms, Tudor linenfold and the wood-lined Alpine Stube. It is one of the most effective ways to give a room period character.",
    "We cut paneling kits to your measurements and can install them in Colorado.",
  ],
  "fireplace-mantels": [
    "The mantel is the focal point of most traditional rooms. Its form changes sharply from style to style: Georgian pilasters and overmantels, Federal reeding, Victorian carving, Craftsman tile and oak, and rustic stone with a timber shelf.",
    "We make mantels and surrounds to fit your fireplace. Clearances must meet code for the specific firebox.",
  ],
  "range-hoods": [
    "Today's statement range hood has historic precedents in the copper hoods of Victorian kitchens, Craftsman chimneypieces and lodge fireplaces. A hood cover can define a kitchen's style on its own.",
    "We make hood covers around a ventilation insert sized for your range.",
  ],
  "interior-doors": [
    "Interior doors reflect a house's period through their panel layout, glazing and casing. Five-panel doors, French doors, linenfold panels and Deco inlay each belong to a different moment.",
    "We make interior doors to fit existing openings or new construction, finished and machined for hardware.",
  ],
  "trim-moulding": [
    "Trim and moulding, including casings, baseboards, crown, stair parts and staircases, tie a house together. Matching original profiles is often the key to a convincing restoration.",
    "We can match existing profiles or make period mouldings from historical references.",
  ],
  "corbels-brackets-ornament": [
    "Corbels, brackets and carved ornament add emphasis where it is needed: under a mantel shelf, at the ends of a hood, at the top of a newel. Historic examples range from Sullivan's terra-cotta to Alpine scrolls.",
    "We carve brackets and ornament to order in paint-grade or stain-grade wood.",
  ],
  "bathroom-vanities": [
    "Bathroom vanities descend from the wash stands and dressing tables of earlier houses. Furniture-style vanities with legs, shaped backsplashes or built-in dressing areas bring that history into a modern bathroom.",
    "We make custom vanity cabinets; tops and plumbing are coordinated separately.",
  ],
  "radiator-covers": [
    "Radiator covers hide old heaters while adding a decorative grille. Many of the best patterns come from elevator screens, Gothic grilles and Art Deco vents.",
    "We make radiator covers to measure with grilles designed for airflow.",
  ],
  "exterior-doors": [
    "Exterior doors are included here as references. They require weather-resistant construction and specialist hardware, and are not yet part of our custom range.",
  ],
  "metal-hardware": [
    "Metal hardware is included as a reference for designing doors and cabinets around period knobs, pulls and fittings. It is not part of our custom woodwork range; see the hardware archive for our lighting and hardware collections.",
  ],
};
