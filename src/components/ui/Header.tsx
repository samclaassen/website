import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-brand-dark/10">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-10 h-16">
        <Link href="/" className="group">
          <span className="font-serif text-xl font-semibold tracking-wide text-brand-dark sm:text-2xl">
            Legacy Homeware
          </span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors"
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
