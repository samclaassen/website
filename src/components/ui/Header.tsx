import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="wordmark">Legacy Homeware<span>A considered index</span></Link>
        <nav aria-label="Main navigation"><ul>{NAV_LINKS.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul></nav>
      </div>
    </header>
  );
}
