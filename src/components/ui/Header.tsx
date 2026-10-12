import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream border-b border-border">
      {/* Main nav row */}
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-10 h-[72px]">
        {/* Left utility */}
        <div className="hidden sm:flex items-center gap-6 w-[200px]">
          <Link
            href="/about"
            className="text-[13px] text-muted hover:text-stone transition-colors"
          >
            About
          </Link>
        </div>

        {/* Centered wordmark */}
        <Link href="/" className="group flex-shrink-0">
          <span className="font-serif text-[26px] font-semibold tracking-tight text-stone sm:text-[30px]">
            Legacy Homeware
          </span>
        </Link>

        {/* Right nav */}
        <nav aria-label="Main navigation" className="w-[200px] flex justify-end">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.filter(l => l.href !== "/about").map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] text-muted hover:text-stone transition-colors"
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
