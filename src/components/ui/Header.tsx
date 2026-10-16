import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

function SearchIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-8 px-5 sm:px-8 lg:px-12 h-[68px]">
        <Link href="/" className="flex-shrink-0 leading-none" aria-label="Legacy Homeware, home">
          <span className="font-serif text-[23px] sm:text-[25px] font-medium tracking-[-0.01em] text-stone">Legacy Homeware</span>
          <span className="hidden sm:block mt-1 text-[10px] tracking-[0.2em] uppercase text-light">The Architectural Design Library</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[14px] text-stone-light hover:text-stone transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/library" aria-label="Search the design library" className="flex items-center text-stone-light hover:text-stone transition-colors">
                <SearchIcon />
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4 lg:hidden">
          <Link href="/library" aria-label="Search the design library" className="text-stone p-1">
            <SearchIcon />
          </Link>
          <details className="relative">
            <summary className="list-none cursor-pointer text-[14px] text-stone border-b border-border-strong pb-0.5 [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <nav aria-label="Mobile navigation" className="absolute right-0 top-[calc(100%+18px)] w-[min(86vw,320px)] bg-surface border border-border">
              <ul className="py-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="block px-6 py-3.5 font-serif text-[20px] text-stone hover:bg-cream">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
