export const SITE_NAME = "Legacy Homeware";
export const SITE_TAGLINE = "Crafted to outlast the home";
export const SITE_DESCRIPTION =
  "Handcrafted decorative home hardware — switch plates, outlet covers, doorknobs, hinges, and fixtures cast in solid metal, inspired by the great architectural eras. Make your home beautiful again.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://legacyhomeware.com";

export const SOCIAL = {
  twitter: "",
  instagram: "",
  pinterest: "",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
] as const;
