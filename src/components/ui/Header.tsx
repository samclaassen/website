import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export function Header() {
  return (
    <header className="border-b border-brand-warm bg-brand-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="group">
          <span className="font-serif text-2xl font-semibold tracking-wide text-brand-dark">
            {SITE_NAME}
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-brand-muted uppercase hover:text-brand-dark transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
