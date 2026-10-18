import type { CreditedPhoto } from "./images";

export type Category = "hearth" | "kitchen" | "hardware";
export type Tier = "accessible" | "mid" | "premium";

/** Broad material groups used for filtering. The exact material is in `material`. */
export type MaterialFamily =
  | "cast-iron"
  | "enameled-cast-iron"
  | "soapstone"
  | "forged"
  | "carbon-steel"
  | "copper"
  | "brass"
  | "bronze"
  | "hardwood"
  | "other";

/** ready = passed research checks; verify = one fact still to confirm before publishing. */
export type ResearchStatus = "ready" | "verify";

export type AffiliateStatus =
  | "confirmed" // program confirmed (not necessarily joined yet)
  | "likely" // likely via a third-party network listing, needs signup to confirm
  | "amazon" // available through Amazon Associates only
  | "none"; // none found (not confirmed absent); featured anyway

export interface Affiliate {
  status: AffiliateStatus;
  /** Network or program name where known, e.g. "Impact", "Awin". */
  network?: string;
  note?: string;
  /** True once we have actually joined and the link is a tracked affiliate link. */
  joined: boolean;
}

export type CheckKey = "solid" | "repair" | "ages" | "design" | "maker";
/**
 * pass = verified; partial = verified but falls short (e.g. a 1–5 year or finish-only warranty);
 * unverified = not yet confirmed.
 */
export type CheckStatus = "pass" | "partial" | "unverified";

export interface StandardCheck {
  status: CheckStatus;
  /** One line, written from the shortlist facts. */
  reason: string;
  /** Short label for the badge row near the top of the piece page. */
  badge?: string;
}

export type StandardChecks = Record<CheckKey, StandardCheck>;

export interface Piece {
  /** Shortlist reference, e.g. "H1", "K11", "W25". */
  id: string;
  slug: string;
  name: string;
  maker: string;
  /** Where the maker is based, as given in the shortlist. Not the same as country of manufacture. */
  makerBase?: string;
  category: Category;
  tier: Tier;
  /** Price exactly as displayed, e.g. "$180", "~£1,049", "from $1,800". */
  price: string;
  priceNote?: string;
  /** Material as recorded in the shortlist. */
  material: string;
  materialFamily: MaterialFamily;
  status: ResearchStatus;
  /** The open research flag from the shortlist, verbatim-ish. */
  flag?: string;
  /** Honest "Worth knowing" line shown where the shortlist flags something. */
  worthKnowing?: string;
  /** Retailer the product link points to. */
  retailer: string;
  productUrl: string;
  affiliate: Affiliate;
  /** One-line italic caption for cards. */
  line: string;
  /** 1–2 sentences, written only from shortlist facts. */
  whyHeirloom: string;
  checks: StandardChecks;
  /** Where it is made, as researched. Unset when unknown. */
  madeIn?: string;
  /** Warranty as researched. Unset when unknown. */
  warranty?: string;
  /** Note on image rights from the shortlist. */
  imageRights?: string;
  /** A cleared, credited photo. Empty until rights are in place. */
  photo?: CreditedPhoto;
  isNew?: boolean;
}

export const CATEGORY_LABEL: Record<Category, string> = {
  hearth: "Hearth & Heat",
  kitchen: "Kitchen",
  hardware: "Hardware",
};

export const CATEGORY_BLURB: Record<Category, string> = {
  hearth: "Forged fire tools, andirons and cast-iron stoves.",
  kitchen: "Cast iron, carbon steel, copper and hardwood for cooking.",
  hardware: "Solid brass, bronze and forged-iron door sets, latches and hooks.",
};

export const TIER_LABEL: Record<Tier, string> = {
  accessible: "Accessible",
  mid: "Mid",
  premium: "Premium",
};

export const TIER_RANGE: Record<Tier, string> = {
  accessible: "about $25–300",
  mid: "about $300–1,500",
  premium: "$1,500 and up",
};

export const MATERIAL_LABEL: Record<MaterialFamily, string> = {
  "cast-iron": "Cast iron",
  "enameled-cast-iron": "Enameled cast iron",
  soapstone: "Soapstone & iron",
  forged: "Forged iron & steel",
  "carbon-steel": "Carbon steel & wrought iron",
  copper: "Copper",
  brass: "Solid brass",
  bronze: "Bronze",
  hardwood: "Hardwood",
  other: "Other & mixed",
};

export const CHECK_ORDER: CheckKey[] = ["solid", "repair", "ages", "design", "maker"];

export const CHECK_LABEL: Record<CheckKey, string> = {
  solid: "Solid materials",
  repair: "Built to be repaired",
  ages: "Ages well",
  design: "Lasting design",
  maker: "Maker stands behind it",
};

export const AFFILIATE_LABEL: Record<AffiliateStatus, string> = {
  confirmed: "Affiliate program confirmed",
  likely: "Affiliate program likely",
  amazon: "Amazon Associates only",
  none: "No affiliate program found",
};
