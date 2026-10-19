import type { CreditedPhoto } from "./images";
import { isProductPhoto } from "./images";
import type { Piece } from "./piece-types";

/**
 * What a piece shows.
 *
 * Photography is for editorial surfaces only (home, category headers, /standard, /about,
 * journal). In the piece grid and on piece pages, a piece shows its illustrated card: a linen
 * panel with the material set large, the maker's name and a small material motif.
 *
 * The one exception is a cleared photo of the exact piece (piece.photo with a product rights
 * basis: maker permission, an affiliate program we've joined, a press kit, or our own photo).
 * That photo replaces the illustrated card.
 */
export function productPhoto(p: Piece): CreditedPhoto | undefined {
  return p.photo && isProductPhoto(p.photo) ? p.photo : undefined;
}
