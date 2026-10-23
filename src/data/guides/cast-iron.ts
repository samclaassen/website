import type { CareGuide } from "./types";
import { h3, list, p } from "./types";

export const castIron: CareGuide = {
  slug: "cast-iron",
  title: "How to care for cast iron so it lasts generations",
  question: "How do you care for cast iron and carbon steel cookware?",
  kicker: "Cast iron & carbon steel",
  description:
    "Washing, drying, oiling and re-seasoning bare cast iron and carbon steel pans, with a step-by-step method for seasoning from bare metal and fixing rust.",
  answer:
    "Cook in it often, wash it with hot water (a little soap is fine), dry it on the stove, and wipe on a very thin film of oil while it is still warm. Seasoning is just oil baked onto the iron, so the more you cook, the better it gets. If it rusts, scrub the rust off and re-season. Nothing about bare iron is permanent, which is exactly why it lasts.",
  families: ["cast-iron", "carbon-steel"],
  excludeKinds: ["stove", "blade"],
  motif: "cast-iron",
  image: "hero-cast-iron-skillet",
  published: "2026-10-23",
  updated: "2026-10-23",
  sections: [
    {
      id: "seasoning",
      heading: "What seasoning actually is",
      blocks: [
        p(
          "Seasoning is a thin layer of oil that has been heated past its smoke point until it polymerizes: it stops being a liquid and becomes a hard, dry, dark film bonded to the iron. Every time you cook with fat, a little more is added. That is why an old skillet is black and slick and a new one is grey or brown and a little sticky.",
        ),
        p(
          "It is not a coating in the way a nonstick pan has a coating. It can be scratched, burned off or scrubbed off, and it can always be put back. A pan that has rusted in a shed for forty years can be stripped to bare metal and seasoned again in an afternoon. This is the whole reason bare iron passes the second test of the [Heirloom Standard](/standard): there is nothing in it that wears out for good.",
        ),
        p(
          "Carbon steel pans, and the spun-iron pans made by Netherton Foundry and Solidteknics, are the same metal in a thinner sheet. They heat faster, weigh less and season the same way. Everything below applies to them too.",
        ),
      ],
    },
    {
      id: "daily",
      heading: "Daily care",
      blocks: [
        list([
          "Wash it while it is still warm. Hot water, a brush or a chainmail scrubber, and a drop of dish soap if you like. Modern dish soap does not contain lye and will not strip seasoning; that warning dates from when it did.",
          "Dry it completely. Towel it, then set it on a burner for a minute until the last of the moisture has gone. Air-drying is how rust starts.",
          "Oil it lightly. While the pan is warm, rub in a few drops of a neutral cooking oil with a paper towel, then wipe it as if you were trying to take it all off again. It should look dry, not shiny. Too much oil goes sticky.",
          "Store it dry, with the lid off. If you stack pans, put a paper towel between them.",
        ]),
        p(
          "That is all. A pan that is used a few times a week and treated this way builds a seasoning that no oven method can match.",
        ),
      ],
    },
    {
      id: "heat",
      heading: "Heat, acid and the dishwasher",
      blocks: [
        p(
          "Preheat slowly on a medium flame rather than blasting it: cast iron heats unevenly, and a cold pan dropped onto a high burner can warp a thin one. Never put a hot pan into cold water; the thermal shock can crack a casting.",
        ),
        p(
          "Acidic food (tomato sauce, wine, citrus, vinegar) dissolves seasoning. A quick deglaze in a well-seasoned pan is fine; an hour of simmering tomatoes in a new one is not. Keep long, acidic cooking for [enameled iron](/care/enameled-cast-iron) or stainless steel until the pan is black and slick.",
        ),
        p(
          "No dishwasher, ever, and no soaking in the sink. Both strip the seasoning and start rust in the time it takes to finish dinner.",
        ),
      ],
    },
    {
      id: "problems",
      heading: "Rust, flakes and sticky patches",
      blocks: [
        h3("Rust"),
        p(
          "Orange rust on the surface is cosmetic. Scrub it off with steel wool or a stiff brush; a half-and-half soak of white vinegar and water for up to an hour loosens heavy rust, but no longer than that, because vinegar eats iron. Rinse, dry on the burner at once, and re-season using the method below. Only deep pitting that has eaten into the metal is permanent, and even that pan will still cook.",
        ),
        h3("Black flakes"),
        p(
          "Flakes in your food are carbonized food or seasoning that was laid on too thick. Scrub the loose material off, wash, dry and re-season. They are not harmful.",
        ),
        h3("Sticky or gummy surface"),
        p(
          "Too much oil at once, or oil that was not heated enough to polymerize. Put the pan back in a hot oven for an hour, upside down, and it will harden off. Next time, wipe the oil off more thoroughly before heating.",
        ),
        h3("Food sticks"),
        p(
          "Usually the pan was not hot enough before the food went in, there was too little fat, or the food was moved before it had formed a crust and released on its own. Thin seasoning makes all three worse; it improves with every meal.",
        ),
      ],
    },
  ],
  howTo: {
    name: "Seasoning from bare metal (or re-seasoning after rust)",
    description:
      "Use this when a pan is new and unseasoned, has rusted, or has been stripped. It takes an afternoon, most of it waiting.",
    totalTime: "PT3H",
    supplies: [
      "A high-smoke-point oil: grapeseed, canola, sunflower or vegetable shortening",
      "Paper towels",
      "Dish soap",
      "Aluminum foil",
    ],
    tools: ["Steel wool or a stiff brush, for rust", "An oven that reaches 450–500°F (230–260°C)"],
    steps: [
      {
        name: "Strip any rust",
        text: "Scrub rust off with steel wool. For heavy rust, soak the pan in equal parts white vinegar and water for up to an hour, then scrub. Rinse well.",
      },
      {
        name: "Wash and dry hard",
        text: "Wash with hot water and soap, towel dry, then heat the pan on a burner or in the oven for a few minutes to drive out every trace of moisture. Bare iron starts to rust within minutes of being wet.",
      },
      {
        name: "Oil every surface",
        text: "While the pan is warm, rub a thin coat of oil over the whole thing: cooking surface, outside, handle and underside.",
      },
      {
        name: "Wipe it off again",
        text: "Now wipe with a clean paper towel until the pan looks dry. The layer that remains is enough. This is the step most people skip, and it is why their seasoning turns sticky.",
      },
      {
        name: "Bake upside down",
        text: "Put the pan upside down on the middle rack of an oven at 450–500°F (230–260°C), with foil on the rack below to catch drips. Bake for an hour, then turn the oven off and let the pan cool inside.",
      },
      {
        name: "Repeat, then cook",
        text: "Two or three rounds give a sound base. After that, cook. Bacon, fried potatoes, cornbread and anything with fat build seasoning fastest. Hold off on tomatoes and long simmers for the first few weeks.",
      },
    ],
  },
  mistakes: [
    "Leaving it to air-dry, or soaking it in the sink.",
    "Putting it in the dishwasher.",
    "Applying oil thickly. One coat you can barely see beats three you can.",
    "Simmering acidic sauces in a pan that is still grey.",
    "Dropping a hot pan into cold water.",
    "Storing it with the lid on, which traps moisture.",
  ],
  faqs: [
    {
      question: "Can I use soap on cast iron?",
      answer:
        "Yes. A little ordinary dish soap will not harm seasoning. The old warning dates from soaps that contained lye, which modern dish soaps do not. What harms seasoning is soaking, the dishwasher and air-drying.",
    },
    {
      question: "Is a rusty pan ruined?",
      answer:
        "Almost never. Scrub the rust off, dry it hard and re-season. Deep pitting is permanent but cosmetic; the pan will still cook for the rest of your life.",
    },
    {
      question: "Which oil is best for seasoning?",
      answer:
        "Any neutral oil with a high smoke point works: grapeseed, canola, sunflower or vegetable shortening. Flaxseed oil builds a hard layer quickly but is prone to flaking later, so we would not start with it. The thinness of the coat matters far more than the oil.",
    },
    {
      question: "Why is my new pan grey or bronze instead of black?",
      answer:
        "That is what young seasoning looks like, especially on polished or carbon-steel pans. It goes blotchy, then brown, then black over weeks of cooking. Keep using it.",
    },
    {
      question: "Do carbon steel and cast iron need different care?",
      answer:
        "No. Carbon steel is thinner, heats faster and reacts a little more to acid, but it is washed, dried, oiled and seasoned in exactly the same way.",
    },
    {
      question: "Can it go in the oven, on the grill or over a fire?",
      answer:
        "Bare iron can go anywhere there is heat, which is one of the reasons it lasts. The only caveat is a wooden or plastic handle, which should stay out of the oven.",
    },
  ],
  sources: [
    {
      name: "Smithey Ironware: Care",
      url: "https://smithey.com/pages/care",
      note: "a maker's own care instructions for polished cast iron and carbon steel",
    },
  ],
};
