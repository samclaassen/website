import { BIFL_LISTS } from "./bifl";
import { GIFT_GUIDES } from "./gifts";

export { BIFL_LISTS, GIFT_GUIDES };
export const ALL_LISTS = [...BIFL_LISTS, ...GIFT_GUIDES];
export type { PieceListPage } from "./types";
