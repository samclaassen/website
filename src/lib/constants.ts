export const SITE_NAME = "Legacy Homeware";
export const SITE_TAGLINE = "Architectural details, made for your home";
export const SITE_DESCRIPTION =
  "A searchable archive of architectural details across twelve styles, from Shaker cupboards to Art Deco doors, with custom cabinetry, built-ins, mantels, paneling and more made to order and installed in Colorado.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.legacyhomeware.com";

export const SOCIAL = {
  twitter: "",
  instagram: "",
  pinterest: "",
} as const;

export const NAV_LINKS = [
  { label: "Styles", href: "/styles" },
  { label: "Elements", href: "/elements" },
  { label: "Search", href: "/search" },
  { label: "Custom", href: "/custom" },
] as const;

export const SECONDARY_NAV = [
  { label: "Colorado", href: "/colorado" },
  { label: "Hardware", href: "/collections" },
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
