/**
 * Image credit and rights records.
 *
 * Every photo shown on the site must carry its source, credit line and the basis on
 * which we are allowed to publish it. Pieces without a cleared photo render the
 * typographic "linen panel" instead (see components/media/PieceVisual).
 *
 * Do not add maker product photos here until the rights basis is real:
 * an affiliate program we have joined, a published press kit, or written permission.
 */

export type RightsBasis =
  | "affiliate-program" // images supplied to partners in a program we have joined
  | "press-kit" // maker's published press or media kit
  | "permission" // written permission from the maker (keep the email on file)
  | "open-license" // public domain or an open license (record licenseUrl)
  | "own-photo"; // photographed by Legacy Homeware

export interface CreditedPhoto {
  /** Local path under /public (preferred) or an absolute URL we are allowed to load. */
  src: string;
  alt: string;
  /** Credit line shown under the image, e.g. "Photo: Le Creuset". */
  credit: string;
  /** Page where the image was obtained (maker page, press kit, license page). */
  sourceUrl: string;
  rightsBasis: RightsBasis;
  licenseUrl?: string;
  /** ISO date the rights were confirmed. */
  dateCleared: string;
  width?: number;
  height?: number;
}

export const RIGHTS_LABEL: Record<RightsBasis, string> = {
  "affiliate-program": "Used under the maker's affiliate program",
  "press-kit": "From the maker's press kit",
  permission: "Used with the maker's permission",
  "open-license": "Openly licensed",
  "own-photo": "Photographed by Legacy Homeware",
};

export function isLocal(photo: CreditedPhoto) {
  return photo.src.startsWith("/");
}
