import type { Tier } from "./details";

export interface ElementPricing {
  element: string;
  unit: string;
  mode: "installed" | "shipped";
  tiers: Record<Tier, string>;
}

/** Launch list prices (v1, October 2026). Proposals to validate with real quotes. */
export const PRICING: ElementPricing[] = [
  { element: "kitchen-cabinets", unit: "per linear foot, installed in Colorado", mode: "installed", tiers: { essential: "$450–$650", signature: "$650–$950", heirloom: "$950–$1,500" } },
  { element: "built-ins-bookcases", unit: "per linear foot, installed in Colorado", mode: "installed", tiers: { essential: "$450–$700", signature: "$700–$1,050", heirloom: "$1,050–$1,700" } },
  { element: "mudroom-entry", unit: "per linear foot, installed in Colorado", mode: "installed", tiers: { essential: "$400–$650", signature: "$650–$950", heirloom: "$950–$1,400" } },
  { element: "cabinet-doors-fronts", unit: "per sq ft, shipped finished", mode: "shipped", tiers: { essential: "$45–$75", signature: "$75–$125", heirloom: "$125–$220" } },
  { element: "wall-paneling-wainscoting", unit: "per sq ft of wall, shipped as a kit", mode: "shipped", tiers: { essential: "$18–$32", signature: "$32–$65", heirloom: "$65–$160" } },
  { element: "fireplace-mantels", unit: "per mantel, shipped", mode: "shipped", tiers: { essential: "$950–$2,200", signature: "$2,200–$5,000", heirloom: "$5,000–$15,000+" } },
  { element: "range-hoods", unit: "per hood cover, shipped (ventilation insert not included)", mode: "shipped", tiers: { essential: "$1,600–$2,500", signature: "$2,500–$4,200", heirloom: "$4,200–$8,500" } },
  { element: "interior-doors", unit: "per door, shipped finished and machined for hardware", mode: "shipped", tiers: { essential: "$950–$1,600", signature: "$1,600–$3,000", heirloom: "$3,000–$6,500" } },
  { element: "trim-moulding", unit: "per linear foot, shipped", mode: "shipped", tiers: { essential: "$7–$14", signature: "$14–$35", heirloom: "$35–$95" } },
  { element: "corbels-brackets-ornament", unit: "per piece, shipped", mode: "shipped", tiers: { essential: "$90–$220", signature: "$220–$550", heirloom: "$550–$1,800" } },
  { element: "bathroom-vanities", unit: "per vanity cabinet", mode: "shipped", tiers: { essential: "$1,400–$2,600", signature: "$2,600–$4,800", heirloom: "$4,800–$9,000" } },
  { element: "radiator-covers", unit: "per cover, shipped", mode: "shipped", tiers: { essential: "$450–$850", signature: "$850–$1,600", heirloom: "$1,600–$3,200" } },
];

export function pricingFor(element: string) {
  return PRICING.find((p) => p.element === element);
}

export function priceLine(element: string, tier: Tier) {
  const p = pricingFor(element);
  if (!p) return null;
  return { range: p.tiers[tier], unit: p.unit };
}

export function fromPrice(element: string) {
  const p = pricingFor(element);
  return p ? p.tiers.essential.split("–")[0] : null;
}

export const TIER_DESCRIPTIONS: Record<Tier, string> = {
  essential: "Clean, simple geometry: slab, Shaker, flat panel or straight profiles, in paint-grade wood or plain or rift white oak.",
  signature: "Period detail: raised or beaded panels, applied mouldings, inset construction and simple relief or fretwork in stain-grade hardwood.",
  heirloom: "Carved and showpiece work: 3D carving with hand finishing, curves and arches, complex joinery and premium species.",
};

export const INSTALL_ADD_ONS = [
  { item: "Mantels", price: "+$450–$1,200" },
  { item: "Range hood covers", price: "+$350–$800 (venting by others)" },
  { item: "Wall paneling", price: "+$10–$18 per sq ft" },
  { item: "Trim and moulding", price: "+$6–$12 per linear foot" },
  { item: "Interior doors", price: "+$250–$450 per door; +$350–$700 pre-hung" },
];

export const TERMS = [
  { item: "Design fee", detail: "$350, credited to your order" },
  { item: "Colorado site measure", detail: "$195, credited to your order" },
  { item: "Deposit", detail: "50% to start production; balance before shipping, or at installation in Colorado" },
  { item: "Minimum order (shipped)", detail: "$750" },
  { item: "Mountain-town travel", detail: "Quoted per project (typically 10–15% of installation)" },
  { item: "Lead time", detail: "Shipped: about 4–8 weeks. Installed in Colorado: about 6–10 weeks" },
];
