export const SITE_NAME = "Legacy Homeware";
export const SITE_TAGLINE = "The Visual Archive of Decorative Lighting & Hardware";
export const SITE_DESCRIPTION =
  "A curated visual study of ornamental lighting and home hardware design across seven architectural eras — from Arts & Crafts to Art Nouveau. Explore the craftsmanship that shaped the homes we live in.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://legacyhomeware.com";

export const SOCIAL = {
  twitter: "",
  instagram: "",
  pinterest: "",
} as const;

export const NAV_LINKS = [
  { label: "Eras", href: "/collections" },
  { label: "About", href: "/about" },
] as const;

export const HARDWARE_TYPES = [
  "Switch Plate",
  "Outlet Cover",
  "Door Knob",
  "Hinge",
  "Cabinet Pull",
  "Door Knocker",
  "Chandelier",
  "Wall Sconce",
  "Pendant Light",
  "Flush Mount",
] as const;

export type HardwareType = (typeof HARDWARE_TYPES)[number];
