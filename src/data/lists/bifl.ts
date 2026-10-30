import type { PieceListPage } from "./types";

/**
 * Buy it for life: five ranked lists. See ./types.ts for the writing rules. Piece ids refer to
 * src/data/pieces.ts; every fact a verdict repeats is checked against that file.
 */

const castIronSkillets: PieceListPage = {
  slug: "cast-iron-skillets",
  type: "bifl",
  title: "The best cast-iron skillets to buy for life",
  metaTitle: "Best cast-iron skillets to buy for life (2026)",
  shortTitle: "Cast-iron skillets",
  kicker: "Buy it for life · Skillets",
  description:
    "Seven iron pans that pass the Heirloom Standard, ranked: Lodge, Smithey, FINEX, Field Company and more, with Smithey vs. Lodge vs. Field side by side.",
  question: "What is the best cast-iron skillet to buy for life?",
  answer:
    "The Lodge 12-inch Classic Skillet. It is one piece of American cast iron, it passes all five of our tests, and it costs $29.90. Smithey, FINEX and Field Company skillets also pass all five, at $180 to $215: what the extra buys is a polished or machined cooking surface, or a lighter pan, not a longer life. Kept dry and oiled, any of them will last long enough to hand down.",
  method:
    "Six of these seven pans verify all five tests, so most of the order is our judgement: the Lodge first, because it does the same job for a lifetime at a fraction of the price, then the cast-iron pans worth paying more for, in order of price, then the lighter iron pans.",
  sections: [
    {
      id: "cast-iron",
      heading: "Cast-iron skillets",
      picks: [
        {
          id: "K1",
          label: "The one to buy first",
          verdict:
            "One piece of American cast iron, covered by Lodge's \"Made Right\" limited lifetime warranty, for $29.90. Lodge leaves the cooking surface as cast, lightly textured rather than polished, and the seasoning fills it in with use. The other cast-iron skillets here cost six to seven times as much and won't last any longer.",
          chooseIf: "you want one skillet for life and would rather spend the difference on a Dutch oven",
        },
        {
          id: "K3",
          label: "Polished smooth",
          verdict:
            "Smithey polishes the cooking surface of its No. 10 smooth, the way American skillets were finished before the 1950s: the closest thing here to a good vintage pan, new. Made in the USA, with a lifetime guarantee. The $180 buys the finish, not a longer life.",
          chooseIf: "you want a smooth, vintage-style surface from the first day",
        },
        {
          id: "K5",
          label: "Machined, with a repair promise",
          verdict:
            "FINEX machines the cooking surface smooth; underneath it's plain cast iron, seasoned rather than coated. Its \"Guaranteed Good Forever\" says what happens if something goes wrong: FINEX repairs or replaces the pan. Made in the USA.",
          chooseIf: "you like a machined finish and a guarantee that names the remedy",
        },
        {
          id: "K4",
          label: "Lighter to lift",
          verdict:
            "Field Company casts its No. 10 in a lighter cast iron than most modern skillets, which matters when the pan comes off the stove every day. Made in the USA, with a lifetime warranty. At $215 it's the most expensive skillet here.",
          chooseIf: "a standard cast-iron pan feels heavy to you",
        },
      ],
    },
    {
      id: "lighter-iron",
      heading: "Lighter iron: carbon steel, wrought and spun iron",
      intro:
        "Not cast iron, but the same idea: bare iron with no coating, seasoned with oil and used for life. These pans are thinner and lighter than cast iron and heat up faster.",
      picks: [
        {
          id: "K6",
          label: "The professional's pan",
          verdict:
            "French carbon steel, the fixture of professional kitchens: it seasons like cast iron but is lighter and quicker to heat. Lifetime warranty, per the product data. At $105, the least expensive pan here after the Lodge.",
          chooseIf: "you fry and sear a lot and want a lighter pan",
        },
        {
          id: "K7",
          label: "One piece, no rivets",
          verdict:
            "Formed from a single piece of wrought iron, handle and all, so there are no rivets or joints to loosen, and backed by what Solidteknics calls a \"multi-century warranty\". Made in Sydney, Australia.",
          chooseIf: "you want the simplest construction there is",
        },
        {
          id: "K10",
          label: "Deep, from an English foundry",
          verdict:
            "A deep chef's pan spun from iron in Shropshire, seasoned like cast iron and lighter to handle. We haven't verified its warranty yet, which is why it ranks last.",
        },
      ],
    },
  ],
  comparison: {
    kind: "versus",
    id: "smithey-vs-lodge-vs-field",
    heading: "Smithey vs. Lodge vs. Field Company",
    intro:
      "The three American skillets people most often weigh against each other. All three are one piece of cast iron made in the USA, all three verify all five of our tests, and all three can be scrubbed back and re-seasoned if they ever rust. The differences are the surface, the weight and the price.",
    ids: ["K1", "K3", "K4"],
    fields: ["price", "madeIn", "warranty", "standard"],
    rows: [
      {
        label: "What sets it apart",
        values: [
          "The price",
          "A polished cooking surface, as on pre-1950s American skillets",
          "Lighter cast iron than most modern skillets",
        ],
      },
      {
        label: "Choose it if",
        values: [
          "You want one skillet for life for the least money",
          "You want a smooth, vintage-style surface from day one",
          "You find a standard cast-iron pan heavy to lift every day",
        ],
      },
    ],
    verdict:
      "Buy the Lodge unless you know you want what the others add. None of the three will outlast the others: cast iron this simple lasts as long as it's kept dry and oiled. The Smithey's polished surface and the Field's lighter weight are differences you'll notice every day, and they're what the extra $150 to $185 pays for.",
  },
  guide: [
    {
      id: "what-lasts",
      heading: "What makes a skillet last for life",
      blocks: [
        {
          type: "list",
          items: [
            "No coating. Seasoning is renewed every time you cook, and if it's lost it can be scrubbed back and rebuilt. Nonstick coatings wear out in a few years, which is why they're one of our [automatic disqualifiers](/standard).",
            "Nothing to work loose. A skillet cast in one piece has no rivets, screws or welds. Riveted handles, common on carbon steel, are sound for decades, but one piece is simpler still.",
            "A maker that stands behind it. A pan this simple rarely needs a warranty, but a lifetime one tells you the maker expects it to last. Six of the seven pans here carry lifetime cover.",
            "Weight you can live with. The best pan is the one you reach for. If cast iron feels heavy, carbon steel and spun iron season the same way and are lighter to lift.",
          ],
        },
      ],
    },
    {
      id: "cast-iron-or-carbon-steel",
      heading: "Cast iron or carbon steel?",
      blocks: [
        {
          type: "p",
          text: "Cast iron is thick and heavy, slow to heat and slow to cool, which is what makes it good for searing, frying and baking. Carbon steel is thinner, lighter and quicker to respond, which is why it's the frying pan of professional kitchens. Both are bare iron, both are seasoned with oil, and both last for life with the same care: [How to care for cast iron](/care/cast-iron) covers them both.",
        },
      ],
    },
    {
      id: "vintage",
      heading: "What about a vintage pan?",
      blocks: [
        {
          type: "p",
          text: "A sound old pan is as much an heirloom as a new one, and many American skillets made before the 1950s are still cooking. Check that it sits flat without rocking or spinning, that there are no cracks (look along the bottom and around the handle against the light), and that any pitting is shallow. Rust and old crust are not a problem: they come off, and the seasoning can be rebuilt.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is a Smithey worth it over a Lodge?",
      answer:
        "Only if you want the polished surface. Both are one piece of American cast iron that passes all five of our tests, and with care neither will outlast the other. The Smithey ($180) is polished smooth, the way American skillets were finished before the 1950s; the Lodge ($29.90) is left as cast, and its texture fills in as the seasoning builds.",
    },
    {
      question: "Field Company or Smithey?",
      answer:
        "They're different rather than better. Field casts its No. 10 lighter than most modern skillets; Smithey polishes its cooking surface smooth. Both are made in the USA, carry lifetime cover and pass all five of our tests. Choose the Field if weight matters to you and the Smithey if the surface does. As listed, the Smithey is $180 and the Field $215.",
    },
    {
      question: "Does a cast-iron skillet really last forever?",
      answer:
        "Very nearly. A pan of solid iron has no coating to wear out and no parts to break, and rust or lost seasoning can be scrubbed back and rebuilt. What ends a cast-iron pan is a crack or a warp, usually from heating it empty on high for a long time or plunging it hot into cold water.",
    },
    {
      question: "Cast iron or carbon steel: which lasts longer?",
      answer:
        "Neither: both last for life with the same care. Cast iron is thicker and heavier and holds heat; carbon steel is thinner and lighter and heats faster. Choose by how you cook and what you can comfortably lift, not by how long it will last.",
    },
    {
      question: "Is the Lodge skillet still made in the USA?",
      answer:
        "The 12-inch Classic Skillet on this list is, per Lodge. Not every Lodge product is made in the USA, so check the listing for each piece; we're still confirming where Lodge's USA Enamel Dutch oven is made.",
    },
  ],
  care: ["cast-iron"],
  image: "hero-cast-iron-skillet",
  motif: "cast-iron",
  published: "2026-10-25",
  updated: "2026-10-25",
};

const doorHardware: PieceListPage = {
  slug: "solid-brass-door-hardware",
  type: "bifl",
  title: "Solid brass and bronze door hardware that lasts",
  metaTitle: "Best solid brass door hardware, ranked (2026)",
  shortTitle: "Brass & bronze door hardware",
  kicker: "Buy it for life · Door hardware",
  description:
    "Solid brass and bronze entry sets, knobs, levers and knockers, ranked: Rocky Mountain Hardware, Emtek, Ashley Norton, Baldwin and Nostalgic Warehouse.",
  question: "What is the best solid brass or bronze door hardware to buy for life?",
  answer:
    "For a front door, Rocky Mountain Hardware's Bordeaux entry set: cast silicon bronze, made in Hailey, Idaho, with a lifetime residential guarantee, and it passes all five of our tests. For interior doors, Rocky Mountain's cast bronze levers rank first, with Emtek's solid brass egg knob ($156.80) and Ashley Norton's solid bronze lever ($288) the best value. Baldwin's Estate pieces are solid brass, but the lifetime warranty we've found covers the finish, not the mechanism.",
  method:
    "In door hardware the metal outlasts everything else; what wears is the latch, the spring and the lock. So among pieces that verify the same tests, the stronger guarantee on the mechanism ranks higher, and the rest is our judgement, explained in each entry.",
  sections: [
    {
      id: "entry-sets",
      heading: "Front doors: entry sets and handlesets",
      picks: [
        {
          id: "W24",
          label: "The front door, for good",
          verdict:
            "Cast in silicon bronze, the alloy makers choose for front doors because it stands up to weather, and made in Hailey, Idaho. It verifies all five tests and carries a lifetime residential guarantee, the strongest cover on any entry set we've checked. It's also the most expensive, at $2,546.",
          chooseIf: "the door is staying, and you'd rather never think about its hardware again",
        },
        {
          id: "W14",
          label: "The best value",
          verdict:
            "Forged brass on a long backplate with a Homestead knob, hand assembled in the USA, for less than a sixth of the price of the Bordeaux. Nostalgic Warehouse covers the mechanism and the finish for 5 years each: real cover, but shorter than we'd like, which is why it ranks second.",
          chooseIf: "you want solid brass on the front door without spending four figures",
        },
        {
          id: "W25",
          label: "The old thumb-latch form",
          verdict:
            "Sand-cast bronze, the better metal for a door that faces the weather, joining the old thumb-latch form to a mortise lock made in the USA. The bronze is why it ranks above the solid brass Baldwin below.",
          chooseIf: "the house wants a thumb latch rather than a knob or lever",
        },
        {
          id: "W22",
          label: "Solid brass, mortise lock",
          verdict:
            "Baldwin's Kensington handleset in solid brass, fitted with a mortise lock set into the edge of the door, the traditional way to fit an entry lock. Baldwin's lifetime warranty covers the finish; we haven't recorded a mechanical warranty.",
        },
        {
          id: "W23",
          label: "For French doors",
          verdict:
            "Rejuvenation's Emry set for an exterior French door, in solid brass with crystal knobs. We haven't verified the warranty or where it's made yet, which is why it ranks last.",
        },
      ],
    },
    {
      id: "knobs-and-levers",
      heading: "Interior doors: knobs and levers",
      picks: [
        {
          id: "W17",
          label: "The best lever",
          verdict:
            "Cast bronze from Hailey, Idaho, with the same lifetime residential guarantee as Rocky Mountain's entry sets. Bronze darkens with handling to a deep brown and doesn't rust. $724 for the set.",
          chooseIf: "you're doing the main rooms once and want the strongest guarantee",
        },
        {
          id: "W5",
          label: "Best value in brass",
          verdict:
            "A solid brass egg knob on a Quincy rosette, with a limited lifetime warranty on the mechanism and 5 years on the finish, assembled in Los Angeles from global components. At $156.80 it's the least expensive piece on this page that verifies all five tests.",
          chooseIf: "you have a lot of doors to do",
        },
        {
          id: "W12",
          label: "Best value in bronze",
          verdict:
            "Solid bronze in a Colonial lever shape, with a 10-year warranty on the mechanism, at $288: an accessible price for solid bronze door hardware. Made in India.",
        },
        {
          id: "W4",
          label: "Crystal and forged brass",
          verdict:
            "Crystal knobs on a long forged-brass backplate, hand assembled in the USA. Like the New York entry set, it carries 5 years on the mechanism and 5 on the finish.",
        },
        {
          id: "W13",
          label: "Rope detail",
          verdict:
            "Forged brass with a rope-pattern detail, from Baldwin's Estate line. Baldwin covers the PVD finish for life; we haven't verified the mechanical warranty.",
        },
        {
          id: "W6",
          label: "Solid brass and crystal",
          verdict:
            "Rejuvenation's Emry interior set, in solid brass with crystal knobs. It ranks last because two of its facts are still open.",
        },
      ],
    },
    {
      id: "knockers-and-bolts",
      heading: "Knockers and bolts",
      picks: [
        {
          id: "W16",
          label: "The knocker",
          verdict:
            "A round knocker in silicon bronze, made in Hailey, Idaho, with a lifetime residential guarantee. It's the piece of hardware every visitor touches, and silicon bronze stands up to weather and handling.",
        },
        {
          id: "W18",
          label: "For gates and double doors",
          verdict:
            "Sand-cast in solid bronze in Idaho: the drop bolt that holds a gate, or the second leaf of a double door, in place. Lifetime mechanical warranty.",
        },
      ],
    },
  ],
  comparison: {
    kind: "table",
    id: "makers",
    heading: "The makers at a glance",
    intro: "What we've verified for each maker, from the pieces we've checked.",
    columns: ["Maker", "Metal on our list", "Made in", "Guarantee, as published"],
    rows: [
      ["Rocky Mountain Hardware", "Cast bronze and silicon bronze", "Hailey, Idaho, USA", "Lifetime residential guarantee"],
      ["Sun Valley Bronze", "Sand-cast solid bronze", "Idaho, USA", "Lifetime mechanical warranty"],
      [
        "Emtek",
        "Solid brass (egg knob); brass with parts from China (Heritage entry set)",
        "Assembled in Los Angeles from global components (egg knob)",
        "Limited lifetime on the mechanism; 5 years on the finish",
      ],
      [
        "Ashley Norton",
        "Solid bronze; sand-cast bronze",
        "India (Colonial lever); lock made in USA (thumb-latch entry)",
        "10 years on the mechanism (lever); 2 years (thumb-latch entry)",
      ],
      [
        "Baldwin (Estate)",
        "Forged and solid brass",
        "Mexico (Minneapolis entry); others not yet verified",
        "Lifetime on the finish; mechanical not recorded",
      ],
      ["Nostalgic Warehouse", "Forged brass", "Hand assembled in USA", "5 years on the mechanism, 5 on the finish"],
      ["Rejuvenation", "Solid brass", "Not yet verified", "Not yet verified"],
    ],
    note: "A maker's other lines may be built differently. Check the materials on each product before you buy.",
  },
  guide: [
    {
      id: "solid-or-plated",
      heading: "Solid, forged, cast or plated",
      blocks: [
        {
          type: "p",
          text: "Solid brass and solid bronze are the same metal all the way through, so there's no surface layer to wear off: a scratch shows more brass. Forged brass is solid brass pressed into shape under great pressure, which makes it dense and strong. Cast brass and bronze are poured into a mould, which allows the detail of a knocker or an arched lever. All three last.",
        },
        {
          type: "p",
          text: "Plated hardware is a thin layer of brass over steel or zinc, and \"brass finish\" or an \"antique brass look\" usually means the same. When the plating wears through, the grey metal underneath shows and can't be polished back. Plating, zinc sold as brass and \"-look\" finishes are automatic disqualifiers under [the Standard](/standard); [Solid brass vs. brass-plated: how to tell](/care/solid-brass-or-plated) has the tests that tell them apart.",
        },
      ],
    },
    {
      id: "brass-or-bronze",
      heading: "Brass or bronze?",
      blocks: [
        {
          type: "p",
          text: "Brass is copper and zinc. It can be polished bright or left to mellow to a softer, darker gold, and it's the classic metal for interior knobs, hinges and hooks. Bronze is copper and tin, and silicon bronze adds silicon; it darkens to a deep brown with handling and stands up to weather, which is why makers use it for front doors, knockers and gates. Neither rusts. If the door faces rain and sun, choose bronze; inside, either.",
        },
      ],
    },
    {
      id: "mechanism",
      heading: "The part that wears is inside",
      blocks: [
        {
          type: "p",
          text: "Solid metal outlasts everything else on a door. What wears is the latch, the spring and the lock, which is why we rank on the guarantee for the mechanism rather than the finish: a lifetime finish warranty promises that the surface will look right, not that the latch will keep working. Mortise locks, set into the edge of the door, are the traditional entry lock, and a locksmith services them rather than throwing them away.",
        },
      ],
    },
    {
      id: "finish",
      heading: "Lacquered or living",
      blocks: [
        {
          type: "p",
          text: "New brass and bronze is sold either lacquered, with a clear coat that keeps it bright until the coat wears through, or unlacquered (a \"living finish\") that darkens evenly with use. Unlacquered metal ages more gracefully over decades, because there's no coating to wear away in patches. [Cleaning and patina for solid brass and bronze](/care/brass-and-bronze) covers both.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is Baldwin door hardware solid brass?",
      answer:
        "The Baldwin Estate pieces we've checked are: the Rope knobset and Minneapolis entry set are forged brass, and the Kensington handleset is solid brass. Baldwin's lifetime warranty on them covers the finish; we haven't recorded a mechanical warranty. A maker's other lines may be built differently, so check the materials on each product.",
    },
    {
      question: "Is Emtek hardware solid brass?",
      answer:
        "The Emtek Classic Brass Egg Knob is solid brass, assembled in Los Angeles from global components, with a limited lifetime warranty on the mechanism and 5 years on the finish. Emtek's Heritage entry set is brass with some parts made in China. Construction varies by line, so check each product's materials.",
    },
    {
      question: "Brass or bronze for a front door?",
      answer:
        "Bronze, if the door faces the weather. Silicon bronze, which Rocky Mountain Hardware uses for its entry sets and knockers, stands up to weather and darkens to a deep brown. Solid brass works outdoors too, but unlacquered brass on an exposed door tarnishes quickly and needs regular polishing to stay bright.",
    },
    {
      question: "How can you tell if door hardware is solid brass?",
      answer:
        "Start with a magnet: brass isn't magnetic, so a firm pull means steel under plating. Then check the weight (solid brass is heavy for its size), look for grey or silver metal showing at worn edges, and scratch a hidden spot: solid brass is yellow all the way down. Zinc isn't magnetic either, so use all the tests. The full method is in [Solid brass vs. brass-plated](/care/solid-brass-or-plated).",
    },
    {
      question: "Is solid brass door hardware worth the cost?",
      answer:
        "If you're keeping the door, yes. Solid brass and bronze don't flake or wear through the way plated zinc does, and a good mechanism can be serviced. On our list, solid brass interior hardware starts at $156.80 for a knob, and a cast bronze entry set is $2,546.",
    },
  ],
  care: ["solid-brass-or-plated", "brass-and-bronze"],
  image: "cat-hardware-brass-lever",
  motif: "brass",
  published: "2026-10-25",
  updated: "2026-10-25",
};

const woodStoves: PieceListPage = {
  slug: "wood-stoves",
  type: "bifl",
  title: "Wood stoves built to last: cast iron and soapstone",
  metaTitle: "Best wood stoves built to last (2026)",
  shortTitle: "Wood stoves",
  kicker: "Buy it for life · Wood stoves",
  description:
    "Cast-iron and soapstone wood stoves from Morsø, Jøtul, Woodstock Soapstone, HearthStone and Dovre, ranked on what we've verified, plus what makes one last.",
  question: "Which wood stoves last the longest?",
  answer:
    "Cast-iron and soapstone stoves from makers that keep supplying parts. Of the stoves we've checked, the Morsø 1410 ranks first for US homes: cast iron from the Danish foundry, EPA-approved, with 10 years on the castings and parts for 10 years after a model is discontinued. Jøtul's F 602, Woodstock Soapstone's Fireview and HearthStone's Heritage follow. Whatever the stove, dry wood, a yearly sweep and new gaskets matter as much as the make.",
  method:
    "No stove we've checked yet verifies all five tests: for every one, we're still confirming parts and service availability (test 2). They're ranked on what is verified so far, then by the warranty. Stoves sold at US prices come first, because we haven't yet confirmed US versions or EPA certification for the UK ones.",
  sections: [
    {
      id: "us",
      heading: "For US homes",
      intro:
        "Sold in the US at US prices. Every new wood stove sold in the US must be certified by the EPA; confirm the certification for the exact model with your dealer before you buy.",
      picks: [
        {
          id: "H23",
          label: "The best supported",
          verdict:
            "Cast iron from the Danish foundry, with squirrels cast into the side panels, and EPA-approved for US homes. Morsø's 10-year warranty on the castings and its promise of parts for 10 years after a model is discontinued are the strongest support we've verified for any stove.",
          chooseIf: "you want a small stove with the maker's support in writing",
        },
        {
          id: "H24",
          label: "The long-running classic",
          verdict:
            "Norwegian cast iron in a compact box stove, a long-running Jøtul design, in a version certified to the EPA's 2020 standard. We haven't verified Jøtul's warranty yet, which keeps it below the Morsø.",
        },
        {
          id: "H18",
          label: "Soapstone, from New Hampshire",
          verdict:
            "Soapstone and cast iron, built by Woodstock Soapstone in New Hampshire and sold direct. Soapstone soaks up a fire's heat and gives it back slowly for hours after the flames die down. Woodstock offers a warranty, but we haven't verified its length.",
          chooseIf: "you want steady, gentle heat that lasts well after the fire",
        },
        {
          id: "H19",
          label: "Soapstone, from Vermont",
          verdict:
            "Cast iron and soapstone, built in Vermont with castings from HearthStone's own foundry in Spain. HearthStone has a written warranty; we haven't verified its length.",
        },
      ],
    },
    {
      id: "uk",
      heading: "In the UK",
      intro:
        "Listed at UK prices. We haven't yet confirmed US versions or EPA certification for these, so for now they're for UK homes.",
      picks: [
        {
          id: "H22",
          label: "Ten years, with servicing",
          verdict:
            "A cast-iron stove for wood or other solid fuels, with a 10-year warranty as long as it's serviced every year. Made in Norway, per the retailer; we're confirming.",
        },
        {
          id: "H21",
          label: "Cooks as well as heats",
          verdict:
            "A British cast-iron cook stove, made in Barnoldswick, that heats the room and cooks from the same fire. Its shorter warranty puts it below the Dovre.",
          chooseIf: "you want to cook on the fire that heats the room",
        },
        {
          id: "H17",
          label: "Small and simple",
          verdict:
            "A compact box stove in steel and cast iron from a British maker, made on the Isle of Wight per the retailer. We haven't verified the warranty yet.",
        },
      ],
    },
  ],
  comparison: {
    kind: "pieces",
    id: "at-a-glance",
    heading: "All seven, side by side",
    intro: "What we've verified for each stove so far.",
    ids: ["H23", "H24", "H18", "H19", "H22", "H21", "H17"],
    fields: ["material", "madeIn", "warranty", "price", "standard"],
  },
  guide: [
    {
      id: "what-lasts",
      heading: "What makes a stove last for decades",
      blocks: [
        {
          type: "list",
          items: [
            "The body. A cast-iron stove is built from cast panels bolted together and sealed, and can be taken apart and resealed when the seals age. A welded steel stove heats up faster and has no seams to reseal. Soapstone, set in an iron frame, stores the most heat.",
            "Parts you can still buy. Every stove has wearing parts: door and glass gaskets, firebricks, baffles, the glass itself. A stove lasts as long as those can be had, so ask the dealer how long the maker supports discontinued models. Morsø's published answer is 10 years.",
            "A warranty on the body. Look for long cover on the castings or the steel body. Wearing parts are usually covered for much less, and that's normal.",
            "Certification. In the US, a new wood stove must be EPA-certified; in the UK, new stoves must meet Ecodesign limits.",
          ],
        },
      ],
    },
    {
      id: "installation",
      heading: "The stove is half of it",
      blocks: [
        {
          type: "p",
          text: "Most stoves that fail early fail from wet wood, overfiring or a chimney that doesn't draw, not from age. Have the stove installed to the maker's instructions and your local code, by a certified installer where your area requires one, and have the chimney swept every year. [Looking after a cast-iron or soapstone wood stove](/care/wood-stoves) has the yearly routine.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How long does a wood stove last?",
      answer:
        "A well-made cast-iron or soapstone stove that's looked after lasts for decades, with gaskets, firebricks, baffles and glass replaced along the way. Stoves fail early from wet wood, overfiring and neglect rather than age, so a yearly sweep and new gaskets when they flatten do more for a stove's life than the badge on the door.",
    },
    {
      question: "Is cast iron or steel better for a wood stove?",
      answer:
        "Both last. A cast-iron stove is built from panels that can be taken apart and resealed, and it holds heat a little longer; welded steel heats up faster and has no seams to reseal. Soapstone in an iron frame holds heat longest of all. Choose the type by how you heat, and the maker by how long it supports its stoves with parts.",
    },
    {
      question: "Is a soapstone stove worth it?",
      answer:
        "If you want steady, gentle heat for hours after the fire dies down, yes: soapstone soaks up heat and gives it back slowly. It's slower to warm up from cold, and it costs more: the two on our list are $4,250 (Woodstock Fireview) and from $4,999 (HearthStone Heritage).",
    },
    {
      question: "Morsø or Jøtul?",
      answer:
        "Both are Scandinavian cast iron with long histories. On what we've verified, Morsø ranks higher: it publishes 10 years on the castings and parts for 10 years after a model is discontinued, and we haven't verified Jøtul's warranty yet. As listed, the Morsø 1410 is $1,900 and the Jøtul F 602 V3, certified to the EPA's 2020 standard, is $2,045.",
    },
    {
      question: "Does a new wood stove need to be EPA-certified?",
      answer:
        "In the US, yes: a new wood stove must be certified by the EPA. The Morsø 1410 is EPA-approved and the Jøtul F 602 V3 meets the 2020 standard, per their listings. Confirm the certification for the exact model with your dealer before you buy.",
    },
  ],
  care: ["wood-stoves"],
  image: "cat-hearth-modern-stove",
  motif: "soapstone",
  published: "2026-10-25",
  updated: "2026-10-25",
};

const kitchen: PieceListPage = {
  slug: "kitchen",
  type: "bifl",
  title: "The buy-it-for-life kitchen: pieces worth buying once",
  metaTitle: "Buy-it-for-life kitchen essentials (2026)",
  shortTitle: "The kitchen",
  kicker: "Buy it for life · Kitchen",
  description:
    "Dutch ovens, tin-lined copper, a hand-forged knife, hardwood boards and the skillet to start with: kitchen pieces that pass the Heirloom Standard, ranked.",
  question: "What kitchen items are worth buying for life?",
  answer:
    "A cast-iron skillet, a Dutch oven, a tin-lined copper pan, a forged chef's knife and a thick hardwood board. Each is solid material whose working surface can be renewed: seasoning is rebuilt, tin is relined, a blade is sharpened, wood is sanded and oiled. Start with the Lodge 12-inch skillet ($29.90) and Smithey's bare-iron Dutch oven ($300); add copper, a knife and a board over the years.",
  method:
    "Ranked within each kind of piece. Among pieces that verify the same tests, the order is our judgement of what lasts longest in daily use, explained in each entry. For Dutch ovens that means bare iron before enamel, because enamel is the one cooking surface that can't be renewed.",
  sections: [
    {
      id: "skillet",
      heading: "The skillet",
      intro:
        "The first piece to buy. We rank seven iron pans in [the best cast-iron skillets to buy for life](/buy-it-for-life/cast-iron-skillets); this is the one to start with.",
      picks: [
        {
          id: "K1",
          label: "Start here",
          verdict:
            "One piece of American cast iron that passes all five tests, with Lodge's \"Made Right\" limited lifetime warranty, for $29.90. Nothing else in the kitchen does as much, for as long, for as little.",
        },
      ],
    },
    {
      id: "dutch-ovens",
      heading: "Dutch ovens",
      intro:
        "The pot for braises, stews, soups and bread. Bare cast iron seasons like a skillet and has nothing to chip; enameled iron needs no seasoning, takes acidic food in its stride, and lasts as long as the enamel does.",
      picks: [
        {
          id: "K13",
          label: "Nothing to chip",
          verdict:
            "Bare cast iron with no enamel to chip or craze, made in the USA with a lifetime guarantee. It seasons with use like Smithey's skillets, and it's the one Dutch oven here whose cooking surface can always be renewed.",
          chooseIf: "you'd rather season a pot than worry about its enamel",
        },
        {
          id: "K12",
          label: "Enamel, with a lifetime warranty",
          verdict:
            "Staub's La Cocotte in French enameled cast iron, in matte black: a heavy, lidded pot made for slow cooking, with a lifetime warranty. $429.99 for the 5.5-quart.",
        },
        {
          id: "K11",
          label: "The classic",
          verdict:
            "Le Creuset has cast enameled iron in France since 1925, and the round Dutch oven is its signature piece. It ranks just below the Staub on the wording of the warranty (limited lifetime), not on the pot. $455 for the 5.5-quart.",
        },
        {
          id: "K2",
          label: "Best value in enamel",
          verdict:
            "Enameled cast iron for $124.95, with a limited lifetime warranty that includes provisions for enamel chipping, the failure enamel owners worry about most.",
          chooseIf: "you want enameled iron without the French price",
        },
      ],
    },
    {
      id: "copper",
      heading: "Tin-lined copper",
      intro:
        "The most responsive pans there are, and among the few built to be relined: when the tin wears thin, a specialist re-tins it and it goes back to work.",
      picks: [
        {
          id: "K17",
          label: "The do-everything pan",
          verdict:
            "A fait tout, the French \"do-everything\" pan, in 3 mm copper lined with tin, hand-made in Norwood, Massachusetts. Duparquet offers a lifetime warranty and re-tins its own pans.",
          chooseIf: "you want one copper pan that does most things",
        },
        {
          id: "K16",
          label: "The sauté pan",
          verdict:
            "The same 3 mm tinned copper from Duparquet as an 11¼-inch sauté pan, with the same lifetime warranty and re-tinning.",
        },
        {
          id: "K15",
          label: "From Mauviel, since 1830",
          verdict:
            "2.5 mm copper with a brass handle, from the French maker that has worked in copper since 1830, with a limited lifetime warranty. We're still confirming the lining and handle construction, which keeps it below the Duparquet pans.",
        },
      ],
    },
    {
      id: "knife",
      heading: "The knife",
      intro: "A forged blade is sharpened, not replaced.",
      picks: [
        {
          id: "K18",
          label: "Sharpened for life",
          verdict:
            "A 230 mm gyuto, the Japanese chef's knife, hand-forged in Blenheim Forge's London workshop, with free sharpening, service and repair for life.",
        },
      ],
    },
    {
      id: "boards",
      heading: "Boards and spoons",
      intro:
        "Hardwood is sanded flat and re-oiled for decades. John Boos's warranty is a year, which is why both boards verify four tests and a partial.",
      picks: [
        {
          id: "K20",
          label: "The board to keep",
          verdict:
            "End-grain black walnut, 2¼ inches thick. End grain is the traditional butcher's surface: the knife edge slips between the wood fibres instead of cutting across them, so it's gentler on knives.",
        },
        {
          id: "K8",
          label: "The everyday board",
          verdict:
            "Solid hard maple, 1½ inches thick. Maple is the traditional board wood: hard, close-grained and easy to sand back.",
        },
        {
          id: "K9",
          label: "Wooden spoons",
          verdict:
            "Wild cherry spoons from a Pennsylvania workshop. Cherry darkens with age, and a wooden spoon needs nothing more than an occasional oiling. $122 for the set.",
        },
      ],
    },
  ],
  comparison: {
    kind: "table",
    id: "what-wears",
    heading: "What wears, and how it's renewed",
    intro: "Every piece on this list has one surface that takes the wear. This is how each is brought back.",
    columns: ["Piece", "What wears", "How it's renewed", "Guide"],
    rows: [
      ["Cast iron and carbon steel", "The seasoning", "Scrubbed back to bare metal and re-seasoned", "[Cast iron care](/care/cast-iron)"],
      [
        "Enameled cast iron",
        "The enamel, if it chips or crazes",
        "It can't be renewed at home, so prevent it: no metal scourers, no sudden temperature changes",
        "[Enameled cast iron care](/care/enameled-cast-iron)",
      ],
      ["Tin-lined copper", "The tin lining", "Re-tinned by a specialist", "[Re-tinning copper](/care/copper)"],
      ["A forged knife", "The edge", "Sharpened; Blenheim Forge does it free for life", "—"],
      ["A hardwood board or spoon", "Knife marks and dryness", "Sanded and re-oiled", "[Boards and spoons](/care/wood)"],
    ],
  },
  guide: [
    {
      id: "order",
      heading: "What to buy first",
      blocks: [
        {
          type: "p",
          text: "Start with the pieces you'll use every day and that are hardest to damage: a cast-iron skillet, then a Dutch oven, then a board. Copper and a forged knife reward a cook who already knows they want them. Nothing here needs to be bought as a set; a kitchen built one piece at a time ends up with only the pieces that get used.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What's the first kitchen piece to buy for life?",
      answer:
        "A cast-iron skillet. The Lodge 12-inch passes all five of our tests for $29.90, and nothing else in the kitchen does as much, for as long, for as little. A Dutch oven is the natural second.",
    },
    {
      question: "Is Le Creuset worth it?",
      answer:
        "It passes all five of our tests: French enameled cast iron, made since 1925, with a limited lifetime warranty. The enamel is the one part that can't be renewed, so it lasts as long as you avoid chipping it: no metal scourers, no sudden temperature changes. If you'd rather have nothing to chip, Smithey's bare-iron Dutch oven needs only seasoning.",
    },
    {
      question: "Le Creuset or Staub?",
      answer:
        "Both are French enameled cast iron and both pass all five of our tests. Staub lists a lifetime warranty and Le Creuset a limited lifetime warranty. As listed, the 5.5-quart Staub La Cocotte is $429.99 and the 5.5-quart Le Creuset Signature is $455. Choose by shape and finish; either will last.",
    },
    {
      question: "Is copper cookware worth it?",
      answer:
        "Tin-lined copper is, if you'll look after it: it's among the few pans built to be relined, so it can be kept in use indefinitely. Duparquet, which hand-makes its pans in Massachusetts, re-tins its own pans. It costs more than iron (from $570 on our list) and needs gentler handling.",
    },
    {
      question: "Do wooden cutting boards last a lifetime?",
      answer:
        "A thick hardwood board does: it can be sanded flat and re-oiled for decades. The John Boos boards on our list are solid hard maple and end-grain black walnut. Boos's warranty is 1 year, which is why they verify four of our tests with one partial.",
    },
  ],
  care: ["cast-iron", "enameled-cast-iron", "copper", "wood"],
  image: "cat-kitchen-copper-saucepan",
  motif: "copper",
  published: "2026-10-25",
  updated: "2026-10-25",
};

const fireplaceTools: PieceListPage = {
  slug: "fireplace-tools",
  type: "bifl",
  title: "Fireplace tools and andirons that last for generations",
  metaTitle: "Fireplace tools and andirons that last (2026)",
  shortTitle: "Fireplace tools",
  kicker: "Buy it for life · The hearth",
  description:
    "Hand-forged fireplace tool sets, pokers, andirons, grates and screens from Urban Forge, Ponderosa Forge, Rumford and Pilgrim, ranked on five tests.",
  question: "What fireplace tools last a lifetime?",
  answer:
    "Solid forged iron or steel, made by a blacksmith. Urban Forge's Meadow five-piece set ranks first: forged iron that the maker guarantees forever (the broom is covered for a year), and it passes all five of our tests. For andirons, Pilgrim's blacksmith-style pair passes all five at $239, and Ponderosa Forge's hand-forged ring andirons are our pick to hand down. Avoid plated and hollow-tube sets.",
  method:
    "Small forges often don't publish a warranty, so the fifth test is still open for several pieces here. Among pieces that verify the same tests, a published guarantee ranks higher, then a confirmed place of making, and the rest is our judgement, explained in each entry.",
  sections: [
    {
      id: "tool-sets",
      heading: "Tool sets and pokers",
      picks: [
        {
          id: "H14",
          label: "The set to buy once",
          verdict:
            "Five pieces forged in iron by a US blacksmith shop that guarantees its iron forever; the broom, the one part that wears out, is covered for a year. It verifies all five tests.",
          chooseIf: "you use the fireplace all winter and want the whole set done once",
        },
        {
          id: "H2",
          label: "The poker",
          verdict:
            "One piece of hand-forged iron with a square loop handle, from the same shop and with the same forever guarantee on the iron, at $99. If the fireplace already has tools, this is the one to upgrade first.",
        },
        {
          id: "H11",
          label: "Trip-hammer forged",
          verdict:
            "A full fireplace tool set from Ponderosa Forge in Sisters, Oregon, shaped under a trip hammer, the power hammer blacksmiths have relied on for generations. We haven't verified the warranty yet.",
        },
      ],
    },
    {
      id: "andirons",
      heading: "Andirons and grates",
      picks: [
        {
          id: "H7",
          label: "Best value",
          verdict:
            "A pair of blacksmith-style iron andirons, finished in paint, with a limited lifetime guarantee: at $239, the only andirons here that verify all five tests.",
        },
        {
          id: "H20",
          label: "To hand down",
          verdict:
            "Hand-forged iron with ring tops, the top of Ponderosa Forge's range on our list, made in Sisters, Oregon. We haven't verified the warranty yet.",
          chooseIf: "the fireplace is the centre of the room",
        },
        {
          id: "H1",
          label: "The grate",
          verdict:
            "Solid 1-inch bar, forged by hand in Oregon rather than stamped: the simplest hearth piece there is, heavy iron and nothing else.",
        },
        {
          id: "H15",
          label: "Colonial pattern",
          verdict:
            "Hand-forged steel in a Colonial pattern, among the oldest hearth forms still being made. They sit below the Ponderosa pieces because where they're made is still open.",
        },
        {
          id: "H16",
          label: "Spade tops",
          verdict:
            "Hand-forged steel andirons topped with spade-shaped finials, from the same seller as the Colonial pair.",
        },
      ],
    },
    {
      id: "screens-and-racks",
      heading: "Screens, fenders and log holders",
      picks: [
        {
          id: "H13",
          label: "Made to measure",
          verdict:
            "A single-panel screen with feet, hand-forged in iron and made to the size of your opening, with Urban Forge's forever guarantee on the iron.",
        },
        {
          id: "H12",
          label: "For the woodpile",
          verdict:
            "A half-round log rack of forged bar joined with rivets, the blacksmith's traditional joint, from Ponderosa Forge in Oregon. We haven't verified the warranty yet.",
        },
        {
          id: "H3",
          label: "To carry the wood in",
          verdict:
            "Canvas and riveted leather from Duluth Pack in Minnesota. Both materials soften with use and can be mended rather than thrown away.",
        },
        {
          id: "H25",
          label: "Solid brass at the hearth",
          verdict:
            "A double-rail fender made by hand in 100% solid brass in the USA. With solid brass there's no plating to wear through as it's polished. Fireplace Treatments told us in October 2026 that this model is discontinued.",
        },
      ],
    },
  ],
  comparison: {
    kind: "table",
    id: "makers",
    heading: "The makers at a glance",
    intro: "What we've verified for each maker, from the pieces we've checked.",
    columns: ["Maker", "Made in", "How it's made", "Guarantee, as published"],
    rows: [
      ["Urban Forge", "USA", "Hand-forged and forged iron", "Iron \"Guaranteed Forever\"; broom covered for 1 year"],
      ["Ponderosa Forge", "Sisters, Oregon, USA", "Hand-forged and trip-hammer forged iron", "Not yet verified"],
      ["Pilgrim", "Not yet verified", "Painted iron; forged or cast not yet confirmed", "Limited Lifetime Guarantee"],
      ["Rumford", "Not yet verified", "Hand-forged steel", "Not yet verified"],
      ["Fireplace Treatments", "USA", "Handmade in 100% solid brass", "Not yet verified"],
      ["Duluth Pack", "Minnesota, USA", "Canvas and riveted leather", "Not yet verified"],
    ],
  },
  guide: [
    {
      id: "forged-cast-or-tube",
      heading: "Forged, cast or tube",
      blocks: [
        {
          type: "p",
          text: "Forged iron is heated and hammered into shape, by hand or under a power hammer. It's solid all the way through, tough rather than brittle, and a smith can straighten it if it's ever bent. Cast iron is poured into a mould: strong and heavy, good for andirons and grates, but it can crack if it's struck hard or doused with water while hot. Most inexpensive tool sets are neither: they're thin steel tube with a painted or plated finish, and they're the ones that bend and flake.",
        },
      ],
    },
    {
      id: "what-a-set-needs",
      heading: "What a set needs",
      blocks: [
        {
          type: "p",
          text: "A poker, a shovel, a brush and a stand at the least; tongs are worth having for moving logs. The brush is the one part that wears out, which is why Urban Forge covers its broom for a year and its iron forever. Look for a brush head that can be replaced, and handles long enough to keep your hand out of the heat.",
        },
      ],
    },
    {
      id: "measure",
      heading: "Measure first",
      blocks: [
        {
          type: "p",
          text: "Andirons, grates and screens have to suit the fireplace. Measure the width and height of the opening and the depth of the firebox before you order, and leave room around the fire for air. Made-to-measure pieces such as Urban Forge's screen are built to your opening, so they take longer to arrive.",
        },
      ],
    },
    {
      id: "keeping",
      heading: "Keeping them",
      blocks: [
        {
          type: "p",
          text: "Forged iron indoors needs very little: wipe it dry, and once or twice a year rub on a thin coat of paste wax or oil and buff it off. Surface rust comes off with steel wool. [Keeping forged iron from rust](/care/forged-iron) has the method.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Are hand-forged fireplace tools worth it?",
      answer:
        "If you use the fireplace, yes. Forged iron is solid all the way through, so it doesn't bend like hollow-tube sets or flake like plated ones, and it can be reshaped if it's ever bent. On our list, a hand-forged poker is $99 and full forged sets are $752 and $825.",
    },
    {
      question: "What should a fireplace tool set include?",
      answer:
        "A poker, a shovel, a brush and a stand at the least; tongs are useful for moving logs. The brush is the part that wears out, so choose a set whose brush head can be replaced.",
    },
    {
      question: "Forged or cast iron andirons?",
      answer:
        "Both are solid, and both last generations in normal use. Forged andirons are hammered from bar and are tough; cast andirons are poured in a mould and are heavy, but can crack if they're struck hard or doused with water while hot.",
    },
    {
      question: "How do you keep fireplace tools from rusting?",
      answer:
        "Keep them dry, and once or twice a year rub on a thin coat of paste wax or oil and buff it off. If rust appears, take it off with steel wool, then oil and wax. Indoors, that's all forged iron needs.",
    },
  ],
  care: ["forged-iron"],
  motif: "forged",
  published: "2026-10-25",
  updated: "2026-10-25",
};

export const BIFL_LISTS: PieceListPage[] = [castIronSkillets, doorHardware, woodStoves, kitchen, fireplaceTools];
