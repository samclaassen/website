/**
 * Image credit and rights records.
 *
 * Every photo shown on the site carries its source, credit line and the basis on which we
 * are allowed to publish it.
 *
 * Two kinds of photo:
 * - Library photos (src/data/image-library.ts): openly licensed or public-domain photographs
 *   used for atmosphere and as MATERIAL photos. They never depict the exact piece.
 * - Product photos (piece.photo): the actual piece. Only once the rights basis is real:
 *   "maker-permission" (written permission, keep the email on file), "affiliate-program"
 *   (a program we have joined), "press-kit" or "own-photo". A product photo always
 *   overrides the material photo.
 */

/** Rights bases for openly licensed library images. */
export type OpenRightsBasis = "public-domain" | "cc0" | "cc-by" | "unsplash-license" | "pexels-license";

/** Rights bases for photos of the actual product. */
export type ProductRightsBasis = "maker-permission" | "affiliate-program" | "press-kit" | "own-photo";

export type RightsBasis = OpenRightsBasis | ProductRightsBasis;

export interface CreditedPhoto {
  /** Local path under /public (preferred) or an absolute URL we are allowed to load. */
  src: string;
  alt: string;
  /** Credit line shown with the image, e.g. "Photo: Jane Doe / Wikimedia Commons, CC BY 4.0". */
  credit: string;
  /** Page where the image was obtained (image page, press kit, maker page). */
  sourceUrl: string;
  rightsBasis: RightsBasis;
  /** License name, e.g. "CC BY 4.0", "Public domain", "Unsplash License". */
  license?: string;
  licenseUrl?: string;
  /** ISO date the rights were confirmed. */
  dateCleared: string;
  width?: number;
  height?: number;
  /** CSS object-position for cropping, e.g. "50% 60%". */
  focus?: string;
}

export const RIGHTS_LABEL: Record<RightsBasis, string> = {
  "public-domain": "Public domain",
  cc0: "CC0 public domain dedication",
  "cc-by": "Creative Commons Attribution",
  "unsplash-license": "Unsplash License",
  "pexels-license": "Pexels License",
  "maker-permission": "Used with the maker's permission",
  "affiliate-program": "Used under the maker's affiliate program",
  "press-kit": "From the maker's press kit",
  "own-photo": "Photographed by Legacy Homeware",
};

const PRODUCT_BASES: ProductRightsBasis[] = ["maker-permission", "affiliate-program", "press-kit", "own-photo"];

/** True when the photo shows the actual product (rights cleared with the maker or our own). */
export function isProductPhoto(photo: CreditedPhoto) {
  return (PRODUCT_BASES as RightsBasis[]).includes(photo.rightsBasis);
}

export function isLocal(photo: CreditedPhoto) {
  return photo.src.startsWith("/");
}
