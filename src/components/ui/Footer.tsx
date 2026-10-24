import Link from "next/link";
import { AFFILIATE_DISCLOSURE, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import { CATEGORIES } from "@/lib/pieces";
import { CATEGORY_LABEL } from "@/lib/piece-types";
import { Ornament } from "./Ornament";

const linkClass = "hover:text-terracotta transition-colors";

export function Footer() {
  return (
    <footer className="border-t border-line mt-10">
      <div className="wrap py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="display text-[26px] leading-none">{SITE_NAME}</p>
          <p className="mt-3 italic text-caption">{SITE_TAGLINE}</p>
          <p className="mt-6 text-[15px] leading-relaxed text-caption max-w-sm">
            A curated guide to new pieces made the way they used to be. We don&apos;t sell anything.
            {" "}{AFFILIATE_DISCLOSURE}
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="lab mb-4">Pieces</p>
          <ul className="space-y-2 text-[16px]">
            <li><Link className={linkClass} href="/pieces">All pieces</Link></li>
            {CATEGORIES.map((c) => (
              <li key={c}><Link className={linkClass} href={`/pieces?category=${c}`}>{CATEGORY_LABEL[c]}</Link></li>
            ))}
            <li><Link className={linkClass} href="/gifts">Heirlooms under $100</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="lab mb-4">About</p>
          <ul className="space-y-2 text-[16px]">
            <li><Link className={linkClass} href="/standard">The Heirloom Standard</Link></li>
            <li><Link className={linkClass} href="/makers">Makers</Link></li>
            <li><Link className={linkClass} href="/care">Care &amp; Keeping</Link></li>
            <li><Link className={linkClass} href="/journal">Journal</Link></li>
            <li><Link className={linkClass} href="/about">About Legacy Homeware</Link></li>
            <li><Link className={linkClass} href="/credits">Photo credits</Link></li>
            <li><Link className={linkClass} href="/privacy">Privacy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-8 text-center">
        <Ornament className="mx-auto mb-4 w-[120px] text-line" />
        <p className="lab">{SITE_NAME} · Home items that become heirlooms</p>
      </div>
    </footer>
  );
}
