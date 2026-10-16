export const SITE_NAME = "Legacy Homeware";
export const SITE_TAGLINE = "The Architectural Design Library";
export const SITE_DESCRIPTION =
  "A visual reference library of architectural styles and the doors, cabinetry, paneling, mantels and woodwork that define them, from Alpine Stuben to Arts & Crafts built-ins.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.legacyhomeware.com";

export const SOCIAL = {
  twitter: "",
  instagram: "",
  pinterest: "",
} as const;

export const NAV_LINKS = [
  { label: "Explore Styles", href: "/styles" },
  { label: "Architectural Elements", href: "/elements" },
  { label: "Design Library", href: "/library" },
  { label: "Journal", href: "/journal" },
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
