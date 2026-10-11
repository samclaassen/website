import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-10 py-5">
        <Link href="/" className="group">
          <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-brand-dark">
            Legacy Homeware
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[11px] font-medium tracking-[0.2em] text-brand-muted uppercase hover:text-brand-dark transition-colors"
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
