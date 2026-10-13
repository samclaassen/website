export const SITE_NAME = "Legacy Homeware";
export const SITE_TAGLINE = "A considered index of lighting, hardware & decorative objects";
export const SITE_DESCRIPTION = "Explore real lighting, hardware and decorative objects through a source-led visual index. Open-access museum photographs, named makers and carefully selected dealer links.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://legacyhomeware.com";

export const SOCIAL = { twitter: "", instagram: "", pinterest: "" } as const;

export const NAV_LINKS = [
  { label: "Index", href: "/#archive" },
  { label: "Eras & styles", href: "/collections" },
  { label: "About", href: "/about" },
] as const;
