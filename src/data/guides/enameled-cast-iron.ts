import type { CareGuide } from "./types";
import { h3, list, p } from "./types";

export const enameledCastIron: CareGuide = {
  slug: "enameled-cast-iron",
  title: "Caring for enameled cast iron",
  question: "How do you care for enameled cast iron so the enamel lasts?",
  kicker: "Enameled cast iron",
  description:
    "How to heat, clean and store enameled cast-iron Dutch ovens and casseroles so the enamel stays whole, with a method for lifting stains and what to do about chips.",
  answer:
    "Heat it gently and never empty on high; use wooden or silicone tools; let it cool before washing it by hand in warm soapy water; and lift stains with a baking-soda simmer rather than a scourer. Enamel is glass fused to iron. It needs no seasoning, but it chips when it is knocked and crazes when it is shocked by sudden heat or cold.",
  families: ["enameled-cast-iron"],
  excludeKinds: ["stove"],
  motif: "enameled-cast-iron",
  published: "2026-10-23",
  updated: "2026-10-23",
  sections: [
    {
      id: "what-enamel-is",
      heading: "What enamel is, and what it isn't",
      blocks: [
        p(
          "Enamel is powdered glass fused onto the casting at high temperature. It gives cast iron a surface that does not rust, does not react with acid and does not need seasoning, which is why tomato sauces, braises with wine and long-simmered stocks belong in an enameled pot rather than a [bare one](/care/cast-iron).",
        ),
        p(
          "It is also glass. It will not wear out from cooking, but it chips if the pot is dropped or struck on the rim, and it can craze (a web of hairline cracks) if the pot is heated or cooled too fast. Both are avoidable, and a pot that avoids them outlives its owner. That is why enameled iron passes the first and third tests of the [Heirloom Standard](/standard) and carries a caveat on the second: a chip is not a home repair.",
        ),
        p(
          "A pale interior darkens over years of use. That is a patina of cooking fats and is normal; it is not damage and not dirt. Black matte interiors are slightly rough by design and benefit from a wipe of oil now and then; they too darken and improve.",
        ),
      ],
    },
    {
      id: "heat",
      heading: "Heat",
      blocks: [
        list([
          "Low to medium is nearly always enough. Cast iron holds heat; the enamel passes it on evenly. High heat is for boiling water and little else.",
          "Never heat it empty on high. Preheat with the fat or liquid already in the pot. An empty enameled pot on a hot burner can discolor, craze or crack the enamel.",
          "No sudden changes. Do not put a hot pot into cold water, pour cold liquid into a very hot empty pot, or set a cold pot on a glowing burner.",
          "Oven-safe, with one check: most lids have a phenolic (plastic) knob rated somewhere between 375°F and 500°F depending on the maker, while a stainless knob can go higher. Check the maker's rating before a long, hot roast.",
          "Fine on induction, gas, electric and ceramic. Lift rather than slide it on glass cooktops, to protect both surfaces.",
        ]),
      ],
    },
    {
      id: "cleaning",
      heading: "Cleaning",
      blocks: [
        p(
          "Let the pot cool before it goes near water. Then warm water, a little dish soap and a soft sponge or nylon brush. Stuck-on food comes off after ten or fifteen minutes in warm water; never scrape it with metal.",
        ),
        p(
          "Many makers rate their enameled iron as dishwasher-safe, and it will survive. But detergent dulls the gloss on the outside and the bare iron rim will rust, so for a pot you intend to keep for fifty years, wash by hand. It takes two minutes.",
        ),
        p(
          "The rim of the pot and the underside of the lid rim are usually bare cast iron, because enamel cannot be fired where the pot rests in the kiln. Dry them, and wipe them with a drop of cooking oil occasionally so they do not rust.",
        ),
      ],
    },
    {
      id: "chips",
      heading: "Chips, stains and what to do about them",
      blocks: [
        h3("Chips on the outside or the rim"),
        p("Cosmetic. Keep the exposed iron dry and oiled as you would the rim, and carry on."),
        h3("Chips on the cooking surface"),
        p(
          "The pot still cooks, but exposed iron inside will rust and acidic food will react with it. Makers generally advise against continued use with a chipped interior, and a chip that appears without an impact may be a manufacturing fault covered by the warranty, so contact the maker before you decide anything.",
        ),
        h3("Dark stains and a dull interior"),
        p(
          "Stains are cooking residue bonded to the glass, not damage. The baking-soda method below lifts most of them. Some makers approve a dilute bleach soak for stubborn marks; follow the maker's own instructions for that rather than a general recipe.",
        ),
        h3("Metal marks"),
        p(
          "Grey streaks from metal utensils sit on top of the glaze. A paste of baking soda, or a mild non-abrasive cleanser, takes them off.",
        ),
      ],
    },
    {
      id: "storage",
      heading: "Storing it",
      blocks: [
        p(
          "Store the pot dry, with the lid slightly ajar or a cloth between pot and lid, so air circulates and the rims do not grind. Do not stack other pans inside it without a cloth; that is how most interior chips happen.",
        ),
      ],
    },
  ],
  howTo: {
    name: "Lifting stains from the interior",
    description: "For a pot whose inside has gone brown or spotted. Ten minutes of simmering and no scrubbing.",
    totalTime: "PT30M",
    supplies: ["Baking soda", "Dish soap", "A soft sponge"],
    steps: [
      {
        name: "Fill and simmer",
        text: "Fill the pot with water to cover the stains, add two tablespoons of baking soda, and bring it to a gentle simmer for ten to fifteen minutes.",
      },
      {
        name: "Cool",
        text: "Turn off the heat and let the water cool in the pot. Do not pour it into a cold sink while the pot is hot.",
      },
      {
        name: "Wash",
        text: "Pour out the water and wash with warm soapy water and a soft sponge. Most of the residue wipes away.",
      },
      {
        name: "Paste for the stubborn spots",
        text: "Make a thick paste of baking soda and a little water, rub it over any marks that remain with the sponge, and rinse.",
      },
      {
        name: "Dry and oil the rim",
        text: "Dry the pot and lid completely, then wipe a drop of cooking oil along the bare iron rims.",
      },
    ],
  },
  mistakes: [
    "Heating it empty on a high burner.",
    "Running cold water into a hot pot.",
    "Metal utensils, steel wool and abrasive powders.",
    "Stacking pans inside it without a cloth.",
    "Daily dishwasher cycles.",
    "Leaving the bare rim wet.",
  ],
  faqs: [
    {
      question: "Does enameled cast iron need seasoning?",
      answer:
        "No. The enamel is the cooking surface and needs nothing. The exceptions are a black matte interior, which is slightly textured and benefits from an occasional wipe of oil, and the bare iron rims, which should be dried and oiled so they do not rust.",
    },
    {
      question: "Why has the inside turned brown?",
      answer:
        "That is a patina of cooking fats bonded to the glass. It is harmless. The baking-soda simmer above lifts it if you prefer a pale interior.",
    },
    {
      question: "Can I use metal utensils?",
      answer:
        "Best not. They leave grey marks and, with enough force, chip the glaze. Wood or silicone costs nothing and keeps the surface whole.",
    },
    {
      question: "Is a chipped pot safe to use?",
      answer:
        "A chip on the outside or the rim, yes. A chip on the cooking surface exposes iron that will rust and react with acid; most makers advise against continued use, and it may be covered by the warranty. Ask the maker.",
    },
    {
      question: "Is it dishwasher-safe?",
      answer:
        "Many makers say so, and the pot will survive. But detergent dulls the exterior and the bare rims rust, so for a pot you plan to keep for decades, wash it by hand.",
    },
    {
      question: "Can I put it in the oven with the lid on?",
      answer:
        "Yes, within the knob's rating. Phenolic knobs are typically rated between 375°F and 500°F depending on the maker; stainless knobs go higher. Check the maker's figure before a long, hot roast.",
    },
  ],
  sources: [
    { name: "Le Creuset: Care and use", url: "https://www.lecreuset.com/care-and-use" },
    {
      name: "Le Creuset: Enameled cast iron product care",
      url: "https://www.lecreuset.com/en_US/product-care/enameled-cast-iron.html",
    },
  ],
};
