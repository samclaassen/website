import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/90 backdrop-blur-md border-b border-brand-dark/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/images/logo-light.png"
            alt="Legacy Homeware"
            width={40}
            height={40}
            className="rounded-sm"
          />
          <div className="hidden sm:block">
            <span className="font-serif text-lg font-semibold tracking-wide text-brand-dark">
              Legacy Homeware
            </span>
          </div>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs font-medium tracking-[0.2em] text-brand-muted uppercase hover:text-brand-dark transition-colors"
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
