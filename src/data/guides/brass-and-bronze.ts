import type { CareGuide } from "./types";
import { h3, list, p } from "./types";

export const brassAndBronze: CareGuide = {
  slug: "brass-and-bronze",
  title: "Cleaning and patina for solid brass and bronze",
  question: "How do you clean solid brass and bronze hardware, and should you let it patina?",
  kicker: "Solid brass & bronze",
  description:
    "How unlacquered brass, lacquered brass and living-finish bronze age, how to clean each without harm, how to brighten brass if you want to, and how wax protects the finish you choose.",
  answer:
    "Unlacquered brass and bronze darken on their own; a wipe with a dry or barely damp cloth is usually all they need. To brighten brass, use a mild brass polish or a paste of lemon and salt, rinse, and dry. Never polish lacquered brass (the lacquer must come off first) or living-finish bronze, which is meant to darken. A thin coat of paste wax protects whichever look you choose.",
  families: ["brass", "bronze"],
  motif: "brass",
  image: "detail-brass-knob-sunlight",
  published: "2026-10-23",
  updated: "2026-10-23",
  sections: [
    {
      id: "finishes",
      heading: "Three finishes, three regimes",
      blocks: [
        h3("Unlacquered brass (also sold as “living finish” or “natural”)"),
        p(
          "Bare metal. It arrives bright and begins to darken from the first touch: fingers, air and moisture turn it from gold to a soft brown over months, with bright spots where hands fall. This is the finish old houses have, and it is the one that asks the least of you. Wipe it, and either enjoy the patina or polish it back whenever you like; the metal is solid all the way through, so nothing you do is irreversible.",
        ),
        h3("Lacquered brass"),
        p(
          "Solid brass with a clear coat baked on to keep it bright. Clean it with a damp cloth and nothing more: polish does nothing through lacquer, and abrasives scratch it. Lacquer lasts years indoors but eventually yellows, flakes or wears at the edges, and the brass beneath starts to tarnish unevenly. At that point the choice is to strip the lacquer (acetone or a lacquer remover, then polish) and either re-lacquer or live unlacquered. Most people, having stripped it once, live unlacquered.",
        ),
        h3("Bronze"),
        p(
          "Cast bronze from foundries such as Sun Valley Bronze and Rocky Mountain Hardware is sold with a living finish: the surface is darkened at the foundry and goes on changing with handling, lightening at the high points and deepening in the recesses. Makers of these pieces generally ask for one thing only: no polish, no abrasives, just a soft cloth and an occasional coat of wax. Polishing bronze removes the patina the foundry gave it, and it cannot be put back at home.",
        ),
        p(
          "A note on names: “oil-rubbed bronze” and “antique brass” are the names of finishes, not metals, and they are applied to zinc and steel as often as to brass. If the piece is not solid brass or solid bronze, this guide does not apply and nor does the [Heirloom Standard](/standard). Our guide to [telling solid brass from plated](/care/solid-brass-or-plated) covers how to check.",
        ),
      ],
    },
    {
      id: "routine",
      heading: "The routine",
      blocks: [
        list([
          "Dust and fingerprints: a dry microfiber cloth, or one barely dampened with water. Dry afterwards.",
          "Grease and grime on kitchen pulls and door handles: warm water with a drop of mild dish soap on a soft cloth, then a dry cloth. Never spray cleaner directly onto hardware; it runs into the mechanism and onto the door.",
          "Wax, twice a year indoors and more often outside: a thin coat of clear paste wax (microcrystalline or carnauba), left a few minutes and buffed off. Wax slows tarnish on bare brass, protects lacquer, and is the only thing a living-finish bronze wants.",
          "Nothing else. No ammonia-based glass cleaner, no bleach, no scouring powder, no steel wool.",
        ]),
      ],
    },
    {
      id: "patina",
      heading: "Patina: keep it, speed it or remove it",
      blocks: [
        p(
          "On brass, the patina is a thin layer of copper and zinc oxides; on bronze, mostly copper compounds. It is not corrosion in any damaging sense and it is not dirt. Under it the metal is unchanged, which is the point of solid metal and the third test of the Standard: it ages rather than fails.",
        ),
        p(
          "To keep the patina where it is, wax it. To let it develop faster on new brass, simply handle the piece and leave it unwaxed; if you want to hurry it, a wipe of white vinegar or a brass-ageing solution darkens it in hours, but test on the back first, because the result is uneven and permanent until polished. To remove it, polish as below.",
        ),
        p(
          "Green deposits (verdigris) are different: they form where moisture or salt has sat on the metal, typically on exterior hardware near the coast. Clean them off with polish or lemon and salt, rinse, dry, and wax; then wax more often.",
        ),
      ],
    },
    {
      id: "where",
      heading: "Inside and outside",
      blocks: [
        p(
          "Indoors, brass and bronze need almost nothing. Bathrooms and kitchens are damper and tarnish faster: wax those pieces more often. Outdoors, salt air and rain work fast; exterior door furniture should be waxed every few months, and a coastal house should expect to wax monthly or accept a deep patina. Either is fine. The metal itself is not at risk.",
        ),
      ],
    },
  ],
  howTo: {
    name: "Brightening unlacquered brass",
    description: "For bare brass you want bright again, from a cabinet pull to a door set. Half an hour including drying.",
    totalTime: "PT30M",
    supplies: ["A mild brass polish, or lemon juice and table salt", "Soft cloths", "Clear paste wax (optional)"],
    tools: ["A screwdriver, if the piece comes off easily", "Painter's tape to mask the door if it does not"],
    steps: [
      {
        name: "Take it off, or mask around it",
        text: "Polish runs into wood grain and paint and is hard to get out. If the piece is held by a couple of screws, remove it; if not, tape around it.",
      },
      {
        name: "Confirm it is unlacquered",
        text: "Rub a small hidden spot with polish. If nothing changes, the piece is lacquered: stop, and either leave it or strip the lacquer first with acetone or a lacquer remover.",
      },
      { name: "Wash and dry", text: "Warm water, a drop of dish soap, a soft cloth. Dry completely." },
      {
        name: "Polish",
        text: "Work a little polish, or a paste of lemon juice and salt, over the surface with a soft cloth in small circles. Tarnish lifts onto the cloth. Use a soft toothbrush in engraving or knurling; never a brush with metal bristles.",
      },
      {
        name: "Rinse thoroughly and dry",
        text: "Any acid or polish left on the metal will mark it within days. Rinse under warm water, dry with a cloth, then let it stand in a warm place for the recesses to dry.",
      },
      {
        name: "Wax and refit",
        text: "A thin coat of clear paste wax, left for a few minutes and buffed, keeps it bright for months. Screw the piece back on.",
      },
    ],
  },
  mistakes: [
    "Polishing a living-finish bronze.",
    "Polishing lacquered brass, or scrubbing at the lacquer when it starts to fail.",
    "Steel wool, scouring pads or abrasive powders on any of it.",
    "Spraying cleaners onto the hardware instead of onto the cloth.",
    "Leaving lemon, vinegar or polish on the metal without rinsing.",
    "Ammonia-based cleaners, which attack brass over time.",
  ],
  faqs: [
    {
      question: "How can I tell if my brass is lacquered?",
      answer:
        "Rub a hidden spot with brass polish. If nothing changes, there is lacquer in the way. Lacquered brass also tends to tarnish in patches at the edges where the coating has worn, rather than evenly all over.",
    },
    {
      question: "Will patina damage the metal?",
      answer:
        "No. The oxide layer on brass and bronze is thin, stable and protective. The metal beneath it is unchanged, which is why a piece can be polished back after a century.",
    },
    {
      question: "How often should I wax?",
      answer:
        "Twice a year indoors; every few months outdoors; monthly on exposed coastal hardware if you want it to stay bright. Waxing is never harmful, so err on the side of more.",
    },
    {
      question: "Can I make new brass look old?",
      answer:
        "Yes. Leave it unlacquered and unwaxed and handle it; it darkens over months. A wipe of vinegar or an ageing solution hurries it along, with less even results. Many makers also offer an aged or antiqued finish from new.",
    },
    {
      question: "What are the green spots?",
      answer:
        "Verdigris, where moisture or salt sat on the metal. Clean it off with polish or lemon and salt, rinse, dry and wax. On the coast, wax more often.",
    },
    {
      question: "Is bronze harder to look after than brass?",
      answer:
        "Easier. A living-finish bronze wants a soft cloth and an occasional coat of wax and nothing more. The only mistake is polishing it.",
    },
  ],
  sources: [
    {
      name: "Armac Martin: Care guide",
      url: "https://www.armacmartin.co.uk/pages/care-guide",
      note: "a solid-brass hardware maker's own instructions for unlacquered, lacquered and plated finishes",
    },
  ],
};
