import type { CareGuide } from "./types";
import { castIron } from "./cast-iron";
import { enameledCastIron } from "./enameled-cast-iron";
import { copper } from "./copper";
import { brassAndBronze } from "./brass-and-bronze";
import { forgedIron } from "./forged-iron";
import { wood } from "./wood";
import { woodStoves } from "./wood-stoves";
import { solidBrassOrPlated } from "./solid-brass-or-plated";

/**
 * Display order for /care. Care guides come first; the buying guide last, so that a
 * piece's primary guide (the first match in this list) is always its care guide.
 */
export const CARE_GUIDES: CareGuide[] = [
  castIron,
  enameledCastIron,
  copper,
  brassAndBronze,
  forgedIron,
  wood,
  woodStoves,
  solidBrassOrPlated,
];

export type { CareGuide } from "./types";
