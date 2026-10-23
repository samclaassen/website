import type { CareGuide } from "./types";
import { list, p } from "./types";

export const forgedIron: CareGuide = {
  slug: "forged-iron",
  title: "Keeping forged iron latches, hinges and fire tools from rust",
  question: "How do you keep forged iron hardware and fire tools from rusting?",
  kicker: "Forged iron & steel",
  description:
    "How forged iron is finished, the once-a-year wax or oil routine that keeps it black indoors and out, how to remove surface rust, and what fire tools need after a winter of use.",
  answer:
    "Keep moisture off and keep a film on. Wipe hardware dry, and once or twice a year rub on a thin coat of paste wax or oil and buff it off; indoors, that is all forged iron needs. Outdoors, choose a painted or powder-coated finish, touch up chips with rust-inhibiting primer and matching paint, and wax over the top. Surface rust is not a failure: steel wool, oil and wax bring it back.",
  families: ["forged"],
  excludeKinds: ["blade", "stove"],
  motif: "forged",
  published: "2026-10-23",
  updated: "2026-10-23",
  sections: [
    {
      id: "finish",
      heading: "How forged iron is finished",
      blocks: [
        p(
          "A blacksmith's piece comes off the anvil covered in fire scale, the dark oxide that forms on hot iron. Most interior hardware and fire tools keep that scale and are sealed with a coat of wax or oil, sometimes baked on. The black you see is the iron itself, not paint. Other pieces are painted, powder-coated or blackened chemically, and exterior pieces are often zinc-primed or galvanized under the paint. The maker's product page usually says which; if it does not, ask, because it decides how you look after it.",
        ),
        p(
          "Whatever the finish, the metal beneath is solid forged iron or steel. Rust on it is a surface event. That is the reason forged iron passes the second and third tests of the [Heirloom Standard](/standard): it can be cleaned back and refinished by anyone, indefinitely, and it darkens and softens with handling rather than wearing out.",
        ),
      ],
    },
    {
      id: "indoors",
      heading: "Indoors",
      blocks: [
        list([
          "Dust with a dry cloth. Grease and fingerprints come off with a cloth barely dampened with warm water and a drop of dish soap; dry at once.",
          "Once or twice a year, rub on a thin coat of clear paste wax (microcrystalline, carnauba or a furniture wax), let it haze, and buff. On fire tools and anything handled a lot, a wipe of light machine oil or boiled linseed oil does the same job.",
          "Bathrooms and kitchens are damp. Wax those pieces three or four times a year, and dry any hardware that gets splashed.",
          "Never the dishwasher, never a soak, and no vinegar or acid cleaners on a waxed or oiled piece; they strip the finish and start rust.",
        ]),
      ],
    },
    {
      id: "outdoors",
      heading: "Outdoors",
      blocks: [
        p(
          "Bare waxed iron will rust outside, slowly inland and quickly near the sea. Exterior pieces should be bought with an exterior finish: powder coat, paint over zinc primer, or hot-dip galvanizing under paint. Then the routine is a wash, a check for chips twice a year, and wax over the paint to shed water.",
        ),
        p(
          "When a chip appears, deal with it the same season: sand the spot to clean metal, wipe it, brush on a rust-inhibiting metal primer, and touch up with matching exterior metal paint. Left alone, rust creeps under the surrounding paint and lifts it. The principles are the same ones the U.S. National Park Service sets out for architectural ironwork: keep water off, keep the coating whole, fix breaks promptly.",
        ),
      ],
    },
    {
      id: "fire-tools",
      heading: "Fire tools, andirons and grates",
      blocks: [
        p(
          "Heat burns wax and oil off the working end of a poker or the uprights of a grate, and ash holds moisture against the metal. During the season, knock the ash off and wipe the tools now and then. At the end of the season, brush them clean with a wire brush, wipe them, oil or wax them, and store them dry. A grate or a pair of andirons left in a damp fireplace over a wet summer comes out orange; it is only surface rust, and the method below brings them back in an hour.",
        ),
        p(
          "Log carriers and tongs with leather or canvas parts: keep the leather fed with a little saddle soap or leather conditioner, and let canvas dry fully before it is put away.",
        ),
      ],
    },
    {
      id: "when-to-worry",
      heading: "When rust is more than cosmetic",
      blocks: [
        p(
          "Surface rust, even heavy, comes off and leaves a sound piece, sometimes with shallow pitting that reads as age. What matters is structure: a latch bar thinned by decades of rust, a hinge pin seized solid, a grate burned through. Those are rare on forged work and are a job for a smith, who can re-forge, replace a pin or weld a bar. Many of the makers we feature repair their own pieces; ask them first.",
        ),
      ],
    },
  ],
  howTo: {
    name: "Removing surface rust and refinishing",
    description: "For hardware or fire tools that have gone orange or lost their black. An hour, most of it buffing.",
    totalTime: "PT1H",
    supplies: [
      "0000 steel wool or a brass-bristle brush",
      "Light machine oil, or boiled linseed oil",
      "Clear paste wax",
      "Clean rags",
    ],
    tools: ["A wire brush, for heavy rust", "A screwdriver, if the piece comes off"],
    steps: [
      {
        name: "Take it off if you can",
        text: "Hardware is easier to do on the bench. Fire tools and grates come as they are.",
      },
      {
        name: "Brush and scrub",
        text: "Wire-brush heavy rust, then go over the whole piece with 0000 steel wool and a few drops of oil. The oil carries the rust off and keeps the dust down. Wipe clean with a rag.",
      },
      {
        name: "Decide on the finish",
        text: "For the traditional black: a thin coat of boiled linseed oil, wiped almost dry, then warmed with a heat gun or in a low oven (200°F / 95°C) for half an hour to set. For a quicker job: paste wax, no heat. For exterior pieces: rust-inhibiting primer and paint instead.",
      },
      {
        name: "Wax",
        text: "Over oil or bare metal, a thin coat of paste wax, left to haze, then buffed hard with a dry rag. The buffing is what makes it shine and shed water.",
      },
      {
        name: "Dispose of oily rags safely",
        text: "Rags soaked in linseed oil can heat up and catch fire on their own as the oil cures. Spread them flat outdoors to dry fully, or put them in a sealed metal can of water, before they go in the trash.",
      },
      {
        name: "Repeat yearly",
        text: "Put it on the calendar with the clocks changing. Waxed iron that is done once a year never gets as far as step two again.",
      },
    ],
  },
  mistakes: [
    "Leaving fire tools in ash, or a grate in a damp fireplace, over the summer.",
    "Vinegar or acid cleaners on waxed or oiled iron.",
    "Painting over rust without removing it; the paint lifts within the year.",
    "Using bare waxed iron outside and expecting it to stay black.",
    "Balling up linseed-oiled rags and leaving them in a bin.",
    "The dishwasher, for any iron piece.",
  ],
  faqs: [
    {
      question: "Does forged iron rust indoors?",
      answer:
        "Slowly, in damp rooms, if the wax or oil has gone. In a dry room a waxed piece stays black for years. Bathrooms, kitchens and cellars need the wax renewed a few times a year.",
    },
    {
      question: "Can I use WD-40 on it?",
      answer:
        "As a water displacer and rust loosener, yes. It is not a lasting finish, so follow it with oil or wax once the piece is clean and dry.",
    },
    {
      question: "Is forged iron suitable for a bathroom?",
      answer:
        "Yes, with more frequent waxing and a finish chosen for damp (ask the maker). Towel hooks and cabinet latches in forged iron are traditional in bathrooms for good reason: they are solid and will outlast the room.",
    },
    {
      question: "The black is wearing off. Is that the finish failing?",
      answer:
        "If the piece is waxed or oiled, the black that wears is the film, not the iron. Clean and re-wax it. If the piece is painted or powder-coated, a worn patch is a chip to prime and touch up.",
    },
    {
      question: "Will rust ruin the piece?",
      answer:
        "Surface rust, no: it comes off and leaves sound metal, sometimes lightly pitted. Only decades of neglect, or rust in a thin working part like a latch bar or a hinge pin, affects how the piece works, and a smith can repair those.",
    },
    {
      question: "What about the forged knives you feature?",
      answer:
        "Carbon-steel blades want their own routine (wash, dry immediately, a wipe of oil) and are not covered here. The maker's own care instructions are the right guide for a blade.",
    },
  ],
  sources: [
    {
      name: "U.S. National Park Service, Preservation Brief 27: The Maintenance and Repair of Architectural Cast Iron",
      url: "https://www.nps.gov/tps/how-to-preserve/briefs/27-cast-iron.htm",
      note: "written for cast iron on buildings; the sections on rust, coatings and maintenance apply to forged work too",
    },
  ],
};
