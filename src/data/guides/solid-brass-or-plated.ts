import type { CareGuide } from "./types";
import { h3, list, p } from "./types";

export const solidBrassOrPlated: CareGuide = {
  slug: "solid-brass-or-plated",
  title: "Solid brass vs. brass-plated: how to tell",
  question: "How can you tell solid brass from brass-plated or “brass finish” hardware?",
  kicker: "Buying guide · Brass",
  description:
    "Five tests (magnet, weight, wear, scratch and the product listing) that tell solid brass from brass-plated steel and zinc, and what the words on a product page actually mean.",
  answer:
    "Hold a magnet to it: brass is not magnetic, so a firm pull means steel under plating. Then check the weight (solid brass is heavy for its size), look at the edges and high points for a silver or grey metal showing through, and scratch a hidden spot: solid brass is yellow all the way down. A magnet that does not stick is not proof on its own, because zinc is not magnetic either, so use weight and the scratch test too.",
  families: ["brass"],
  motif: "brass",
  image: "detail-brass-pulls",
  published: "2026-10-23",
  updated: "2026-10-23",
  sections: [
    {
      id: "why",
      heading: "Why it matters",
      blocks: [
        p(
          "Most hardware sold as brass is not. It is zinc die-cast or stamped steel with a few microns of brass electroplated on top, then lacquered. It looks identical in the box. The plating wears through at the high points within a few years, the zinc underneath cannot be polished or refinished, and thin zinc castings snap at the spindle or the screw holes. Plating and zinc are the first two [disqualifiers of the Heirloom Standard](/standard#disqualifiers) for exactly this reason.",
        ),
        p(
          "Solid brass is an alloy of copper and zinc all the way through. It can be polished, patinated, lacquered, stripped and polished again indefinitely. A solid brass knob from 1890 still works; so will one bought today, in 2130.",
        ),
      ],
    },
    {
      id: "tests",
      heading: "Five tests",
      blocks: [
        h3("1. The magnet"),
        p(
          "Brass contains no iron and is not magnetic. A fridge magnet that grips the piece firmly means steel under the plating. A magnet that slides off tells you only that it is not steel: zinc, aluminum and brass all pass this test, so keep going.",
        ),
        h3("2. Weight"),
        p(
          "Brass is dense, about 8.5 g/cm³: heavier than steel and roughly three times as heavy as aluminum. Zinc is a little lighter than brass but close enough to fool the hand; what gives zinc away is that zinc castings are made thin to save metal, so the piece feels hollow or light for its size. Solid brass feels like more than you expected.",
        ),
        h3("3. Wear and edges"),
        p(
          "Look at the places hands and keys touch: the rim of a knob, the lip of a pull, the edges of a backplate. Plated pieces show a different color underneath: silvery white for zinc, grey for steel, sometimes a pink flash of copper strike. Solid brass wears to brighter brass.",
        ),
        h3("4. The scratch"),
        p(
          "On the back, inside the rose, or under the escutcheon, scratch the surface with a key or the edge of a coin. Solid brass is the same yellow beneath. Plating shows white or grey within a hair's depth.",
        ),
        h3("5. The listing"),
        p(
          "Product pages tell you, if you read the materials line rather than the headline. “Solid brass”, “cast brass”, “forged brass” and “unlacquered brass” mean the metal. “Brass finish”, “brass-plated”, “brass-look”, “brass-tone”, “antique brass” and “polished brass” on their own describe the color of a coating and say nothing about what is under it. “PVD brass” is a hard coating that can sit over stainless steel or over solid brass; the materials line says which. If the page gives a body material and it is zinc, ZAMAK, “metal alloy” or “die-cast”, the piece is not brass.",
        ),
      ],
    },
    {
      id: "matrix",
      heading: "Reading the results together",
      blocks: [
        list([
          "Magnet grips: plated steel. Not solid brass.",
          "Magnet slides off, piece feels light or hollow, scratch shows white: zinc with brass plating. Not solid brass.",
          "Magnet slides off, piece is heavy, scratch shows yellow, wear shows brighter brass: solid brass.",
          "Magnet slides off, piece is heavy, but the listing says “brass finish” and gives no body material: assume plated zinc until the scratch test says otherwise.",
        ]),
        p(
          "A magnet and a coin in your pocket settle it in a hardware store. Online, the materials line and the weight in the specifications do the same job; a solid brass entry set weighs several pounds, a zinc one much less.",
        ),
      ],
    },
    {
      id: "special-cases",
      heading: "Special cases",
      blocks: [
        p(
          "Lacquered solid brass is still solid brass; lacquer is a clear coat, not plating. Chrome-plated or nickel-plated solid brass (common on good taps and old door furniture) is solid brass under a different color: it passes the Standard, and it can be stripped back to brass if you ever want it so. Bronze is a different copper alloy, heavier and browner than brass; the same tests apply and the same words mislead, since “oil-rubbed bronze” is a finish name applied to zinc as often as to bronze. Once you know a piece is solid, our guide to [cleaning and patina](/care/brass-and-bronze) takes over.",
        ),
      ],
    },
  ],
  howTo: {
    name: "Testing a knob or pull you already own",
    description: "Two minutes with a fridge magnet and a coin.",
    totalTime: "PT2M",
    tools: ["A fridge magnet", "A coin or key"],
    steps: [
      {
        name: "Magnet",
        text: "Hold a magnet to the thickest part of the piece. If it grips, the piece is plated steel and you can stop.",
      },
      {
        name: "Weight",
        text: "Lift it. Solid brass is heavy for its size and feels dense; zinc castings feel light or hollow.",
      },
      {
        name: "Wear",
        text: "Look at the edges and the places hands touch. Silver, grey or white showing through is plating wearing off.",
      },
      {
        name: "Scratch",
        text: "On the back or under the rose, scratch with a coin. Yellow beneath means solid brass; white or grey means plating.",
      },
      {
        name: "Decide",
        text: "Heavy, yellow all the way down and non-magnetic is solid brass. Anything else is not, whatever the box says.",
      },
    ],
  },
  mistakes: [
    "Trusting the color. Plating is the same color as brass; that is its purpose.",
    "Trusting “brass finish”, “antique brass” or “polished brass” as a material.",
    "Stopping at the magnet test. Zinc passes it.",
    "Scratching the front of the piece to test it. Use the back.",
  ],
  faqs: [
    {
      question: "Is “brass finish” solid brass?",
      answer:
        "No. “Finish” describes the color of a coating. Unless the listing also says “solid brass” in the materials, assume plated zinc or steel.",
    },
    {
      question: "What is wrong with zinc hardware?",
      answer:
        "It cannot be polished or refinished once the plating wears, it is cast thin and breaks at the spindle and screw holes, and it cannot be repaired. It fails the first test of the Heirloom Standard outright.",
    },
    {
      question: "Is brass-plated hardware always bad?",
      answer:
        "Not always bad, but never an heirloom. Good plating on a steel body can last a decade or two. It just cannot be renewed when it wears through, and most of it is on zinc.",
    },
    {
      question: "Does “forged brass” or “cast brass” mean solid?",
      answer:
        "Yes. Both describe how a solid brass piece was shaped. Forged brass is denser and stronger; cast brass takes finer detail. Both are solid metal through and through.",
    },
    {
      question: "How do I test hardware that is already on the door?",
      answer:
        "Magnet first. Then unscrew the rose or escutcheon if it comes off easily and scratch the hidden back of the piece. If it will not come off, scratch the inside edge of the keyhole or the underside of a lever.",
    },
    {
      question: "Is nickel-plated or chrome-plated brass solid brass?",
      answer:
        "Yes, if the body is brass. Plating a solid brass piece in nickel or chrome changes its color, not its substance; it passes the Standard and can be stripped back to brass.",
    },
  ],
};
