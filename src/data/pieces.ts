/**
 * Wave 1 pieces: Hearth & Heat, Kitchen, Hardware.
 *
 * Source: Type artifact "Legacy Homeware — Wave 1 Shortlist" (v2, researched 2026-10-18).
 * Prices are as listed on the product pages on 2026-10-18. Recheck before launch.
 *
 * Writing rules for this file:
 * - `why` and `line` use only facts from the shortlist (maker, material, price, origin
 *   as listed) plus widely known facts about the material or form. No invented specs.
 * - `madeIn` and `warranty` are set only where the shortlist states them.
 * - A Standard check is "pass" only when the shortlist supports it. Anything the
 *   shortlist flags, or doesn't record (most warranties), is "unverified".
 * - No maker photos until image rights are cleared (see src/lib/images.ts).
 */

import type {
  AffiliateStatus,
  Category,
  CheckKey,
  MaterialFamily,
  Piece,
  StandardCheck,
  StandardChecks,
  Tier,
} from "@/lib/piece-types";

export const PRICE_CHECKED = "2026-10-18";
export const PRICE_CHECKED_DISPLAY = "Oct 18, 2026";

/** What sort of object it is; drives the default repair and ageing reasons. */
type Kind = "cookware" | "stove" | "blade" | "tool" | "hardware" | "board";

interface Raw {
  id: string;
  name: string;
  maker: string;
  makerBase?: string;
  retailer: string;
  tier: "A" | "M" | "P";
  price: string;
  priceNote?: string;
  material: string;
  family: MaterialFamily;
  kind: Kind;
  /** Material badge text, e.g. "Solid cast iron". */
  matBadge: string;
  flag?: string;
  worth?: string;
  aff: [AffiliateStatus, string?, string?];
  url: string;
  line: string;
  why: string;
  /** Reason for the Lasting design test. */
  form: string;
  tinned?: boolean;
  warranty?: string;
  madeIn?: string;
  imageRights?: string;
  isNew?: boolean;
  checks?: Partial<Record<CheckKey, StandardCheck>>;
}

const RAW: Raw[] = [
  // ───────────────────────────── Hearth & Heat ─────────────────────────────
  {
    id: "H1", name: "Hand-Forged Fireplace Grate", maker: "Ponderosa Forge", makerBase: "Oregon, USA",
    retailer: "Ponderosa Forge", tier: "A", price: "$300", material: "Solid 1\" forged bar",
    family: "forged", kind: "tool", matBadge: "Solid forged bar",
    flag: "Warranty not yet confirmed", worth: "We haven't confirmed the warranty yet.",
    aff: ["none"], url: "https://ponderosaforge.com/hand-forged-fireplace-grate/",
    line: "Solid 1-inch bar, forged by hand in Oregon.",
    why: "Ponderosa Forge, a forge in Oregon, makes this grate from solid 1-inch bar, forged by hand rather than stamped. It's the simplest kind of hearth piece: heavy iron and nothing else.",
    form: "The open bar grate, a long-standing hearth form.",
  },
  {
    id: "H2", name: "Square Loop Fire Poker", maker: "Urban Forge", makerBase: "USA",
    retailer: "Urban Forge", tier: "A", price: "$99", material: "Hand-forged iron",
    family: "forged", kind: "tool", matBadge: "Hand-forged iron",
    aff: ["none"], url: "https://urbanforge.com/products/square-loop-hand-forged-fire-poker",
    line: "A hand-forged poker with a square loop handle.",
    why: "A fire poker hand-forged from iron by Urban Forge, a US blacksmith shop, finished with a square loop handle. One piece of iron doing one simple job.",
    form: "A loop-handled poker, the blacksmith's standard design.",
  },
  {
    id: "H3", name: "Log Carrier", maker: "Duluth Pack", makerBase: "Minnesota, USA",
    retailer: "Duluth Pack", tier: "A", price: "$149.95", material: "Canvas + riveted leather",
    family: "other", kind: "tool", matBadge: "Canvas & riveted leather",
    flag: "Warranty not yet confirmed", worth: "We haven't confirmed the warranty yet.",
    aff: ["confirmed", "Awin"], url: "https://duluthpack.com/products/carrier-log",
    line: "Canvas and riveted leather from a Minnesota maker.",
    why: "Duluth Pack, a Minnesota company, makes this log carrier from canvas with riveted leather. Both materials soften with use and can be mended rather than thrown away.",
    form: "A simple sling carrier, a long-standing hearth tool.",
    checks: {
      solid: { status: "pass", reason: "Canvas body with riveted leather; no plastic parts listed.", badge: "Canvas & riveted leather" },
      repair: { status: "pass", reason: "Canvas and leather can be patched, re-stitched or re-riveted.", badge: "Mendable" },
      ages: { status: "pass", reason: "Canvas and leather soften and darken with use.", badge: "Softens with use" },
    },
  },
  {
    id: "H5", name: "Nambu Tetsubin Kettle", maker: "Iwachu", makerBase: "Japan",
    retailer: "Akazuki", tier: "A", price: "$142.95", material: "Bare cast iron",
    family: "cast-iron", kind: "cookware", matBadge: "Bare cast iron",
    flag: "Warranty not yet confirmed", worth: "We haven't confirmed the warranty yet.",
    aff: ["amazon"], url: "https://www.akazuki.com/products/nanbu-kettle-yakitsuke",
    line: "A Nambu cast-iron kettle from Iwachu in Japan.",
    why: "Iwachu makes this kettle in bare cast iron in the Nambu ironware tradition of northern Japan, a craft that goes back centuries. A tetsubin is meant for daily use, for years.",
    form: "The tetsubin, the traditional Japanese iron kettle.",
    checks: {
      repair: { status: "pass", reason: "Bare iron: surface rust can be cleaned off and the kettle kept in use.", badge: "Restorable" },
      ages: { status: "pass", reason: "Bare iron darkens with use.", badge: "Darkens with use" },
    },
  },
  {
    id: "H6", name: "Cast Iron Trivet", maker: "Iwachu", makerBase: "Japan",
    retailer: "Akazuki", tier: "A", price: "$32.95", material: "Cast iron",
    family: "cast-iron", kind: "tool", matBadge: "Solid cast iron",
    aff: ["amazon"], url: "https://www.akazuki.com/products/cast-iron-trivet",
    line: "A small, solid piece of Japanese cast iron.",
    why: "A cast-iron trivet by Iwachu, the Japanese ironworks that also makes our Nambu kettle. Solid cast iron with nothing to break, at an everyday price.",
    form: "The cast-iron trivet, a kitchen and hearth staple for generations.",
    checks: {
      repair: { status: "pass", reason: "Nothing to break; any rust scrubs off.", badge: "Nothing to break" },
    },
  },
  {
    id: "H7", name: "Blacksmith Andirons", maker: "Pilgrim",
    retailer: "Timeless Wrought Iron", tier: "A", price: "$239", material: "Iron, painted",
    family: "other", kind: "tool", matBadge: "Solid iron",
    flag: "Forged or cast?", worth: "We haven't confirmed whether these are forged or cast.",
    aff: ["amazon"], url: "https://timelesswroughtiron.com/collections/fireplace-andirons/products/blacksmith-fireplace-andirons",
    line: "Blacksmith-style andirons in painted iron.",
    why: "A pair of blacksmith-style iron andirons from Pilgrim, finished in paint. They're an accessible way into solid iron at the hearth.",
    form: "The andiron pair, a hearth form for centuries.",
    checks: {
      solid: { status: "pass", reason: "Iron, with a painted finish.", badge: "Solid iron" },
      repair: { status: "pass", reason: "Solid iron; the paint can be touched up or redone.", badge: "Refinishable" },
      ages: { status: "pass", reason: "Painted iron can be refinished as it wears.", badge: "Refinishable" },
    },
  },
  {
    id: "H8", name: "Handmade Fireplace Bellows", maker: "Garrett Wade",
    retailer: "Garrett Wade", tier: "A", price: "$79", material: "Beechwood, leather, brass",
    family: "hardwood", kind: "tool", matBadge: "Beech, leather & brass",
    flag: "Workshop and origin unnamed", worth: "Garrett Wade doesn't name the workshop that makes them or the country of origin.",
    aff: ["none"], url: "https://garrettwade.com/products/garrett-wade-handmade-fireplace-bellows", isNew: true,
    line: "Beechwood, leather and brass, made by hand.",
    why: "Handmade bellows sold by Garrett Wade, built from beechwood boards, leather and brass. Every material in it is natural and traditional.",
    form: "Hand bellows, a hearth tool for centuries.",
    checks: {
      solid: { status: "pass", reason: "Beechwood, leather and brass; no plastic listed.", badge: "Beech, leather & brass" },
      repair: { status: "unverified", reason: "The workshop is unnamed, so we can't yet say who repairs them." },
      ages: { status: "pass", reason: "Wood and leather darken and soften with use.", badge: "Darkens with use" },
    },
  },
  {
    id: "H9", name: "Black Matte Lattice Steamer", maker: "John Wright Co.",
    retailer: "John Wright Co.", tier: "A", price: "$90", material: "Enameled cast iron, 14.5 lb",
    family: "enameled-cast-iron", kind: "tool", matBadge: "Enameled cast iron",
    flag: "Country of origin conflicting", worth: "Sources disagree on the country of origin; we're checking.",
    aff: ["none"], url: "https://jwright.com/product/black-matte-lattice-steamer/", isNew: true,
    line: "14.5 lb of enameled cast iron for the stove top.",
    why: "A wood-stove steamer from John Wright Co. in enameled cast iron, weighing 14.5 lb. Filled with water, it puts moisture back into dry winter air.",
    form: "The lattice stove steamer, a traditional wood-stove companion.",
  },
  {
    id: "H10", name: "Camp Dutch Oven", maker: "Lodge", makerBase: "USA",
    retailer: "Lodge Cast Iron", tier: "A", price: "$69.95+", material: "Cast iron",
    family: "cast-iron", kind: "cookware", matBadge: "Solid cast iron",
    aff: ["confirmed", "Impact"], url: "https://www.lodgecastiron.com/products/camp-dutch-oven",
    line: "Lodge's camp Dutch oven, made to cook over coals.",
    why: "Lodge, the American cast-iron foundry, makes this camp Dutch oven in plain cast iron. It's made for cooking over coals, the way Dutch ovens were used long before kitchens had ovens.",
    form: "The camp Dutch oven, a centuries-old way to cook over a fire.",
  },
  {
    id: "H11", name: "Lodge Fireplace Tool Set", maker: "Ponderosa Forge", makerBase: "Oregon, USA",
    retailer: "Ponderosa Forge", tier: "M", price: "$825", material: "Trip-hammer forged",
    family: "forged", kind: "tool", matBadge: "Trip-hammer forged",
    aff: ["none"], url: "https://ponderosaforge.com/lodge-fireplace-tool-set/",
    line: "Trip-hammer forged in Oregon.",
    why: "A full fireplace tool set from Ponderosa Forge in Oregon, shaped under a trip hammer, the power hammer blacksmiths have relied on for generations.",
    form: "A standing hearth tool set, the traditional companion to an open fire.",
  },
  {
    id: "H12", name: "Half Round Log Rack", maker: "Ponderosa Forge", makerBase: "Oregon, USA",
    retailer: "Ponderosa Forge", tier: "M", price: "$1,125", material: "Riveted forged bar",
    family: "forged", kind: "tool", matBadge: "Riveted forged bar",
    aff: ["none"], url: "https://ponderosaforge.com/half-round-log-rack/",
    line: "Forged bar, joined with rivets.",
    why: "A half-round log rack from Ponderosa Forge, made from forged bar and joined with rivets, the blacksmith's traditional joint.",
    form: "A half-round log rack in the blacksmith tradition.",
  },
  {
    id: "H13", name: "Custom Iron Fire Screen", maker: "Urban Forge", makerBase: "USA",
    retailer: "Urban Forge", tier: "M", price: "$878.90", material: "Hand-forged iron",
    family: "forged", kind: "tool", matBadge: "Hand-forged iron frame",
    flag: "Mesh material", worth: "We haven't yet confirmed what the mesh is made of.",
    aff: ["none"], url: "https://urbanforge.com/products/custom-size-iron-fire-screen-full-faced-single-panel-with-feet",
    line: "Hand-forged iron, made to the size of your opening.",
    why: "A single-panel fire screen with feet, hand-forged in iron by Urban Forge and made to the size of your fireplace opening.",
    form: "A full-faced single-panel screen, a classic fireplace form.",
    checks: {
      solid: { status: "unverified", reason: "Forged iron frame; the mesh material isn't confirmed yet." },
    },
  },
  {
    id: "H14", name: "Meadow Tool Set, 5 pc", maker: "Urban Forge", makerBase: "USA",
    retailer: "Urban Forge", tier: "M", price: "$752", material: "Forged iron",
    family: "forged", kind: "tool", matBadge: "Forged iron",
    aff: ["none"], url: "https://urbanforge.com/products/meadow-fireplace-tool-set-5-piece-set",
    line: "A five-piece fireplace set in forged iron.",
    why: "Urban Forge's Meadow fireplace tool set: five pieces, forged in iron by a US blacksmith shop.",
    form: "A five-piece standing tool set.",
  },
  {
    id: "H15", name: "Colonial Andirons", maker: "Rumford",
    retailer: "Rumford", tier: "M", price: "$550", material: "Hand-forged steel",
    family: "forged", kind: "tool", matBadge: "Hand-forged steel",
    flag: "Origin and warranty", worth: "We haven't confirmed where they're made or the warranty.",
    aff: ["none"], url: "https://rumford.com/store/andirons.html",
    line: "Hand-forged steel in a Colonial pattern.",
    why: "Hand-forged steel andirons in a Colonial pattern, sold by Rumford. Colonial andirons are among the oldest hearth forms still being made.",
    form: "Colonial-pattern andirons.",
  },
  {
    id: "H16", name: "Spade Topped Andirons", maker: "Rumford",
    retailer: "Rumford", tier: "M", price: "$800", material: "Hand-forged steel",
    family: "forged", kind: "tool", matBadge: "Hand-forged steel",
    flag: "Origin and warranty", worth: "We haven't confirmed where they're made or the warranty.",
    aff: ["none"], url: "https://rumford.com/store/andirons.html",
    line: "Hand-forged steel with spade-shaped tops.",
    why: "Hand-forged steel andirons from Rumford, topped with spade-shaped finials.",
    form: "Spade-topped andirons, a traditional forged design.",
  },
  {
    id: "H17", name: "Country 4 Wood Stove", maker: "Charnwood", makerBase: "UK",
    retailer: "Stoves Online (UK)", tier: "M", price: "~£1,049", priceNote: "Approximate UK price. We're finding the US model and price.",
    material: "Steel + cast iron", family: "cast-iron", kind: "stove", matBadge: "Steel & cast iron",
    flag: "Needs a US model (charnwood.us)", worth: "This is the UK model at a UK price; we're finding the US version (charnwood.us) before recommending it to US readers.",
    aff: ["none"], url: "https://www.stovesonline.co.uk/charnwood-country-4-blu",
    line: "A compact British wood stove in steel and cast iron.",
    why: "Charnwood, a British stove maker, builds the Country 4 from steel and cast iron. It's a small wood stove in a traditional box form.",
    form: "A traditional box wood stove.",
    checks: {
      solid: { status: "pass", reason: "Steel and cast iron.", badge: "Steel & cast iron" },
    },
  },
  {
    id: "H18", name: "Fireview Soapstone Stove", maker: "Woodstock Soapstone", makerBase: "New Hampshire, USA",
    retailer: "Woodstock Soapstone", tier: "P", price: "$4,250", material: "Soapstone + cast iron",
    family: "soapstone", kind: "stove", matBadge: "Soapstone & cast iron",
    aff: ["none"], url: "https://www.woodstove.com/fireview-soapstone-wood-stove",
    line: "Soapstone and cast iron from a New Hampshire stove maker.",
    why: "Woodstock Soapstone, a New Hampshire stove maker, builds the Fireview from soapstone and cast iron. Soapstone soaks up a fire's heat and gives it back slowly, which is why it has been used for stoves and hearths for generations.",
    form: "The soapstone wood stove, an old New England form.",
  },
  {
    id: "H19", name: "Heritage TruHybrid Stove", maker: "HearthStone", makerBase: "Vermont, USA",
    retailer: "Lehman's", tier: "P", price: "$4,999+", material: "Cast iron + soapstone",
    family: "soapstone", kind: "stove", matBadge: "Cast iron & soapstone",
    aff: ["confirmed", "Lehman's"], url: "https://www.lehmans.com/products/hearthstone-heritage-truhybrid-wood-heat-stove",
    line: "Cast iron and soapstone from a Vermont maker.",
    why: "HearthStone, based in Vermont, pairs cast iron with soapstone in the Heritage. Soapstone stores the fire's heat and releases it slowly after the flames die down.",
    form: "A soapstone-and-iron wood stove in a traditional shape.",
  },
  {
    id: "H20", name: "Ring Andirons", maker: "Ponderosa Forge", makerBase: "Oregon, USA",
    retailer: "Ponderosa Forge", tier: "P", price: "$1,575", material: "Hand-forged iron",
    family: "forged", kind: "tool", matBadge: "Hand-forged iron",
    aff: ["none"], url: "https://ponderosaforge.com/ring-andirons/",
    line: "Hand-forged iron andirons with ring tops.",
    why: "Ponderosa Forge's ring andirons are hand-forged iron, the top of the Oregon forge's range on our list.",
    form: "Ring-topped andirons, a classic forged design.",
  },
  {
    id: "H21", name: "Bakeheart Cook Stove", maker: "ESSE", makerBase: "UK",
    retailer: "Stoves Online (UK)", tier: "P", price: "~£3,045", priceNote: "Approximate UK price.",
    material: "Cast iron", family: "cast-iron", kind: "stove", matBadge: "Cast iron",
    flag: "2-year warranty; US EPA status", warranty: "2 years",
    worth: "The warranty is 2 years, and we haven't confirmed US EPA certification or a US price.",
    aff: ["none"], url: "https://www.stovesonline.co.uk/wood_burning_stoves/Esse-Bakeheart-Stoves.html",
    line: "A British cast-iron cook stove.",
    why: "ESSE, a British stove maker, makes the Bakeheart, a cast-iron cook stove that heats the room and cooks from the same fire.",
    form: "The wood-fired cook stove, the old heart of the kitchen.",
    checks: {
      maker: { status: "unverified", reason: "2-year warranty, shorter than we'd like; US EPA status not yet confirmed." },
    },
  },
  {
    id: "H22", name: "250 Multi-fuel Stove", maker: "Dovre",
    retailer: "Stoves Online (UK)", tier: "P", price: "~£1,675", priceNote: "Approximate UK price.",
    material: "Cast iron", family: "cast-iron", kind: "stove", matBadge: "Cast iron",
    flag: "US EPA status and US price", worth: "We haven't confirmed US EPA certification or a US price.",
    aff: ["none"], url: "https://www.stovesonline.co.uk/wood_burning_stoves/Dovre-250-stoves.html",
    line: "A cast-iron stove for wood or other solid fuels.",
    why: "Dovre's 250 is a cast-iron stove that burns wood or other solid fuels. It's listed at its UK price while we confirm a US version.",
    form: "A traditional cast-iron box stove.",
  },
  {
    id: "H23", name: "Morsø 1410 (squirrel sides)", maker: "Morsø", makerBase: "Denmark",
    retailer: "The Firebird", tier: "P", price: "$1,900", material: "Cast iron, EPA-approved",
    family: "cast-iron", kind: "stove", matBadge: "Cast iron",
    warranty: "10 years on the castings",
    aff: ["none"], url: "https://thefirebird.com/products/morso-1410-radiant-wood-stove",
    line: "Danish cast iron, with squirrels cast into the sides.",
    why: "Morsø, the Danish foundry, casts the 1410 with squirrel side panels, and it's EPA-approved for US homes. Its 10-year warranty on the castings is the clearest maker guarantee among our stoves.",
    form: "A small cast-iron stove with decorative cast side panels.",
    checks: {
      solid: { status: "pass", reason: "Cast iron, EPA-approved.", badge: "Cast iron" },
      maker: { status: "pass", reason: "10-year warranty on the castings.", badge: "10-year castings warranty" },
    },
  },
  {
    id: "H24", name: "Jøtul F 602 V3", maker: "Jøtul", makerBase: "Norway",
    retailer: "Casual Furniture World", tier: "P", price: "$2,045", material: "Cast iron, EPA 2020",
    family: "cast-iron", kind: "stove", matBadge: "Cast iron",
    aff: ["none"], url: "https://casualfurnitureworld.com/products/jotul-f-602-v3-wood-stove", isNew: true,
    line: "Norwegian cast iron, certified to EPA 2020.",
    why: "Jøtul, the Norwegian foundry, makes the F 602 in cast iron, and this version meets the EPA's 2020 standard. The F 602 is a long-running Jøtul design.",
    form: "A compact cast-iron box stove.",
    checks: {
      solid: { status: "pass", reason: "Cast iron, EPA 2020 certified.", badge: "Cast iron" },
    },
  },
  {
    id: "H25", name: "RF70 Solid Brass Double Rail Fender", maker: "Fireplace Treatments", makerBase: "USA",
    retailer: "Fireplace Treatments", tier: "P", price: "from $1,800", priceNote: "Made to order; final price by custom quote.",
    material: "100% solid brass, handmade", family: "brass", kind: "hardware", matBadge: "100% solid brass",
    flag: "Custom quote", worth: "It's priced by custom quote; the \"from\" price is a starting point.",
    aff: ["none"], url: "https://fireplacetreatments.com/fireplace-chenets", isNew: true,
    line: "Handmade in 100% solid brass.",
    why: "A double-rail fender made by hand in 100% solid brass by Fireplace Treatments in the USA. With solid brass there's no plating to wear through as it's polished.",
    form: "The double-rail fender, a traditional hearth piece.",
  },

  // ───────────────────────────── Kitchen ─────────────────────────────
  {
    id: "K1", name: "12\" Classic Skillet", maker: "Lodge", makerBase: "USA",
    retailer: "Lodge Cast Iron", tier: "A", price: "$29.90", material: "Cast iron",
    family: "cast-iron", kind: "cookware", matBadge: "Solid cast iron",
    aff: ["confirmed", "Impact"], url: "https://www.lodgecastiron.com/products/round-cast-iron-classic-skillet",
    line: "The everyday American cast-iron skillet.",
    why: "Lodge has cast iron in the USA for more than a century, and its 12-inch skillet is the plainest form of it: one piece of cast iron. It costs less than most nonstick pans and, looked after, will outlast them.",
    form: "The classic round skillet.",
  },
  {
    id: "K2", name: "USA Enamel Dutch Oven", maker: "Lodge", makerBase: "USA",
    retailer: "Lodge Cast Iron", tier: "A", price: "$124.95", material: "Enameled cast iron",
    family: "enameled-cast-iron", kind: "cookware", matBadge: "Enameled cast iron",
    flag: "USA origin to confirm", worth: "We're confirming that it's made in the USA.",
    aff: ["confirmed"], url: "https://www.lodgecastiron.com/products/usa-enamel-cast-iron-dutch-oven",
    line: "Enameled cast iron from Lodge's USA Enamel line.",
    why: "Lodge's Dutch oven from its USA Enamel line: cast iron with a glass enamel finish. We're confirming where it's made before calling it American-made.",
    form: "The round lidded Dutch oven.",
  },
  {
    id: "K3", name: "No. 10 Skillet", maker: "Smithey", makerBase: "USA",
    retailer: "Smithey", tier: "A", price: "$180", material: "Polished cast iron",
    family: "cast-iron", kind: "cookware", matBadge: "Solid cast iron",
    aff: ["likely", "FlexOffers"], url: "https://smithey.com/products/no-10-cast-iron-skillet",
    line: "Polished smooth, the way skillets used to be.",
    why: "Smithey polishes the cooking surface of its No. 10 smooth, the way American skillets were finished before the 1950s. It's one piece of cast iron with nothing to wear out.",
    form: "The classic No. 10 skillet with a polished cooking surface.",
  },
  {
    id: "K4", name: "No. 10 Skillet", maker: "Field Company", makerBase: "USA",
    retailer: "Field Company", tier: "A", price: "$215", material: "Light cast iron",
    family: "cast-iron", kind: "cookware", matBadge: "Solid cast iron",
    aff: ["confirmed", "Awin"], url: "https://fieldcompany.com/products/no-10-cast-iron-skillet",
    line: "Cast iron, made lighter for everyday lifting.",
    why: "Field Company makes its No. 10 in a lighter cast iron than most modern skillets, so it's easier to lift every day. It's still one piece of solid iron.",
    form: "The classic No. 10 skillet.",
  },
  {
    id: "K5", name: "10\" Skillet", maker: "FINEX", makerBase: "USA",
    retailer: "FINEX", tier: "A", price: "$200", material: "Machined cast iron",
    family: "cast-iron", kind: "cookware", matBadge: "Solid cast iron",
    aff: ["likely", "Impact / Amazon"], url: "https://www.finexusa.com/products/cast-iron-skillet",
    line: "Machined-smooth cast iron from the USA.",
    why: "FINEX, a US maker, machines the cooking surface of its 10-inch skillet smooth. Underneath, it's plain cast iron, seasoned rather than coated.",
    form: "A cast-iron skillet with a machined cooking surface.",
  },
  {
    id: "K6", name: "Mineral B Fry Pan", maker: "de Buyer", makerBase: "France",
    retailer: "de Buyer USA", tier: "A", price: "$105", material: "Carbon steel",
    family: "carbon-steel", kind: "cookware", matBadge: "Carbon steel",
    aff: ["confirmed", "UpPromote", "10% commission"], url: "https://www.debuyer-usa.com/products/mineral-b-fry-pan",
    line: "French carbon steel, a professional kitchen staple.",
    why: "de Buyer, in France, makes the Mineral B from carbon steel. It seasons like cast iron but is lighter, which is why carbon-steel pans are a fixture in professional kitchens.",
    form: "The French carbon-steel fry pan.",
  },
  {
    id: "K7", name: "26cm Iron Frypan", maker: "Solidteknics", makerBase: "Australia",
    retailer: "Solidteknics", tier: "A", price: "$161", material: "One-piece wrought iron",
    family: "carbon-steel", kind: "cookware", matBadge: "One-piece wrought iron",
    aff: ["confirmed", undefined, "8% commission; product images included for affiliates"],
    imageRights: "Affiliate program includes product images (program not yet joined).",
    url: "https://solidteknics.com/en-us/products/26cm-iron-frypan",
    line: "One piece of wrought iron, handle and all.",
    why: "Solidteknics, an Australian maker, forms this frying pan from a single piece of wrought iron, so there are no rivets or joints to loosen. Season it like cast iron.",
    form: "A plain frying pan, made in a single piece.",
  },
  {
    id: "K8", name: "Maple Board R-Series", maker: "John Boos", makerBase: "USA",
    retailer: "John Boos", tier: "A", price: "$94.95+", material: "Hard maple",
    family: "hardwood", kind: "board", matBadge: "Solid hard maple",
    flag: "1-year warranty", warranty: "1 year", worth: "John Boos's warranty is 1 year.",
    aff: ["likely", "FlexOffers / Amazon"], url: "https://www.johnboos.com/products/maple-cutting-boards-1-1-2-thick-r-board-series",
    line: "Hard maple, 1½ inches thick.",
    why: "John Boos makes this board from solid hard maple, 1½ inches thick. Wood boards like this can be sanded and re-oiled for decades.",
    form: "A thick solid-maple cutting board.",
  },
  {
    id: "K9", name: "Essentials Spoon Set", maker: "Jonathan's Spoons", makerBase: "Pennsylvania, USA",
    retailer: "Jonathan's Spoons", tier: "A", price: "$122", material: "Wild cherry",
    family: "hardwood", kind: "board", matBadge: "Wild cherry",
    flag: "Warranty not yet confirmed", worth: "We haven't confirmed the warranty.",
    aff: ["confirmed", "Own program"], url: "https://woodspoon.com/product/essentials-set-small/",
    line: "Wild cherry spoons from a Pennsylvania workshop.",
    why: "Jonathan's Spoons, a Pennsylvania workshop, makes these spoons from wild cherry. Cherry darkens with age, and a wooden spoon needs nothing more than an occasional oiling.",
    form: "Simple wooden cooking spoons.",
  },
  {
    id: "K10", name: "11\" Spun Iron Chef's Pan", maker: "Netherton Foundry", makerBase: "UK",
    retailer: "Netherton Foundry", tier: "A", price: "£125", priceNote: "UK price; the maker ships to the US.",
    material: "Spun iron", family: "carbon-steel", kind: "cookware", matBadge: "Spun iron",
    flag: "Thickness to confirm", worth: "We haven't confirmed the thickness of the iron.",
    aff: ["amazon"], url: "https://www.netherton-foundry.co.uk/We-ship-to-USA/11-inch-chef-pan-USA",
    line: "Spun iron from an English foundry.",
    why: "Netherton Foundry in the UK spins this chef's pan from iron and ships it to the US. It's seasoned like cast iron and lighter to handle.",
    form: "The deep chef's pan.",
  },
  {
    id: "K11", name: "Signature Dutch Oven 5.5 qt", maker: "Le Creuset", makerBase: "France",
    retailer: "Le Creuset", tier: "M", price: "$455", material: "Enameled cast iron",
    family: "enameled-cast-iron", kind: "cookware", matBadge: "Enameled cast iron",
    aff: ["confirmed", "Partnerize", "Product images included for affiliates"],
    imageRights: "Affiliate program includes product images (program not yet joined).",
    url: "https://www.lecreuset.com/signature-round-dutch-oven/21177US.html",
    line: "French enameled cast iron, made since 1925.",
    why: "Le Creuset has cast enameled iron in France since 1925, and the round Dutch oven is its signature piece. Heavy cast iron under glass enamel, for braises and stews that cook slowly.",
    form: "The round enameled Dutch oven.",
  },
  {
    id: "K12", name: "La Cocotte 5.5 qt", maker: "Staub", makerBase: "France",
    retailer: "Staub", tier: "M", price: "$429.99", material: "Enameled cast iron",
    family: "enameled-cast-iron", kind: "cookware", matBadge: "Enameled cast iron",
    aff: ["confirmed", "CJ"], url: "https://www.staub.com/us/product/la-cocotte-5.5-qt-round-dutch-oven-matte-black/40509-310-0.html",
    line: "French enameled cast iron in matte black.",
    why: "Staub makes La Cocotte in France in enameled cast iron: a heavy, lidded pot made for slow cooking.",
    form: "The round cocotte.",
  },
  {
    id: "K13", name: "5.5 qt Dutch Oven", maker: "Smithey", makerBase: "USA",
    retailer: "Smithey", tier: "M", price: "$300", material: "Bare cast iron",
    family: "cast-iron", kind: "cookware", matBadge: "Bare cast iron",
    aff: ["likely"], url: "https://smithey.com/products/5-5-qt-dutch-oven",
    line: "Bare iron, so there's no enamel to chip.",
    why: "Smithey's Dutch oven is bare cast iron, with no enamel to chip or craze. It seasons with use, like the brand's skillets.",
    form: "The lidded Dutch oven.",
  },
  {
    id: "K14", name: "Casserole 5.5 L", maker: "Skeppshult", makerBase: "Sweden",
    retailer: "Skeppshult", tier: "M", price: "$359", material: "Cast iron",
    family: "cast-iron", kind: "cookware", matBadge: "Solid cast iron",
    aff: ["amazon"], url: "https://skeppshult.com/products/casserole-round-5-5-iron-lid",
    line: "Swedish cast iron, lid and all.",
    why: "Skeppshult, a Swedish foundry, makes this 5.5-litre casserole in cast iron with an iron lid.",
    form: "The lidded cast-iron casserole.",
  },
  {
    id: "K15", name: "M'Heritage Sauce Pan", maker: "Mauviel 1830", makerBase: "France",
    retailer: "Mauviel USA", tier: "M", price: "$449.95", material: "2.5 mm copper",
    family: "copper", kind: "cookware", matBadge: "2.5 mm copper",
    aff: ["confirmed", "Awin / Collabs"], url: "https://mauviel-usa.com/products/mauviel-mheritage-m250-b-copper-sauce-pan-with-lid-brass-handle",
    line: "2.5 mm copper with a brass handle.",
    why: "Mauviel has made copper cookware in France since 1830. This lidded sauce pan is 2.5 mm copper with a brass handle.",
    form: "The lidded copper sauce pan.",
  },
  {
    id: "K16", name: "11.25\" Sauté", maker: "Duparquet", makerBase: "USA",
    retailer: "Duparquet", tier: "M", price: "$650+", material: "3 mm tinned copper",
    family: "copper", kind: "cookware", matBadge: "3 mm tinned copper", tinned: true,
    aff: ["none"], url: "https://duparquet.com/products/1125-saut",
    line: "3 mm copper, lined with tin.",
    why: "Duparquet, an American maker, builds this sauté pan from 3 mm copper lined with tin, the traditional French way. When the tin wears thin, it's re-tinned and goes back to work.",
    form: "The straight-sided copper sauté pan.",
  },
  {
    id: "K17", name: "8.5\" Fait Tout", maker: "Duparquet", makerBase: "USA",
    retailer: "Duparquet", tier: "M", price: "$570+", material: "3 mm tinned copper",
    family: "copper", kind: "cookware", matBadge: "3 mm tinned copper", tinned: true,
    aff: ["none"], url: "https://duparquet.com/products/85-fait-tout",
    line: "A tin-lined copper fait tout.",
    why: "A fait tout, the French \"do-everything\" pan, in 3 mm tinned copper from Duparquet. Like all tin-lined copper, it can be re-tinned when the lining wears.",
    form: "The fait tout, a classic French pan.",
  },
  {
    id: "K18", name: "Gyuto 230mm", maker: "Blenheim Forge", makerBase: "London, UK",
    retailer: "Blenheim Forge", tier: "M", price: "£320–350", priceNote: "UK price.",
    material: "Hand-forged steel", family: "forged", kind: "blade", matBadge: "Hand-forged steel",
    aff: ["none"], url: "https://blenheimforge.co.uk/product/gyuto/",
    line: "A chef's knife, hand-forged in London.",
    why: "Blenheim Forge hand-forges this 230 mm gyuto, the Japanese chef's knife, in its London workshop. A good forged blade is sharpened, not replaced.",
    form: "The gyuto, the Japanese chef's knife.",
  },
  {
    id: "K19", name: "Hand Grain Mill", maker: "Country Living", makerBase: "USA",
    retailer: "Country Living Grain Mills", tier: "M", price: "$810", material: "Replaceable plates",
    family: "other", kind: "tool", matBadge: "Replaceable plates",
    flag: "Body material to confirm", worth: "We haven't confirmed what the body is made of.",
    aff: ["amazon"], url: "https://www.countrylivinggrainmills.com/products/grain-mill/",
    line: "A hand-cranked mill with replaceable grinding plates.",
    why: "Country Living, a US maker, builds this hand grain mill with grinding plates that can be replaced as they wear. We're confirming what the body is made of.",
    form: "The hand grain mill, a traditional kitchen tool.",
    checks: {
      solid: { status: "unverified", reason: "Body material not yet confirmed." },
      repair: { status: "pass", reason: "The grinding plates are replaceable.", badge: "Replaceable plates" },
      ages: { status: "unverified", reason: "Depends on the body material, which we're confirming." },
    },
  },
  {
    id: "K20", name: "Walnut End-Grain Block", maker: "John Boos", makerBase: "USA",
    retailer: "John Boos", tier: "M", price: "$541.95", material: "Black walnut",
    family: "hardwood", kind: "board", matBadge: "Solid black walnut",
    flag: "1-year warranty", warranty: "1 year", worth: "John Boos's warranty is 1 year.",
    aff: ["likely", "Amazon"], url: "https://www.johnboos.com/products/walnut-chopping-block-reversible-end-grain-2-1-4-thick-ccb-series",
    line: "End-grain black walnut, 2¼ inches thick.",
    why: "An end-grain chopping block in black walnut from John Boos, 2¼ inches thick. End grain is the traditional butcher's surface: the knife edge slips between the wood fibres instead of cutting across them.",
    form: "The end-grain chopping block.",
  },
  {
    id: "K21", name: "M'Heritage 10-pc Set", maker: "Mauviel 1830", makerBase: "France",
    retailer: "Mauviel USA", tier: "P", price: "$2,999.95", material: "2.5 mm copper",
    family: "copper", kind: "cookware", matBadge: "2.5 mm copper",
    aff: ["confirmed"], url: "https://mauviel-usa.com/products/mauviel-mheritage-m250-b-10-piece-cookware-set-brass-handles",
    line: "A full kitchen of 2.5 mm copper.",
    why: "Ten pieces of Mauviel's M'Heritage cookware in 2.5 mm copper with brass handles, from a French maker working in copper since 1830. A set like this is bought once.",
    form: "A classic copper batterie de cuisine.",
  },
  {
    id: "K22", name: "The Forge Set", maker: "Blenheim Forge", makerBase: "London, UK",
    retailer: "Blenheim Forge", tier: "P", price: "£1,260+", priceNote: "UK price.",
    material: "Hand-forged steel", family: "forged", kind: "blade", matBadge: "Hand-forged steel",
    aff: ["none"], url: "https://blenheimforge.co.uk/product/classic-range-kit/",
    line: "A full set of hand-forged knives.",
    why: "Blenheim Forge's full knife kit, every blade hand-forged in its London workshop.",
    form: "A classic set of kitchen knives.",
  },
  {
    id: "K23", name: "AA Maple Butcher Block", maker: "John Boos", makerBase: "USA",
    retailer: "John Boos", tier: "P", price: "$1,559+", material: "End-grain maple",
    family: "hardwood", kind: "board", matBadge: "End-grain maple",
    flag: "1-year warranty", warranty: "1 year", worth: "John Boos's warranty is 1 year.",
    aff: ["likely", "Amazon"], url: "https://www.johnboos.com/products/aa-maple-butcher-block-with-16-thick-end-grain-top",
    line: "A butcher block with a 16-inch-thick end-grain top.",
    why: "John Boos's butcher block, built around a 16-inch-thick top of end-grain maple. It's the traditional butcher's block, made to be resurfaced rather than replaced.",
    form: "The traditional butcher block.",
  },
  {
    id: "K24", name: "AGA Classic 100", maker: "AGA", makerBase: "UK",
    retailer: "AGA Living (UK)", tier: "P", price: "£13,500", priceNote: "UK price. US pricing is through agarangeusa.com.",
    material: "Cast iron + enamel", family: "enameled-cast-iron", kind: "stove", matBadge: "Enameled cast iron",
    flag: "US price via agarangeusa.com", worth: "This is the UK price; we're checking US pricing through agarangeusa.com.",
    aff: ["none"], url: "https://www.agaliving.com/products/aga-classic/aga-classic-100-twin-hotplates-cream/",
    line: "The British cast-iron range.",
    why: "The AGA Classic 100 is a cast-iron range finished in enamel, with twin hotplates. It's the centrepiece of many British kitchens.",
    form: "The heat-storage range cooker, a British kitchen classic.",
    checks: {
      solid: { status: "pass", reason: "Cast iron with an enamel finish.", badge: "Enameled cast iron" },
    },
  },
  {
    id: "K25", name: "M'Tradition Tinned Copper Fish Kettle", maker: "Mauviel 1830", makerBase: "France",
    retailer: "Mauviel USA", tier: "P", price: "$1,950", material: "2.6 mm copper, tin-lined, handmade",
    family: "copper", kind: "cookware", matBadge: "2.6 mm tinned copper", tinned: true,
    flag: "Confirm which size is $1,950", worth: "We're confirming which size is the $1,950 one.",
    aff: ["confirmed"], url: "https://mauviel-usa.com/products/mauviel-mtradition-hammered-copper-tin-inside-fish-kettle-with-grid-lid-brass-handle", isNew: true,
    line: "Hammered copper lined with tin, made by hand.",
    why: "A fish kettle with grid and lid in 2.6 mm hammered copper, tin-lined and handmade by Mauviel. Tin-lined copper can be re-tinned as it wears.",
    form: "The fish kettle, a classic of the French kitchen.",
  },

  // ───────────────────────────── Hardware ─────────────────────────────
  {
    id: "W1", name: "30\" Strap Hinge", maker: "Historic Housefitters", makerBase: "USA",
    retailer: "Historic Housefitters", tier: "A", price: "$138.75", material: "Hand-forged iron",
    family: "forged", kind: "hardware", matBadge: "Hand-forged iron",
    aff: ["none"], url: "https://www.historichousefitters.com/Hand%20Forged%20Iron/STRAP%20HINGE%20HARDWARE",
    line: "A 30-inch strap hinge, forged by hand.",
    why: "Historic Housefitters, a US maker, hand-forges this 30-inch strap hinge in iron. It's the hinge that hung plank and barn doors for centuries.",
    form: "The strap hinge, used on plank doors for centuries.",
  },
  {
    id: "W2", name: "Heart Thumblatch Set", maker: "Historic Housefitters", makerBase: "USA",
    retailer: "Historic Housefitters", tier: "A", price: "$284", material: "Hand-forged iron",
    family: "forged", kind: "hardware", matBadge: "Hand-forged iron",
    aff: ["none"], url: "https://www.historichousefitters.com/Hand%20Forged%20Iron/ENTRANCE%20THUMBLATCH%20SETS",
    line: "A hand-forged thumblatch with a heart motif.",
    why: "A hand-forged iron entrance thumblatch set from Historic Housefitters, finished with a heart motif.",
    form: "The thumblatch, the original door latch of early American houses.",
  },
  {
    id: "W3", name: "Heart Tip Rim Latch", maker: "Acorn Mfg.", makerBase: "Massachusetts, USA",
    retailer: "Doorware.com", tier: "A", price: "$192.60", material: "Forged iron",
    family: "forged", kind: "hardware", matBadge: "Forged iron",
    aff: ["amazon"], url: "https://www.doorware.com/products/heart-tip-forged-iron-rim-latch-set-acorn-rufbi",
    line: "A forged-iron rim latch from Massachusetts.",
    why: "Acorn Manufacturing, a Massachusetts maker that's still operating, makes this forged-iron rim latch with heart-shaped tips. A rim latch mounts on the face of the door, as latches did before mortise locks.",
    form: "The surface-mounted rim latch.",
    checks: {
      maker: { status: "unverified", reason: "The maker is confirmed still operating; the warranty isn't verified yet." },
    },
  },
  {
    id: "W4", name: "Prairie Crystal Knob Set", maker: "Nostalgic Warehouse",
    retailer: "Nostalgic Warehouse", tier: "A", price: "$229.50", material: "Forged brass + crystal",
    family: "brass", kind: "hardware", matBadge: "Forged brass & crystal",
    aff: ["amazon"], url: "https://nostalgicwarehouse.com/products/prairie-long-plate-crystal-knob-antique-brass",
    line: "Forged brass with crystal knobs.",
    why: "Nostalgic Warehouse's Prairie set pairs a long backplate in forged brass with crystal knobs.",
    form: "The long-plate crystal knob set, an early-twentieth-century classic.",
    checks: {
      ages: { status: "pass", reason: "Crystal doesn't wear; forged brass mellows with handling.", badge: "Mellows with handling" },
    },
  },
  {
    id: "W5", name: "Classic Brass Egg Knob", maker: "Emtek",
    retailer: "Doorware.com", tier: "A", price: "$156.80", material: "Solid brass",
    family: "brass", kind: "hardware", matBadge: "Solid brass",
    aff: ["amazon"], url: "https://www.doorware.com/products/classic-brass-egg-knob-with-quincy-rosette-emtek-8531e",
    line: "A solid brass egg knob.",
    why: "Emtek's egg-shaped door knob in solid brass, on a Quincy rosette. Solid brass can be polished bright or left to mellow.",
    form: "The egg knob, a traditional door-knob shape.",
  },
  {
    id: "W6", name: "Emry Crystal Knob Set", maker: "Rejuvenation",
    retailer: "Rejuvenation", tier: "A", price: "$279", material: "Solid brass + crystal",
    family: "brass", kind: "hardware", matBadge: "Solid brass & crystal",
    flag: "Origin and warranty", worth: "We haven't confirmed where it's made or the warranty.",
    aff: ["likely", "Sovrn"], url: "https://www.rejuvenation.com/products/emry-round-interior-door-set/?subGroupId=emry-round-interior-door-set-SLAV-handletype-crystalknob",
    line: "Solid brass and crystal for interior doors.",
    why: "Rejuvenation's Emry interior door set, in solid brass with crystal knobs.",
    form: "The round crystal door knob.",
    checks: {
      ages: { status: "pass", reason: "Crystal doesn't wear; solid brass mellows with handling.", badge: "Mellows with handling" },
    },
  },
  {
    id: "W7", name: "Sash Cabinet Pull", maker: "Rocky Mountain Hardware",
    retailer: "San Diego Hardware", tier: "A", price: "$73", material: "Hand-cast bronze",
    family: "bronze", kind: "hardware", matBadge: "Hand-cast bronze",
    aff: ["none"], url: "https://sandiegohardware.com/products/front-mount-sash-cabinet-pull",
    line: "A cabinet pull, cast by hand in bronze.",
    why: "A front-mount sash pull hand-cast in bronze by Rocky Mountain Hardware. Bronze darkens with handling and doesn't rust.",
    form: "The sash pull, a traditional cabinet pull.",
  },
  {
    id: "W8", name: "Bronze Girth Hook", maker: "Sun Valley Bronze",
    retailer: "San Diego Hardware", tier: "A", price: "$224", material: "Sand-cast bronze",
    family: "bronze", kind: "hardware", matBadge: "Sand-cast bronze",
    aff: ["none"], url: "https://sandiegohardware.com/products/solid-bronze-single-prong-girth-hook",
    line: "A single-prong hook, sand-cast in bronze.",
    why: "Sun Valley Bronze sand-casts this single-prong hook in solid bronze. Sand casting is the old foundry method: each piece is poured into its own sand mould.",
    form: "A simple single-prong hook.",
  },
  {
    id: "W9", name: "Cotswold Coat Hook", maker: "Armac Martin", makerBase: "England",
    retailer: "Armac Martin", tier: "A", price: "$74.20", material: "Solid brass",
    family: "brass", kind: "hardware", matBadge: "Solid brass",
    aff: ["amazon"], url: "https://www.armacmartin.com/products/cotswold-hat-and-coat-hook",
    line: "Solid brass from an English maker.",
    why: "Armac Martin, in England, makes the Cotswold hat and coat hook in solid brass. It's a small, everyday piece and one of the most affordable ways into solid brass on our list.",
    form: "The traditional hat and coat hook.",
  },
  {
    id: "W10", name: "Cotswold Cupboard Latch", maker: "Armac Martin", makerBase: "England",
    retailer: "Armac Martin", tier: "A", price: "$169.10", material: "Solid brass",
    family: "brass", kind: "hardware", matBadge: "Solid brass",
    aff: ["amazon"], url: "https://www.armacmartin.com/products/cotswold-cupboard-latch",
    line: "A solid brass cupboard latch.",
    why: "A solid brass cupboard latch in Armac Martin's Cotswold range, from the English maker.",
    form: "The cupboard latch, a traditional cabinet catch.",
  },
  {
    id: "W11", name: "Rosette Bail Pull", maker: "Horton Brasses (Londonderry)",
    retailer: "Horton Brasses", tier: "A", price: "$114.24", material: "Lost-wax cast (metal not named)",
    family: "other", kind: "hardware", matBadge: "Lost-wax cast",
    flag: "Metal not named", worth: "The seller doesn't name the metal, so we can't yet call it solid brass.",
    aff: ["none"], url: "https://www.horton-brasses.com/shop/londonderry-brasses/londonderry-rosette-pulls/ld-rp-9-3-1-4-rosette-pull/",
    line: "A lost-wax cast bail pull with rosettes.",
    why: "A rosette bail pull from Horton Brasses' Londonderry line, made by lost-wax casting. Horton doesn't name the metal, so we're checking before calling it solid brass.",
    form: "The bail pull, the classic furniture drawer pull.",
    checks: {
      solid: { status: "unverified", reason: "The metal isn't named by the seller." },
      repair: { status: "unverified", reason: "Depends on the metal, which we're confirming." },
      ages: { status: "unverified", reason: "Depends on the metal, which we're confirming." },
    },
  },
  {
    id: "W12", name: "Colonial Bronze Lever", maker: "Ashley Norton",
    retailer: "San Diego Hardware", tier: "A", price: "$288", material: "Solid bronze",
    family: "bronze", kind: "hardware", matBadge: "Solid bronze",
    aff: ["amazon"], url: "https://sandiegohardware.com/products/colonial-solid-bronze-door-lever-set",
    line: "A solid bronze lever in a Colonial shape.",
    why: "Ashley Norton's Colonial lever set in solid bronze, at an accessible price for solid bronze door hardware.",
    form: "A Colonial-style door lever.",
  },
  {
    id: "W13", name: "Estate Rope Knobset", maker: "Baldwin Estate",
    retailer: "Doorware.com", tier: "M", price: "$393.19", material: "Forged brass",
    family: "brass", kind: "hardware", matBadge: "Forged brass",
    aff: ["amazon"], url: "https://www.doorware.com/products/solid-brass-rope-knobset-baldwin-5064",
    line: "Forged brass with a rope-pattern detail.",
    why: "From Baldwin's Estate line, this knobset is forged brass with a rope-pattern detail.",
    form: "The rope-pattern knob, a traditional brass motif.",
  },
  {
    id: "W14", name: "New York Entry Set", maker: "Nostalgic Warehouse",
    retailer: "Nostalgic Warehouse", tier: "M", price: "$390", material: "Forged brass",
    family: "brass", kind: "hardware", matBadge: "Forged brass",
    aff: ["amazon"], url: "https://nostalgicwarehouse.com/products/new-york-long-plate-homestead-knob-entry-set-antique-brass",
    line: "A long-plate entry set in forged brass.",
    why: "Nostalgic Warehouse's New York entry set: a long backplate with a Homestead knob, in forged brass.",
    form: "The long-plate entry set.",
  },
  {
    id: "W15", name: "Hadlyme Thumblatch (c.1810)", maker: "Historic Housefitters", makerBase: "USA",
    retailer: "Historic Housefitters", tier: "M", price: "$481", material: "Hand-forged iron",
    family: "forged", kind: "hardware", matBadge: "Hand-forged iron",
    aff: ["none"], url: "https://www.historichousefitters.com/Hand%20Forged%20Iron/ENTRANCE%20THUMBLATCH%20SETS",
    line: "A thumblatch after a design from about 1810.",
    why: "Historic Housefitters hand-forges the Hadlyme thumblatch in iron, after a design dated to about 1810. A two-hundred-year-old form, still forged by hand.",
    form: "A thumblatch after an early-1800s design.",
  },
  {
    id: "W16", name: "Round Door Knocker", maker: "Rocky Mountain Hardware",
    retailer: "Rocky Mountain Hardware", tier: "M", price: "$660", material: "Silicon bronze",
    family: "bronze", kind: "hardware", matBadge: "Silicon bronze",
    aff: ["none"], url: "https://www.rockymountainhardware.com/product/round-door-knocker-8-1-4/",
    line: "A round knocker in silicon bronze.",
    why: "A round door knocker from Rocky Mountain Hardware in silicon bronze, an alloy valued outdoors because it stands up to weather.",
    form: "The ring door knocker.",
  },
  {
    id: "W17", name: "Classic Arched Lever", maker: "Rocky Mountain Hardware",
    retailer: "San Diego Hardware", tier: "M", price: "$724", material: "Cast bronze",
    family: "bronze", kind: "hardware", matBadge: "Cast bronze",
    aff: ["none"], url: "https://sandiegohardware.com/products/classic-arched-lever-set",
    line: "A cast bronze lever with an arched profile.",
    why: "Rocky Mountain Hardware casts this arched lever set in bronze.",
    form: "An arched lever in a traditional profile.",
  },
  {
    id: "W18", name: "Bronze Cane Bolt", maker: "Sun Valley Bronze",
    retailer: "San Diego Hardware", tier: "M", price: "$511", material: "Sand-cast bronze",
    family: "bronze", kind: "hardware", matBadge: "Sand-cast bronze",
    aff: ["none"], url: "https://sandiegohardware.com/products/solid-bronze-cane-bolt",
    line: "A sand-cast bronze cane bolt for gates and doors.",
    why: "Sun Valley Bronze sand-casts this cane bolt in solid bronze: the drop bolt that holds a gate or door leaf in place.",
    form: "The cane bolt, a traditional gate and door bolt.",
  },
  {
    id: "W19", name: "Heritage Entry Set", maker: "Emtek",
    retailer: "San Diego Hardware", tier: "M", price: "$480.80", material: "Brass (parts from China)",
    family: "brass", kind: "hardware", matBadge: "Brass",
    flag: "Weakest mid pick", worth: "Some parts are made in China, and it's the weakest of our mid-price picks.",
    aff: ["amazon"], url: "https://sandiegohardware.com/products/transitional-heritage-entry-set",
    line: "A brass entry set at a mid-range price.",
    why: "Emtek's Heritage entry set in brass. Some parts are made in China, and we rate it the weakest of our mid-price picks.",
    form: "A traditional entry handleset.",
    checks: {
      solid: { status: "pass", reason: "Brass, with some parts made in China.", badge: "Brass" },
    },
  },
  {
    id: "W20", name: "Cotswold Pot Rail + Hooks", maker: "Armac Martin", makerBase: "England",
    retailer: "Armac Martin", tier: "M", price: "$947", material: "Solid brass",
    family: "brass", kind: "hardware", matBadge: "Solid brass",
    aff: ["amazon"], url: "https://www.armacmartin.com/products/cotswold-brass-pot-rail-s-hooks",
    line: "A solid brass pot rail with S-hooks.",
    why: "A solid brass pot rail with S-hooks from Armac Martin's Cotswold range. A rail like this comes with you when you move.",
    form: "The kitchen pot rail.",
  },
  {
    id: "W21", name: "Estate Minneapolis Entry", maker: "Baldwin Estate",
    retailer: "San Diego Hardware", tier: "P", price: "$1,897.60", material: "Forged brass mortise",
    family: "brass", kind: "hardware", matBadge: "Forged brass",
    aff: ["amazon"], url: "https://sandiegohardware.com/products/minneapolis-20-entry-set",
    line: "A forged brass mortise entry set.",
    why: "Baldwin's Estate Minneapolis entry set, in forged brass with a mortise lock set into the edge of the door, the way traditional entry locks were fitted.",
    form: "The mortise entry set.",
  },
  {
    id: "W22", name: "Kensington Mortise Handleset", maker: "Baldwin Estate",
    retailer: "Doorware.com", tier: "P", price: "$1,750.59", material: "Solid brass",
    family: "brass", kind: "hardware", matBadge: "Solid brass",
    aff: ["amazon"], url: "https://www.doorware.com/products/solid-brass-kensington-mortise-handleset-baldwin-6950",
    line: "A solid brass mortise handleset.",
    why: "Baldwin's Kensington handleset in solid brass, fitted with a mortise lock.",
    form: "A traditional mortise handleset.",
  },
  {
    id: "W23", name: "Emry French Door Set", maker: "Rejuvenation",
    retailer: "Rejuvenation", tier: "P", price: "$1,667", material: "Solid brass",
    family: "brass", kind: "hardware", matBadge: "Solid brass",
    flag: "Choose the traditional lock", worth: "Choose the traditional lock option when you order.",
    aff: ["likely"], url: "https://www.rejuvenation.com/products/emry-exterior-french-door-set/?subGroupId=emry-exterior-french-door-set-SLAV-handletype-crystalknob",
    line: "Solid brass and crystal for French doors.",
    why: "Rejuvenation's Emry exterior French door set, in solid brass with crystal knobs.",
    form: "A crystal-knob French door set.",
  },
  {
    id: "W24", name: "Bordeaux Entry Set", maker: "Rocky Mountain Hardware",
    retailer: "Rocky Mountain Hardware", tier: "P", price: "$2,546", material: "Cast silicon bronze",
    family: "bronze", kind: "hardware", matBadge: "Cast silicon bronze",
    aff: ["none"], url: "https://www.rockymountainhardware.com/product/bordeaux-entry-set-3-x-28-13-16/", isNew: true,
    line: "Cast silicon bronze for the front door.",
    why: "Rocky Mountain Hardware's Bordeaux entry set, cast in silicon bronze, an alloy chosen for front doors because it stands up to weather.",
    form: "A traditional entry set.",
  },
  {
    id: "W25", name: "Solid Bronze Arched Thumb-Latch Mortise Entry", maker: "Ashley Norton",
    retailer: "House of Antique Hardware", tier: "P", price: "$1,874.90", material: "Sand-cast bronze",
    family: "bronze", kind: "hardware", matBadge: "Sand-cast bronze",
    flag: "2-year warranty; stock", warranty: "2 years",
    worth: "The warranty is 2 years, and stock needs checking before you order.",
    aff: ["none"], url: "https://www.houseofantiquehardware.com/solid-bronze-arched-thumb-latch-mortise-entry-set", isNew: true,
    line: "A sand-cast bronze thumb-latch entry.",
    why: "Ashley Norton's arched thumb-latch entry set, sand-cast in bronze, joins the old thumb-latch form to a mortise lock.",
    form: "The thumb-latch entry, an early American form.",
    checks: {
      maker: { status: "unverified", reason: "2-year warranty, shorter than we'd like; stock to be confirmed." },
    },
  },
];

// ───────────────────────────── Derivation ─────────────────────────────

const TIER: Record<Raw["tier"], Tier> = { A: "accessible", M: "mid", P: "premium" };
const CATEGORY: Record<string, Category> = { H: "hearth", K: "kitchen", W: "hardware" };

function slugify(s: string) {
  return s
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ø/gi, "o")
    .toLowerCase()
    .replace(/["'’]/g, "")
    .replace(/&|\+/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** maker + name, merging any overlap ("AGA" + "AGA Classic 100" -> "aga-classic-100"). */
function pieceSlug(maker: string, name: string) {
  const m = slugify(maker).split("-");
  const n = slugify(name).split("-");
  let k = Math.min(m.length, n.length);
  while (k > 0 && m.slice(-k).join("-") !== n.slice(0, k).join("-")) k--;
  return [...m, ...n.slice(k)].join("-");
}

const SOLID_REASON: Record<MaterialFamily, string> = {
  "cast-iron": "Solid cast iron; no plating and no nonstick coating.",
  "enameled-cast-iron": "Cast iron under a glass enamel finish; no nonstick coating.",
  soapstone: "Soapstone and cast iron, the materials of traditional stoves.",
  forged: "Solid forged metal, not cast pot metal or stamped sheet.",
  "carbon-steel": "Solid iron or carbon steel; no nonstick coating.",
  copper: "Heavy-gauge copper, not a thin plated layer.",
  brass: "Solid brass, not plated zinc or a \"brass finish\".",
  bronze: "Solid cast bronze, not plated.",
  hardwood: "Solid hardwood, not veneer or MDF.",
  other: "See notes.",
};

function defaultRepair(r: Raw): StandardCheck {
  if (r.kind === "stove") return { status: "unverified", reason: "Parts and service availability not yet verified." };
  if (r.kind === "blade") return { status: "pass", reason: "A forged blade can be sharpened for decades.", badge: "Re-sharpenable" };
  if (r.kind === "board") return { status: "pass", reason: "Can be sanded and re-oiled when it's worn.", badge: "Can be resurfaced" };
  switch (r.family) {
    case "cast-iron":
    case "carbon-steel":
      return { status: "pass", reason: "If it rusts or loses its seasoning, scrub it back and re-season it.", badge: "Re-seasonable" };
    case "enameled-cast-iron":
      return { status: "pass", reason: "One cast body with nothing to wear out, though chipped enamel isn't a home repair.", badge: "One-piece cast body" };
    case "copper":
      return r.tinned
        ? { status: "pass", reason: "The tin lining can be re-tinned when it wears through.", badge: "Re-tinnable" }
        : { status: "unverified", reason: "Copper can be polished back; we're confirming the lining and handle construction." };
    case "forged":
      return { status: "pass", reason: "Solid forged iron can be cleaned, refinished or re-worked by a smith.", badge: "Refinishable" };
    case "brass":
    case "bronze":
      return { status: "pass", reason: "Solid metal can be cleaned and refinished rather than replaced.", badge: "Refinishable" };
    default:
      return { status: "unverified", reason: "Not yet verified." };
  }
}

function defaultAges(r: Raw): StandardCheck {
  if (r.kind === "stove") return { status: "pass", reason: "Cast iron wears in rather than wearing out.", badge: "Wears in" };
  if (r.kind === "blade") return { status: "pass", reason: "A well-kept forged blade takes on a patina with use.", badge: "Takes a patina" };
  switch (r.family) {
    case "cast-iron":
      return { status: "pass", reason: "The seasoning darkens and improves with use.", badge: "Seasons with use" };
    case "carbon-steel":
      return { status: "pass", reason: "Turns dark and slick as the seasoning builds.", badge: "Seasons with use" };
    case "enameled-cast-iron":
      return { status: "pass", reason: "The cast iron underneath doesn't wear out; the enamel asks only for gentle care.", badge: "Wears in" };
    case "soapstone":
      return { status: "pass", reason: "Soapstone and cast iron wear in rather than wearing out.", badge: "Wears in" };
    case "forged":
      return { status: "pass", reason: "Iron darkens and takes on a worn, hand-finished look.", badge: "Darkens with age" };
    case "copper":
      return { status: "pass", reason: "Copper deepens in color and can be polished bright again.", badge: "Develops patina" };
    case "brass":
      return { status: "pass", reason: "Solid brass mellows with handling and can be polished back.", badge: "Mellows with handling" };
    case "bronze":
      return { status: "pass", reason: "Bronze darkens to a warm patina with handling.", badge: "Develops patina" };
    case "hardwood":
      return { status: "pass", reason: "Wood darkens and smooths with use and oil.", badge: "Darkens with age" };
    default:
      return { status: "unverified", reason: "Not yet verified." };
  }
}

function buildChecks(r: Raw): StandardChecks {
  const base: StandardChecks = {
    solid: r.family === "other"
      ? { status: "unverified", reason: "Material not yet verified." }
      : { status: "pass", reason: SOLID_REASON[r.family], badge: r.matBadge },
    repair: defaultRepair(r),
    ages: defaultAges(r),
    design: { status: "pass", reason: r.form, badge: "Traditional form" },
    maker: r.warranty
      ? { status: "unverified", reason: `${r.warranty} warranty, shorter than we'd like.` }
      : { status: "unverified", reason: "Warranty and parts support not yet verified." },
  };
  return { ...base, ...r.checks };
}

export const PIECES: Piece[] = RAW.map((r) => {
  const piece: Piece = {
    id: r.id,
    slug: pieceSlug(r.maker.replace(/\s*\(.*\)/, ""), r.name),
    name: r.name,
    maker: r.maker,
    makerBase: r.makerBase,
    category: CATEGORY[r.id[0]],
    tier: TIER[r.tier],
    price: r.price,
    priceNote: r.priceNote,
    material: r.material,
    materialFamily: r.family,
    status: r.flag ? "verify" : "ready",
    flag: r.flag,
    worthKnowing: r.worth,
    retailer: r.retailer,
    productUrl: r.url,
    affiliate: { status: r.aff[0], network: r.aff[1], note: r.aff[2], joined: false },
    line: r.line,
    whyHeirloom: r.why,
    checks: buildChecks(r),
    madeIn: r.madeIn,
    warranty: r.warranty,
    imageRights: r.imageRights,
    photo: undefined,
    isNew: r.isNew,
  };
  return piece;
});
