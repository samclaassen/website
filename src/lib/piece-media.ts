import type { CreditedPhoto } from "./images";
import { isProductPhoto } from "./images";
import type { MaterialFamily, Piece } from "./piece-types";
import { libraryPhoto } from "@/data/image-library";

/**
 * Which photo a piece shows.
 *
 * 1. A cleared photo of the exact piece (piece.photo with a product rights basis:
 *    maker permission, an affiliate program we've joined, a press kit, or our own photo).
 * 2. Otherwise, an openly licensed MATERIAL photo matched to the piece's material and kind,
 *    always labelled "Material photo — not this exact piece".
 */

export interface PieceMedia {
  photo: CreditedPhoto;
  /** True when the photo is a stand-in (material or stove type), not the piece itself. */
  isMaterialPhoto: boolean;
  /** Caption that says what the stand-in photo is. */
  note?: string;
}

const MATERIAL_POOL: Record<MaterialFamily, string[]> = {
  "cast-iron": ["mat-cast-iron-skillet", "cat-kitchen-skillets", "mat-iron-pan-bacon", "mat-dutch-oven-coals", "mat-dutch-oven-bread"],
  "enameled-cast-iron": ["mat-enameled-pot"],
  soapstone: ["mat-soapstone"],
  forged: ["mat-forged-fire-grate", "mat-wrought-hinge"],
  "carbon-steel": ["craft-hot-iron"],
  copper: ["mat-copper-saucepans"],
  brass: ["mat-brass-doorknob", "mat-brass-shell-knobs", "mat-brass-knocker"],
  bronze: ["mat-bronze-handles", "craft-bronze-pour"],
  hardwood: ["mat-olive-wood-grain", "mat-wooden-spoons"],
  other: ["mat-canvas-leather"],
};

/**
 * Stoves (cast iron, soapstone, enamel) show a wood stove rather than a skillet or a stone
 * sample: a soapstone close-up read cold and out of place next to the other photos.
 */
const STOVE_POOL = ["stove-hut-woodstove", "hero-antique-range"];

/** Forged iron at the hearth (firedogs, grates) and on the door (hinges, latches). */
const FORGED_HEARTH_POOL = ["mat-forged-fire-grate", "cat-hearth-fireplace", "craft-hot-iron"];
const FORGED_HARDWARE_POOL = ["mat-wrought-hinge", "craft-hot-iron"];

/** Pieces whose material needs a specific photo. */
const BY_PIECE: Record<string, string> = {
  H3: "mat-canvas-leather", // canvas and riveted leather log carrier
  H7: "mat-forged-fire-grate", // painted iron andirons
  K9: "mat-wooden-spoons", // spoon set
  W11: "cat-hardware-lock", // seller doesn't name the metal: show hardware, not a material
};

function pick(pool: string[], key: string) {
  let h = 0;
  for (const ch of key) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return pool[h % pool.length];
}

/** The library image id used as a material stand-in for a piece. */
export function materialImageId(p: Piece): string {
  if (BY_PIECE[p.id]) return BY_PIECE[p.id];
  if (p.kind === "stove") return pick(STOVE_POOL, p.id);
  if (p.materialFamily === "forged") {
    if (p.category === "hearth") return pick(FORGED_HEARTH_POOL, p.id);
    if (p.category === "hardware") return pick(FORGED_HARDWARE_POOL, p.id);
  }
  return pick(MATERIAL_POOL[p.materialFamily], p.id);
}

export function pieceMedia(p: Piece): PieceMedia {
  if (p.photo && isProductPhoto(p.photo)) return { photo: p.photo, isMaterialPhoto: false };
  return {
    photo: libraryPhoto(materialImageId(p)),
    isMaterialPhoto: true,
    note: p.kind === "stove" ? STOVE_PHOTO_NOTE : MATERIAL_PHOTO_NOTE,
  };
}

export const MATERIAL_PHOTO_NOTE = "Material photo — not this exact piece";
export const STOVE_PHOTO_NOTE = "Stove photo — not this exact piece";
