import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export function Header() {
  return (
    <header className="text-center pt-7 border-b border-line">
      <Link href="/" className="display inline-block text-[28px] sm:text-[30px] leading-none tracking-[0.02em]">
        {SITE_NAME}
      </Link>
      <nav aria-label="Main" className="mt-1">
        <ul className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-2 px-4 pt-4 pb-5">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-label text-[12px] font-medium tracking-[0.14em] uppercase hover:text-terracotta transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
