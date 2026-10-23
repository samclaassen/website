import type { CareGuide } from "./types";
import { h3, list, p } from "./types";

export const woodStoves: CareGuide = {
  slug: "wood-stoves",
  title: "Looking after a cast-iron or soapstone wood stove",
  question: "How do you maintain a cast-iron or soapstone wood stove so it lasts for decades?",
  kicker: "Wood stoves",
  description:
    "Fuel, firing, ash, glass, gaskets, chimney and finish: the yearly routine that keeps a cast-iron or soapstone wood stove safe and working for decades, with an end-of-season checklist.",
  answer:
    "Burn only dry, seasoned wood (under 20% moisture), keep fires hot enough to burn clean but never overfire, empty the ash before it reaches the air inlets, and have the chimney inspected and swept at least once a year. Replace the door gasket when a strip of paper slides out of the closed door without resistance, and keep bare iron blacked or painted. Stoves fail from wet wood, neglect and overfiring, not from age.",
  families: ["cast-iron", "soapstone", "enameled-cast-iron", "forged", "other"],
  kinds: ["stove"],
  motif: "soapstone",
  image: "cat-hearth-modern-stove",
  published: "2026-10-23",
  updated: "2026-10-23",
  sections: [
    {
      id: "fuel",
      heading: "Fuel",
      blocks: [
        p(
          "Wood is ready to burn when it has been split and stacked off the ground, covered on top and open at the sides, for at least six months to a year, and reads under 20% on a moisture meter (an inexpensive pin meter is the best twenty dollars a stove owner spends). Wet wood burns cool and smoky, blackens the glass, and lays creosote in the chimney; it is the cause of most stove problems that get blamed on the stove.",
        ),
        p(
          "Never burn painted, treated, glued or pressure-treated wood, driftwood (the salt corrodes iron and the flue), trash, cardboard in quantity, or coal in a stove built for wood. The U.S. EPA's Burn Wise guidance covers the detail; the short version is dry, split, natural wood and nothing else.",
        ),
      ],
    },
    {
      id: "firing",
      heading: "Firing well, and not overfiring",
      blocks: [
        p(
          "A stove burns cleanest and lasts longest with small, hot, well-aired fires rather than a firebox packed to the top and choked down. Build with kindling and small splits, let it catch with the air open, then add larger wood and settle the air to a steady burn. A stove thermometer on the stovetop or the flue pipe is the simplest guide; the maker's manual gives the safe range for your model.",
        ),
        p(
          "Overfiring is the one thing that damages a stove outright: any part of the stove glowing red, a roaring sound in the flue, or a thermometer far above the maker's range. It warps baffles, cracks castings and burns out seals. If it happens, close the air down and let it settle. A stove that has been overfired should be checked over before the next fire.",
        ),
        p(
          "Soapstone stoves heat slowly and give the heat back for hours after the fire is out. Do not try to rush one with the air wide open; let it come up over an hour. Stone and iron both dislike thermal shock: never splash water on a hot stove, and never load cold wood into a stove that is glowing.",
        ),
      ],
    },
    {
      id: "ash-and-glass",
      heading: "Ash, air and glass",
      blocks: [
        list([
          "Leave an inch of ash in the firebox; it insulates the base and helps the fire. Empty it before it reaches the air inlets, which starves the fire and overheats the grate.",
          "Ash goes into a lidded metal bucket, outdoors, on a non-combustible surface, and stays there for several days. Ash holds live embers for a surprisingly long time.",
          "Clean the glass when the stove is cold: a damp cloth or newspaper dipped in a little wood ash, or a stove-glass cleaner. Never an abrasive, and never when hot. Glass that blackens every burn is telling you the wood is wet or the fire too cool.",
          "Keep the air inlets and the area under the stove free of ash and dust so the stove draws as designed.",
        ]),
      ],
    },
    {
      id: "seals",
      heading: "Gaskets, bricks and baffles",
      blocks: [
        p(
          "The rope gasket around the door and the glass is the stove's most important wearing part. When it flattens, the stove draws air it cannot control, burns too hot and too fast, and the glass soots up. Test it a few times a season: close the door on a strip of paper. If the paper pulls out without resistance, replace the gasket. The right diameter of rope and a tube of gasket cement are an inexpensive maker's part, and the job takes an hour.",
        ),
        p(
          "Firebricks and baffle plates protect the castings from the fire. A cracked brick that stays in place can wait for the end of the season; a crumbling one, or a warped or burnt-through baffle, should be replaced before the next fire. Makers such as Jøtul, Morsø and Woodstock Soapstone keep parts for stoves decades old; have the model number from the plate on the stove when you call.",
        ),
      ],
    },
    {
      id: "chimney",
      heading: "The chimney and flue",
      blocks: [
        p(
          "Have the chimney and flue pipe inspected and swept at least once a year, before the heating season, by a qualified sweep; in the United States, the Chimney Safety Institute of America certifies them. Creosote is the tar left by cool or smoky fires, and a creosote fire in the chimney is the serious risk in wood heating. Burning dry wood hot reduces it; it does not remove the need for the sweep.",
        ),
        p(
          "Between sweeps, watch for smoke entering the room, a burning smell from the flue pipe, or rust and white staining at the pipe joints, and act on them. Keep working smoke and carbon-monoxide alarms on every floor; building codes require them in most places, and a stove is the reason they exist.",
        ),
      ],
    },
    {
      id: "finish",
      heading: "The finish",
      blocks: [
        h3("Bare cast iron"),
        p(
          "Black cast iron is finished with high-temperature stove paint or stove polish (graphite stove black). It dulls and rusts lightly in a damp summer; a wire brush, a wipe, and a thin coat of stove polish or high-temperature paint before the season brings it back. Do not use ordinary paint or wax on the stove body; they burn off and smell.",
        ),
        h3("Enameled iron"),
        p(
          "Wipe when cold with a damp cloth and dry. No abrasives, no oven cleaner. Small chips are cosmetic; touch-up enamel is available from most makers.",
        ),
        h3("Soapstone"),
        p(
          "Wipe with a damp cloth. Stains lift with a light rub of fine sandpaper (the stone is soft), and the surface evens out with use. Hairline cracks in individual stones are common after years of heating and cooling and are not a safety issue in themselves; stones are replaceable.",
        ),
      ],
    },
  ],
  howTo: {
    name: "The end-of-season service",
    description:
      "An afternoon in spring, once the last fire is cold. It is what makes a stove last fifty years instead of fifteen.",
    totalTime: "PT3H",
    supplies: [
      "Replacement rope gasket and cement, if the paper test fails",
      "Stove polish or high-temperature paint, for bare iron",
      "Firebricks, if any are crumbling",
    ],
    tools: ["A shop vacuum with a fine filter", "A wire brush and a stiff brush", "A moisture meter, for next year's wood"],
    steps: [
      {
        name: "Empty and vacuum",
        text: "Remove all ash, lift out the firebricks and baffle if the manual shows how, and vacuum the firebox, the air channels and behind the baffle. Ash left all summer draws moisture and rusts the castings.",
      },
      {
        name: "Test the gaskets",
        text: "Close the door and the ash door on a strip of paper at several points around each. Any point where it slides out freely means a new gasket. Replace the whole rope, not a section.",
      },
      {
        name: "Inspect bricks and baffle",
        text: "Replace crumbling or missing firebricks and any warped, cracked or burnt-through baffle plate. Hairline cracks in a brick that stays whole can wait.",
      },
      {
        name: "Clean the glass",
        text: "Cold stove, damp cloth and ash or a stove-glass cleaner, then dry. Check the glass gasket as you go.",
      },
      {
        name: "Deal with rust and finish",
        text: "Wire-brush any rust on bare iron, wipe clean, and apply stove polish or high-temperature paint. Enamel and soapstone get a wipe only.",
      },
      {
        name: "Book the sweep",
        text: "Have the chimney inspected and swept before the autumn, when sweeps are quiet. Keep the receipt; insurers ask.",
      },
      {
        name: "Check the catalyst, if there is one",
        text: "Catalytic stoves have a combustor that needs inspecting and, every few years, replacing. The manual says how to check it.",
      },
      {
        name: "Stack next year's wood",
        text: "Wood for next winter should be split and stacked now. Measure it with the meter in the autumn before it comes inside.",
      },
    ],
  },
  mistakes: [
    "Burning wet or unseasoned wood.",
    "Overfiring, and ignoring a red glow.",
    "Burning treated, painted or glued wood, or trash.",
    "Letting ash pile up to the air inlets.",
    "Cleaning the glass while it is hot.",
    "Running a stove with a flattened gasket.",
    "Skipping the annual sweep.",
    "Splashing water on a hot stove.",
  ],
  faqs: [
    {
      question: "How often should the chimney be swept?",
      answer:
        "At least once a year, inspected and swept before the heating season. Heavy use, or a chimney that shows creosote build-up between sweeps, means more often.",
    },
    {
      question: "Can I burn construction offcuts?",
      answer:
        "Untreated, unpainted solid wood, yes, in moderation. Plywood, MDF, pallets of unknown origin, painted or pressure-treated wood, no: the glues and treatments give off toxic fumes and corrode the stove and flue.",
    },
    {
      question: "Why does the glass keep going black?",
      answer:
        "The fire is too cool or the wood is too wet; both leave soot on the glass. Dry wood and hotter, better-aired fires are the fix. Many stoves also have an air wash that needs the primary air open to keep the glass clear.",
    },
    {
      question: "My soapstone has a hairline crack. Is it dangerous?",
      answer:
        "Usually not. Soapstone stoves hold their stones in an iron frame, and a hairline crack in a stone after years of use is common and cosmetic. Stones are replaceable; contact the maker with the model number if it opens up.",
    },
    {
      question: "Can a cast-iron stove crack?",
      answer:
        "Yes, from overfiring or thermal shock, such as water on a hot stove or a cold load dumped into a glowing firebox. A cracked casting is a maker's repair and usually a replacement part; stop using the stove until it has been seen.",
    },
    {
      question: "How long should a stove last?",
      answer:
        "Fifty years and more for a cast-iron or soapstone stove from a maker who still supplies parts, provided gaskets, bricks and baffles are replaced as they wear and the stove is never overfired. The castings themselves do not wear out.",
    },
    {
      question: "Smoke is coming into the room. What do I do?",
      answer:
        "Open a window a crack to relieve negative pressure, make sure the flue damper is open, and check that the chimney is warm (a cold chimney will not draw; a sheet of lit newspaper held in the flue warms it). If it keeps happening, stop using the stove and have the chimney checked; a blockage or a draft problem needs a professional.",
    },
  ],
  sources: [
    { name: "U.S. EPA Burn Wise: Best burn practices", url: "https://www.epa.gov/burnwise/burn-wise-best-burn-practices" },
    {
      name: "Chimney Safety Institute of America",
      url: "https://www.csia.org/",
      note: "certified chimney sweeps and homeowner guidance",
    },
  ],
};
