import Link from "next/link";
import { NAV_LINKS, SECONDARY_NAV } from "@/lib/constants";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream border-b border-border">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-10 h-[72px]">
        {/* Left utility */}
        <nav aria-label="Secondary navigation" className="hidden lg:flex items-center gap-6 w-[300px]">
          {SECONDARY_NAV.map((link) => (
            <Link key={link.href} href={link.href} className="text-[13px] text-muted hover:text-stone transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Centered wordmark */}
        <Link href="/" className="group flex-shrink-0">
          <span className="font-serif text-[26px] font-semibold tracking-tight text-stone sm:text-[30px]">
            Legacy Homeware
          </span>
        </Link>

        {/* Right nav (desktop) */}
        <nav aria-label="Main navigation" className="hidden lg:flex w-[300px] justify-end">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[13px] text-muted hover:text-stone transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu */}
        <details className="lg:hidden relative group">
          <summary className="list-none cursor-pointer text-[13px] text-stone border border-border px-3 py-2 [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-[calc(100%+12px)] w-[220px] bg-cream border border-border shadow-sm"
          >
            <ul className="py-2">
              {[...NAV_LINKS, ...SECONDARY_NAV].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="block px-5 py-3 text-[14px] text-stone hover:bg-cream-dark">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
