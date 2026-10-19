import type { Category } from "./piece-types";
import type { CreditedPhoto } from "./images";
import { IMAGE_LIBRARY, libraryPhoto, type LibraryImage } from "@/data/image-library";
import { PIECES } from "@/data/pieces";
import { productPhoto } from "./piece-media";

/**
 * Every library photo the site displays, by surface. Pages read their photos from here, and
 * /credits lists exactly these (plus any cleared product photos), so the credits page always
 * matches what is on screen. Photography is for editorial surfaces only; pieces use their
 * illustrated cards unless they have a cleared product photo.
 */
export const SITE_IMAGES = {
  homeHero: "hero-hearth-room",
  category: {
    hearth: "stove-hut-woodstove",
    hardware: "mat-brass-knocker",
    kitchen: "mat-wooden-spoons",
  } satisfies Record<Category, string>,
  homeStandard: "craft-blacksmith-forge",
  standard: { lead: "craft-blacksmith-anvil", second: "craft-hot-iron", rimLock: "hist-rim-lock" },
  about: { lead: "craft-bronze-pour", door: "hist-open-doors", hearth: "hist-old-stove", workshop: "craft-woodturning" },
} as const;

export const sitePhoto = (id: string): CreditedPhoto => libraryPhoto(id);

function collectIds(v: unknown, out: Set<string>) {
  if (typeof v === "string") out.add(v);
  else if (v && typeof v === "object") Object.values(v).forEach((x) => collectIds(x, out));
}

/** Library images shown somewhere on the site. */
export function displayedLibraryImages(): LibraryImage[] {
  const ids = new Set<string>();
  collectIds(SITE_IMAGES, ids);
  return IMAGE_LIBRARY.filter((img) => ids.has(img.id));
}

/** Cleared product photos shown on piece cards and pages. */
export function displayedProductPhotos() {
  return PIECES.flatMap((p) => {
    const photo = productPhoto(p);
    return photo ? [{ piece: p, photo }] : [];
  });
}
