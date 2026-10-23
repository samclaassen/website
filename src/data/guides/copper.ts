import type { CareGuide } from "./types";
import { h3, p } from "./types";

export const copper: CareGuide = {
  slug: "copper",
  title: "When and how to re-tin copper",
  question: "How do you care for tin-lined copper pans, and when should they be re-tinned?",
  kicker: "Tin-lined copper",
  description:
    "Heat limits, cleaning and polishing for tin-lined copper cookware, how to judge when the tin has worn through, and how professional re-tinning works.",
  answer:
    "Treat the tin as the working surface: keep the heat moderate (tin melts at about 450°F / 232°C, so never heat a pan empty), use wooden or silicone tools, hand-wash and dry at once. Leave the copper outside to mellow or polish it, as you prefer. Re-tin when bare copper shows through the lining across a patch the size of a coin or larger, which for most home cooks means once every ten or twenty years.",
  families: ["copper"],
  motif: "copper",
  image: "hero-copper-pans",
  published: "2026-10-23",
  updated: "2026-10-23",
  sections: [
    {
      id: "why-tin",
      heading: "Why copper is lined, and why with tin",
      blocks: [
        p(
          "Copper conducts heat better than any other cookware metal, which is why it responds the instant you turn the flame up or down. But copper reacts with acidic food and would leach into it, so the inside is lined. Traditional pans are lined with tin: non-reactive, naturally a little slick, and applied as a thin wipe of molten metal that can be renewed. Modern pans are often lined with stainless steel instead, which never needs re-tinning and tolerates far higher heat, but has none of tin's gentle release.",
        ),
        p(
          "A tin lining is the reason tinned copper passes the second test of the [Heirloom Standard](/standard). The copper body lasts for centuries; the lining is a wearing part that a tinsmith replaces. Pans in professional kitchens are re-tinned every few years; a pan used a few times a week at home may go decades.",
        ),
      ],
    },
    {
      id: "heat",
      heading: "Heat: the one rule that matters",
      blocks: [
        p(
          "Tin melts at about 450°F (232°C) and softens well before that. A tinned pan must never be preheated empty, left on a burner after the liquid has gone, or used for searing on a roaring flame. Put the butter or oil in first and heat them together, on medium at most. The pan responds so quickly that you will rarely want more.",
        ),
        p(
          "Dark grey, mottled or streaky tin is normal. Fresh tin is bright silver; within weeks of use it dulls to pewter grey, and that is how it stays. Only pink or orange patches mean something: that is copper showing through.",
        ),
      ],
    },
    {
      id: "cleaning",
      heading: "Cleaning and polishing",
      blocks: [
        h3("The inside"),
        p(
          "Warm water, mild soap and a soft sponge. Nothing abrasive on tin, ever: scouring pads and powders wear the lining through faster than years of cooking. Stuck food lifts after a short soak in warm water. Dry at once.",
        ),
        h3("The outside"),
        p(
          "Copper left alone darkens to a soft brown, and many cooks prefer it that way. To bring it back to bright, use a commercial copper polish, or a paste of lemon juice (or vinegar) and salt rubbed on with a soft cloth, then rinse thoroughly and dry. The rinse matters: acid left on copper turns it green.",
        ),
        p(
          "Decorative copper sold with a lacquer coating is a different thing. Polishing does nothing through lacquer, and the coating must be removed before the metal can be cleaned. Cookware is never lacquered.",
        ),
        h3("Handles"),
        p(
          "Cast-iron handles, the traditional kind, rust if left wet; dry them and wipe on a drop of oil now and then. Brass and bronze handles can be polished with the body or left to darken.",
        ),
      ],
    },
    {
      id: "retinning",
      heading: "How re-tinning works",
      blocks: [
        p(
          "A tinner strips the old lining, cleans the copper to bare metal, fluxes it, heats the pan, wipes molten pure tin across the inside and lets it set. The outside is usually polished at the same time. Turnaround is typically a few weeks, and the cost depends on the size of the pan, so ask for a quote. In the United States, two long-established services are [East Coast Tinning](https://www.eastcoasttinning.com/) in Rhode Island and [Rocky Mountain Retinning](https://www.rockymountainretinning.com/) in Colorado; in Europe, the maker can usually recommend one.",
        ),
        p(
          "Do not attempt it at home. It involves molten metal, and the result has to be pure tin wiped thin and even; a lumpy or impure lining is worse than a worn one.",
        ),
      ],
    },
  ],
  howTo: {
    name: "Judging whether a pan needs re-tinning",
    description: "Five minutes with the pan clean, dry and in daylight.",
    totalTime: "PT5M",
    steps: [
      {
        name: "Clean and dry it",
        text: "Wash the pan, dry it and take it to a window. Artificial light hides the color difference you are looking for.",
      },
      {
        name: "Read the grey",
        text: "Dull grey, dark grey, streaks and mottling are all normal tin. Ignore them.",
      },
      {
        name: "Look for pink",
        text: "Pink or orange patches, usually in the center of the base where the heat is, are bare copper. Note how large they are.",
      },
      {
        name: "Smaller than a coin",
        text: "Keep cooking, but avoid acidic food (tomatoes, wine, citrus) in that pan, which would pick up copper from the bare patch. Plan to send it for tinning within the year.",
      },
      {
        name: "Larger than a coin, or spreading",
        text: "Send it for re-tinning now. Pack it with the handle padded, and expect a few weeks' turnaround.",
      },
      {
        name: "When it comes back",
        text: "The lining will be bright silver. Cook with fat on medium heat for the first few uses; it dulls to pewter grey, which is how it should look.",
      },
    ],
  },
  mistakes: [
    "Preheating an empty pan, or searing on high heat.",
    "Scouring the tin.",
    "Stacking pans without a cloth between them, which scratches the lining.",
    "Leaving lemon or vinegar on the copper without rinsing.",
    "The dishwasher.",
    "Re-tinning at home.",
  ],
  faqs: [
    {
      question: "Is dark or spotted tin unsafe?",
      answer:
        "No. Tin dulls to grey within weeks and stays that way for years. Only exposed copper, which shows pink or orange, is a reason to act.",
    },
    {
      question: "Is a little exposed copper dangerous?",
      answer:
        "Copper leaches into acidic food, and in quantity it is harmful, but a small patch and ordinary cooking is not a crisis. Avoid acidic dishes in that pan and have it re-tinned before the patch grows.",
    },
    {
      question: "How much does re-tinning cost?",
      answer:
        "It depends on the diameter and depth of the pan and on the service; most tinners quote by size. Ask for a quote, and ask whether the outside is polished as part of the job.",
    },
    {
      question: "What about stainless-lined copper?",
      answer:
        "It never needs re-tinning, tolerates high heat and can be scrubbed. The trade is a less forgiving cooking surface and slightly slower response. Care for the copper outside exactly as above.",
    },
    {
      question: "Why has my copper turned green?",
      answer:
        "Verdigris forms where moisture or acid sat on the metal. Clean it off with polish or lemon and salt, rinse well, and dry. It is only a concern on a cooking surface, and it does not form on intact tin.",
    },
    {
      question: "Can I use a tinned pan on induction?",
      answer:
        "Only if it has a magnetic base plate, which traditional copper does not. Check the maker's description; gas and electric are the natural homes for copper.",
    },
  ],
  sources: [
    { name: "East Coast Tinning", url: "https://www.eastcoasttinning.com/", note: "re-tinning service, Rhode Island" },
    {
      name: "Rocky Mountain Retinning",
      url: "https://www.rockymountainretinning.com/",
      note: "re-tinning service, Colorado",
    },
  ],
};
