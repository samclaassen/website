import type { ProseSection, PieceListPage } from "./types";

/**
 * Gift guides for the holidays. See ./types.ts for the writing rules. Every pick must verify at
 * least four of the five tests (src/lib/lists.ts drops any that don't, with a build warning),
 * and budget guides drop picks whose listed price falls outside the band.
 */

const GIVE_WITH_CARE: ProseSection = {
  id: "give-it-with-the-care",
  heading: "Give it with the care",
  blocks: [
    {
      type: "p",
      text: "An heirloom lasts because someone looks after it, and most of these need only a few minutes a year. Our care guides are short enough to print and tuck in the box: [cast iron](/care/cast-iron), [enameled cast iron](/care/enameled-cast-iron), [copper](/care/copper), [brass and bronze](/care/brass-and-bronze), [forged iron](/care/forged-iron) and [wooden boards and spoons](/care/wood).",
    },
  ],
};

const ORDER_EARLY: ProseSection = {
  id: "order-early",
  heading: "Order early",
  blocks: [
    {
      type: "p",
      text: "Hand-forged and made-to-order pieces can take weeks to make, and small workshops can sell out before the holidays. Check the maker's lead time when you order, and the retailer's price on the day: prices here are as listed on October 18, 2026, and they move around Black Friday.",
    },
  ],
};

const PRICES_FAQ = {
  question: "Are these prices current?",
  answer:
    "They're as listed on each retailer's page on October 18, 2026. Prices change, especially around Black Friday, so check the retailer before you buy. Some links are affiliate links; that never decides what we include.",
};

const underHundred: PieceListPage = {
  slug: "under-100",
  type: "gift",
  title: "Heirloom gifts under $100",
  metaTitle: "Heirloom gifts under $100 that last (2026)",
  shortTitle: "Under $100",
  kicker: "Gift guide · Under $100",
  description:
    "Gifts under $100 that pass the Heirloom Standard: a Lodge cast-iron skillet, a hand-forged poker, cast bronze and solid brass hardware, a maple board and more.",
  question: "What's a good heirloom gift under $100?",
  answer:
    "The Lodge 12-inch cast-iron skillet ($29.90): one piece of American cast iron that passes all five of our tests and will outlast any nonstick pan. For a home with a fireplace, Urban Forge's hand-forged poker ($99) also passes all five, as do Rocky Mountain Hardware's cast bronze cabinet pull ($73) and Lodge's camp Dutch oven (from $69.95).",
  method:
    "Every piece here has a listed price under $100 and verifies at least four of our five tests; where one is still open, the entry says so. From the lowest price.",
  sections: [
    {
      id: "gifts",
      heading: "The gifts",
      picks: [
        {
          id: "K1",
          label: "For anyone who cooks",
          verdict:
            "One piece of American cast iron that passes all five tests. Nonstick wears out in a few years; this gets better every time it's used.",
        },
        {
          id: "H6",
          label: "For the table",
          verdict:
            "Solid cast iron with nothing to break, from Iwachu in Morioka, Japan, the ironworks behind our Nambu kettle. It pairs well with the skillet.",
        },
        {
          id: "H10",
          label: "For campers, and anyone with a fire pit",
          verdict:
            "Plain cast iron made to cook over coals, the way Dutch ovens were used long before kitchens had ovens, with Lodge's \"Made Right\" limited lifetime warranty.",
        },
        {
          id: "W7",
          label: "For someone restoring a kitchen",
          verdict:
            "A sash pull hand-cast in bronze in Hailey, Idaho, with a lifetime residential guarantee. Bronze darkens with handling and doesn't rust.",
        },
        {
          id: "W9",
          label: "For the hallway",
          verdict:
            "A solid brass hat and coat hook from Armac Martin in Birmingham, England: one of the most affordable ways into solid brass on our list.",
        },
        {
          id: "H9",
          label: "For a wood-stove home",
          verdict:
            "14.5 lb of enameled cast iron for the stove top. Filled with water, it puts moisture back into dry winter air.",
        },
        {
          id: "K8",
          label: "For the kitchen counter",
          verdict:
            "Solid hard maple, 1½ inches thick, that can be sanded and re-oiled for decades.",
        },
        {
          id: "H2",
          label: "For anyone with a fireplace",
          verdict:
            "Hand-forged iron with a square loop handle, from a US blacksmith shop that guarantees its iron forever.",
        },
      ],
    },
  ],
  guide: [GIVE_WITH_CARE, ORDER_EARLY],
  faqs: [
    {
      question: "Is a cast-iron skillet a good gift?",
      answer:
        "For anyone who cooks, it's one of the best: it's useful every day, it gets better with use, and it lasts long enough to hand down. The Lodge 12-inch passes all five of our tests for $29.90. Add a note on care: wash it, dry it on the heat, and wipe it with a little oil.",
    },
    {
      question: "What's a good gift for someone with a fireplace?",
      answer:
        "A hand-forged poker. Urban Forge's square loop poker is one piece of forged iron, guaranteed forever, for $99. For a wood stove, John Wright Co.'s enameled cast-iron steamer ($90) puts moisture back into dry winter air.",
    },
    PRICES_FAQ,
  ],
  care: ["cast-iron", "brass-and-bronze", "forged-iron", "wood"],
  image: "about-cutting-board-counter",
  motif: "cast-iron",
  budget: { max: 100 },
  published: "2026-10-25",
  updated: "2026-10-25",
};

const underTwoFifty: PieceListPage = {
  slug: "under-250",
  type: "gift",
  title: "Heirloom gifts under $250",
  metaTitle: "Heirloom gifts under $250 that last (2026)",
  shortTitle: "Under $250",
  kicker: "Gift guide · $100 to $250",
  description:
    "Gifts from $100 to $250 that pass the Heirloom Standard: Smithey, FINEX and Field skillets, carbon steel, a Nambu kettle, sand-cast bronze, andirons and more.",
  question: "What's a good heirloom gift under $250?",
  answer:
    "For a cook, a Smithey No. 10 skillet ($180) or de Buyer's carbon-steel Mineral B ($105); for a new home, Sun Valley Bronze's sand-cast hook ($224); for a fireplace, Pilgrim's blacksmith-style andirons ($239). All four pass all five of our tests. Everything here is listed from $100 to $250; for less, see [heirloom gifts under $100](/gifts/under-100).",
  method:
    "Every piece here has a listed price from $100 up to $250 and verifies at least four of our five tests; where one is still open, the entry says so. From the lowest price.",
  sections: [
    {
      id: "gifts",
      heading: "The gifts",
      picks: [
        {
          id: "K6",
          label: "For the cook who wants what restaurants use",
          verdict:
            "French carbon steel, a fixture in professional kitchens: it seasons like cast iron and is lighter to handle. Lifetime warranty, per the product data.",
        },
        {
          id: "K9",
          label: "For the everyday cook",
          verdict:
            "Wild cherry spoons from a Pennsylvania workshop. Cherry darkens with age, and they need nothing more than an occasional oiling.",
        },
        {
          id: "K2",
          label: "For a first Dutch oven",
          verdict:
            "Enameled cast iron with a limited lifetime warranty that includes provisions for enamel chipping.",
        },
        {
          id: "H5",
          label: "For the tea drinker",
          verdict:
            "A bare cast-iron Nambu kettle from Iwachu in Morioka, Japan, made in a tradition that goes back centuries and meant for daily use, for years.",
        },
        {
          id: "H3",
          label: "For a home with a fireplace",
          verdict:
            "Canvas and riveted leather from Duluth Pack in Minnesota. Both soften with use and can be mended rather than thrown away.",
        },
        {
          id: "K7",
          label: "For the cook who has everything",
          verdict:
            "A frying pan formed from a single piece of wrought iron, handle and all, with what Solidteknics calls a \"multi-century warranty\".",
        },
        {
          id: "K3",
          label: "For a cast-iron lover",
          verdict:
            "Polished smooth, the way American skillets were finished before the 1950s. Made in the USA, with a lifetime guarantee.",
        },
        {
          id: "K5",
          label: "For someone who likes good tools",
          verdict:
            "Machined smooth in the USA and backed by FINEX's \"Guaranteed Good Forever\": it will repair or replace the pan.",
        },
        {
          id: "K4",
          label: "For someone who finds cast iron heavy",
          verdict:
            "Cast in a lighter iron than most modern skillets, so it's easier to lift every day. Made in the USA, with a lifetime warranty.",
        },
        {
          id: "W8",
          label: "For a new home",
          verdict:
            "A single-prong hook sand-cast in solid bronze in Idaho, each one poured into its own sand mould, with a lifetime mechanical warranty.",
        },
        {
          id: "H7",
          label: "For a fireplace without andirons",
          verdict:
            "Blacksmith-style iron andirons, finished in paint, with a limited lifetime guarantee.",
        },
      ],
    },
  ],
  guide: [GIVE_WITH_CARE, ORDER_EARLY],
  faqs: [
    {
      question: "Smithey, Field or FINEX: which makes the best gift?",
      answer:
        "All three are American cast iron that passes all five of our tests. Give the Smithey ($180) for a polished, vintage-style surface, the Field ($215) to someone who finds cast iron heavy, and the FINEX ($200) to someone who likes a machined finish and a repair-or-replace guarantee. Our [skillet ranking](/buy-it-for-life/cast-iron-skillets) compares them.",
    },
    {
      question: "What's a good gift for a tea drinker?",
      answer:
        "Iwachu's Nambu tetsubin ($142.95): a bare cast-iron kettle from Morioka, Japan, made in a tradition that goes back centuries. Iwachu's cast-iron trivet ($32.95) goes with it.",
    },
    PRICES_FAQ,
  ],
  care: ["cast-iron", "enameled-cast-iron", "brass-and-bronze", "wood"],
  image: "about-wooden-spoons",
  motif: "carbon-steel",
  budget: { min: 100, max: 250 },
  published: "2026-10-25",
  updated: "2026-10-25",
};

const forTheCook: PieceListPage = {
  slug: "for-the-cook",
  type: "gift",
  title: "Heirloom gifts for the cook",
  metaTitle: "Heirloom gifts for cooks that last (2026)",
  shortTitle: "For the cook",
  kicker: "Gift guide · For the cook",
  description:
    "Kitchen gifts that pass the Heirloom Standard: cast iron and carbon steel, French enameled Dutch ovens, tin-lined copper, a hand-forged knife and boards.",
  question: "What's a good heirloom gift for someone who cooks?",
  answer:
    "A bare-iron pan is the surest: the Lodge 12-inch skillet ($29.90), Smithey's No. 10 ($180) and de Buyer's carbon-steel Mineral B ($105) all pass our five tests. For a bigger gift, a French enameled Dutch oven from Staub or Le Creuset (about $430–455), a tin-lined Duparquet copper pan (from $570) or a hand-forged Blenheim Forge chef's knife (£320–350) will last a working lifetime.",
  method:
    "Every piece here verifies at least four of our five tests; where one is still open, the entry says so. Grouped by listed price, with the knife at its UK price.",
  sections: [
    {
      id: "under-100",
      heading: "Under $100",
      picks: [
        {
          id: "K1",
          label: "The skillet",
          verdict:
            "One piece of American cast iron that passes all five tests. It costs less than most nonstick pans and, looked after, outlasts them all.",
        },
        {
          id: "K8",
          label: "The everyday board",
          verdict:
            "Solid hard maple, 1½ inches thick, that can be sanded and re-oiled for decades.",
        },
      ],
    },
    {
      id: "100-to-300",
      heading: "$100 to $300",
      picks: [
        {
          id: "K6",
          label: "The professional's pan",
          verdict: "French carbon steel: it seasons like cast iron, is lighter to handle, and is a fixture in professional kitchens.",
        },
        {
          id: "K9",
          label: "Wooden spoons",
          verdict: "Wild cherry from a Pennsylvania workshop. Cherry darkens with age.",
        },
        {
          id: "K3",
          label: "The polished skillet",
          verdict:
            "Smoothed the way American skillets were finished before the 1950s. Made in the USA, with a lifetime guarantee.",
        },
        {
          id: "K4",
          label: "The lighter skillet",
          verdict: "Lighter cast iron than most modern skillets. Made in the USA, with a lifetime warranty.",
        },
        {
          id: "K13",
          label: "The bare-iron Dutch oven",
          verdict:
            "No enamel to chip or craze; it seasons with use like Smithey's skillets. Made in the USA, with a lifetime guarantee.",
        },
      ],
    },
    {
      id: "300-and-up",
      heading: "$300 and up",
      picks: [
        {
          id: "K12",
          label: "The French Dutch oven",
          verdict: "Staub's La Cocotte in enameled cast iron, made in France, with a lifetime warranty.",
        },
        {
          id: "K11",
          label: "The classic Dutch oven",
          verdict:
            "Le Creuset has cast enameled iron in France since 1925, and this is its signature piece. Limited lifetime warranty.",
        },
        {
          id: "K20",
          label: "The board to keep",
          verdict:
            "End-grain black walnut, 2¼ inches thick: the traditional butcher's surface, and gentle on knife edges.",
        },
        {
          id: "K17",
          label: "The copper pan",
          verdict:
            "A fait tout, the French \"do-everything\" pan, in 3 mm tinned copper, hand-made in Norwood, Massachusetts. Duparquet re-tins its own pans.",
        },
      ],
    },
    {
      id: "uk-maker",
      heading: "From a UK maker",
      picks: [
        {
          id: "K18",
          label: "The knife",
          verdict:
            "A 230 mm gyuto, the Japanese chef's knife, hand-forged in London, with free sharpening, service and repair for life.",
        },
      ],
    },
  ],
  guide: [GIVE_WITH_CARE, ORDER_EARLY],
  faqs: [
    {
      question: "What's the best cookware gift that lasts a lifetime?",
      answer:
        "A cast-iron skillet: the Lodge 12-inch passes all five of our tests for $29.90. For a bigger gift, a Dutch oven: Smithey's bare-iron one ($300) has nothing to chip, and Staub's and Le Creuset's enameled ones (about $430–455) need no seasoning.",
    },
    {
      question: "Is a knife a good gift for a cook?",
      answer:
        "A forged one is, because it's sharpened rather than replaced. Blenheim Forge's hand-forged gyuto comes with free sharpening, service and repair for life, so the gift keeps being looked after. It's listed at its UK price of £320–350.",
    },
    {
      question: "Copper or cast iron as a gift?",
      answer:
        "Cast iron, unless the cook already loves copper. Iron is hard to damage and simple to look after; tin-lined copper is more responsive but needs gentler handling and, every so often, re-tinning.",
    },
    PRICES_FAQ,
  ],
  care: ["cast-iron", "enameled-cast-iron", "copper", "wood"],
  image: "about-copper-shelf",
  motif: "copper",
  allowGbp: true,
  published: "2026-10-25",
  updated: "2026-10-25",
};

const newHome: PieceListPage = {
  slug: "housewarming-and-wedding",
  type: "gift",
  title: "Housewarming and wedding gifts that last",
  metaTitle: "Housewarming and wedding gifts that last (2026)",
  shortTitle: "Housewarming & wedding",
  kicker: "Gift guide · For a new home",
  description:
    "Housewarming and wedding gifts that pass the Heirloom Standard: a silicon bronze door knocker, solid brass and bronze hooks, Dutch ovens, boards and fire tools.",
  question: "What's a good housewarming or wedding gift that will last?",
  answer:
    "Something for the house itself, or for its kitchen. Rocky Mountain Hardware's silicon bronze door knocker ($660) and Sun Valley Bronze's sand-cast hook ($224) both pass all five of our tests; Armac Martin's solid brass coat hook ($74.20) is the small version. For the kitchen or a registry, a Dutch oven from Smithey, Staub or Le Creuset ($300–455) or a John Boos board will be used for decades.",
  method:
    "Every piece here verifies at least four of our five tests; where one is still open, the entry says so. Grouped by where it goes in the house.",
  sections: [
    {
      id: "house",
      heading: "For the house",
      picks: [
        {
          id: "W16",
          label: "For the front door",
          verdict:
            "A round knocker in silicon bronze, made in Hailey, Idaho, with a lifetime residential guarantee: the piece of hardware every guest touches.",
        },
        {
          id: "W8",
          label: "For the hall",
          verdict: "A single-prong hook sand-cast in solid bronze in Idaho, with a lifetime mechanical warranty.",
        },
        {
          id: "W9",
          label: "The small one",
          verdict:
            "A solid brass hat and coat hook from Armac Martin in Birmingham, England: one of the most affordable ways into solid brass.",
        },
      ],
    },
    {
      id: "kitchen",
      heading: "For the kitchen",
      picks: [
        {
          id: "K13",
          label: "For the registry",
          verdict: "Smithey's bare-iron Dutch oven, made in the USA, with nothing to chip and a lifetime guarantee.",
        },
        {
          id: "K12",
          label: "For the registry, in enamel",
          verdict: "Staub's La Cocotte in French enameled cast iron, with a lifetime warranty.",
        },
        {
          id: "K11",
          label: "The registry classic",
          verdict: "Le Creuset's round Dutch oven, cast in France, where Le Creuset has made enameled iron since 1925.",
        },
        {
          id: "K20",
          label: "For the counter",
          verdict: "An end-grain black walnut block, 2¼ inches thick, that can be sanded and re-oiled for decades.",
        },
        {
          id: "K8",
          label: "For every day",
          verdict: "A solid hard maple board, 1½ inches thick, from John Boos.",
        },
        {
          id: "K1",
          label: "For the first dinner",
          verdict: "The Lodge 12-inch cast-iron skillet: all five tests, and a pan the house will keep.",
        },
      ],
    },
    {
      id: "fireplace",
      heading: "For the fireplace",
      picks: [
        {
          id: "H14",
          label: "For a house with a fireplace",
          verdict:
            "Urban Forge's Meadow set: five pieces of forged iron, guaranteed forever, with the broom covered for a year.",
        },
        {
          id: "H3",
          label: "For carrying the wood in",
          verdict: "Canvas and riveted leather from Duluth Pack in Minnesota; it softens with use and can be mended.",
        },
        {
          id: "H2",
          label: "The poker",
          verdict: "Hand-forged iron with a square loop handle, guaranteed forever.",
        },
      ],
    },
  ],
  guide: [
    {
      id: "giving-hardware",
      heading: "Giving hardware",
      blocks: [
        {
          type: "p",
          text: "A knocker or a hook suits almost any door or wall and is easy to fit. A lockset or entry set has to suit the door's thickness and its lock, so leave those to the owner, or give them our [door hardware ranking](/buy-it-for-life/solid-brass-door-hardware) instead.",
        },
      ],
    },
    GIVE_WITH_CARE,
    ORDER_EARLY,
  ],
  faqs: [
    {
      question: "What's a good housewarming gift that lasts forever?",
      answer:
        "A solid bronze or brass piece for the house: Rocky Mountain Hardware's silicon bronze knocker ($660) or Sun Valley Bronze's sand-cast hook ($224), both with lifetime cover. Bronze doesn't rust, and it darkens with handling rather than wearing out.",
    },
    {
      question: "Is a Dutch oven a good wedding gift?",
      answer:
        "It's a classic registry gift for good reason: it's used for decades and handed down. Smithey's bare-iron Dutch oven ($300) has nothing to chip; Staub's ($429.99) and Le Creuset's ($455) are French enameled cast iron. All three pass all five of our tests.",
    },
    {
      question: "Can you give door hardware as a gift?",
      answer:
        "A knocker or a hook, yes: they suit almost any door or wall. A lockset or entry set has to fit the door's thickness and its lock, so it's better chosen by the owner.",
    },
    PRICES_FAQ,
  ],
  care: ["brass-and-bronze", "cast-iron", "enameled-cast-iron", "forged-iron"],
  image: "hero-brass-knob",
  motif: "bronze",
  published: "2026-10-25",
  updated: "2026-10-25",
};

const splurge: PieceListPage = {
  slug: "splurge",
  type: "gift",
  title: "Heirloom splurges: gifts worth saving for",
  metaTitle: "Luxury heirloom gifts worth saving for (2026)",
  shortTitle: "The splurge",
  kicker: "Gift guide · $500 and up",
  description:
    "Gifts worth saving for that pass the Heirloom Standard: tin-lined copper, a cast bronze entry set, hand-forged knives, forged fire tools and end-grain walnut.",
  question: "What's a luxury gift that will actually last generations?",
  answer:
    "Tin-lined copper, cast bronze and hand-forged iron and steel. Mauviel's tinned copper fish kettle ($1,950), Duparquet's tinned copper sauté pan (from $650), Blenheim Forge's hand-forged knife set (from £1,260), Urban Forge's Meadow fire set ($752) and Rocky Mountain Hardware's cast bronze entry set ($2,546) all pass every one of our five tests, and each is made to be relined, sharpened or repaired rather than replaced.",
  method:
    "Every piece here has a listed price of $500 or more and verifies at least four of our five tests; where one is still open, the entry says so. From the lowest price, with the knife set at its UK price.",
  sections: [
    {
      id: "gifts",
      heading: "The gifts",
      picks: [
        {
          id: "K20",
          label: "For the counter",
          verdict:
            "End-grain black walnut, 2¼ inches thick: the traditional butcher's surface, sanded and re-oiled for decades.",
        },
        {
          id: "K16",
          label: "For the cook",
          verdict:
            "3 mm copper lined with tin, hand-made in Norwood, Massachusetts, with a lifetime warranty. When the tin wears, Duparquet re-tins it.",
        },
        {
          id: "W16",
          label: "For the front door",
          verdict: "Silicon bronze, made in Hailey, Idaho, with a lifetime residential guarantee.",
        },
        {
          id: "H14",
          label: "For the fireplace",
          verdict:
            "Five pieces of forged iron from a US blacksmith shop, guaranteed forever, with the broom covered for a year.",
        },
        {
          id: "H20",
          label: "To hand down",
          verdict:
            "Hand-forged iron andirons with ring tops, the top of Ponderosa Forge's range on our list, made in Sisters, Oregon.",
        },
        {
          id: "K25",
          label: "For the cook who has everything",
          verdict:
            "A fish kettle with grid and lid in 2.6 mm hammered copper, tin-lined and handmade by Mauviel in Villedieu-les-Poêles.",
        },
        {
          id: "W24",
          label: "For a front door that's staying",
          verdict:
            "Rocky Mountain Hardware's Bordeaux entry set in cast silicon bronze, with a lifetime residential guarantee: the hardware a house keeps.",
        },
        {
          id: "K21",
          label: "A kitchen of copper",
          verdict:
            "Ten pieces of Mauviel's M'Heritage in 2.5 mm copper with brass handles, from a French maker working in copper since 1830. A set like this is bought once.",
        },
        {
          id: "K22",
          label: "A set of knives",
          verdict:
            "Every blade hand-forged in Blenheim Forge's London workshop, with free sharpening, service and repair for life.",
        },
      ],
    },
  ],
  guide: [GIVE_WITH_CARE, ORDER_EARLY],
  faqs: [
    {
      question: "What's a luxury gift that lasts a lifetime?",
      answer:
        "Tin-lined copper is the classic: Duparquet's hand-made sauté pan (from $650) or Mauviel's fish kettle ($1,950) can be re-tinned and used for generations. For the house, a cast bronze knocker ($660) or entry set ($2,546) from Rocky Mountain Hardware carries a lifetime residential guarantee.",
    },
    {
      question: "Is expensive cookware worth it?",
      answer:
        "Only when the money buys a longer life or a better tool. Tin-lined copper and forged knives can be relined and resharpened indefinitely, so they're worth it to a keen cook; for most people, a $29.90 cast-iron skillet lasts just as long.",
    },
    PRICES_FAQ,
  ],
  care: ["copper", "brass-and-bronze", "forged-iron", "wood"],
  image: "hero-copper-pans",
  motif: "copper",
  budget: { min: 500 },
  allowGbp: true,
  published: "2026-10-25",
  updated: "2026-10-25",
};

export const GIFT_GUIDES: PieceListPage[] = [underHundred, underTwoFifty, forTheCook, newHome, splurge];
