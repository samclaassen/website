import type { CareGuide } from "./types";
import { h3, list, p } from "./types";

export const wood: CareGuide = {
  slug: "wood",
  title: "Oiling and resurfacing wooden boards and spoons",
  question: "How do you care for wooden cutting boards, butcher blocks and spoons?",
  kicker: "Hardwood",
  description:
    "Washing, drying, oiling and waxing hardwood boards and spoons, how often to oil, which oils are safe and which go rancid, and how to sand a scarred board back to new.",
  answer:
    "Wash by hand right after use, stand the board on edge to dry, and never soak it or put wood in the dishwasher. Oil it when the wood looks pale and dry (weekly at first, then every month or two) with food-grade mineral oil, and seal with a beeswax board cream. When the surface is scarred or fuzzy, sand it back and oil it again. End-grain blocks are kind to knives and close up with oil.",
  families: ["hardwood"],
  motif: "hardwood",
  image: "about-wooden-spoons",
  published: "2026-10-23",
  updated: "2026-10-23",
  sections: [
    {
      id: "daily",
      heading: "Daily care",
      blocks: [
        list([
          "Scrape, then wash with hot water, a little dish soap and a brush or cloth, both sides. Rinse. Washing only the top makes the board dry unevenly and cup.",
          "Dry with a towel, then stand it on edge or on a rack so air reaches both faces. A board laid flat on a wet counter, or leaned against a damp wall, warps.",
          "Never soak it, never leave it in the sink, never the dishwasher. Wood that is soaked swells, then cracks as it dries.",
          "After raw meat or fish, wash with hot soapy water as above; to sanitize, wipe with white vinegar or a weak bleach solution (a teaspoon of bleach in a quart of water), rinse and dry. Keep one board for raw meat and one for everything else.",
          "Smells (onion, garlic, fish) lift with coarse salt and half a lemon rubbed over the surface, then a rinse.",
        ]),
      ],
    },
    {
      id: "oiling",
      heading: "Oiling: which oil, how often, how much",
      blocks: [
        h3("Which oil"),
        p(
          "Food-grade mineral oil is the standard: it never goes rancid, it has no taste, and it soaks deep into the grain. Board creams and conditioners are mineral oil thickened with beeswax (and sometimes carnauba); they sit nearer the surface and seal it. Fractionated coconut oil and pure tung oil are also safe. The makers we feature sell their own blends: John Boos, for instance, makes a mineral-oil conditioner and a beeswax cream to go over it, and that two-step order is right for any brand.",
        ),
        p(
          "Do not use olive, vegetable, canola or other cooking oils. They go rancid in the wood, and the board smells of it for good. Walnut oil cures and does not go rancid, but it is a nut product; avoid it on a board that will serve anyone with a nut allergy.",
        ),
        h3("How often"),
        p(
          "New boards and blocks: once a week for the first month, to saturate the wood. After that, whenever the surface looks pale, dry or chalky, or when water no longer beads on it. For most kitchens that is every month or two in the heating season and every few months otherwise. There is no such thing as too often.",
        ),
        h3("How much"),
        p("More than you think, and then wipe the excess off. The method below floods the board and lets it drink overnight."),
      ],
    },
    {
      id: "resurfacing",
      heading: "Resurfacing a scarred board",
      blocks: [
        p(
          "Knife scars, stains and a surface that has gone fuzzy are not damage; they are wear, and wood is the one material in the kitchen that can be made new again at home. That is why hardwood passes the second test of the [Heirloom Standard](/standard): the repair is sandpaper.",
        ),
        p(
          "Sand with the grain using 120-grit paper (a sanding block, or an orbital sander for a big block) until the scars and stains are gone, then 220-grit to smooth it. Wipe the dust off, wet the surface lightly with a cloth to raise the grain, let it dry, and sand once more with 220. Then oil as for a new board: several coats over a few days, because the fresh surface is thirsty. An end-grain block can be flattened the same way if it has gone slightly uneven; deep cupping is a job for the maker or a woodworker with a planer.",
        ),
      ],
    },
    {
      id: "spoons",
      heading: "Spoons and utensils",
      blocks: [
        p(
          "The same rules at a smaller scale. Wash, dry, do not leave them standing in the pot or the sink, and oil them when they look dry. A spoon that has gone rough or furry after many washes wants a minute with fine sandpaper (220 or finer), a wipe, and oil. Spoons are safe in hot food and against the sides of hot pans; they simply darken at the bowl with time, which is the third test of the Standard doing its work.",
        ),
      ],
    },
    {
      id: "warping",
      heading: "Warping, cracks and glue lines",
      blocks: [
        p(
          "Wood moves with moisture. A board that is wet on one side and dry on the other cups toward the wet side; the cure is to wet or oil the concave side, lay the board flat with the concave side down on a dry towel, weight it, and give it a day or two. Prevention is simpler: wash and oil both faces, dry on edge, and keep it away from the stove, the radiator and direct sun.",
        ),
        p(
          "Small end checks (fine cracks at the ends) are normal and close up with oil. A split along a glue line on a laminated board is a repair for the maker, and the good ones do it; ask before you throw anything away.",
        ),
      ],
    },
  ],
  howTo: {
    name: "Oiling a board or block",
    description: "For a new board, a board that looks dry, or one you have just sanded. Overnight, mostly unattended.",
    totalTime: "PT12H",
    supplies: [
      "Food-grade mineral oil, or a maker's board oil",
      "A beeswax board cream (optional, but worth it)",
      "Clean lint-free cloths or paper towels",
    ],
    steps: [
      {
        name: "Clean and dry",
        text: "Wash the board and let it dry completely, ideally overnight. Oil will not soak into wet wood.",
      },
      {
        name: "Flood it",
        text: "Pour oil generously onto the surface and spread it with a cloth over the top, bottom, edges and ends. The end grain drinks most, so give the ends extra. Mineral oil can be warmed slightly to soak in faster, but it is not necessary.",
      },
      {
        name: "Let it drink",
        text: "Leave it for four hours or overnight. If the surface goes dry, add more. A new or freshly sanded board may take three or four rounds over several days.",
      },
      {
        name: "Wipe off the excess",
        text: "Buff with a dry cloth until the surface is no longer wet to the touch. Oil left standing stays tacky.",
      },
      {
        name: "Cream and buff",
        text: "Rub in a thin layer of beeswax board cream, leave it a few minutes, and buff to a soft sheen. The wax seals the oil in and sheds water.",
      },
      {
        name: "Repeat when it looks dry",
        text: "Weekly for a new board's first month, then whenever water stops beading on the surface.",
      },
    ],
  },
  mistakes: [
    "The dishwasher, even once.",
    "Soaking, or leaving the board in the sink.",
    "Olive or vegetable oil, which go rancid in the wood.",
    "Oiling or washing only the top face.",
    "Drying flat on the counter, or leaning against a wet wall.",
    "Storing it next to the stove or a radiator.",
  ],
  faqs: [
    {
      question: "How often should I oil a cutting board?",
      answer:
        "Weekly for the first month of a new board, then whenever it looks pale or dry, or when water no longer beads on the surface. Every month or two in a dry, heated house; every few months otherwise. More is never harmful.",
    },
    {
      question: "Is mineral oil safe?",
      answer:
        "Food-grade mineral oil is the standard board finish: tasteless, odorless, never rancid, and sold by pharmacies and every board maker. Use food-grade, not an industrial grade.",
    },
    {
      question: "Can I fix a warped board?",
      answer:
        "Often. Wet or oil the concave side, lay it concave-side down on a towel, weight it, and leave it for a day or two. Then keep both sides oiled and dry it on edge so it does not happen again. Severe cupping on a thick block may need planing.",
    },
    {
      question: "Is wood hygienic for raw meat?",
      answer:
        "Washed in hot soapy water and dried, yes. Keep one board for raw meat and fish and another for bread and vegetables, and sanitize the meat board with vinegar or a weak bleach solution if you want extra assurance.",
    },
    {
      question: "What about knife marks?",
      answer:
        "They are wear, not damage, and an end-grain block closes most of them up on its own as it is oiled. When they bother you, sand the board back and oil it.",
    },
    {
      question: "Can I put a hot pan on a board or block?",
      answer:
        "No. Heat scorches the wood and drives the moisture out of one spot, which cracks it. Use a trivet.",
    },
  ],
  sources: [
    {
      name: "John Boos: Care and maintenance for blocks and boards",
      url: "https://www.johnboos.com/care-and-maintenance/blocks",
    },
    {
      name: "John Boos: The complete guide to caring for your wood cutting board",
      url: "https://www.johnboos.com/blog/complete-guide-to-caring-for-your-wood-cutting-board",
    },
  ],
};
